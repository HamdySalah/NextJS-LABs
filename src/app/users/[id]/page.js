import React from "react";
import Link from "next/link";
import styles from "./userDetail.module.css";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export async function generateMetadata({ params }) {
  const user = await getUser(params.id);
  if (!user) return { title: 'User Not Found' };
  
  return {
    title: `${user.name} | User Profile`,
    description: `View details for ${user.name} from our user database`,
  };
}

async function getUser(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
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
        <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
        <p><strong>Website:</strong> {user.website || "N/A"}</p>
        
        {user.address && (
          <>
            <h2>Address</h2>
            <p>{user.address.street || ""}, {user.address.suite || ""}</p>
            <p>{user.address.city || ""}, {user.address.zipcode || ""}</p>
          </>
        )}
        
        {user.company && (
          <>
            <h2>Company</h2>
            <p><strong>Name:</strong> {user.company.name || "N/A"}</p>
            <p><strong>Catchphrase:</strong> {user.company.catchPhrase || "N/A"}</p>
          </>
        )}
      </div>
      
      <div className={styles.actions}>
        <Link href={`/users/edit/${user._id}`} className={styles.editButton}>
          Edit User
        </Link>
        <DeleteButton userId={user._id} />
        <Link href="/users" className={styles.backButton}>
          ← Back to Users
        </Link>
      </div>
    </div>
  );
}




