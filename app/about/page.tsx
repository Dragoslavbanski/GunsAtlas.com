
import Image from "next/image";
import Header from "../../components/Header";

export default function AboutPage() {
  return (
    <>
      <Header lang="bg" />

      <main className="min-h-screen bg-[#0b0b0b] text-gray-200">
        <div className="mx-auto w-full max-w-5xl px-6 pt-32 pb-14 md:px-10 md:pt-36 md:pb-20">

          {/* Page heading */}
          <header className="mb-14 text-center">
            <h1 className="mb-5 text-4xl font-bold tracking-wide text-white md:text-5xl">
              За проекта GunsAtlas
            </h1>
            <div className="mx-auto h-1 w-20 bg-amber-600" />
          </header>

          {/* Introduction */}
          <section className="mx-auto mb-16 max-w-4xl text-center">
            <p className="text-lg leading-8 text-gray-200 md:text-xl">
              Казвам се Драгослав Бански и съм от град Дупница, България.
              Създател съм на GunsAtlas – независим енциклопедичен проект,
              посветен на ръчното огнестрелно оръжие, боеприпасите, историята,
              конструкцията и техническите особености на различните оръжейни системи.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
              Интересът ми към огнестрелните оръжия започва още в ранното ми
              детство и вече повече от две десетилетия е част от личните ми
              интереси и занимания.
            </p>
          </section>

          {/* How it all began */}
          <section className="mb-16">
            <h2 className="mb-7 border-l-4 border-amber-600 pl-5 text-2xl font-bold text-white md:text-3xl">
              Как започна всичко
            </h2>

            <div className="space-y-5 text-justify text-base leading-8 text-gray-300 md:text-lg">
              <p>
                Интересът ми към огнестрелните оръжия започва още в детството.
                Една книга има особено място в тази история – „Ръчното
                огнестрелно оръжие – илюстрирана история“ на Никола Даскалов
                и Антон Радевски, издадена през 1992 г.
              </p>

              <p>
                Баща ми купува книгата през 1992 или 1993 г., когато съм едва
                на пет-шест години. Спомням си семейния епизод около покупката –
                книгата била скъпа за тогавашните стандарти и предизвикала
                малък семеен спор дали си заслужава да се дадат толкова пари
                за една книга.
              </p>

              <p>
                По онова време все още не можех да чета, нито да разбирам
                написаното в нея. Но това не ми пречеше да я разглеждам с
                огромен интерес. Вниманието ми привличаха красивите илюстрации
                на различните огнестрелни оръжия – техните форми, детайли и
                различия. Тогава едва ли съм осъзнавал какво точно разглеждам,
                но тези изображения оставиха трайно впечатление у мен.
              </p>
            </div>

            {/* Book photographs */}
            <div className="my-12 flex flex-col items-center gap-10 md:flex-row md:justify-center md:items-start">

              <figure className="w-full max-w-[260px]">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-[#151515]">
                  <Image
                    src="/images/kniga-ruchnoto-ognestrelno-orazhie-korica.jpg"
                    alt="Корица на книгата Ръчното огнестрелно оръжие – илюстрирана история"
                    width={900}
                    height={1200}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm leading-6 text-gray-400">
                  Корицата на изданието от 1992 г.
                </figcaption>
              </figure>

              <figure className="w-full max-w-[350px]">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-[#151515]">
                  <Image
                    src="/images/kniga-ruchnoto-ognestrelno-orazhie-ilyustracii.jpg"
                    alt="Илюстрации от вътрешните страници на книгата"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm leading-6 text-gray-400">
                  Илюстрации от вътрешните страници на книгата.
                </figcaption>
              </figure>

            </div>

            {/* Bibliographic information */}
            <div className="mx-auto mb-10 max-w-4xl rounded-lg border border-white/10 bg-[#141414] p-6 md:p-8">
              <h3 className="mb-5 text-xl font-semibold text-white">
                За изданието
              </h3>

              <dl className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-gray-500">Заглавие</dt>
                  <dd className="mt-1 text-gray-200">
                    Ръчното огнестрелно оръжие – илюстрирана история
                  </dd>
                </div>

                <div>
                  <dt className="text-gray-500">Автори</dt>
                  <dd className="mt-1 text-gray-200">
                    Никола Даскалов и Антон Радевски
                  </dd>
                </div>

                <div>
                  <dt className="text-gray-500">Година на издаване</dt>
                  <dd className="mt-1 text-gray-200">1992 г.</dd>
                </div>

                <div>
                  <dt className="text-gray-500">Издателство</dt>
                  <dd className="mt-1 text-gray-200">
                    Военноиздателски комплекс „Св. Георги Победоносец“
                  </dd>
                </div>
              </dl>
            </div>

            <div className="space-y-5 text-justify text-base leading-8 text-gray-300 md:text-lg">
              <p>
                Книгата остава в дома ни и с времето се превръща в отправната
                точка на един интерес, който продължава вече повече от две
                десетилетия.
              </p>

              <p>
                След нея последват още много книги, специализирани издания и
                години на самостоятелно проучване. Вече повече от две
                десетилетия събирам информация за историята, развитието и
                конструкцията на огнестрелните оръжия, като с времето интересът
                ми се насочва особено силно към късите огнестрелни оръжия.
              </p>

              <p>
                С годините този първоначален интерес постепенно се задълбочава.
                Наред с четенето и проучването на специализирана литература,
                започнах да трупам и личен практически опит. Днес посещавам
                стрелбища и практикувам стрелба с огнестрелно оръжие. Така
                интересът ми към темата се развива едновременно в историческа,
                техническа и практическа посока.
              </p>
            </div>
          </section>

          {/* The idea behind GunsAtlas */}
          <section className="mb-16">
            <h2 className="mb-7 border-l-4 border-amber-600 pl-5 text-2xl font-bold text-white md:text-3xl">
              Идеята зад GunsAtlas
            </h2>

            <div className="space-y-5 text-justify text-base leading-8 text-gray-300 md:text-lg">
              <p>
                GunsAtlas е естественото продължение на този дългогодишен интерес.
              </p>

              <p>
                Проектът е създаден с идеята да събере на едно място структурирана,
                достъпна и проверена информация за огнестрелните оръжия и
                боеприпасите – тяхната история, конструкция, технически
                характеристики и развитие.
              </p>

              <p>
                Съдържанието се изгражда чрез проучване на специализирана
                литература, исторически документи, техническа документация на
                производители и други надеждни източници. Информацията се
                съпоставя и проверява, преди да намери място в енциклопедията.
              </p>

              <p>
                GunsAtlas не е претенция за академичен труд или авторство върху
                вече съществуващи исторически и технически знания. Това е
                независим енциклопедичен проект, изграден върху дългогодишен
                личен интерес, самостоятелно проучване и стремеж към достоверност.
              </p>

              <p>
                Вярвам, че всяко оръжие има история, която заслужава да бъде
                разказана – от идеята и хората зад неговото създаване до
                технологиите, които са определили развитието му.
              </p>
            </div>
          </section>

          {/* Closing statement */}
          <footer className="border-t border-white/10 pt-8 text-center">
            <p className="text-xl font-semibold tracking-wide text-amber-500 md:text-2xl">
              GunsAtlas – история, технологии и познание за огнестрелните оръжия.
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
