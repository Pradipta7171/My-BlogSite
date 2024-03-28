"use client";
import styles from "./contactPage.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y0tdwzo",
        "template_untv8gf",
        form.current,
        "vRjh40jzTDof_884m"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your experience has been shared successfully!");
          form.current.reset();
          setShowPopup(true);
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Oops! Something went wrong. Please try again.");
          setShowPopup(true);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
    setSuccessMessage("");
  };

  return (
    <div className={styles.container}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label className={styles.head}>Share Your Experience With Us</label>
        <label className={styles.label}>Name :</label>
        <input type="text" name="user_name" className={styles.input} required />
        <label className={styles.label}>Email :</label>
        <input
          type="email"
          name="user_email"
          className={styles.input}
          required
        />
        <label className={styles.label}>Your Experience :</label>
        <textarea
          name="message"
          className={styles.textarea}
          required
        ></textarea>
        <button type="send" className={styles.button}>
          <div className={styles.wrapper}>
            <div className={styles.warp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Share</span>
        </button>
        {successMessage && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <span className={styles.close} onClick={closePopup}>
                &times;
              </span>
              <p>{successMessage}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
