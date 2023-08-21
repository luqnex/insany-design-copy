/* eslint-disable @next/next/no-img-element */

import styles from "./styles.module.css";

interface ILink {
  name: string;
  link: string;
}

interface IItemCaseProps {
  number: number;
  logo: string;
  services: string[];
  title: string;
  description: string;
  links: ILink[];
  image: string;
}

export const ItemCase = ({
  logo,
  title,
  image,
  links,
  number,
  services,
  description,
}: IItemCaseProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.number}>{number}</p>
        <img src={logo} alt="Logo" />
        <div className={styles.containerChips}>
          {services.map((item) => (
            <span key={item} className={styles.chips}>
              {item}
            </span>
          ))}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.list}>
          {links.map((item) => (
            <li key={item.link} className={styles.link}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={styles.right}
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};
