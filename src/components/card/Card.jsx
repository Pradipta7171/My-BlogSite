import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.CreatedAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 90) }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
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
  );
};

export default Card;
