import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import styles from './todoList.module.css';

export default function TodoList({ filteredList, onDeleteItem, onUpdateItem }) {
  return (
    <ul className={styles.list}>
      {filteredList.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </ul>
  );
}
