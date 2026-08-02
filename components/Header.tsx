import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <Image
  src="/images/Logo.png"
  alt="GunsAtlas"
  width={240}
  height={74}
  priority
/>
      </a>

      <nav className={styles.navigation}>
  <a href="#">Начало</a>
  <a href="#">Калибри</a>
  <a href="#">Пистолети</a>
  <a href="#">Производители</a>
  <a href="#">История</a>
  <a href="#">Законодателство</a>
  <a href="#">За проекта</a>
</nav>

      <div className={styles.language}>
        <button className={styles.active}>БГ</button>
        <span>|</span>
        <button>EN</button>
      </div>
    </header>
  );
}