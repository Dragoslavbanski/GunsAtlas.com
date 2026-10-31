"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

import { bgSearchItems } from "../app/calibers/searchData";
import { enSearchItems } from "../app/en/searchData";

type SearchItem = {
  id: string;
  title: string;
  category: string;
};

function normalizeSearch(value: string): string {
  return value
    .toLowerCase()
    .replace(/×/g, "x")
    .replace(/\s+/g, "")
    .trim();
}

export default function Hero({
  lang = "bg",
}: {
  lang?: "bg" | "en";
}) {
  const [query, setQuery] = useState("");

  const searchItems: SearchItem[] =
    lang === "en" ? enSearchItems : bgSearchItems;
  console.log(
  "Browning entries:",
  searchItems.filter((item) =>
    item.title.toLowerCase().includes("browning")
  )
);

  const normalizedQuery = normalizeSearch(query);

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return searchItems
  .filter((item) => {
    const title = normalizeSearch(item.title).replace(/\./g, "");
    const id = normalizeSearch(item.id).replace(/\./g, "");
    const query = normalizedQuery.replace(/\./g, "");

    return title.includes(query) || id.includes(query);
  })
  .slice(0, 8);
  }, [normalizedQuery, searchItems]);

  function openResult(item: SearchItem) {
    const path = lang === "en" ? "/en/calibers" : "/calibers";
    window.location.href = `${path}#${item.id}`;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (results.length > 0) {
      openResult(results[0]);
    }
  }

  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-background-final.png"
        alt="GunsAtlas Hero"
        fill
        priority
        quality={100}
        className={styles.heroImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.leftGradient}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>
            FIREARMS ENCYCLOPEDIA
          </span>

          <h1 className={styles.title}>
            <span className={styles.guns}>Guns</span>
            <span className={styles.atlas}>Atlas</span>
          </h1>

          <p className={styles.description}>
            Explore the history, development and technical characteristics of
            pistols, cartridges and ammunition from around the world.
          </p>

          <form
            className={styles.search}
            onSubmit={handleSubmit}
            role="search"
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={
                lang === "en"
                  ? "Search pistols, calibers, manufacturers..."
                  : "Търси пистолети, калибри, производители..."
              }
              aria-label={
                lang === "en" ? "Search GunsAtlas" : "Търсене в GunsAtlas"
              }
              autoComplete="off"
            />

            <button
              type="submit"
              aria-label={lang === "en" ? "Search" : "Търси"}
            >
              🔍
            </button>

            {query.trim() !== "" && (
              <div className={styles.searchResults}>
                {results.length > 0 ? (
                  results.map((item) => (
                    <a
                      key={item.id}
                      href={
                        lang === "en"
                          ? `/en/calibers#${item.id}`
                          : `/calibers#${item.id}`
                      }
                      className={styles.searchResult}
                    >
                      <span className={styles.resultTitle}>
                        {item.title}
                      </span>

                      <span className={styles.resultCategory}>
                        {item.category}
                      </span>
                    </a>
                  ))
                ) : (
                  <div className={styles.noResults}>
                    {lang === "en"
                      ? "No results found."
                      : "Няма намерени резултати."}
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}