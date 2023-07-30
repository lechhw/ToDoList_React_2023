import React, { useContext } from 'react';
import styles from './header.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function Header({ filter, onFilter }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={`${styles.header} ${darkMode && styles.darkMode}`}>
      <button className={styles.modeBtn} onClick={() => toggleDarkMode()}>
        {!darkMode ? (
          <MdDarkMode />
        ) : (
          <MdLightMode style={{ color: 'yellow' }} />
        )}
      </button>
      <div className={styles.tabGroup}>
        <button
          type="button"
          className={`${styles.tab} ${filter === 'all' && styles.active}`}
          onClick={() => onFilter('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`${styles.tab} ${filter === 'active' && styles.active}`}
          onClick={() => onFilter('active')}
        >
          Active
        </button>
        <button
          type="button"
          className={`${styles.tab} ${filter === 'complete' && styles.active}`}
          onClick={() => onFilter('complete')}
        >
          Complete
        </button>
      </div>
    </header>
  );
}
