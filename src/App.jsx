import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import InputForm from './components/inputForm/InputForm';
import TodoList from './components/todoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('todoList'))
  );
  const [filter, setFilter] = useState('all');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);

  const onFilter = (tab) => {
    setFilter((prev) => (prev !== tab ? (prev = tab) : prev));
  };

  const onAddItem = (item) => {
    const uniqueId = new Date().getTime() + Math.random();
    let updated = [...list, { name: item, id: uniqueId, complete: false }];
    setList(updated);
  };

  const onDeleteItem = (item) => {
    let updated = list.filter((val) => val.id !== item.id);

    setList(updated);
  };

  const onUpdateItem = (item) => {
    const updated = [...list];
    updated.forEach((val) => {
      if (val.id === item.id) {
        val = item;
      }
    });
    setList(updated);
  };

  useEffect(() => {
    const todoList = [...list];
    switch (filter) {
      case 'active':
        setFilteredList(todoList.filter((item) => !item.complete));
        break;
      case 'complete':
        setFilteredList(todoList.filter((item) => item.complete));
        break;
      default:
        setFilteredList(todoList);
    }
  }, [list, filter]);

  return (
    <div className="App">
      <DarkModeProvider>
        <Header filter={filter} onFilter={onFilter} />
        <TodoList
          filteredList={filteredList}
          onDeleteItem={onDeleteItem}
          onUpdateItem={onUpdateItem}
        />
        <InputForm onAddItem={onAddItem} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
