import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/blog?cat=travel" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
          Discovering the Enchanting Landscapes and Flavors of Switzerland
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Pradipto</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/blog?cat=coding" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>
            Coding
          </span>
          <h3 className={styles.postTitle}>
          Introducing Davin: The Groundbreaking AI Software Engineer Revolutionizing Code
          </h3>
          <div className={styles.detail}>
            <span className={styles.usrname}>Claude</span>
            <span className={styles.date}> - 20.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/blog?cat=food" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
          A Culinary Odyssey Through the Flavors of Bengal
          </h3>
          <div className={styles.detail}>
            <span className={styles.usrname}>Prodeep</span>
            <span className={styles.date}> - 17.02.2022</span>
          </div>
        </div>
      </Link>
      <Link href="/blog?cat=fashion" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
          Unraveling the Timeless Allure: Indian Dhoti and Saree Traditions
          </h3>
          <div className={styles.detail}>
            <span className={styles.usrname}>Bharat</span>
            <span className={styles.date}> - 21.07.2020</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
