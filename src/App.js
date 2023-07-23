import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  const [list, setList] = useState([
    { id: '1', name: '운동하기' },
    { id: '2', name: '장보기' },
    { id: '3', name: '공부하기' },
  ]);

  const onAddItem = (item) => {
    let updated = [...list, { name: item, id: '5' }];
    setList(updated);
  };

  return (
    <div className="App">
      <Header />
      <TodoList list={list} />
      <InputForm onAddItem={onAddItem} />
    </div>
  );
}

export default App;
