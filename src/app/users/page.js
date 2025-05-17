import React from "react";
import UserCard from "../components/users/UserCard";
import styles from "./users.module.css";

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default async function Users() {
  const users = await getUsers();
  
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <div className={styles.grid}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}