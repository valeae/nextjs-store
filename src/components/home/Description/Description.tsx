//agregar archivos estaticos que sean elementales para el proyecto.

"use client";
import classNames from "classnames/bind";
import styles from "./Description.module.sass";
import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER_IMAGE =
  "data:image/jpeg;base64,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";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill // se podria poner este para ocupar todo el ancho
            // width={500}
            // height={300}
            // priority={false} Prioridad de carga de imagen
            // quality={100} // calidad de imagen, por defecto es de un 75%
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow's Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
