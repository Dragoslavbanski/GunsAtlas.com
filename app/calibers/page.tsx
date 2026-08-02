import styles from "./calibers.module.css";

import Hero from "./components/Hero";
import TableOfContents from "./components/TableOfContents";
import Section from "./components/Section";
import Divider from "./components/Divider";

export default function CalibersPage() {
  return (
    <>
      <Hero />

      <section className={styles.heroInfo}>
        <p>
          ИСТОРИЯ • КОНСТРУКЦИЯ • БАЛИСТИКА • ПРИЛОЖЕНИЕ
        </p>
      </section>

      <main className={styles.page}>
        <div className={styles.container}>
          <h1>Калибри</h1>

          <p>
            В света на пистолетните патрони има много информация, събрана в
            различни стандарти, обозначения и източници. Целта на GunsAtlas е да
            я подреди, обясни и представи по достъпен начин, така че всеки читател
            – независимо дали е начинаещ или опитен стрелец – да може лесно да се
            ориентира.
          </p>

          <TableOfContents />

          <Divider />

          <Section
            id="what-is-caliber"
            title="Какво представлява калибърът?"
          >
            <p>Текстът ще бъде добавен на следващ етап.</p>
          </Section>

          <Divider />

          <Section
            id="metric-inch"
            title="Метрична и инчова система"
          >
            <p>Текстът ще бъде добавен на следващ етап.</p>
          </Section>
        </div>
      </main>
    </>
  );
}