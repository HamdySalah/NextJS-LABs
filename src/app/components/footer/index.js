import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} All Rights Reserved Hamdy Salah • Lab1-Next JS</p>
    </footer>
  );
}
