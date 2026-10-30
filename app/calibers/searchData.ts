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

export const bgSearchItems: SearchItem[] = [
  ...theoryItems.map((item) => ({
    ...item,
    category: "Калибри",
  })),
  ...rimfireItems.map((item) => ({
    ...item,
    category: "Калибри",
  })),
  ...centerfireItems.map((item) => ({
    ...item,
    category: "Калибри",
  })),
];