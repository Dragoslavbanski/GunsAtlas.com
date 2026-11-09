
import Image from "next/image";
import Header from "../../../components/Header";
import styles from "../../about/about.module.css";

export default function AboutPage() {
  return (
    <>
      <Header lang="en" />

      <main className={styles.page}>
        <div className={styles.container}>

          <h1>About GunsAtlas</h1>

          <p className={styles.intro}>
            My name is Dragoslav Banski, and I come from the town of
            Dupnitsa, Bulgaria. I am the founder of GunsAtlas – an
            independent encyclopedic project dedicated to small arms,
            ammunition, their history, design and technical characteristics.
          </p>

          <p className={styles.intro}>
            My interest in firearms began in early childhood and has
            remained an important part of my personal interests and
            pursuits for more than three decades.
          </p>

          <div className={styles.heroInfo}>
            <p>HISTORY • DESIGN • TECHNOLOGY • KNOWLEDGE</p>
          </div>

          <hr />

          <section id="how-it-started">
            <h2>How It All Began</h2>

            <p>
              My interest in firearms began in childhood. One particular
              book holds a special place in this story – “Small Arms:
              An Illustrated History” by Nikola Daskalov and Anton Radevski,
              originally published in Bulgarian in 1992.
            </p>

            <p>
              My father bought the book in 1992 or 1993, when I was only
              five or six years old. I remember the family discussion
              surrounding the purchase – the book was expensive by the
              standards of the time and sparked a small debate about
              whether it was worth spending so much money on a book.
            </p>

            <p>
              At that age, I could not yet read or understand what was
              written in it. That did not stop me from looking through
              it with great interest. I was fascinated by the illustrations
              of different firearms – their shapes, details and differences.
              I could hardly have understood what I was looking at back
              then, but those images left a lasting impression on me.
            </p>

            <div className={styles.bookImages}>

              <figure className={styles.bookCover}>
                <div className={styles.imageFrame}>
                  <Image
                    src="/images/kniga-ruchnoto-ognestrelno-orazhie-korica.jpg"
                    alt="Cover of the book Small Arms: An Illustrated History"
                    width={900}
                    height={1200}
                    className={styles.image}
                  />
                </div>
                <figcaption>
                  Cover of the 1992 Bulgarian edition.
                  <br />
                  The book was also published in English.
                </figcaption>
              </figure>

              <figure className={styles.bookIllustrations}>
                <div className={styles.imageFrame}>
                  <Image
                    src="/images/kniga-ruchnoto-ognestrelno-orazhie-ilyustracii.jpg"
                    alt="Illustrations from the book's interior pages"
                    width={1200}
                    height={900}
                    className={styles.image}
                  />
                </div>
                <figcaption>
                  Illustrations from the book's interior pages.
                </figcaption>
              </figure>

            </div>

            <div className={styles.bookInfo}>
              <h3>Publication Details</h3>

              <dl>
                <div>
                  <dt>Title</dt>
                  <dd>
                    Small Arms: An Illustrated History
                  </dd>
                </div>

                <div>
                  <dt>Authors</dt>
                  <dd>Nikola Daskalov and Anton Radevski</dd>
                </div>

                <div>
                  <dt>Year of publication</dt>
                  <dd>1992</dd>
                </div>

                <div>
                  <dt>Publisher</dt>
                  <dd>
                    Military Publishing Complex “St. George the Victorious”
                  </dd>
                </div>
              </dl>
            </div>

            <p>
              The book remained in our home and gradually became the
              starting point of an interest that has continued for
              more than three decades.
            </p>

            <p>
              Many other books, specialist publications and years of
              independent research followed. For more than two decades,
              I have been gathering information about the history,
              development and design of firearms, with my interest
              gradually becoming particularly focused on handguns.
            </p>

            <p>
              Over the years, this initial interest has continued to
              deepen. Alongside reading and researching specialist
              literature, I have also gained personal practical experience.
              Today, I visit shooting ranges and practise shooting
              with firearms. In this way, my interest in the subject
              has developed along historical, technical and practical lines.
            </p>
          </section>

          <hr />

          <section id="the-idea">
            <h2>The Idea Behind GunsAtlas</h2>

            <p>
              GunsAtlas is a natural continuation of this long-standing interest.
            </p>

            <p>
              The project was created with the aim of bringing together
              structured, accessible and verified information about
              firearms and ammunition – their history, design, technical
              characteristics and development.
            </p>

            <p>
              The content is developed through research of specialist
              literature, historical documents, manufacturers' technical
              documentation and other reliable sources. Information
              is cross-referenced and checked before being included
              in the encyclopedia.
            </p>

            <p>
              GunsAtlas is not intended to be an academic work, nor does
              it claim authorship of existing historical and technical
              knowledge. It is an independent encyclopedic project built
              on long-standing personal interest, independent research
              and a commitment to accuracy.
            </p>

            <p>
              I believe every firearm has a story worth telling – from
              the idea and the people behind its creation to the
              technologies that have shaped its development.
            </p>
          </section>

          <hr />

          <footer className={styles.footer}>
            <p>
              GunsAtlas – history, technology and knowledge about firearms.
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
