"use client";
import React from "react";
import styles from "./UserCard.module.css";
import Link from "next/link";

export default function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <Link href={`/users/${user.id}`} className={styles.button}>
        View Details
      </Link>
    </div>
  );
}

