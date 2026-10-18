
import Header from "../../../components/Header";
import Hero from "../../calibers/components/Hero";
import styles from "../../calibers/calibers.module.css";
import TableOfContents from "../components/TableOfContents";
import Section from "../../calibers/components/Section";
import Divider from "../../calibers/components/Divider";

export default function EnglishCalibersPage() {
  return (
    <>
      <Header lang="en" />
      <Hero />

      <main className={styles.page}>
        <div className={styles.container}>
          <h1>Calibers</h1>

          <p>
            Handgun ammunition covers a wide range of calibers, designs and
            standards. GunsAtlas brings this information together and explains
            it in an accessible way, helping both beginners and experienced
            shooters navigate the subject.
          </p>

          <TableOfContents />

          <Divider />

          <Section
            id="what-is-caliber"
            title="What Is Caliber?"
          >
            <p>
              Handgun cartridges are manufactured in many calibers, designs and
              configurations. One of the most important characteristics used
              to identify a cartridge is its caliber.
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}
