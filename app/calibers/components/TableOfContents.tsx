const theoryItems = [
  { id: "what-is-caliber", title: "Какво представлява калибърът?" },
  { id: "metric-inch", title: "Метрична и инчова система" },
  { id: "conversion", title: "Защо преобразуването не винаги е точно?" },
  { id: "designation", title: "Значението на допълнителното обозначение" },
  { id: "choosing", title: "Избор на подходящ калибър" },
  { id: "cartridge", title: "Конструкция на патрона" },
  { id: "firing", title: "Как се произвежда изстрелът?" },
  { id: "velocity", title: "Скорост на куршума" },
  { id: "accuracy", title: "Точност на стрелбата" },
  { id: "energy", title: "Кинетична енергия на куршума" },
];

const rimfireItems = [
  { id: "flobert", title: "6 mm Flobert" },
  { id: "22-short", title: ".22 Short" },
  { id: "22-long", title: ".22 Long" },
  { id: "22-lr", title: ".22 Long Rifle" },
  { id: "22-wmr", title: ".22 Winchester Magnum Rimfire (.22 WMR)" },
];

export default function TableOfContents() {
  return (
    <nav>
      <h2>Съдържание</h2>

      <h3>Основи</h3>

      <ul>
        {theoryItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <h3>Патрони с периферно възпламеняване</h3>

      <ul>
        {rimfireItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}