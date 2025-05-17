"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./deleteButton.module.css";

export default function DeleteButton({ userId }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      
      router.push("/users");
      router.refresh();
    } catch (error) {
      console.error("Error deleting user:", error);
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      {!showConfirm ? (
        <button 
          className={styles.deleteButton} 
          onClick={() => setShowConfirm(true)}
          disabled={isDeleting}
        >
          Delete User
        </button>
      ) : (
        <div className={styles.confirmDialog}>
          <p>Are you sure you want to delete this user?</p>
          <div className={styles.confirmButtons}>
            <button 
              className={styles.confirmButton} 
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Yes, Delete"}
            </button>
            <button 
              className={styles.cancelButton} 
              onClick={() => setShowConfirm(false)}
              disabled={isDeleting}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}