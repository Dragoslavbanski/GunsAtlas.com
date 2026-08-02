import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src="/images/heroes/calibers-hero-3.png"
        alt="GunsAtlas - Calibers"
        className={styles.image}
      />

      <div className={styles.overlay}></div>

      <div className={styles.bottomFade}></div>
    </section>
  );
}