import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/Logo.jpg"
            alt="Dutta's Blog"
            className={styles.pic}
            width={70}
            height={70}
          />
          <h1 className={styles.logoText}>Dutta&apos;s Blog</h1>
        </div>
        <p className={styles.desc}>
           A platform that explores diverse topics with intellectual curiosity, fostering thought-provoking discussions on tech innovations, philosophical insights, and beyond. Join a community eager to learn, engage, and challenge conventions through captivating content and stimulating conversations.
        </p>
        <div className={styles.icons}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.png" alt="facebook" width={30} height={30} className={styles.img}/>
          </a>
          <a
            href="https://www.instagram.com/p_dutta18?igsh=eHpmNHhtdTRqajkw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="instagram"
              width={30}
              height={30}
              className={styles.img}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pradipto-dutta2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" alt="linkedin" width={30} height={30} className={styles.img}/>
          </a>
          <a
            href="https://github.com/Pradipta7171"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.png" alt="github" width={30} height={30} className={styles.img} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Linkedin</Link>
          <Link href="/">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
