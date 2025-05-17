"use client";
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`bg-body-tertiary ${scrolled ? 'shadow-sm' : ''}`}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/" className={styles.navbar}>
          <span style={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
            Lab1-Next JS
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
            <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about">About US</Link>
            <Link className={`nav-link ${pathname === '/product' ? 'active' : ''}`} href="/product">Product</Link>
            <Link className={`nav-link ${pathname === '/users' ? 'active' : ''}`} href="/users">Users</Link>
            <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact Us</Link>
            <Link className={`nav-link ${pathname === '/login' ? 'active' : ''}`} id={styles.login} href="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
