import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
