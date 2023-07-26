import React from 'react';
import styles from './header.module.css';

export default function Header({ filter, onFilter }) {
  return (
    <header className={styles.header}>
      <h1>Todo List</h1>
      <div className={styles.tabGroup}>
        <button
          type="button"
          className={`${styles.tab} ${filter === 'all' && styles.active}`}
          onClick={() => onFilter('all')}
        >
          전체
        </button>
        <button
          type="button"
          className={`${styles.tab} ${filter === 'active' && styles.active}`}
          onClick={() => onFilter('active')}
        >
          진행중
        </button>
        <button
          type="button"
          className={`${styles.tab} ${filter === 'complete' && styles.active}`}
          onClick={() => onFilter('complete')}
        >
          완료
        </button>
      </div>
    </header>
  );
}
