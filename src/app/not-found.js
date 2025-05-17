import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>It might have been removed, or the URL might have changed.</p>
      <Link href="/" className={styles.homeLink}>
        Return to Home
      </Link>
    </div>
  );
}
