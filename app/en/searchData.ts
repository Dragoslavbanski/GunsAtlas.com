import {
  theoryItems,
  rimfireItems,
  centerfireItems,
} from "./components/TableOfContents";

export type SearchItem = {
  id: string;
  title: string;
  category: string;
};

export const enSearchItems: SearchItem[] = [
  ...theoryItems.map((item) => ({
    ...item,
    category: "Calibers",
  })),
  ...rimfireItems.map((item) => ({
    ...item,
    category: "Calibers",
  })),
  ...centerfireItems.map((item) => ({
    ...item,
    category: "Calibers",
  })),
];