import React from 'react';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading users...</p>
    </div>
  );
}