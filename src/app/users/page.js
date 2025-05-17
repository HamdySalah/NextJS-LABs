import React from "react";
import Link from "next/link";
import UserCard from "../components/users/UserCard";
import styles from "./users.module.css";

export const revalidate = 60; // ISR: revalidate every 60 seconds

async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default async function Users() {
  const users = await getUsers();
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Users</h1>
        <Link href="/users/create" className={styles.createButton}>
          Create New User
        </Link>
      </div>
      <div className={styles.grid}>
        {users.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

