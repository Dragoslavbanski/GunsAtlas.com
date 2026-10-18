
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  lang = "bg",
}: {
  lang?: "bg" | "en";
}) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/Logo.png.png"
          alt="GunsAtlas"
          width={240}
          height={74}
          priority
        />
      </Link>

      
<nav className={styles.navigation}>
  <a href={lang === "en" ? "/en" : "/"}>{lang === "en" ? "Home" : "Начало"}</a>
  <a href={lang === "en" ? "/en/calibers" : "/calibers"}>{lang === "en" ? "Calibers" : "Калибри"}</a>
  <a href="#">{lang === "en" ? "Pistols" : "Пистолети"}</a>
  <a href="#">{lang === "en" ? "Manufacturers" : "Производители"}</a>
  <a href="#">{lang === "en" ? "History" : "История"}</a>
  <a href="#">{lang === "en" ? "Legislation" : "Законодателство"}</a>
  <a href="#">{lang === "en" ? "About" : "За проекта"}</a>
</nav>


      <div className={styles.language}>
  <a
    href="/"
    className={styles.active}
  >
    БГ
  </a>
  <span>|</span>
  <a href="/en">EN</a>
</div>
    </header>
  );
}
