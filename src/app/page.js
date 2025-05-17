import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
    <main className={styles.main}>
      <h1>Welcome to Next.js Lab Project</h1>
      <p>
        Next JS Lab2
      </p>
    </main>
  </div>
  );
}
