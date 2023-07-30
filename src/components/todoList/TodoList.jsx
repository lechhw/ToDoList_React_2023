import React, { useContext } from 'react';
import TodoItem from '../todoItem/TodoItem';
import styles from './todoList.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function TodoList({ filteredList, onDeleteItem, onUpdateItem }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <ul className={`${styles.list} ${darkMode && styles.darkMode}`}>
      {filteredList.length > 0 ? (
        filteredList.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))
      ) : (
        <div className={styles.empty}>할 일을 입력해주세요</div>
      )}
    </ul>
  );
}
