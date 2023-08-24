/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

import { BsArrowRight } from "react-icons/bs";

import styles from "./styles.module.css";

enum EMouseEnter {
  POINT_ONE = "pointOne",
  POINT_TWO = "pointTwo",
}

type TIsMouseEnter = EMouseEnter;

export default function HeroSection() {
  const [isMouseEnter, setIsMouseEnter] = useState<TIsMouseEnter>(
    EMouseEnter.POINT_ONE
  );

  const handleMouseEnter = (point: EMouseEnter) => {
    setIsMouseEnter(point);
  };

  return (
    <main className={styles.main}>
      <div className={styles.containerContent}>
        <div className={styles.content}>
          <p className={styles.welcome}>Bem-vindo à Insany 🤘</p>
          <h1 className={styles.description}>
            Design e desenvolvimento de
            <strong className={styles.pink}> produtos digitais </strong>
            de forma ágil, consistente <br /> e insana!
          </h1>
          <a className={styles.link}>
            <span className={styles.linkText}>Comece um projeto</span>{" "}
            <BsArrowRight />
          </a>
        </div>
        <div className={styles.containerContinue}>
          <p>Continue explorando...</p>
        </div>
      </div>

      <div className={styles.containerGrids}>
        <div className={styles.primary}>
          <div className={styles.left}>
            <div className={styles.containerLine} />
            <div className={styles.containerPoints}>
              <div
                className={styles.pointOne}
                onMouseEnter={() => handleMouseEnter(EMouseEnter.POINT_ONE)}
              >
                {isMouseEnter === EMouseEnter.POINT_ONE && (
                  <img
                    src="./assets/icon-asterisco.svg"
                    alt="asterisco"
                    className={styles.pointer}
                  />
                )}
              </div>
              <div
                className={styles.pointTwo}
                onMouseEnter={() => handleMouseEnter(EMouseEnter.POINT_TWO)}
              >
                {isMouseEnter === EMouseEnter.POINT_TWO && (
                  <img src="./assets/icon-asterisco.svg" alt="asterisco" />
                )}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.containerRight}>
              <span className={styles.textRight}>
                únicos, digitais & criativos
              </span>

              <span className={styles.ellipsis}>. . .</span>
            </div>
          </div>
        </div>
        <div className={styles.secondary}>
          <img src="./assets/txt-ester-egg.svg" alt="ester egg" />
          <div className={styles.pinkSquare}></div>
        </div>
      </div>
    </main>
  );
}
