import React, { useState, useContext } from 'react';
import styles from './todoItem.module.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function TodoItem({ item, onDeleteItem, onUpdateItem }) {
  const [complete, setComplete] = useState(item.complete);
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (e) => {
    setComplete(e.target.checked);
    item.complete = e.target.checked;
    onUpdateItem(item);
  };

  return (
    <li className={`${styles.todoItem} ${darkMode && styles.darkMode}`}>
      <input
        type="checkbox"
        className={styles.checkBox}
        checked={complete}
        onChange={(e) => handleChange(e)}
      />
      <p className={`${styles.item} ${complete && styles.complete}`}>
        {item.name}
      </p>
      <button className={styles.deleteBtn} onClick={() => onDeleteItem(item)}>
        {/* X */}
        <RiDeleteBin5Line />
      </button>
    </li>
  );
}
