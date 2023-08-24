/* eslint-disable @next/next/no-img-element */

import { FaBehance } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineDribbble } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <img src="./assets/logo.svg" alt="Insany" />
        <div className={styles.containerSocial}>
          <FaBehance />
          <AiOutlineInstagram />
          <AiOutlineDribbble />
        </div>
      </div>
      <div className={styles.containerNav}>
        <div className={styles.containerLanguage}>
          <span className={styles.language}>
            <img src="./assets/brasil.png" alt="Brasil" /> PT /{" "}
            <img src="./assets/eua.png" alt="EUA" /> EN
          </span>
        </div>
        <p className={styles.textNav}>NAVEGUE</p>
        <RxHamburgerMenu className={styles.menu} />
      </div>
    </header>
  );
};
