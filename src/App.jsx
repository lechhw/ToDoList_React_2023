import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import InputForm from './components/inputForm/InputForm';
import TodoList from './components/todoList/TodoList';

function App() {
  const [list, setList] = useState([
    { id: '1', name: '아이템1', complete: false },
    { id: '2', name: '아이템2', complete: false },
    { id: '3', name: '아이템3', complete: true },
  ]);
  const [filter, setFilter] = useState('all');
  const [filteredList, setFilteredList] = useState([]);

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
      <Header filter={filter} onFilter={onFilter} />
      <TodoList
        filteredList={filteredList}
        onDeleteItem={onDeleteItem}
        onUpdateItem={onUpdateItem}
      />
      <InputForm onAddItem={onAddItem} />
    </div>
  );
}

export default App;
