/* eslint-disable @next/next/no-img-element */

import { BsArrowDown } from "react-icons/bs";

import styles from "./styles.module.css";

export const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>Projetos Selecionados</h1>
          <p className={styles.description}>
            Designers e desenvolvedores trabalhando lado a lado para entregarmos
            um projeto mais eficiente e completo!
          </p>
        </div>
        <BsArrowDown className={styles.iconArrow} />
        <div className={styles.divAbsolute} />
      </div>
      <div className={styles.containerRight}>
        <div className={styles.right}>
          <img src="./assets/rain.svg" alt="rain" />

          <div className={styles.containerLink}>
            <h3 className={styles.titleLink}>
              Deixamos que nossos trabalhos falem por nós
            </h3>
            <a className={styles.link}>Ir para página de cases</a>
          </div>
        </div>
      </div>
    </div>
  );
};
