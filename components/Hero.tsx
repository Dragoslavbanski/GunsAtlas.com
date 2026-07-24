import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Background image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-background-final.png"
          alt="GunsAtlas Hero"
          fill
          priority
          quality={100}
          className={styles.heroImage}
        />
      </div>

      {/* Dark overlay */}
      <div className={styles.overlay}></div>

      {/* Left gradient */}
      <div className={styles.leftGradient}></div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>

          <span className={styles.subtitle}>
            FIREARMS ENCYCLOPEDIA
          </span>

          <h1 className={styles.title}>
            GunsAtlas
          </h1>

          <p className={styles.description}>
            Explore the history, development and technical characteristics of
            pistols, cartridges and ammunition from around the world.
          </p>

          <div className={styles.search}>

            <input
              type="text"
              placeholder="Search pistols, calibers, manufacturers..."
            />

            <button
              type="button"
              aria-label="Search"
            >
              🔍
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}