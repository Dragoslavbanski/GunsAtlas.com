import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <Image
        src="/images/heroes/calibers-hero-3.png"
        alt="GunsAtlas - Calibers"
        className={styles.image}
        width={1920}
        height={800}
        priority
      />

      <div className={styles.heroLogo}>
        <Image
          src="/images/Logo-transparent.png"
          alt="GunsAtlas"
          width={170}
          height={60}
          priority
        />
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.bottomFade}></div>

    </section>
  );
}