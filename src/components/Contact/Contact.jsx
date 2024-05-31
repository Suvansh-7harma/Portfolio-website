import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:suvansh4rkkr136119@email.com">
            suvansh4rkkr136119@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Suvansh-7harma">
            github.com/Suvansh-7harma
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/resumeIcon.png")} alt="Resume" />
          <a href="https://docs.google.com/document/d/18o1HI2kEVzAmqEu9sHKrv9wzjKgsmtg_N_-mRradbus/edit">
            Click here for Resume
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/suvansh-sharma-647ba8299/">
            linkedin.com/suvansh-sharma
          </a>
        </li>
      </ul>
    </footer>
  );
};
