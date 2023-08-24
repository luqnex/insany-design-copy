/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import styles from "./styles.module.css";

enum EPages {
  ONE = 1,
  TWO = 2,
}

export default function Testimonials() {
  const [page, setPage] = useState(EPages.ONE);

  const handlePrevAndNextPage = (value: "increment" | "decrement") => {
    if (value === "increment" && page < 2) {
      setPage((prev) => prev + 1);
      return;
    }

    if (value === "decrement" && page > 1) {
      setPage((prev) => prev - 1);
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.square}>
          <img src="./assets/aspas.svg" alt="aspas" className={styles.marks} />
        </div>

        <div className={styles.content}>
          {page === EPages.ONE && (
            <>
              <h3 className={styles.title}>
                “De todos os parceiros com quem já trabalhamos, a Insany faz, de
                longe, o trabalho mais design-oriented e de alto nível
                crítico...”
              </h3>
              <a className={styles.link}>
                Leia mais sobre a experiência do Jeniffer
              </a>
            </>
          )}

          {page === EPages.TWO && (
            <>
              <h3 className={styles.title}>
                “Eu Lucas, particularmente, já conhecia o trabalho da Insany em
                sua predominância pelo
              </h3>
              <a className={styles.link}>
                Leia mais sobre a experiência do Lucas
              </a>
            </>
          )}
        </div>

        <div className={styles.pagination}>
          <button
            className={`${styles.button} ${
              page === EPages.ONE ? styles.buttonActive : ""
            }`}
            onClick={() => setPage(EPages.ONE)}
          >
            01
          </button>
          <button
            className={`${styles.button} ${
              page === EPages.TWO ? styles.buttonActive : ""
            }`}
            onClick={() => setPage(EPages.TWO)}
          >
            02
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.containerClient}>
          {page === EPages.ONE && (
            <>
              <div>
                <p className={styles.name}>Jeniffer_R</p>
                <p className={styles.office}>Designer</p>
              </div>
              <img src="./assets/logo-loja.svg" alt="Loja integrada" />
            </>
          )}

          {page === EPages.TWO && (
            <>
              <div>
                <p className={styles.name}>Lucas Costa</p>
                <p className={styles.office}>Desenvolvedor de software</p>
              </div>
              <img src="./assets/logo-loja.svg" alt="Loja integrada" />
            </>
          )}
        </div>
        <div className={styles.containerButtonsNextPrev}>
          <button
            className={styles.buttonPagination}
            onClick={() => handlePrevAndNextPage("decrement")}
          >
            <img
              src="./assets/arrow.svg"
              alt="Previous"
              className={styles.arrowLeft}
            />
          </button>
          <hr className={styles.divider} />
          <button
            className={styles.buttonPagination}
            onClick={() => handlePrevAndNextPage("increment")}
          >
            <img src="./assets/arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}
