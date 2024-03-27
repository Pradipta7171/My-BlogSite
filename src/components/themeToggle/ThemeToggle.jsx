"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);


  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { left: 1, backgroundColor: "rgb(112, 112, 112)"}
          : { right: 1, backgroundColor: "rgb(38, 6, 63)"}
      }
    >
      <Image src="/moon.png" alt="" width={16} height={16} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "white"}
            : { right: 1, background: "antiquewhite"}
        }
      ></div>
      <Image src="/sun.png" className={styles.sun} alt="" width={15} height={15} />
    </div>
  );
};

export default ThemeToggle;
