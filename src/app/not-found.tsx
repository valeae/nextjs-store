"use client";

import styles from "app/sass/not-found.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function NotFound({ reset }: ErrorPageProps) {
  return (
    <main className={styles.NotFound}>
      <h1 className={styles.NotFound__title}>404</h1>
      <Image src="/images/404.png" width={500} height={500} alt="Error" />
      <h2 className={styles.NotFound__subtitle}>
        ¡Uy, parece que el enlace se escondió!
      </h2>
      <p className={styles.NotFound__message}>
        Pero nuestra tienda esta abierta 24/7
      </p>
      <Link className={styles.NotFound__link} href="/store">
        ¡Vamos de compras!
      </Link>
    </main>
  );
}
