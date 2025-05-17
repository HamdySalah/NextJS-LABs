'use client';

import React from 'react';
import styles from './error.module.css';

export default function Error({ error, reset }) {
  return (
    <div className={styles.errorContainer}>
      <h2>Something went wrong!</h2>
      <p>{error.message || 'An unexpected error occurred'}</p>
      <button 
        onClick={() => reset()}
        className={styles.resetButton}
      >
        Try again
      </button>
    </div>
  );
}