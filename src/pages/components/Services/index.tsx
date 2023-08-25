/* eslint-disable @next/next/no-img-element */

import { BsArrowDown } from "react-icons/bs";

import styles from "./styles.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>O que entregamos</h1>
          <p className={styles.description}>
            Trabalhamos junto ao seu time, do wireframe ao código, na construção
            dos melhores produtos e serviços digitais.
          </p>
        </div>
        <BsArrowDown className={styles.iconArrow} />
        <div className={styles.divAbsolute} />
      </div>
      <div className={styles.containerRight}>
        <div className={styles.right}>
          <img src="./assets/double-circle.svg" alt="rain" />

          <div className={styles.containerLink}>
            <a className={styles.link}>Saiba mais sobre nossos serviços</a>
          </div>
        </div>
      </div>
    </div>
  );
}
