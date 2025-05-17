"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import Link from "next/link";

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you would typically validate and authenticate
        console.log("Login attempt with:", credentials);
        
        // Mock authentication
        if (credentials.email && credentials.password) {
            router.push("/");
        } else {
            setError("Please enter both email and password");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <h1>Login</h1>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.loginButton}>
                        Login
                    </button>
                </form>
                <Link href="/" className={styles.homeLink}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
