import React, { useState } from 'react';
import styles from './todoItem.module.css';

export default function TodoItem({ item, onDeleteItem, onUpdateItem }) {
  const [complete, setComplete] = useState(item.complete);

  const handleChange = (e) => {
    setComplete(e.target.checked);
    item.complete = e.target.checked;
    onUpdateItem(item);
  };

  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        className={styles.checkBox}
        checked={complete}
        onChange={(e) => handleChange(e)}
      />
      <span className={`${styles.item} ${complete && styles.complete}`}>
        {item.name}
      </span>
      <button className={styles.deleteBtn} onClick={() => onDeleteItem(item)}>
        X
      </button>
    </li>
  );
}
