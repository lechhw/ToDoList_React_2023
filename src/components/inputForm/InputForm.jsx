import React, { useState } from 'react';
import styles from './input.module.css';
// import { MdOutlineAddBox } from 'react-icons/md';
// import { VscAdd } from 'react-icons/vsc';

export default function InputForm({ onAddItem }) {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <form
      className={styles.form}
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
