import React from 'react';
import styles from './header.module.css';

export default function Header({ filter, onFilter }) {
  return (
    <header className={styles.header}>
      {/* <h1>Todo List</h1> */}
      <div className={styles.tabGroup}>
        <button
          type="button"
          className={styles.tab}
          onClick={() => onFilter('all')}
        >
          <span
            className={`${styles.label} ${filter === 'all' && styles.active}`}
          >
            전체
          </span>
        </button>
        <button
          type="button"
          className={styles.tab}
          onClick={() => onFilter('active')}
        >
          <span
            className={`${styles.label} ${
              filter === 'active' && styles.active
            }`}
          >
            진행중
          </span>
        </button>
        <button
          type="button"
          className={styles.tab}
          onClick={() => onFilter('complete')}
        >
          <span
            className={`${styles.label} ${
              filter === 'complete' && styles.active
            }`}
          >
            완료
          </span>
        </button>
      </div>
    </header>
  );
}
