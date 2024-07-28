"use client";

import { signOut, useSession } from "next-auth/react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <div className={styles.navbar}>
        {status === "unauthenticated" ? (
          <Link href="/login" className={`${styles.link} ${styles.button}`}>
            Login
          </Link>
        ) : (
          <>
            <Link href="/write" className={styles.link}>
              Write
            </Link>
            <span className={`${styles.link} ${styles.button} ${styles.logout}`} onClick={signOut}>
              Logout
            </span>
          </>
        )}
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={`${styles.line} ${open ? styles.lineOpen : ''}`}></div>
          <div className={`${styles.line} ${open ? styles.lineOpen : ''}`}></div>
          <div className={`${styles.line} ${open ? styles.lineOpen : ''}`}></div>
        </div>
      </div>
      <div className={`${styles.responsiveMenu} ${open ? styles.open : ''}`}>
        <Link href="/" className={styles.responsiveLink} onClick={() => setOpen(false)}>Homepage</Link>
        <Link href="/about" className={styles.responsiveLink} onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" className={styles.responsiveLink} onClick={() => setOpen(false)}>Contact</Link>
        {status === "unauthenticated" ? (
           <Link href="/login" className={`${styles.responsiveLink} ${styles.button}`} onClick={() => setOpen(false)}>Login</Link>
        ) : (
          <>
            <Link href="/write" className={styles.responsiveLink} onClick={() => setOpen(false)}>Write</Link>
            <span className={`${styles.responsiveLink} ${styles.button} ${styles.logout}`} onClick={() => { signOut(); setOpen(false); }}>Logout</span>
          </>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
