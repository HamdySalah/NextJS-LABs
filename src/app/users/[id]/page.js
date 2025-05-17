import React from "react";
import Link from "next/link";
import styles from "./userDetail.module.css";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const user = await getUser(params.id);
  if (!user) return { title: 'User Not Found' };
  
  return {
    title: `${user.name} | User Profile`,
    description: `View details for ${user.name} from our user database`,
  };
}

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function UserDetail({ params }) {
  const user = await getUser(params.id);
  
  if (!user) {
    notFound();
  }
  
  return (
    <div className={styles.container}>
      <h1>{user.name}</h1>
      <div className={styles.details}>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        
        <h2>Address</h2>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        
        <h2>Company</h2>
        <p><strong>Name:</strong> {user.company.name}</p>
        <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
      </div>
      
      <Link href="/users" className={styles.backButton}>
        ← Back to Users
      </Link>
    </div>
  );
}
