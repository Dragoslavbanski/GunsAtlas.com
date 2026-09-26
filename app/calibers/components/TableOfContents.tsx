const theoryItems = [
  {
    id: "what-is-caliber",
    title: "Какво представлява калибърът?",
  },
  {
    id: "metric-inch",
    title: "Метрична и инчова система",
  },
  {
    id: "conversion",
    title: "Защо преобразуването не винаги е точно?",
  },
  {
    id: "additional-designation",
    title: "Значението на допълнителното обозначение",
  },
  {
    id: "choosing-caliber",
    title: "Избор на подходящ калибър",
  },
  {
    id: "caliber-data",
    title: "Ориентировъчни данни за калибрите",
  },
  {
    id: "cartridge-components",
    title: "Основни елементи на патрона",
  },
  {
    id: "velocity-accuracy",
    title: "Скорост и точност на изстрела",
  },
  {
    id: "energy",
    title: "Кинетична енергия на куршума",
  },
  {
  id: "bullet-types",
  title: "Видове куршуми",
},
];

const rimfireItems = [
  
  {
    id: "flobert",
    title: "6 mm Flobert",
  },
  {
    id: "22-short",
    title: ".22 Short",
  },
  {
    id: "22-long",
    title: ".22 Long",
  },
  {
    id: "22-lr",
    title: ".22 Long Rifle",
  },
  {
    id: "22-wmr",
    title: ".22 Winchester Magnum Rimfire (.22 WMR)",
  },
];
const centerfireItems = [
  {
    id: "5-45x18-mpc",
    title: "5.45×18 mm МПЦ",
  },
  {
    id: "5-7x28",
    title: "5.7×28 mm (SS190)",
  },
  {
    id: "6-35x15-5-browning",
    title: "6.35×15.5 mm HR (6.35 Browning / .25 ACP)",
  },
  {
    id: "7-62x25-tokarev",
    title: "7.62×25 mm Tokarev",
  },
  {
    id: "7-63x25-mauser",
    title: "7.63×25 mm Mauser (.30 Mauser)",
  },
  {
    id: "7-65x17-browning",
    title: "7.65×17 mm Browning (.32 ACP)",
  },
  {
    id: "7-65x21-parabellum",
    title: "7.65×21 mm Parabellum (.30 Luger)",
  },
  {
  id: "7-65x25-borchardt",
  title: "7.65×25 mm Borchardt",
},
  {
    id: "8-5x26-mars",
    title: "8.5×26 mm Mars (.330 Mars)",
  },
  {
  id: "9-17x-browning-short",
  title: "9×17 mm Browning Short (.380 ACP)",
},
{
  id: "9-18-ultra-police",
  title: "9×18 mm Ultra / 9×18 mm Police",
},
{
  id: "9x18-makarov",
  title: "9×18 mm Makarov (9×18 PM)",
},

{
  id: "9x18-pmm",
  title: "9×18 mm PMM",
},
{
  id: "9x19-parabellum",
  title: "9×19 mm Luger Parabellum",
},
{
  id: "9x20-browning-long",
  title: "9×20 mm Browning Long",
},
{
  id: "9x21-russian-gyurza",
  title: "9×21 mm Russian (Gyurza)",
},
{
  id: "9x21-imi",
  title: "9×21 mm IMI",
},
{
  id: "9x22-357-sig",
  title: "9×22 mm .357 SIG",
},
{
  id: "9x23-explanation",
  title: "9×23 mm – пояснение",
},
{
  id: "9x23-bergmann-bayard",
  title: "9×23 mm Bergmann-Bayard / 9 mm Largo",
},
{
  id: "9x23-steyr",
  title: "9×23 mm Steyr",
},
{
  id: "9x23-sr-38-acp",
  title: "9×23 mm SR (.38 ACP / .38 Auto)",
},
{
  id: "9x23-sr-38-super",
  title: "9×23 mm SR (.38 Super)",
},
{
  id: "9x23-winchester",
  title: "9×23 mm Winchester",
},

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

     <h3>1. Патрони с периферно възпламеняване</h3>

<ul>
  {rimfireItems.map((item) => (
    <li key={item.id}>
      <a href={`#${item.id}`}>{item.title}</a>
    </li>
  ))}
</ul>

<h3>2. Патрони с централно възпламеняване</h3>

<ul>
  {centerfireItems.map((item) => (
    <li key={item.id}>
      <a href={`#${item.id}`}>{item.title}</a>
    </li>
  ))}
</ul>
    </nav>
  );
}