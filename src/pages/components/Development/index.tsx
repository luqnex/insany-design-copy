/* eslint-disable @next/next/no-img-element */

import { MdArrowForwardIos } from "react-icons/md";
import { LuMouse } from "react-icons/lu";
import { BsWindowDesktop } from "react-icons/bs";
import { HiOutlineDeviceMobile } from "react-icons/hi";

import styles from "./styles.module.css";
import { useState } from "react";

enum EImageSelected {
  DEFAULT = "default",
  DESKTOP = "desktop",
  MOBILE = "mobile",
}

export default function Development() {
  const [isMouseEnter, setIsMouseEnter] = useState<EImageSelected>(
    EImageSelected.DEFAULT
  );

  const handleMouseEnter = (image: EImageSelected) => {
    setIsMouseEnter(image);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.containerImages}>
          <div
            className={styles.desktop}
            onMouseEnter={() => handleMouseEnter(EImageSelected.DESKTOP)}
          >
            <p className={styles.number}>01</p>
            <h3 className={styles.title}>
              Design e desenvolvimento de projetos web
            </h3>
            <p className={styles.description}>
              Sites, landing pages, e-commerce, dashboards e outros
            </p>
            <MdArrowForwardIos className={styles.arrow} />
          </div>
          <div
            className={styles.mobile}
            onMouseEnter={() => handleMouseEnter(EImageSelected.MOBILE)}
          >
            <p className={styles.number}>02</p>
            <h3 className={styles.titleMobile}>
              Design de interface para aplicativos
            </h3>
            <p className={styles.descriptionMobile}>
              Aplicativos híbridos com foco nos objetivos da sua empresa e
              público alvo.
            </p>
            <MdArrowForwardIos className={styles.arrow} />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {isMouseEnter === EImageSelected.DEFAULT && (
          <div>
            <h3 className={styles.titleRight}>
              Sites, aplicativos <br /> e sistemas
            </h3>
            <p className={styles.descriptionRight}>
              Projetos funcionais que conectam a sua marca aos seus clientes.
              Movidos por desafios, trabalhamos para encontrar as melhores
              soluções.
            </p>
            <div className={styles.containerMouseText}>
              <LuMouse className={styles.iconMouse} />
              <p className={styles.mouseTextRight}>
                Passe o mouse ao lado para ver mais detalhes
              </p>
            </div>
          </div>
        )}

        {isMouseEnter === EImageSelected.DESKTOP && (
          <div>
            <BsWindowDesktop className={styles.icon} />
            <h3 className={styles.titleRight}>Do design ao codigo</h3>
            <p className={styles.descriptionRight}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              suscipit officiis dignissimos modi at numquam? Hic, eius odio
              culpa temporibus vitae repellendus, ullam esse, soluta sunt cum
              blanditiis sint ut?
            </p>
          </div>
        )}

        {isMouseEnter === EImageSelected.MOBILE && (
          <div>
            <HiOutlineDeviceMobile className={styles.icon} />
            <h3 className={styles.titleRight}>
              A interface que seu app precisa
            </h3>
            <p className={styles.descriptionRight}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              dicta, nobis exercitationem rem pariatur temporibus enim nam culpa
              molestias inventore repellendus cumque sequi quae! Odit quia
              necessitatibus vero dolorem! Iusto?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
