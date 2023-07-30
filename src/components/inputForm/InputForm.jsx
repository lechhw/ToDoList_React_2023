import React, { useState, useContext } from 'react';
import styles from './input.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function InputForm({ onAddItem }) {
  const [item, setItem] = useState('');
  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <form
      className={`${styles.form} ${darkMode && styles.darkMode}`}
      onSubmit={(e) => {
        e.preventDefault();
        onAddItem(item);
        setItem('');
      }}
    >
      <input
        className={styles.input}
        type="text"
        value={item}
        onChange={handleChange}
      />
      <button className={styles.button}>
        <span>+</span>
      </button>
    </form>
  );
}
