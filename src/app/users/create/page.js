"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./createUser.module.css";

export default function CreateUser() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    },
    company: {
      name: "",
      catchPhrase: ""
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create user");
      }
      
      router.push("/users");
      router.refresh();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create New User</h1>
      {error && <p className={styles.error}>{error}</p>}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        
        <h2>Address</h2>
        <div className={styles.formGroup}>
          <label htmlFor="address.street">Street</label>
          <input
            type="text"
            id="address.street"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="address.suite">Suite</label>
          <input
            type="text"
            id="address.suite"
            name="address.suite"
            value={formData.address.suite}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="address.city">City</label>
          <input
            type="text"
            id="address.city"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="address.zipcode">Zipcode</label>
          <input
            type="text"
            id="address.zipcode"
            name="address.zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
          />
        </div>
        
        <h2>Company</h2>
        <div className={styles.formGroup}>
          <label htmlFor="company.name">Company Name</label>
          <input
            type="text"
            id="company.name"
            name="company.name"
            value={formData.company.name}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="company.catchPhrase">Catch Phrase</label>
          <input
            type="text"
            id="company.catchPhrase"
            name="company.catchPhrase"
            value={formData.company.catchPhrase}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.buttonGroup}>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create User"}
          </button>
          <Link href="/users" className={styles.cancelButton}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
