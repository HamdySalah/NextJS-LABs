"use client";
import React from "react";
import styles from "./UserCard.module.css";
import Link from "next/link";

export default function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
      <p><strong>Company:</strong> {user.company?.name || "N/A"}</p>
      <div className={styles.actions}>
        <Link href={`/users/${user._id}`} className={styles.viewButton}>
          View Details
        </Link>
        <Link href={`/users/edit/${user._id}`} className={styles.editButton}>
          Edit
        </Link>
      </div>
    </div>
  );
}








