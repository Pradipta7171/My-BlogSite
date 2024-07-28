"use client";
import styles from "./ContactPage.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
          setIsLoading(false);
          setShowPopup(true);
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Oops! Something went wrong. Please try again.");
          setIsLoading(false);
          setShowPopup(true);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
    setSuccessMessage("");
  };

  const contactDetails = [
    { icon: FaEnvelope, text: "prodipto7171@gmail.com", href: "mailto:prodipto7171@gmail.com" },
    { icon: FaLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/pradipto-dutta2024" },
    { icon: FaGithub, text: "GitHub", href: "https://github.com/Pradipta7171" },
    { icon: FaInstagram, text: "Instagram", href: "https://www.instagram.com/your_instagram" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Get In Touch</h1>
      <div className={styles.contactCard}>
        <div className={styles.contactInfo}>
          <h2 className={styles.infoTitle}>Contact Information</h2>
          <p className={styles.infoText}>Share your experience with us. Feel free to reach out!</p>
          <div className={styles.contactDetails}>
            {contactDetails.map((detail, index) => (
              <a key={index} href={detail.href} className={styles.contactItem} target="_blank" rel="noopener noreferrer">
                <detail.icon className={styles.icon} />
                <span>{detail.text}</span>
              </a>
            ))}
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" name="user_email" className={styles.input} placeholder="Enter your email" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea name="message" className={styles.textarea} placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? <div className={styles.loader}></div> : "Submit"} <span className={styles.icon}>→</span>
          </button>
        </form>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={closePopup}>&times;</span>
            <p>{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
