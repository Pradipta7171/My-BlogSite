import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Pradipto here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/italy.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
          Exploring the Beauty of Italy - A Comprehensive Guide to Creating a Captivating Travel Blog
          </h1>
          <p className={styles.postDesc}>
          Are you passionate about travel and exploring new destinations? Have you ever dreamed of creating your own captivating travel blog to share your experiences with the world? Look no further! In this comprehensive guide, we will take you on a journey through the beautiful country of Italy and show you how to create a travel blog that will captivate your readers and leave them longing for their own adventure. Whether you are a seasoned blogger or just starting out, this guide has everything you need to know to create a blog that will inspire and delight. So pack your bags and get ready to explore the beauty of Italy through the lens of your very own travel blog!
          </p>
          <Link
            href={
              "/blog?cat=travel"
            }
          >
            <button class={styles.button}>
              <span class={styles.wrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(86, 69, 117)"
                  viewBox="0 0 126 75"
                  class="book"
                >
                  <rect
                    stroke-width="3"
                    stroke="#fff"
                    rx="7.5"
                    height="70"
                    width="121"
                    y="2.5"
                    x="2.5"
                  ></rect>
                  <line
                    stroke-width="3"
                    stroke="#fff"
                    y2="75"
                    x2="63.5"
                    x1="63.5"
                  ></line>
                  <path
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke="#fff"
                    d="M25 20H50"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke="#fff"
                    d="M101 20H76"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke="#fff"
                    d="M16 30L50 30"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke="#fff"
                    d="M110 30L76 30"
                  ></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 65 75"
                  class={styles.page}
                >
                  <path
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke="#fff"
                    d="M40 20H15"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="4"
                    stroke="#fff"
                    d="M49 30L15 30"
                  ></path>
                  <path
                    stroke-width="3"
                    stroke="#fff"
                    d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
                  ></path>
                </svg>
              </span>
              <span class={styles.text}> Read more </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
