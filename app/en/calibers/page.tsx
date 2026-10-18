
import Header from "../../../components/Header";
import Hero from "../../calibers/components/Hero";
import styles from "../../calibers/calibers.module.css";
import TableOfContents from "../components/TableOfContents";
import Section from "../../calibers/components/Section";
import Divider from "../../calibers/components/Divider";
import DataTable from "../../calibers/components/DataTable";
import TechnicalData from "../../calibers/components/TechnicalData";

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
    Handgun cartridges are manufactured in a wide range of calibers,
    designs and variations. One of the most important characteristics
    used to identify a cartridge is its caliber.
  </p>

  <p>
    In general terms, the word “caliber” refers to the approximate
    diameter of the barrel or bullet. In technical practice, however,
    its meaning is more complex. Depending on the firearm system and
    the designation convention used, it may refer to different barrel
    dimensions or to the nominal diameter of the bullet.
  </p>

  <p>
    In rifled barrels, a distinction is made between the diameter
    measured across the lands and the diameter measured across the
    grooves. This difference, together with various historical and
    national designation systems, is one reason why a cartridge’s
    nominal caliber does not necessarily match the measured bullet
    diameter exactly.
  </p>

  <p>
    For this reason, many cartridge designations include additional
    names that distinguish them from others. For cartridges around
    9 mm, for example, designations such as <strong>Makarov</strong>,
    <strong>Parabellum</strong>, <strong>Browning</strong> and
    <strong>Largo</strong> are used. The number “9 mm” alone is not
    enough to identify a specific cartridge.
  </p>

  <p>
    Another widely used convention identifies a cartridge by its
    nominal diameter and case length. Examples include
    <strong>9×17</strong>, <strong>9×18</strong>,
    <strong>9×19</strong>, <strong>9×21</strong> and
    <strong>9×23</strong>. The designation generally indicates the
    approximate nominal diameter in millimeters and the case length,
    also in millimeters. However, it does not provide a complete
    description of the cartridge or guarantee interchangeability.
  </p>
</Section>

          <Divider />

                    <Section
            id="metric-inch"
            title="Metric and Inch Systems"
          >
            <p>
              There is no single worldwide standard for designating all
              handgun calibers. The metric system is widely used in Europe,
              while designations based on fractions of an inch have
              traditionally been used in the United States.
            </p>

            <p>
              One inch is exactly <strong>25.4 mm</strong>.
            </p>

            <p>
              For example, the designation <strong>.22</strong> represents
              0.22 inches. The direct conversion is:
            </p>

            <p>
              <strong>0.22 × 25.4 = 5.588 mm</strong>
            </p>

            <p>
              However, this does not mean that every cartridge designated
              .22 has a bullet with an exact diameter of 5.588 mm. Inch-based
              designations are often nominal or historically established and
              should be considered together with the specific cartridge name.
            </p>

            <p>
              For designations below one inch, the leading zero is usually
              omitted. Thus, <strong>.38</strong> is used instead of
              <strong>0.38</strong>. Similarly, <strong>.50 AE</strong>
               nominally represents 0.50 inches, which corresponds to
              <strong>12.7 mm</strong> when converted mathematically.
            </p>
          </Section>
                    <Section
            id="conversion"
            title="Why Is Conversion Not Always Exact?"
          >
            <p>
              At first glance, it may seem that any caliber designated in
              inches can easily be converted to millimeters by multiplying
              by 25.4. This is mathematically correct, but it does not mean
              that the resulting value necessarily matches the actual diameter
              of the bullet.
            </p>

            <p>
              For example:
            </p>

            <p>
              <strong>.38 × 25.4 = 9.652 mm</strong>
            </p>

            <p>
              In the case of <strong>.38 Special</strong>, however, the
              standard dimensions of the cartridge and barrel are linked to
              the historical .38 designation, while the nominal diameter of
              a jacketed bullet is approximately
              <strong> 9.09 mm</strong>. This illustrates why a cartridge's
              name should not automatically be treated as an exact measurement
              of its bullet.
            </p>

            <p>
              Similar differences occur with many historical cartridges.
              Some designations originated during a period when different
              manufacturers and countries used their own methods of
              measurement and naming. Over time, some of these designations
              became established commercial or historical names.
            </p>
          </Section>
          <Section
            id="additional-designation"
            title="The Importance of Additional Designations"
          >
            <p>
              Many cartridges have similar or even identical numerical
              designations, yet differ in construction, dimensions, pressure,
              and intended use. For this reason, the full cartridge name is
              far more important than the number alone.
            </p>

            <p>
              For example, <strong> .38 ACP</strong> and <strong>.38 Auto </strong>
              are different names for the same historical cartridge, whereas
              <strong> .38 Super</strong> is a separate cartridge historically
              related to it and standardized for higher pressure. Therefore,
              similarity in name does not automatically mean that two
              cartridges are identical or interchangeable.
            </p>

            <p>
              This is particularly important for cartridges designated as
              <strong>9×23</strong>. Several different cartridges have this
              or a similar designation, including <strong>9×23 Winchester</strong>,
              <strong> 9×23 Largo</strong>, and <strong>9×23 Steyr</strong>.
              They should not be treated as the same cartridge simply because
              their numerical designations are similar.
            </p>

            <p>
              The <strong>9×18 Makarov</strong> is another illustrative
              example. Despite its 9 mm designation, the actual bullet
              diameter is greater than 9.00 mm. This distinguishes it from
              other widely used 9 mm cartridges, such as
              <strong> 9×19 Luger </strong> and
              <strong> 9×17 Browning Short / .380 ACP</strong>.
            </p>

            <p>
              Because of different naming systems, historical traditions,
              and the existence of cartridges with similar names, the
              numerical designation alone is not sufficient to identify a
              specific cartridge. Correct identification requires considering
              the full name, cartridge dimensions, and the relevant standard.
            </p>
          </Section>
          <Section
            id="choosing-caliber"
            title="Choosing the Right Caliber"
          >
            <p>
              Choosing a caliber is one of the important considerations when
              selecting a handgun. There is no universally “best” caliber;
              the right choice depends on the firearm's intended purpose, the
              specific model, the shooter's preferences, and their skill level.
            </p>

            <p>
              Different calibers are used for different purposes, including
              target shooting, duty use, hunting where permitted by applicable
              law, and other lawful activities. They differ in characteristics
              such as recoil, magazine capacity, bullet velocity and energy,
              the firearm's dimensions and weight, and ammunition cost and
              availability.
            </p>

            <p>
              It is often assumed that a larger caliber automatically provides
              greater stopping power. This is an oversimplification. The
              performance and effectiveness of a particular cartridge depend
              on many factors, including the bullet's design and weight, its
              velocity, kinetic energy, and the intended purpose of the
              ammunition.
            </p>

            <p>
              The shooter's ability to control the firearm and shoot accurately
              and safely is also important. For this reason, one caliber may
              be preferred by one shooter but may not be the optimal choice
              for another.
            </p>

            <p>
              This is why GunsAtlas will examine individual handgun calibers
              in detail, covering their history, design, technical
              characteristics, applications, and the most common firearms
              that use them. The goal is to help readers form an informed
              opinion based on verified information rather than myths or
              widely repeated claims.
            </p>

            <p>
              Regardless of caliber, every firearm must be handled with due
              care and responsibility. Understanding technical characteristics
              and following safety rules are integral parts of responsible
              firearm ownership and use.
            </p>
                  <h3 id="caliber-data">Approximate Caliber Data</h3>

      <p>
        The following table shows approximate correspondences between metric
        and inch-based designations for some widely used calibers. The values
        should not be treated as exact mathematical conversions or as proof
        that cartridges are interchangeable.
      </p>

      <p>
        This is because the same or a similar nominal designation may be used
        for different cartridges, while the actual dimensions of the bullet
        and barrel depend on the specific cartridge and the relevant firearm
        standard.
      </p>

      <DataTable
        columns={[
          { key: "metric", label: "Metric Designation" },
          { key: "inch", label: "Inch-Based Designation" },
          { key: "bullet", label: "≈ Bullet Diameter" },
        ]}
        rows={[
          {
            metric: "5.6 mm",
            inch: ".22",
            bullet: "≈ 5.5–5.6 mm",
          },
          {
            metric: "6.35 mm",
            inch: ".25",
            bullet: "≈ 6.35 mm",
          },
          {
            metric: "7.62 mm",
            inch: ".30",
            bullet: "≈ 7.62–7.63 mm",
          },
          {
            metric: "7.65 mm",
            inch: ".32",
            bullet: "≈ 7.65–7.67 mm",
          },
          {
            metric: "9 mm",
            inch: ".35",
            bullet: "≈ 9.0–9.25 mm",
          },
          {
            metric: "10 mm",
            inch: ".40 / .41",
            bullet: "≈ 10 mm",
          },
          {
            metric: "11.43 mm",
            inch: ".45",
            bullet: "≈ 11.43 mm",
          },
          {
            metric: "12.7 mm",
            inch: ".50",
            bullet: "≈ 12.7 mm",
          },
        ]}
      />

      <p>
        <em>
          Note: The values shown are approximate. They do not identify a
          specific cartridge, determine chamber dimensions, or establish
          ammunition compatibility with a particular firearm.
        </em>
      </p> 
          </Section>
      <Section
        id="cartridge-components"
        title="The Main Components of a Cartridge"
      >
        <p>
          Regardless of their caliber and intended purpose, most modern
          handgun cartridges consist of four main components:
        </p>
        <ol style={{ listStyleType: "decimal", paddingLeft: "30px" }}>
          <li>
            <strong>Bullet (projectile)</strong>
          </li>
          <li>
            <strong>Case</strong>
          </li>
          <li>
            <strong>Propellant charge</strong>
          </li>
          <li>
            <strong>Primer</strong>
          </li>
        </ol>

        <div style={{ textAlign: "center" }}>
          <img
            src="/images/cartridge-construction_EN.png"
            alt="Cartridge construction and its main components"
            style={{ width: "63%", height: "auto" }}
          />
        </div>

        <h3>1. Bullet (projectile)</h3>

        <p>
          The bullet is the part of the cartridge that is propelled out of
          the barrel when a shot is fired. It is designed to reach the target
          and can be made from different materials and feature different
          designs depending on the intended purpose of the ammunition.
        </p>

        <h3>2. Case</h3>

        <p>
          The case is the metal body of the cartridge that holds the other
          main components. It brings the cartridge together as a single unit
          and ensures that it is properly positioned in the chamber.
        </p>

        <h3>3. Propellant Charge</h3>

        <p>
          The propellant charge is the material that burns rapidly when
          ignited, producing high-pressure gases. This pressure propels the
          bullet forward through the barrel.
        </p>

        <h3>4. Primer</h3>

        <p>
          The primer is the cartridge's ignition component. When struck by
          the firing pin or hammer, it produces a flame and hot gases that
          ignite the propellant charge.
        </p>
      </Section>
      <Section
        id="firing"
        title="How Is a Shot Fired?"
      >
        <p>
          When the trigger is pulled, the firearm's firing pin strikes the
          cartridge primer.
        </p>

        <p>
          The primer contains a small amount of impact-sensitive ignition
          compound. When struck, it ignites and produces a hot flame that
          passes through the opening in the case and ignites the propellant
          charge.
        </p>

        <p>
          Within thousandths of a second, the propellant begins to burn
          intensely.
        </p>

        <p>
          It is important to note that <strong>gunpowder does not explode</strong>,
          but rather <strong>burns extremely rapidly</strong>. This combustion
          releases a large volume of hot gases, which rapidly increase the
          pressure inside the cartridge case.
        </p>

        <p>
          Since the cartridge is positioned in the chamber and is enclosed
          on almost all sides, the bullet is the only component that can
          move forward. Under the high pressure, it leaves the case, enters
          the barrel, and accelerates to a very high velocity.
        </p>

        <h3>The Role of the Individual Components</h3>

        <h3>Case</h3>

        <p>
          Cartridge cases are most commonly made of brass, an alloy of
          copper and zinc.
        </p>

        <p>
          Brass is preferred because it is strong enough while also
          possessing the necessary elasticity.
        </p>

        <p>
          When a shot is fired, the case expands slightly and fits tightly
          against the chamber walls. This provides an effective gas seal,
          allowing almost all the energy of the propellant gases to be used
          to propel the bullet.
        </p>

        <h3>Primer</h3>

        <p>
          The primer is a small metal cup containing a sensitive ignition
          compound.
        </p>

        <p>
          When struck by the firing pin, this compound ignites almost
          instantaneously and ignites the propellant charge.
        </p>

        <p>
          Although the amount is minimal, a shot could not be fired without
          the primer.
        </p>

        <h3>Propellant</h3>

        <p>
          Gunpowder is a solid propellant specifically designed for use in
          firearms.
        </p>

        <p>
          Its distinguishing feature is that it burns extremely rapidly
          without requiring an external supply of oxygen, releasing a large
          volume of high-pressure gases.
        </p>

        <p>
          These gases perform the main work of accelerating the bullet.
        </p>

        <h3>Bullet</h3>

        <p>
          The bullet (projectile) is the only cartridge component that leaves
          the firearm when a shot is fired.
        </p>

        <p>
          Driven by the expanding gases, it reaches a very high velocity,
          which depends on several factors, including caliber, bullet weight,
          the amount and type of propellant, and barrel length.
        </p>

        <p>
          For example, in a standard <strong>9×19 Parabellum</strong>
          cartridge, the maximum chamber pressure is approximately
          <strong>2350 bar</strong> under the CIP standard (some ammunition
          may have slightly different values depending on the standard and
          the specific load).
        </p>

        <h3>Important Note</h3>

        <p>
          Although the process may seem complex, everything described above
          takes place in an extremely short time — approximately within a
          few dozen to several hundred microseconds. The precise interaction
          of the four main components is what enables a modern cartridge to
          function safely and reliably.
        </p>
      </Section>
          <Section
        id="velocity-accuracy"
        title="Shot Velocity and Accuracy"
      >
        <p>
          Firing a shot is an extremely fast process. From the moment the
          shooter decides to pull the trigger until the bullet leaves the
          barrel, approximately two-tenths of a second elapse. Most of this
          time is required by the human nervous system to transmit the
          command from the brain to the finger.
        </p>

        <p>
          After the trigger is pulled, the firearm's mechanical components
          begin to operate almost instantaneously. The firing pin strikes
          the primer, which ignites the propellant charge. This happens in
          a fraction of a millisecond.
        </p>

        <p>
          As the propellant burns, it produces a large volume of high-pressure
          gases that propel the bullet through the barrel. The bullet's
          movement inside the barrel lasts approximately half a millisecond,
          after which it leaves the firearm at a velocity that, for most
          standard handgun cartridges, is between
          <strong> 300 and 400 m/s</strong>, depending on the caliber, barrel
          length, and ammunition used.
        </p>

        <p>
          Thanks to the rifling inside the barrel, the bullet acquires rapid
          rotational movement around its longitudinal axis. This spin
          stabilizes its flight and significantly improves accuracy.
        </p>

        <p>
          An interesting fact is that the bullet has already left the barrel
          before the shooter actually feels the firearm's recoil. For this
          reason, recoil does not affect the shot that has already been fired,
          but mainly influences preparation for the next shot.
        </p>

        <h3>Shooting Accuracy</h3>

        <p>
          The accuracy of a handgun depends on many factors, including the
          quality of the firearm, the ammunition used, barrel length, the
          design of the sights, and, above all, the shooter's skill.
        </p>

        <p>
          In practice, most handguns are intended for effective shooting at
          distances of up to approximately <strong>50 meters</strong>,
          although some models are also used successfully at longer ranges.
        </p>

        <p>
          A well-trained shooter using a quality firearm and suitable
          ammunition can reliably hit relatively small targets at distances
          of around <strong>25–30 meters</strong>.
        </p>

        <p>
          In competitive shooting, the requirements are even higher.
          Competitors use specialized handguns, often individually adjusted
          to suit the shooter's characteristics. Under optimal conditions,
          they can achieve exceptionally tight groups of shots, the result
          of years of training, precise technique, and excellent equipment.
        </p>
      </Section>
      <Section
        id="energy"
        title="Kinetic Energy of a Bullet"
      >
        <p>
          Kinetic energy is one of the fundamental characteristics of a
          moving bullet. Together with its design, mass, and velocity, it
          determines the amount of energy the bullet carries during flight.
        </p>

        <p>
          When a bullet strikes an obstacle, some or all of this energy is
          transferred to it. The amount transferred depends on many factors,
          including the bullet's design, its velocity, the materials it
          passes through, and whether the bullet remains in the target or
          exits it.
        </p>

        <p>
          For this reason, the same amount of kinetic energy can produce
          different results depending on the particular bullet type and
          the conditions of impact.
        </p>

        <h3>How Is It Calculated?</h3>

        <p>
          Kinetic energy is measured in <strong>joules (J)</strong> and is
          calculated using the formula:
        </p>

        <p>
          <strong>E = ½mv²</strong>
        </p>

        <p>
          where:
        </p>

        <ul>
          <li><strong>E</strong> – kinetic energy (J)</li>
          <li><strong>m</strong> – bullet mass (kg)</li>
          <li><strong>v</strong> – initial velocity (m/s)</li>
        </ul>

        <p>
          The formula clearly shows that <strong>velocity has a much greater
          influence on kinetic energy than bullet mass</strong>.
        </p>

        <p>
          For example:
        </p>

        <ul>
          <li>
            if the bullet's mass doubles, its kinetic energy also increases
            by approximately a factor of two;
          </li>
          <li>
            if its velocity doubles, its kinetic energy increases by
            approximately <strong>four times</strong>.
          </li>
        </ul>

        <p>
          This is why relatively small changes in muzzle velocity can have
          a significant effect on a bullet's kinetic energy.
        </p>

        <h3>Muzzle Energy</h3>

        <p>
          When ammunition is tested, kinetic energy is most commonly
          measured at the moment the bullet leaves the barrel.
        </p>

        <p>
          This value is called <strong>muzzle energy</strong> and is usually
          denoted by <strong>E₀</strong>.
        </p>

        <p>
          Manufacturers almost always list this value in the ammunition's
          technical specifications. For some types of ammunition, energy
          values at different distances may also be published, showing how
          energy decreases during flight.
        </p>

        <h3>What Determines a Bullet's Effectiveness?</h3>

        <p>
          Kinetic energy is an important measure, but <strong>it is not
          sufficient on its own</strong> to determine how a bullet behaves
          after impact.
        </p>

        <p>
          Other important factors include:
        </p>

        <ul>
          <li>the bullet's design;</li>
          <li>the shape of its tip;</li>
          <li>the material from which it is made;</li>
          <li>its stability during flight;</li>
          <li>its velocity at impact;</li>
          <li>the medium it strikes.</li>
        </ul>

        <p>
          For this reason, two bullets with the same kinetic energy can
          behave differently depending on their design.
        </p>
      </Section>
      <Section
        id="bullet-types"
        title="Bullet Types"
      >
        <p>
          Bullet design has a significant influence on both its ballistic
          characteristics and its behavior upon impact.
        </p>

        <p>
          The more streamlined a bullet's shape, the lower the air resistance
          and the better it retains its velocity during flight. For this
          reason, bullets designed for rifles and automatic firearms generally
          have a sharper, more aerodynamic profile, as they are intended for
          shooting at considerably greater distances.
        </p>

        <p>
          With pistol ammunition, shooting distances are generally much
          shorter. This allows for the use of different bullet tip designs,
          depending on their intended purpose.
        </p>

        <p>
          Among the most common bullet designs are:
        </p>

        <ul style={{ listStyleType: "square", paddingLeft: "30px" }}>
          <li>
            <strong>FMJ (Full Metal Jacket)</strong> – a bullet with a full
            metal jacket;
          </li>
          <li>
            <strong>JHP (Jacketed Hollow Point)</strong> – a hollow-point
            bullet;
          </li>
          <li>
            <strong>SP (Soft Point)</strong> – a partially jacketed bullet
            with an exposed lead tip;
          </li>
          <li>
            <strong>Flat Point (FP)</strong> – a flat-point bullet;
          </li>
          <li>
            <strong>Semi-Wadcutter (SWC)</strong> – a semi-flat-point bullet;
          </li>
          <li>
            <strong>Wadcutter (WC)</strong> – a cylindrical, flat-fronted
            bullet used primarily in target shooting.
          </li>
        </ul>

        <p style={{ marginTop: "25px" }}>
          Each of these types has its own characteristics and applications.
          In the following sections of GunsAtlas, we will take a closer look
          at the design, intended use, advantages, and limitations of each
          bullet type.
        </p>
      </Section>
      <Section
        id="rimfire"
        title="1. Rimfire Cartridges"
      >
        <p>
          Rimfire cartridges are ammunition in which the priming compound is
          not contained in a separate primer but is located inside the rim
          around the base of the case. When a shot is fired, the firing pin
          does not strike the center of the cartridge but the rim of the case
          head. The impact deforms the thin metal, compressing and igniting
          the priming compound. The resulting spark ignites the powder charge,
          which propels the bullet through the barrel.
        </p>

        <p>
          This design is relatively simple, inexpensive to manufacture, and
          extremely reliable in small-caliber ammunition. For this reason,
          rimfire cartridges have been widely used for more than 180 years
          in target shooting, training, recreational shooting, and small-game
          hunting.
        </p>

        <p>
          One limitation of this system is that the thin-walled case cannot
          withstand very high pressures. For this reason, almost all modern
          high-powered pistol and revolver cartridges use centerfire ignition,
          in which the primer is a separate component located in the center
          of the case head.
        </p>

        <p>
          The first widely used rimfire cartridge was the 6 mm Flobert,
          developed in 1845 by French gunsmith Louis-Nicolas Flobert.
          It marked the beginning of an entire family of ammunition that
          includes the well-known .22 Short, .22 Long, .22 Long Rifle
          (.22 LR), and .22 Winchester Magnum Rimfire (.22 WMR).
        </p>
      </Section>
      <Section
        id="flobert"
        title="6 mm Flobert"
      >
        <img
          src="/images/calibers/cartridges/6mm-flobert.png"
          alt="6 mm Flobert"
          style={{
            width: "50%",
            height: "auto",
            display: "block",
            margin: "0 auto 30px auto",
          }}
        />

        <p>
          <em>
            The first metallic rimfire cartridge and the predecessor of
            modern small-caliber ammunition.
          </em>
        </p>

        <p>
          The 6 mm Flobert cartridge was developed in 1845 by French gunsmith
          Louis-Nicolas Flobert. It was the first successfully developed
          metallic rimfire cartridge and marked a new stage in the evolution
          of firearm ammunition. Although its design may seem relatively
          primitive today, it laid the foundation for all modern rimfire
          cartridges.
        </p>

        <p>
          Until the middle of the 19th century, most firearms were loaded
          through the muzzle with separate components — powder, a bullet,
          and an ignition source. Flobert's invention brought all the
          necessary elements together in a single, complete cartridge for
          the first time, greatly simplifying loading, improving reliability,
          and paving the way for the development of the modern metallic
          cartridge.
        </p>

        <p>
          One of the most interesting features of the original 6 mm Flobert
          is that it contains no gunpowder. The bullet is propelled solely
          by the gases produced when the priming compound, located inside
          the rim of the case, ignites. Although the energy generated is
          relatively low, it is entirely sufficient for shooting at short
          distances.
        </p>

        <p>
          The cartridge was originally designed not for hunting or military
          use, but for recreational and practice shooting indoors. At the
          time, so-called Parlor Guns were becoming popular in Europe.
          These firearms allowed people to shoot in specially equipped rooms
          and even in private homes. The low power of the 6 mm Flobert made
          it particularly suitable for this purpose.
        </p>

        <p>
          The historical significance of this cartridge can hardly be
          overstated. The .22 Short, .22 Long, .22 Long Rifle (.22 LR), and
          other small-caliber rimfire cartridges were subsequently developed
          based on its design. For this reason, the 6 mm Flobert is rightly
          regarded as the predecessor of modern rimfire cartridges.
        </p>

        <p>
          Today, the 6 mm Flobert is primarily of historical and
          collector's interest, although it is still used for recreational
          shooting in some European countries. Revolvers chambered for
          4 mm Flobert and 6 mm Flobert cartridges are also available on
          the market. They generally offer affordable prices for both the
          firearms themselves and their ammunition.
        </p>

        <p>
          It is important to note that, despite their relatively low power,
          under Bulgarian law, revolvers chambered in 4 mm Flobert and
          6 mm Flobert are considered firearms. Therefore, acquiring and
          possessing them requires the appropriate permit under the
          Bulgarian Weapons, Ammunition, Explosives and Pyrotechnic
          Articles Act.
        </p>

        <h3>Interesting Fact</h3>

        <p>
          For decades, the name "Flobert" became a generic term for rimfire
          cartridges. To this day, in some countries, small-caliber
          cartridges of this type are colloquially called "Flobert
          cartridges," even though their modern designs differ
          considerably from the original cartridge developed by
          Louis-Nicolas Flobert in 1845.
        </p>

        <TechnicalData
          title="6 mm Flobert"
          language="en"
          data={[
            ["Cartridge length", "11.6 mm"],
            ["Case length", "6.2 mm"],
            ["Bullet mass", "1.02 g"],
            ["Bullet diameter", "6.0 mm"],
            ["Muzzle velocity", "105–120 m/s"],
            ["Kinetic energy", "up to 7.3 J"],
            ["Ignition type", "Rimfire"],
            ["Year developed", "1845"],
          ]}
        />
      </Section>
          <Section
        id="22-short"
        title=".22 Short"
      >
        <img
          src="/images/calibers/cartridges/22-short.png"
          alt=".22 Short"
          style={{
            width: "50%",
            height: "auto",
            display: "block",
            margin: "0 auto 30px auto",
          }}
        />

        <p>
          <em>
            One of the oldest rimfire cartridges and a direct predecessor
            of the .22 Long and .22 Long Rifle.
          </em>
        </p>

        <p>
          The <strong>.22 Short</strong> cartridge was developed in
          <strong> 1857</strong> in the United States by
          <strong> Smith &amp; Wesson</strong> for their first revolver,
          the <strong>Smith &amp; Wesson Model 1</strong>. Its design was
          based on the concept behind the <strong>6 mm Flobert</strong>,
          with a small powder charge added. This resulted in the first
          widely used American metallic rimfire cartridge.
        </p>

        <h3>Smith &amp; Wesson Model 1</h3>

        <img
          src="/images/calibers/cartridges/Smith & Wesson Model 1.png"
          alt="Smith & Wesson Model 1"
          style={{
            width: "49%",
            height: "auto",
            display: "block",
            margin: "0 auto 30px auto",
          }}
        />

        <p>
          The original cartridge used a lead bullet weighing approximately
          <strong> 1.9 g (29 grains)</strong> and a charge of approximately
          <strong> 0.26 g of black powder</strong>. For its time, this was
          a significant step forward in the development of handgun
          ammunition, providing greater velocity and energy than the
          <strong> 6 mm Flobert</strong> cartridge without substantially
          increasing its dimensions.
        </p>

        <p>
          The first <strong>.22 Short</strong> cartridges used priming
          compounds containing mercury fulminate and potassium chlorate.
          Although these compounds provided reliable ignition, they were
          highly corrosive and accelerated barrel wear if the firearm was
          not cleaned promptly after shooting. In <strong>1927</strong>,
          <strong> Remington</strong> introduced a modern non-corrosive
          priming compound, which gradually replaced the older formulations
          and significantly extended firearm service life.
        </p>

        <p>
          Historically, the <strong>.22 Short</strong> was used in numerous
          small revolvers and pocket pistols. The best-known example is the
          <strong> Smith &amp; Wesson Model 1</strong>, the company's first
          model, introduced in 1857 specifically for this cartridge. Later,
          the .22 Short was also used in other small-caliber pocket firearms,
          but with the development of the <strong>.22 Long</strong> and
          especially the <strong>.22 Long Rifle</strong>, it gradually lost
          its position as a primary cartridge for handguns.
        </p>

        <p>
          Although the <strong>.22 Short</strong> has now been superseded
          by the much more popular <strong>.22 Long Rifle</strong>, it
          continues to be manufactured and is still used for competitive,
          training, and recreational shooting, as well as in some small
          handguns. Thanks to its mild recoil and low noise level, this
          cartridge remains a preferred choice for shooters who value
          precision and quick control of the firearm.
        </p>

        <h3>Did You Know?</h3>

        <p>
          The <strong>.22 Short</strong> is <strong>30 years older</strong>
          than the <strong>.22 Long Rifle</strong>. Despite its age, it is
          still manufactured and is one of the few 19th-century cartridges
          that has remained in continuous production to this day.
        </p>

        <TechnicalData
          title=".22 Short"
          language="en"
          data={[
            ["Cartridge length", "17.4 mm"],
            ["Case length", "10.7 mm"],
            ["Bullet mass", "1.9 g (29 gr)"],
            ["Bullet diameter", '5.7 mm (.223")'],
            ["Muzzle velocity", "250–330 m/s"],
            ["Kinetic energy", "60–100 J"],
            ["Ignition type", "Rimfire"],
            ["Year developed", "1857"],
          ]}
        />
      </Section>
      <Section
        id="22-long"
        title=".22 Long"
      >
        <img
          src="/images/calibers/cartridges/22-long.png"
          alt=".22 Long"
          style={{
            width: "41%",
            height: "auto",
            display: "block",
            margin: "0 auto 30px auto",
          }}
        />

        <p>
          <em>
            The transitional link between the .22 Short and .22 Long Rifle,
            and an important stage in the development of modern small-caliber
            cartridges.
          </em>
        </p>

        <p style={{ marginTop: "30px" }}>
          The <strong>.22 Long</strong> cartridge was developed in
          <strong> 1871</strong> in the United States as the next step in
          the evolution of small-caliber rimfire ammunition. The main idea
          was to increase the range and muzzle velocity of the
          <strong> .22 Short</strong> by using a longer case that could
          accommodate a larger powder charge.
        </p>

        <p>
          Interestingly, the <strong>.22 Long</strong> retained the same
          lightweight bullet as the <strong>.22 Short</strong>, but its
          longer case allowed it to achieve a higher velocity. Although
          it represented an improvement over its predecessor, the cartridge
          never gained a lasting foothold in the market.
        </p>

        <p>
          Just <strong>16 years later</strong>, in <strong>1887</strong>,
          the <strong>J. Stevens Arm &amp; Tool Company</strong> developed
          the <strong>.22 Long Rifle</strong>, combining the longer case of
          the <strong>.22 Long</strong> with the heavier bullet of the
          <strong> .22 Extra Long</strong>. The resulting cartridge offered
          significantly better accuracy, greater energy, and improved
          ballistic performance. This gradually displaced the
          <strong> .22 Long</strong> from widespread use.
        </p>

        <p>
          Today, the <strong>.22 Long</strong> is manufactured in limited
          quantities, primarily for owners of older firearms specifically
          designed for this cartridge. Its practical significance is now
          minimal, but its historical role remains important because it
          represents the transitional link between the
          <strong> .22 Short</strong> and the most popular rimfire cartridge,
          the <strong>.22 Long Rifle</strong>.
        </p>

        <h3>Interesting Fact</h3>

        <p>
          Although the name <strong>".22 Long"</strong> sounds almost
          identical to <strong>".22 Long Rifle"</strong>, they are
          <strong> two different cartridges</strong>. Many novice shooters
          confuse them, but they have different designs and distinct
          histories.
        </p>

        <TechnicalData
          title=".22 Long"
          language="en"
          data={[
            ["Cartridge length", "21.2 mm"],
            ["Case length", "15.6 mm"],
            ["Bullet mass", "1.9 g (29 gr)"],
            ["Bullet diameter", '5.7 mm (.223")'],
            ["Muzzle velocity", "300–330 m/s"],
            ["Kinetic energy", "85–100 J"],
            ["Ignition type", "Rimfire"],
            ["Year developed", "1871"],
          ]}
        />
      </Section>
      <Section
        id="22-lr"
        title=".22 Long Rifle (.22 LR)"
      >
        <img
          src="/images/calibers/cartridges/22-long-rifle.png"
          alt=".22 Long Rifle (.22 LR)"
          style={{
            width: "41%",
            height: "auto",
            display: "block",
            margin: "0 auto 30px auto",
          }}
        />

        <p>
          <em>
            The most widely manufactured and most popular cartridge in the world.
          </em>
        </p>

        <p style={{ marginTop: "30px" }}>
          The <strong>.22 Long Rifle (.22 LR)</strong> cartridge was developed
          in <strong>1887</strong> by the American company
          <strong> J. Stevens Arm &amp; Tool Company</strong>. It represents
          an improved combination of the case from the <strong>.22 Long</strong>
          and the heavier bullet from the <strong>.22 Extra Long</strong>.
          The result was so successful that, more than 139 years later, the
          .22 LR remains the most widely manufactured and most extensively
          used cartridge in the world.
        </p>

        <p>
          Today, the <strong>.22 LR</strong> is manufactured by almost all
          major ammunition producers and is available in dozens of variants
          designed for target shooting, training, recreational shooting,
          small-game hunting, and various specialized applications. It is
          estimated that tens of billions of these cartridges have been
          produced since their introduction, making the .22 LR the undisputed
          leader in distribution among all existing ammunition types.
        </p>

        <p>
          The main reasons for its popularity are its low cost, high accuracy,
          mild recoil, and low noise level. Thanks to these qualities, millions
          of shooters around the world fire their first shots with this
          caliber. It is no coincidence that almost every target-shooting
          school begins training with the <strong>.22 LR</strong>, as it allows
          beginners to learn proper technique without being distracted by
          strong recoil and noise.
        </p>

        <p>
          One of the most valuable characteristics of the <strong>.22 LR</strong>
          is its exceptional accuracy. The cartridge has been continuously
          refined over the decades and remains the primary ammunition for
          several Olympic and international shooting disciplines. At the
          1936 Olympic Games in Berlin, competitors achieved shot groupings
          within a circle approximately 30 mm in diameter, whereas modern
          standards require groupings of approximately 13 mm. This illustrates
          the development not only of the ammunition itself, but also of
          sporting firearms and shooting training.
        </p>

        <p>
          A vast number of pistols, revolvers, carbines, and sporting rifles
          are manufactured in <strong>.22 LR</strong>. Some manufacturers
          also offer caliber-conversion kits that allow a pistol designed
          for a more powerful cartridge to fire <strong>.22 LR</strong>
          by replacing the barrel, slide, and magazine. This significantly
          reduces training costs while preserving the handling characteristics
          of the original firearm.
        </p>

        <p>
          As discussed in the previous chapter, the <strong>.22 LR</strong>
          is a rimfire cartridge. The priming compound is located inside the
          rim at the base of the case, and the firing pin strikes the rim,
          igniting the powder charge. This simple and reliable design is
          one of the reasons the cartridge has remained practically unchanged
          for more than a century.
        </p>

        <h3>.22 LR Variants</h3>

        <ul>
          <li>
            <strong>Subsonic</strong> – a subsonic variant with a muzzle
            velocity of approximately 335 m/s and kinetic energy of about
            145 J. It is preferred for precision shooting and when using
            suppressors, as the bullet does not break the sound barrier.
          </li>

          <li>
            <strong>Standard Velocity</strong> – the standard variant, with
            a muzzle velocity of approximately 345 m/s and kinetic energy
            of about 155 J. This is the most common cartridge for target
            shooting and training.
          </li>

          <li>
            <strong>High Velocity</strong> – a variant with increased muzzle
            velocity, usually between 360 and 400 m/s, and kinetic energy
            of about 190 J. It is used for both hunting and recreational
            shooting.
          </li>

          <li>
            <strong>Hyper Velocity</strong> – the most powerful variant,
            with a muzzle velocity of approximately 425 m/s and kinetic
            energy of up to 235 J. Lighter bullets are generally used to
            achieve higher velocities.
          </li>
        </ul>

        <p style={{ marginTop: "30px" }}>
          The values given are approximate and may vary depending on the
          manufacturer, the specific cartridge, and the barrel length.
          Under favorable conditions, the bullet can retain sufficient
          accuracy at distances of up to approximately 150 meters, although
          most sporting disciplines and practical applications take place
          at considerably shorter ranges.
        </p>

        <p>
          Despite its many advantages, the <strong>.22 LR</strong> also has
          limitations. Its relatively low kinetic energy makes it unsuitable
          for tasks requiring high stopping power. Consequently, its primary
          applications remain target shooting, shooter training, recreational
          shooting, and small-game hunting.
        </p>

        <h3>Interesting Fact</h3>

        <p>
          Thanks to its low ammunition cost, minimal recoil, and excellent
          accuracy, the <strong>.22 LR</strong> has remained a preferred
          caliber for training and practice shooting for more than 130 years
          since its introduction. This is why many leading manufacturers,
          including <strong>Glock, Colt, SIG Sauer, CZ, Beretta, Walther,
          Ruger</strong>, and <strong>Smith &amp; Wesson</strong>, offer
          pistols in this caliber. This allows shooters to develop proper
          technique and train considerably more without the high ammunition
          costs associated with more powerful calibers.
        </p>

        <h3>Did You Know?</h3>

        <p>
          Many world records in target shooting have been set with firearms
          chambered in <strong>.22 LR</strong>, providing further evidence
          of its exceptional precision.
        </p>

        <TechnicalData
          title=".22 Long Rifle (.22 LR)"
          language="en"
          data={[
            ["Cartridge length", "25.4 mm"],
            ["Case length", "15.6 mm"],
            ["Bullet mass", "2.6 g"],
            ["Bullet diameter", "5.6 mm"],
            ["Muzzle velocity", "335–425 m/s"],
            ["Kinetic energy", "145–235 J"],
            ["Ignition type", "Rimfire"],
            ["Year developed", "1887"],
          ]}
        />
      </Section>
      <Section
        id="22-wmr"
        title=".22 Winchester Magnum Rimfire (.22 WMR)"
      >
        <img
          src="/images/calibers/cartridges/22-wmr.png"
          alt=".22 Winchester Magnum Rimfire (.22 WMR)"
          style={{
            width: "41%",
            height: "auto",
            display: "block",
            margin: "0 auto 30px auto",
          }}
        />

        <p>
          The <strong>.22 Winchester Magnum Rimfire (.22 WMR)</strong>
          cartridge, better known as the <strong>.22 Magnum</strong>, was
          developed in <strong>1959</strong> by the American company
          <strong> Winchester Repeating Arms Company</strong>. Its goal was
          to offer a significantly more powerful rimfire cartridge that
          retained the advantages of small-caliber ammunition while
          providing higher muzzle velocity, greater kinetic energy, and
          better performance at longer distances.
        </p>

        <p>
          Unlike the <strong>.22 Long Rifle</strong>, the
          <strong> .22 WMR</strong> uses a longer and stronger case that
          accommodates a larger powder charge. Although the two cartridges
          use bullets of approximately the same diameter,
          <strong> they are not interchangeable</strong>. A firearm
          designed for <strong>.22 LR</strong> cannot safely fire
          <strong> .22 WMR</strong>, as the dimensions and operating
          pressures of the two cartridges differ considerably.
        </p>

        <p>
          Thanks to its high velocity and relatively flat trajectory,
          the <strong>.22 WMR</strong> is widely used for hunting small
          game and varmints. In many countries, it is successfully used
          to hunt rabbits, foxes, jackals, marmots, and other small- to
          medium-sized animals. The cartridge is available with a variety
          of bullet types — lead, jacketed, expanding, and polymer-tipped —
          allowing shooters to choose according to their intended use.
        </p>

        <p>
          In addition to hunting rifles, the <strong>.22 WMR</strong> is
          also used in revolvers and compact pistols. In short-barreled
          firearms, however, some of its advantages are lost because the
          shorter barrel does not allow the powder charge to burn as
          efficiently. Nevertheless, it remains the most powerful widely
          used rimfire cartridge and represents the practical upper limit
          of this cartridge design.
        </p>

        <h3>Interesting Fact</h3>

        <p>
          The <strong>.22 WMR</strong> is often called
          <strong> "the magnum of rimfire cartridges"</strong>. Despite
          its small caliber, its muzzle velocity can reach
          <strong> 600–700 m/s</strong> in hunting rifles, almost twice
          that of the standard <strong>.22 LR</strong>.
        </p>
      </Section>

      <TechnicalData
        title=".22 Winchester Magnum Rimfire (.22 WMR)"
        language="en"
        data={[
          ["Cartridge length", "34.3 mm"],
          ["Case length", "26.8 mm"],
          ["Bullet mass", "1.9–3.2 g (30–50 gr)"],
          ["Bullet diameter", '5.7 mm (.224")'],
          ["Muzzle velocity", "570–670 m/s"],
          ["Kinetic energy", "300–450 J"],
          ["Ignition type", "Rimfire"],
          ["Year developed", "1959"],
        ]}
      />
<h2
  style={{
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "40px",
    marginBottom: "20px",
    textAlign: "center",
  }}
>
  Development of Rimfire Cartridges
</h2>

<table
  style={{
    width: "90%",
    margin: "20px auto 50px auto",
    borderCollapse: "collapse",
    fontSize: "16px",
    color: "#ffffff",
  }}
>
  <thead>
    <tr style={{ backgroundColor: "#8d9630", color: "#000000" }}>
      <th style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Cartridge
      </th>
      <th style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Year
      </th>
      <th style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Predecessor
      </th>
      <th style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Main Purpose
      </th>
      <th style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Current Status
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>6 mm Flobert</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px", textAlign: "center" }}>
        1845
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px", textAlign: "center" }}>
        —
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Recreational shooting
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Limited production
      </td>
    </tr>

    <tr>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>.22 Short</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px", textAlign: "center" }}>
        1857
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>6 mm Flobert</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Sport, training
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Still manufactured
      </td>
    </tr>

    <tr>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>.22 Long</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px", textAlign: "center" }}>
        1871
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>.22 Short</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Sport
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Limited production
      </td>
    </tr>

    <tr>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>.22 Long Rifle</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px", textAlign: "center" }}>
        1887
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>.22 Long</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Sport, training, hunting
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        The world's most popular
      </td>
    </tr>

    <tr>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>.22 WMR</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px", textAlign: "center" }}>
        1959
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        <strong>.22 LR</strong>
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Hunting and sport
      </td>
      <td style={{ border: "1px solid #ffffff", padding: "8px" }}>
        Widely used
      </td>
    </tr>
  </tbody>
</table>

<p
  style={{
    marginTop: "40px",
    marginBottom: "30px",
  }}
>
  For more than a century and a half, rimfire cartridges have
  demonstrated that a simple design can be remarkably effective.
  Although most service and military ammunition today uses centerfire
  ignition, small-caliber rimfire cartridges remain indispensable
  for training, target shooting, and recreational use.
</p>

<h3>Centerfire Cartridges</h3>

<p>
  <strong>Centerfire cartridges</strong> are the most widely used type of
  ammunition in modern pistols, revolvers, rifles, and carbines. Unlike
  rimfire cartridges, the priming compound is contained in a{" "}
  <strong>separate primer</strong> located in the center of the cartridge
  case head.
</p>

<p>
  When a shot is fired, the firing pin strikes the primer, igniting the
  propellant charge. Thanks to this design, the cartridge case can be
  considerably stronger and withstand much higher pressures than rimfire
  cartridges.
</p>

<p>
  For this reason, virtually all modern service, military, hunting, and
  high-powered sporting cartridges use <strong>centerfire ignition</strong>.
</p>

<p>The main advantages of this design are:</p>

<ul>
  <li>higher reliability;</li>
  <li>the ability to operate at significantly higher pressures;</li>
  <li>greater power;</li>
  <li>a wider variety of calibers and designs;</li>
  <li>
    the ability to reload the cartridge case multiple times (reloading).
  </li>
</ul>

<p>
  A disadvantage is the more complex design and higher manufacturing cost
  compared with rimfire cartridges.
</p>

<p>
  In the following sections, we will explore the development of the most
  widely used centerfire pistol cartridges — from the compact{" "}
  <strong>5.45×18 mm</strong> and <strong>6.35 Browning (.25 ACP)</strong>,
  through <strong>.32 ACP</strong>, <strong>9×18 Makarov</strong>, and{" "}
  <strong>9×19 Luger/Parabellum</strong>, to more powerful cartridges such
  as <strong>.45 ACP</strong> and many others.
</p>


  <Section
    id="5-45x18-mpc"
    title="5.45×18 mm MPC"
  >
    <img
      src="/images/calibers/cartridges/5-45x18-mpc.png"
      alt="5.45×18 mm MPC cartridge"
      style={{
        width: "41%",
        height: "auto",
        display: "block",
        margin: "0 auto 30px auto",
      }}
    />

    <p>
      <em>
        The small-caliber Soviet cartridge developed for one of the world's
        most compact service pistols.
      </em>
    </p>

    <p>
      <strong>5.45×18 mm MPC</strong> is a small-caliber centerfire pistol
      cartridge developed in the Soviet Union in the late 1960s. Its official
      designation is the <strong>5.45 mm Pistol Cartridge, Model 1970</strong>,
      while <strong>7N7</strong> is its GRAU index, part of the Soviet system
      for classifying military equipment and ammunition.
    </p>

    <p>
      The cartridge was developed at the <strong>Central Research Institute
      of Precision Engineering (TsNIITochMash)</strong> for a new compact
      pistol intended primarily for concealed carry by security and internal
      affairs personnel, as well as senior officers of the Soviet armed forces.
    </p>

    <p>
      Development was carried out by a team led by
      <strong> Alexander Ivanovich Bochin</strong>, including
      <strong> Antonina Dmitrievna Denisova, L. S. Nikolaeva, and G. P. Shamina</strong>.
      Denisova made a significant contribution to research and the selection
      of the bullet design.
    </p>

    <p>
      The primary firearm designed for this cartridge was the
      <strong> PSM (Pistolet Samozaryadny Malogabaritny)</strong>, an
      exceptionally compact and slim semi-automatic pistol intended for
      concealed carry.
    </p>

    <h3>Development History</h3>

    <p>
      In the late 1960s, the Soviet Union began developing a new compact
      pistol for operational personnel of the <strong>KGB and MVD</strong>,
      as well as senior military officers.
    </p>

    <p>
      Existing small-caliber cartridges, including
      <strong>6.35 mm Browning (.25 ACP)</strong> and
      <strong>7.65×17 mm Browning (.32 ACP)</strong>, did not provide the
      desired combination of compact dimensions and ballistic performance.
      As a result, the decision was made to develop a new small-caliber cartridge.
    </p>

    <p>
      The result was the unusual <strong>5.45×18 mm MPC</strong>, featuring
      a very small-diameter bullet and a bottlenecked case.
    </p>

    <h3>Design and Features</h3>

    <p>
      One of the cartridge's most distinctive features is its
      <strong>bottlenecked case</strong>. It is rimless and made of brass,
      unlike the steel cases used in many Soviet military cartridges of that era.
    </p>

    <p>
      The bullet is <strong>pointed, relatively long, and small in diameter</strong>.
      The nominal caliber is 5.45 mm, but the actual bullet diameter is
      approximately <strong>5.63 mm</strong>.
    </p>

    <p>
      The standard military <strong>7N7</strong> cartridge uses a jacketed
      bullet with a <strong>steel and lead core</strong>. The steel portion
      is located in the forward part of the core to improve penetration,
      while the lead portion helps maintain the required mass and ballistic
      characteristics.
    </p>

    <p>
      Other versions were later developed, including the
      <strong>PSO</strong>, which has a lead core and was intended mainly
      for civilian and export markets.
    </p>

    <h3>The PSM Pistol</h3>

    <img
      src="/images/calibers/cartridges/psm.png"
      alt="PSM pistol"
      style={{
        width: "45%",
        height: "auto",
        display: "block",
        margin: "0 auto 30px auto",
      }}
    />

    <p>
      The cartridge is closely associated with the <strong>PSM</strong>,
      a pistol designed with an emphasis on an exceptionally slim profile
      and concealed carry.
    </p>

    <h3>Penetration and Ballistics</h3>

    <p>
      The <strong>5.45×18 mm</strong> cartridge is notable for the balance
      between its <strong>small caliber, low bullet mass, and relatively
      high velocity</strong>.
    </p>

    <p>
      The standard <strong>7N7</strong> bullet weighs approximately
      <strong>2.4–2.5 g</strong> and has a muzzle velocity of around
      <strong>315–320 m/s</strong>, producing muzzle energy of approximately
      <strong>120–125 J</strong>.
    </p>

    <p>
      Despite its relatively low energy, the bullet's small diameter and
      design provide good penetration against certain soft barriers and
      ballistic textile materials. Soviet and later Russian sources describe
      the standard 7N7 as capable of penetrating some forms of light personal
      protective equipment.
    </p>

    <p>
      However, a distinction must be made between penetrating soft ballistic
      protection, such as Kevlar, and penetrating hard armor or armor plates.
      Its low kinetic energy limits its performance against hard protective
      materials.
    </p>

    <h3>Advantages and Disadvantages</h3>

    <p>
      The cartridge's main advantage is its ability to combine
      <strong>an exceptionally compact firearm with relatively good
      penetration</strong>.
    </p>

    <p>
      The small bullet diameter allows the PSM magazine to hold
      <strong>8 cartridges</strong>, despite the pistol's extremely slim design.
    </p>

    <p>
      On the other hand, the bullet's low mass and relatively low kinetic
      energy limit its effectiveness compared with more powerful service
      cartridges.
    </p>

    <p>
      Therefore, <strong>5.45×18 mm</strong> should primarily be regarded
      as a <strong>specialized cartridge for compact firearms</strong>,
      rather than an attempt to replace standard military pistol calibers.
    </p>

    <h3>Applications</h3>

    <p>
      The primary firearm chambered for <strong>5.45×18 mm</strong> is the
      PSM. It was intended for <strong>KGB and MVD operational personnel,
      as well as senior officers of the Soviet armed forces</strong>.
    </p>

    <p>
      The cartridge saw limited distribution outside the Soviet Union,
      although the PSM and its ammunition were also produced for export.
    </p>

    <p>
      After the dissolution of the Soviet Union, PSM pistols continued to
      be used in Russia and other former Soviet states. The cartridge remains
      relatively niche and never achieved the international popularity of
      <strong>9×18 mm Makarov</strong> or <strong>9×19 mm Parabellum</strong>.
    </p>

    <h3>5.45×18 mm in Bulgaria</h3>

    <p>
      Production of <strong>5.45×18 mm</strong> was also reportedly
      established in Bulgaria, at a factory in <strong>Lyaskovets</strong>,
      as part of the country's production of ammunition for Soviet-designed
      firearms. This information appears in reference materials citing a
      publication on the Bulgarian defense industry.
    </p>

    <p>
      This means the cartridge is not merely an unusual Soviet round in
      Bulgarian collecting circles; it also has a
      <strong>direct connection to Bulgaria's arms industry</strong>.
    </p>

    <h3>Interesting Facts</h3>

    <p>
      Although designated as <strong>5.45 mm</strong>, the actual bullet
      diameter is approximately <strong>5.63 mm</strong>.
    </p>

    <p>
      This is a distinctive feature that can easily be overlooked when
      comparing different small-caliber cartridges.
    </p>

    <p>
      Another interesting fact is that <strong>5.45×18 mm is one of the
      few production pistol cartridges with a bottlenecked case and a
      pointed, relatively long bullet</strong>. This combination is unusual
      for a pistol cartridge and is directly related to the goal of achieving
      high penetration in a very compact design.
    </p>

    <TechnicalData
      title="5.45×18 mm MPC"
      language="en"
      data={[
        ["Primary designation", "5.45×18 mm MPC"],
        ["Soviet designation", "5.45 mm Pistol Cartridge, Model 1970"],
        ["Index", "7N7"],
        ["Type", "Centerfire pistol cartridge"],
        ["Case design", "Rimless, bottlenecked"],
        ["Case material", "Brass"],
        ["Case length", "18.03 mm"],
        ["Overall length", "25.00 mm"],
        ["Nominal caliber", "5.45 mm"],
        ["Bullet diameter", "~5.63 mm"],
        ["Standard 7N7 bullet mass", "~2.4–2.5 g"],
        ["Muzzle velocity", "~315–320 m/s"],
        ["Kinetic energy", "~120–125 J"],
        ["Primary firearm", "PSM"],
        ["Main purpose", "Concealable service pistol"],
      ]}
    />
  </Section>

<Section
  id="5-7x28"
  title="5.7×28 mm (SS190)"
>
  <img
    src="/images/calibers/cartridges/5.7x28.png"
    alt="5.7×28 mm (SS190)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      The high-velocity Belgian cartridge developed for a new generation of
      compact firearms.
    </em>
  </p>
  <p>
    <strong>5.7×28 mm</strong> is a small-caliber, high-velocity pistol
    cartridge developed by the Belgian company <strong>Fabrique Nationale
    Herstal (FN Herstal)</strong> in the late 1980s. It was created as part
    of the concept of a new generation of <strong>Personal Defense Weapons
    (PDWs)</strong>, intended for military personnel who, due to the nature
    of their duties, do not carry a standard assault rifle.
  </p>

  <p>
    The cartridge was developed alongside the <strong>FN P90</strong>,
    introduced in 1990. FN later developed the <strong>FN Five-seveN</strong>
    pistol, which uses the same ammunition. Thus, 5.7×28 mm became the
    foundation of an entire weapons system rather than simply a new pistol
    cartridge.
  </p>

  <p>
    The main idea was to combine <strong>compact dimensions, low recoil,
    high muzzle velocity, and a flat trajectory</strong>, while achieving
    better penetration against certain types of protective clothing than
    traditional pistol ammunition.
  </p>

  <h3>Development History</h3>

  <p>
    In the late 1980s, NATO began looking for a weapon that could fill the
    gap between a pistol and an assault rifle. The idea was to provide
    military personnel such as <strong>armored vehicle crews, pilots,
    artillery personnel, communications specialists, and other
    specialists</strong> with a compact weapon that would be more effective
    than a standard pistol at greater distances.
  </p>

  <p>
    In 1989, NATO formulated requirements for a new generation of
    <strong>PDWs</strong>, including greater range, accuracy, and terminal
    effectiveness than 9×19 mm, as well as the ability to penetrate the
    personal protective equipment of the time.
  </p>

  <p>
    <strong>FN Herstal</strong> responded to these requirements by developing
    both the new <strong>5.7×28 mm</strong> cartridge and the
    <strong>P90</strong>. The Belgian company did not simply adapt an
    existing cartridge to a new weapon; it created an integrated weapons
    system.
  </p>

  <p>
    The first version of the cartridge was designated <strong>SS90</strong>
    and entered production in <strong>1990</strong> alongside the P90. It
    used a very lightweight bullet weighing around <strong>1.5 g</strong>
    and reached approximately <strong>850 m/s</strong> when fired from the
    P90.
  </p>

  <h3>Design and Characteristics</h3>

  <p>
    The 5.7×28 mm is a <strong>rimless cartridge with a rebated rim, a
    bottleneck case, and centerfire ignition</strong>. Its case is relatively
    long for a pistol cartridge, and its diameter is considerably larger
    than that of the bullet.
  </p>

  <p>
    The combination of a small, lightweight bullet and a relatively large
    powder capacity makes it possible to achieve very high muzzle velocity
    for a cartridge intended for pistols and compact automatic weapons.
  </p>

  <p>
    The 5.7×28 mm is sometimes described as a "scaled-down version" of
    <strong>5.56×45 mm NATO</strong>. This comparison is only approximate.
    The two cartridges share the concept of a small, high-velocity bullet,
    but <strong>5.7×28 mm is an independent FN design</strong>, developed
    specifically for PDWs and pistols. FN also emphasizes that the cartridge
    was developed from scratch rather than being based on an existing case.
  </p>

  <h3>The SS190 Bullet</h3>

  <p>
    One of the best-known military variants is the <strong>SS190</strong>.
  </p>

  <p>
    Its bullet weighs approximately <strong>2.0 g</strong> and has a
    composite construction with <strong>steel and aluminum cores</strong>.
    When fired from the P90, its muzzle velocity is approximately
    <strong>716 m/s</strong>.
  </p>

  <p>
    This construction and high velocity are intended to provide improved
    penetration against certain types of soft ballistic protection. FN
    states that 5.7×28 mm ammunition can penetrate soft body armor and
    helmets at distances of up to approximately <strong>200 m</strong>,
    depending on the ammunition used and the test conditions.
  </p>

  <p>
    However, it is important to distinguish between <strong>soft ballistic
    protection</strong> and hard armor plates. Whether a particular
    cartridge can penetrate a given type of protection depends on the bullet
    design, the construction of the protective equipment, and the distance.
  </p>

  <h3>Different Cartridge Variants</h3>

  <p>
    <strong>5.7×28 mm</strong> is available in more than one variant.
  </p>

  <p>
    FN has developed several specialized types of ammunition, including:
  </p>

  <ul style={{ listStyleType: "disc", paddingLeft: "50px" }}>
    <li>
      <strong>SS190</strong> – standard military/ball ammunition;
    </li>
    <li>
      <strong>L191</strong> – tracer;
    </li>
    <li>
      <strong>Sb193</strong> – subsonic ammunition intended for use with
      suppressed weapons;
    </li>
    <li>
      <strong>SS192</strong> – hollow-point variant;
    </li>
    <li>
      <strong>FR199</strong> – frangible ammunition;
    </li>
    <li style={{ marginBottom: "25px" }}>
      <strong>Blank</strong> – blank cartridge.
    </li>
  </ul>

  <p>
    Other variants have also appeared on the civilian market, such as
    <strong>SS195LF</strong> and <strong>SS197SR</strong>, intended for
    different applications.
  </p>

  <p>
    This variety shows that <strong>5.7×28 mm</strong> has evolved beyond
    ammunition for the P90 into a platform with a range of applications.
  </p>

  <h3>FN P90</h3>

  <img
    src="/images/calibers/cartridges/FN P90.png"
    alt="FN P90"
    style={{
      width: "45%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
    The primary weapon for which 5.7×28 mm was developed is the
    <strong>FN P90</strong>. It is a compact automatic weapon with an
    unusual design in which the magazine is positioned horizontally above
    the barrel.
  </p>

  <p>
    The magazine holds <strong>50 rounds</strong>, providing substantial
    firepower in a relatively compact weapon.
  </p>

  <p>
    The P90 and 5.7×28 mm combination was designed specifically for military
    personnel who need to carry a weapon at all times but do not require a
    full-size assault rifle.
  </p>

  <h3>FN Five-seveN</h3>

  <img
    src="/images/calibers/cartridges/FN Five-seveN.png"
    alt="FN Five-seveN"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
    The second primary weapon chambered for this cartridge is the
    <strong>FN Five-seveN</strong> pistol.
  </p>

  <p>
    It was developed as a companion weapon to the P90, allowing military
    personnel who prefer or require a pistol to use the same ammunition.
  </p>

  <p>
    FN thus created an unusual combination for its time:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>one cartridge → PDW + pistol</strong>
  </p>

  <p>
    This reduces the need to maintain separate pistol ammunition supplies
    for the two weapons.
  </p>

  <p>
    FN states that the P90 was introduced in <strong>1990</strong>, while
    the Five-seveN entered production later, in <strong>1998</strong>.
  </p>

  <h3>Other Weapons</h3>

  <p>
    As the cartridge grew in popularity during the 21st century, it began
    to be adopted by other manufacturers as well.
  </p>

  <p>
    Notable modern firearms chambered in 5.7×28 mm include:
  </p>

  <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
    <li>
      <strong>FN P90</strong>
    </li>
    <li>
      <strong>FN Five-seveN</strong>
    </li>
    <li>
      <strong>FN PS90</strong> – civilian semi-automatic version of the P90
    </li>
    <li>
      <strong>Ruger-57</strong>
    </li>
    <li>
      <strong>Smith &amp; Wesson M&amp;P 5.7</strong>
    </li>
  </ul>

  <p style={{ marginTop: "25px" }}>
    This shows how the cartridge has gradually moved beyond its original
    niche and become an independent small-caliber pistol cartridge standard.
  </p>

  <h3>NATO and 5.7×28 mm</h3>

  <p>
    Initially, 5.7×28 mm <strong>was not selected as NATO's sole new
    standard</strong>. In the early 21st century, NATO conducted trials
    comparing 5.7×28 mm with the German <strong>4.6×30 mm</strong>,
    developed for the Heckler &amp; Koch MP7.
  </p>

  <p>
    Trials to select a new PDW cartridge took place in
    <strong>2002–2003</strong>. The expert group that analyzed the results
    recommended 5.7×28 mm, but the German side did not accept the
    recommendation, and the process was postponed.
  </p>

  <p>
    As a result, <strong>4.6×30 mm</strong> and <strong>5.7×28 mm</strong>
    coexisted for a long time, with neither becoming NATO's sole standard.
  </p>

  <p>
    In February 2021, NATO officially standardized <strong>5.7×28 mm</strong>
    through <strong>STANAG 4509</strong>. The standard aims to ensure
    functional interchangeability of compatible 5.7×28 mm military
    ammunition among NATO member countries' weapons.
  </p>

  <p>
    Therefore, it is now incorrect to state that 5.7×28 mm "is not a NATO
    standard cartridge." <strong>It has been standardized by NATO</strong>,
    although it has not replaced 9×19 mm as the Alliance's universal pistol
    cartridge.
  </p>

  <h3>Advantages and Disadvantages</h3>

  <p>
    The main advantages of 5.7×28 mm are its combination of
    <strong>small size, low recoil, high velocity, and a flat
    trajectory</strong>.
  </p>

  <p>
    The small bullet diameter allows a large number of cartridges to fit
    into relatively compact magazines. The P90, for example, uses a standard
    magazine holding <strong>50 rounds</strong>.
  </p>

  <p>
    One disadvantage is the relatively low bullet mass. Despite its high
    muzzle velocity, it has less momentum than the typical heavier bullets
    used in <strong>9×19 mm</strong>.
  </p>

  <p>
    Another characteristic is that the bullet loses a significant amount
    of energy over long distances. This is part of the cartridge's design
    concept: to combine high effectiveness at combat ranges with a reduced
    risk of excessive penetration at longer distances. FN specifically
    identifies the rapid loss of energy beyond approximately
    <strong>200 m</strong> as one of the system's advantages.
  </p>

  <h3>Bulgaria</h3>

  <p>
    In Bulgaria, 5.7×28 mm remains a relatively rare caliber compared with
    widely used 9×19 mm and other pistol cartridges.
  </p>

  <p>
    Because of its specialized purpose and the limited availability of
    firearms chambered for it, it does not have the same significance as it
    does in several Western countries.
  </p>

  <h3>Interesting Fact</h3>

  <p>
    The P90 and Five-seveN were developed as <strong>a single weapons
    concept</strong> using the same cartridge.
  </p>

  <p>
    This was an unusual approach for the late 20th century. Rather than
    simply developing a new cartridge for an automatic weapon, FN created
    an entire system consisting of a <strong>PDW and a pistol</strong> that
    use the same ammunition.
  </p>

  <p>
    There is also a more popular, though much less official, way in which
    5.7×28 mm became familiar to millions of people: <strong>Counter-Strike</strong>.
  </p>

  <p>
    In the game, the <strong>FN Five-seveN</strong> is one of the weapons
    chambered for this unusual caliber. For an entire generation of
    gamers, the virtual pistol was their first encounter with the name
    <strong>5.7×28 mm</strong>.
  </p>

  <h3>The Cartridge Today</h3>

  <p>
    Today, 5.7×28 mm is no longer just an exotic Belgian cartridge.
  </p>

  <p>
    Following its standardization by NATO in <strong>2021</strong>, it has
    official status as NATO-standardized small-caliber ammunition, and FN
    continues to offer it for military, law enforcement, and security
    applications.
  </p>

  <p>
    The cartridge is used on every continent, and FN states that the
    5.7×28 mm system has been adopted by <strong>more than 50 NATO
    countries</strong>.
  </p>

  <p>
    In addition to the original P90 and Five-seveN, an increasing number
    of civilian and service firearms chambered in this caliber have
    appeared in recent years.
  </p>

  <TechnicalData
    title="5.7×28 mm (SS190)"
    language="en"
    data={[
      ["Cartridge length", "40.5 mm"],
      ["Case length", "28.0 mm"],
      ["SS190 bullet weight", "2.0 g (31 gr)"],
      ["Bullet diameter", '5.7 mm (.224")'],
      ["Muzzle velocity", "approximately 716 m/s"],
      ["Kinetic energy", "approximately 513 J"],
      ["Ignition type", "Centerfire"],
      ["Primary firearms", "FN P90 and FN Five-seveN"],
      ["Year developed", "1990"],
    ]}
  />
</Section>
<Section
  id="6-35-browning"
  title="6.35×15.5 mm HR (6.35 Browning / .25 ACP)"
>
  <img
    src="/images/calibers/cartridges/6.35.png"
    alt="6.35×15.5 mm HR (6.35 Browning / .25 ACP)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
    <em>
      The small cartridge that became a symbol of pocket pistols in the early
      20th century.
    </em>
  </p>

  <p>
    The <strong>6.35 Browning</strong> cartridge, known in the United States
    as <strong>.25 ACP (Automatic Colt Pistol)</strong>, was one of the most
    widely used small-caliber pistol cartridges of the 20th century.
  </p>

  <p>
    Developed by <strong>John Moses Browning</strong> in the early 20th
    century, it was intended for extremely compact semi-automatic pistols
    designed for personal protection and self-defense. Its combination of
    small dimensions, relatively mild recoil, and suitability for very small
    firearms made it one of the most popular pocket-pistol cartridges during
    the first half of the 20th century.
  </p>

  <p>
    The cartridge appeared on the market alongside the
    <strong>FN Browning Model 1906</strong>, also known as the
    <strong>FN Model 1905</strong>. Dozens of different pistols were later
    developed for it in Europe and the United States, including the Colt
    Model 1908 Vest Pocket, FN Baby Browning, Walther Model 9, Beretta 418,
    Astra Cub, and others.
  </p>

  <h3>FN Browning Model 1906</h3>

  <img
    src="/images/calibers/cartridges/FN Model 1906.png"
    alt="FN Browning Model 1906"
    style={{
      width: "49%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <h3>Development History</h3>

  <p>
    The history of the 6.35 Browning is closely linked to the development
    of extremely small semi-automatic pistols in the early 20th century.
  </p>

  <p>
    Around <strong>1904–1905</strong>, John Browning developed an extremely
    compact pistol for concealed carry and self-defense. It required a
    suitable small-caliber cartridge with <strong>centerfire ignition</strong>
    that would allow the creation of a reliable, very small semi-automatic
    firearm.
  </p>

  <p>
    Browning offered the design to Colt, but the company initially declined
    it. The project was subsequently offered to
    <strong>Fabrique Nationale (FN)</strong> in Belgium. FN began producing
    the pistol in <strong>1906</strong>, and the cartridge became known in
    Europe as the <strong>6.35 Browning</strong>.
  </p>

  <p>
    The pistol is known as the <strong>FN Model 1906</strong>, although it
    is also referred to in the literature as the <strong>FN Model 1905</strong>.
    The latter designation derives from the year of its patent.
  </p>

  <p>
    Its success was enormous. Its small dimensions and simple design made
    it particularly suitable for concealed carry and ushered in an era of
    European "vest pocket" pistols.
  </p>

  <h3>The American Designation: .25 ACP</h3>

  <p>
    In <strong>1908</strong>, Colt began producing the American version of
    the pistol, now known as the <strong>Colt Model 1908 Vest Pocket</strong>.
    The American market established the designation
    <strong>.25 ACP (Automatic Colt Pistol)</strong>.
  </p>

  <p>
    From that point onward, both designations were used in parallel:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>6.35 Browning = .25 ACP = .25 Auto</strong>
  </p>

  <p>
    These are different names for the same cartridge, reflecting different
    market conventions and naming traditions.
  </p>

  <h3>Popularity During the First Half of the 20th Century</h3>

  <p>
    Over the following decades, the 6.35 Browning became one of the most
    popular cartridges for small pocket pistols.
  </p>

  <p>
    Its primary role was <strong>personal self-defense and concealed
    carry</strong>, rather than military use or long-range shooting.
  </p>

  <p>
    Dozens of designs appeared, manufactured in Belgium, France, Germany,
    Spain, Italy, the United States, and other countries. Particularly large
    numbers of copies were produced by firearms manufacturers in the
    <strong>Éibar region of Spain</strong>.
  </p>

  <p>
    Well-known pistols chambered in this caliber include:
  </p>

  <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
    <li><strong>FN Browning Model 1906</strong></li>
    <li><strong>Colt Model 1908 Vest Pocket</strong></li>
    <li><strong>FN Baby Browning</strong></li>
    <li><strong>Astra Cub</strong></li>
    <li><strong>Beretta 418</strong></li>
    <li><strong>Walther Model 9</strong></li>
    <li><strong>Savage Model 1907</strong></li>
    <li><strong>TK (Tulsky Korovin), Model 1926</strong></li>
  </ul>

  <h3>6.35 Browning in the Soviet Union</h3>

  <p>
    The cartridge's history also includes an interesting episode in the
    Soviet Union.
  </p>

  <p>
    In <strong>1925</strong>, the Dynamo sports society commissioned the
    Tula Arms Plant to develop a compact pistol chambered in
    <strong>6.35 mm Browning</strong>. The work was carried out by designer
    <strong>Sergei Aleksandrovich Korovin</strong>.
  </p>

  <p>
    In 1926, the pistol designated <strong>TK — Tulsky Korovin</strong>
    was completed, and production began toward the end of that year. In
    1927, the model was officially approved for use. Serial production
    continued until the mid-1930s.
  </p>

  <p>
    The TK was initially conceived as a compact personal-defense weapon.
    However, it later saw some use among Red Army command personnel and
    NKVD officers.
  </p>

  <h3>The Controversy Over the Soviet Cartridge</h3>

  <p>
    Some Russian literature claims that an <strong>enhanced version of the
    6.35 Browning</strong> was developed for the TK, with a larger powder
    charge. A muzzle velocity of approximately <strong>228 m/s</strong>
    is cited, compared with roughly 200 m/s for some early standard loads.
  </p>

  <p>
    This claim is not universally accepted, however. Specialists from the
    <strong>International Ammunition Association</strong> point out that
    there is insufficient convincing evidence for a separate "enhanced"
    cartridge. The TK's higher velocity could also be explained by its
    <strong>longer barrel</strong> and differences between individual
    ammunition loads.
  </p>

  <p>
    It is therefore more accurate to state that the <strong>TK achieved
    a muzzle velocity of approximately 228 m/s</strong>, without
    categorically attributing this to a specially enhanced cartridge.
  </p>

  <h3>Design and Characteristics</h3>

  <p>
    The 6.35 Browning is a <strong>semi-rimmed cartridge with a cylindrical
    case and centerfire ignition</strong>.
  </p>

  <p>
    According to C.I.P., the maximum case length is
    <strong>15.55 mm</strong>, while the maximum overall cartridge length
    is <strong>23.00 mm</strong>. The nominal caliber is 6.35 mm, while
    C.I.P. dimensional documentation specifies a bullet diameter of
    approximately <strong>6.38 mm</strong>.
  </p>

  <p>
    Various designations can be found in the literature:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>
      6.35 Browning, 6.35×15.5 mm HR, 6.35×16 mm SR, .25 ACP, and .25 Auto.
    </strong>
  </p>

  <p>
    These refer to the same basic cartridge.
  </p>

  <p>
    The small bullet diameter allows the design of extremely compact
    pistols. At the same time, centerfire ignition was an important
    advantage over a number of older small-caliber cartridges using
    rimfire ignition.
  </p>

  <h3>Applications</h3>

  <p>
    The 6.35 Browning was intended primarily for <strong>small pistols
    designed for self-defense and concealed carry</strong>.
  </p>

  <p>
    It was not designed for long-range shooting, and its ballistic
    performance is considerably more modest than that of more powerful
    pistol cartridges.
  </p>

  <p>
    This does not mean, however, that the cartridge lacked practical value.
    In the context of the early 20th century, its main advantage was the
    combination of <strong>small firearm dimensions, low recoil, easy
    handling, and sufficient effectiveness for its intended purpose</strong>.
  </p>

  <p>
    This combination explains its enormous popularity over several decades.
  </p>

  <h3>Interesting Fact</h3>

  <p>
    The <strong>FN Browning Model 1906</strong> and the
    <strong>Colt Model 1908 Vest Pocket</strong> were based on the same
    fundamental design by John Browning. This is unusual in the history
    of the two companies: they produced closely related versions of the
    same Browning pocket pistol for their respective markets.
  </p>

  <p>
    FN later developed the <strong>Baby Browning</strong>, but this time
    its chief designer was <strong>Dieudonné Saive</strong>, who had
    worked with Browning and later became one of FN's most important
    firearms designers. FN began producing the Baby Browning in
    <strong>1932</strong>.
  </p>

  <p>
    Thus, the 6.35 Browning remained associated with several generations
    of extremely compact pistols.
  </p>

  <TechnicalData
    title="6.35 Browning / .25 ACP"
    language="en"
    data={[
      ["Designation", "6.35 Browning / .25 ACP"],
      ["Other designations", "6.35×15.5 mm HR, 6.35×16 mm SR, .25 Auto"],
      ["Type", "Pistol cartridge"],
      ["Bullet diameter", "~6.38 mm"],
      ["Nominal caliber", "6.35 mm"],
      ["Case length", "15.55 mm"],
      ["Maximum cartridge length", "23.00 mm"],
      ["Case type", "Cylindrical, semi-rimmed"],
      ["Ignition type", "Centerfire"],
      ["Typical bullet weight", "~3.0–3.3 g"],
      ["Typical muzzle velocity", "~200–240 m/s"],
      ["Typical muzzle energy", "~70–95 J"],
    ]}
  />

  <p>
    Cartridge dimensions are based on <strong>C.I.P.</strong> data.
    Ballistic performance depends on the specific ammunition, bullet
    weight and design, and barrel length. As an example of a standard
    European load, figures of approximately <strong>3.25 g, 230 m/s,
    and 86 J</strong> are reported.
  </p>
</Section>
 
<Section
  id="7-62x25-tokarev"
  title="7.62×25 mm Tokarev"
>
  <img
    src="/images/calibers/cartridges/7.62x25 Tokarev.png"
    alt="7.62×25 mm Tokarev"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      The powerful Soviet cartridge that became a symbol of the TT pistol and one of the most recognizable firearms of the 20th century.
    </em>
  </p>
  <p>
    <strong>7.62×25 mm Tokarev</strong> is a Soviet pistol cartridge developed in the late 1920s and adopted for service alongside the new Soviet military pistol in <strong>1930</strong>. It is closely associated with the development of the <strong>TT (Tula–Tokarev)</strong> pistol, but its role gradually expanded beyond that of a conventional pistol cartridge.
  </p>

  <p>
    Its high muzzle velocity, relatively flat trajectory, and good penetration made it suitable not only for self-loading pistols but also for submachine guns. During World War II, <strong>7.62×25 mm Tokarev</strong> became a standard cartridge for a number of Soviet pistols and submachine guns.
  </p>

  <h3>Development History</h3>

  <p>
    The history of <strong>7.62×25 mm Tokarev</strong> dates back to <strong>1893</strong>, with the introduction of <strong>7.65×25 mm Borchardt</strong>, developed for the Borchardt C-93 self-loading pistol.
  </p>
  <p>
    The German <strong>7.63×25 mm Mauser</strong>, developed for the legendary <strong>Mauser C96</strong>, was derived from it. The Mauser cartridge became very popular in Russia. Mauser C96 pistols were officially authorized for purchase by officers of the Russian Empire in 1908, and after the revolution, these firearms and their ammunition remained widely available.
  </p>

  <p>
    In the late 1920s, the Soviet military leadership began developing its own self-loading pistol. In <strong>1929</strong>, the Artillery Committee proposed the development of a Soviet pistol chambered for a cartridge based on the <strong>7.63×25 mm Mauser</strong>. The choice also had a practical justification: the ammunition was already familiar in the USSR, and its production could be adapted to Soviet industry.
  </p>

  <p>
    The Soviet cartridge received the official designation <strong>7.62 mm Pistol Cartridge, Model 1930</strong>. Its design was very similar to that of the 7.63×25 mm Mauser, but it was adapted to Soviet manufacturing standards and loaded with a more powerful charge.
  </p>

  <p>
    Thus, the <strong>7.62×25 mm Tokarev</strong> was born.
  </p>

  <p>
    The historical sequence can be represented as follows:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>
      7.65×25 mm Borchardt → 7.63×25 mm Mauser → 7.62×25 mm Tokarev
    </strong>
  </p>

  <p>
    This is one of the clearest lines of development in pistol ammunition history and is particularly important to the internal structure of GunsAtlas.
  </p>

  <h3>Tokarev TT-30 – The Pistol That Gave the Cartridge Its Name</h3>

  <img
    src="/images/calibers/cartridges/TT-30.png"
    alt="TT-30"
    style={{
      width: "45%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
    In <strong>1930</strong>, designer <strong>Fedor Vasilyevich Tokarev</strong> won the competition for a new Soviet military self-loading pistol. The pistol was adopted under the official designation <strong>7.62 mm Self-Loading Pistol, Model 1930</strong>, known as the <strong>TT-30</strong>.
  </p>

  <p>
    In <strong>1933</strong>, the design was revised and simplified. The changes affected numerous components and were intended to facilitate production and improve reliability. This resulted in the <strong>TT-33</strong>, which gradually became the main Soviet military pistol.
  </p>

  <p>
    The TT uses the same <strong>7.62×25 mm Tokarev</strong> cartridge. During World War II, it became a standard military pistol, used particularly widely by <strong>officers, pilots, and tank crews</strong>.
  </p>

  <h3>From Pistol to Submachine Gun</h3>

  <p>
    One of the most interesting features of the <strong>7.62×25 mm Tokarev</strong> is that it did not remain exclusively a pistol cartridge.
  </p>

  <p>
    Its high velocity and relatively small bullet diameter made it suitable for automatic firearms operating on the principle of blowback.
  </p>

  <p>
    During World War II, the cartridge was widely used in Soviet submachine guns, including:
  </p>

  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "30px",
      fontSize: "1.1em",
      marginBottom: "35px",
    }}
  >
    <li><strong>PPD-40</strong></li>
    <li><strong>PPSh-41 “Shpagin”</strong></li>
    <li><strong>PPS-43 “Sudayev”</strong></li>
  </ul>

  <p>
    The cartridge therefore gradually acquired much greater importance. From ammunition for a military pistol, it became a principal cartridge for one of the most widely manufactured classes of Soviet small arms during World War II.
  </p>

  <p>
    Its use in submachine guns was also one of the reasons why <strong>7.62×25 Tokarev</strong> became widespread throughout Eastern Europe and Asia.
  </p>

  <p>
    In <strong>1930</strong>, designer <strong>Fedor Vasilyevich Tokarev</strong> won the competition for a new Soviet military self-loading pistol. The pistol was adopted under the official designation <strong>7.62 mm Self-Loading Pistol, Model 1930</strong>, known as the <strong>TT-30</strong>.
  </p>

  <p>
    In <strong>1933</strong>, the design was revised and simplified. The changes affected numerous components and were intended to facilitate production and improve reliability. This resulted in the <strong>TT-33</strong>, which gradually became the main Soviet military pistol.
  </p>

  <p>
    The TT uses the same <strong>7.62×25 mm Tokarev</strong> cartridge. During World War II, it became a standard military pistol, used particularly widely by <strong>officers, pilots, and tank crews</strong>.
  </p>

  <h3>Postwar Spread</h3>

  <p>
    After World War II, <strong>7.62×25 mm Tokarev</strong> continued to be widely used in Eastern Bloc countries and a number of other states.
  </p>

  <p>
    The cartridge was manufactured under license or according to local standards in <strong>Poland, Hungary, Czechoslovakia, China, Yugoslavia</strong>, and other countries. Different nations developed their own firearms chambered for this cartridge.
  </p>

  <p>
    Among the best-known postwar firearms were Chinese copies of the <strong>TT-33</strong>, Polish <strong>PW wz. 33 Radom</strong> pistols, the Hungarian <strong>Tokagypt 58</strong>, and various submachine guns developed in Eastern Europe and Asia.
  </p>

  <p>
    The development of the cartridge in China is particularly interesting, as <strong>7.62×25 mm Tokarev</strong> remained in service there long after the USSR began transitioning to newer pistol cartridges.
  </p>

  <h3>Design and Characteristics</h3>

  <p>
    <strong>7.62×25 mm Tokarev</strong> is a rimless cartridge with a cylindrical case and centerfire ignition. Its design is similar to that of the <strong>7.63×25 mm Mauser</strong>, but the Soviet version was adapted to local manufacturing standards and uses a more powerful charge.
  </p>

  <p>
    The cartridge has a relatively long case for pistol ammunition and a small bullet diameter. This combination allows it to achieve high muzzle velocity while maintaining relatively compact dimensions.
  </p>

  <p>
    High velocity is one of the cartridge's defining characteristics. With standard ammunition, it is generally around <strong>400–450 m/s</strong>, although the exact figures depend on bullet weight, the load, and barrel length.
  </p>

  <p>
    This high muzzle velocity and relatively flat trajectory distinguish <strong>7.62×25 mm Tokarev</strong> from many other pistol cartridges of the same period.
  </p>

  <h3>Advantages and Disadvantages</h3>

  <p>
    The main advantage of <strong>7.62×25 mm Tokarev</strong> is its high muzzle velocity combined with a relatively small bullet diameter. This provides a flat trajectory and good accuracy at practical distances.
  </p>

  <p>
    Another important advantage is its ability to be used in both pistols and submachine guns. The same cartridge can serve different categories of firearms, which is particularly valuable for military forces.
  </p>

  <p>
    The bullet's high velocity also provides relatively good penetration for a pistol cartridge of its era. This is one reason why <strong>7.62×25 mm Tokarev</strong> was favored for certain military applications.
  </p>

  <p>
    One disadvantage is its relatively strong recoil and high muzzle blast compared with slower pistol cartridges. In compact pistols, this can make rapid follow-up shots more difficult.
  </p>

  <p>
    Another drawback is that high velocity does not necessarily mean high stopping power. The small, relatively light bullet behaves differently from the heavier bullets used in cartridges such as <strong>9×19 mm</strong>.
  </p>

  <h3>Applications</h3>

  <p>
    <strong>7.62×25 mm Tokarev</strong> was initially intended for military self-loading pistols, but it quickly found widespread use in submachine guns as well.
  </p>

  <p>
    Its use in both categories of firearms made the cartridge one of the characteristic types of ammunition used in Soviet small arms during World War II.
  </p>

  <p>
    In pistols, it provides high muzzle velocity and a relatively flat trajectory, while in submachine guns it allows effective automatic fire at the typical engagement distances of this class of weapon.
  </p>

  <p>
    After the war, the cartridge continued to be used in numerous countries, including in local variants and derivatives of the <strong>TT-33</strong>, as well as in various submachine guns.
  </p>

  <p>
    Despite the gradual introduction of newer pistol cartridges, <strong>7.62×25 mm Tokarev</strong> retained its significance thanks to the enormous number of firearms and cartridges produced.
  </p>

  <h3>7.62×25 Tokarev and 7.63×25 Mauser</h3>

  <p>
    The relationship between the two cartridges is extremely close. <strong>7.62×25 Tokarev</strong> represents a Soviet development of the <strong>7.63×25 Mauser</strong>, and their case dimensions are almost identical.
  </p>

  <p>
    However, there are important differences. The Soviet cartridge was developed with a more powerful charge and for higher operating pressures. C.I.P. specifies a maximum permissible pressure of <strong>250 MPa</strong> for <strong>7.62×25 Tokarev</strong>.
  </p>

  <p>
    Therefore, the two cartridges should not be considered interchangeable in every firearm. <strong>7.63×25 Mauser</strong> can be used in many firearms designed for 7.62×25 Tokarev, whereas the reverse should not be assumed to be safe. The <strong>7.62×25 Tokarev</strong> cartridge is not intended for use in firearms designed exclusively for <strong>7.63×25 Mauser</strong>.
  </p>

  <h3>Military Use of Both Cartridges</h3>

  <p>
    The similar dimensions of the two cartridges had interesting practical implications during the wars in Eastern Europe.
  </p>

  <p>
    <strong>7.63×25 Mauser</strong> was familiar in Russia even before the development of <strong>7.62×25 Tokarev</strong>. Mauser C96 pistols were used in the Russian Empire and later in the Soviet Union. During the 1920s, the USSR also purchased additional Mauser C96 pistols and ammunition for them. As a result, <strong>7.63×25 Mauser</strong> was already a well-known cartridge when Soviet designers developed the <strong>7.62×25 Tokarev</strong> variant.
  </p>

  <p>
    During <strong>World War II</strong>, the similar characteristics of the two cartridges acquired additional practical significance. Captured firearms, ammunition, and stockpiles were often put to use by the opposing forces. German forces, for example, used captured Soviet submachine guns such as the <strong>PPSh-41 and PPS</strong>, and <strong>7.63×25 Mauser</strong> ammunition could be used in these firearms. The German Army designated the captured PPSh-41 as the <strong>MP 717(r)</strong> and used both captured Soviet ammunition and <strong>7.63×25 Mauser</strong>.
  </p>

  <p>
    The Finnish Army also made use of this characteristic. During the Winter War and World War II, Finnish forces used captured Soviet submachine guns and supplied some of them with <strong>7.63×25 Mauser</strong> ammunition. According to Finnish military archive records, Finland even ordered <strong>1 million 7.63×25 Mauser cartridges from FN</strong> for this purpose.
  </p>

  <p>
    Thus, although the two cartridges were developed in different countries and under different historical circumstances, they became connected not only by their design but also through <strong>actual combat use on the Eastern Front</strong>.
  </p>

  <h3>Distribution</h3>

  <p>
    After World War II, <strong>7.62×25 Tokarev</strong> became widespread in the countries of the socialist bloc and in Asia.
  </p>

  <p>
    The cartridge was used in various local versions and derivatives of the TT, as well as in numerous submachine guns.
  </p>

  <p>
    Well-known firearms chambered for this cartridge include:
  </p>

  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "30px",
      fontSize: "1.1em",
      marginBottom: "35px",
    }}
  >
    <li><strong>TT-30</strong></li>
    <li><strong>TT-33</strong></li>
    <li><strong>PPSh-41</strong></li>
    <li><strong>PPS-43</strong></li>
    <li><strong>CZ 52</strong></li>
    <li><strong>Type 51</strong></li>
    <li><strong>Type 54</strong></li>
    <li>
      various Chinese, Polish, Hungarian, Yugoslav, and other designs.
    </li>
  </ul>

  <p>
    In China, for example, local versions of the TT and large quantities of <strong>7.62×25 mm</strong> ammunition were manufactured.
  </p>

  <p>
    In many countries, the cartridge remained in service long after the USSR began replacing it with <strong>9×18 mm Makarov</strong>.
  </p>

  <h3>7.62×25 Tokarev in Bulgaria</h3>

  <p>
    The cartridge also occupies an important place in the history of Bulgarian small arms. After World War II, Bulgaria adopted the Soviet <strong>TT-33</strong> and later various submachine guns chambered for <strong>7.62×25 mm Tokarev</strong>.
  </p>

  <p>
    The cartridge was also manufactured in Bulgaria, providing a domestic supply for the armed forces and security services. Bulgarian production was primarily associated with the <strong>State Military Factory at VMZ – Sopot</strong> and specialized ammunition manufacturing facilities.
  </p>

  <p>
    For decades, <strong>7.62×25 mm Tokarev</strong> remained familiar ammunition in the Bulgarian Army, police, and other services. Some firearms chambered for it continued to be encountered even after the transition to more modern pistol calibers.
  </p>

  <p>
    Its historical significance in Bulgaria is mainly connected with the widespread use of the <strong>TT-33</strong> and Soviet submachine guns, as well as the long-standing domestic production of ammunition.
  </p>

  <h3>The Cartridge Today</h3>

  <p>
    Today, <strong>7.62×25 mm Tokarev</strong> is no longer a primary military pistol cartridge, but it continues to be manufactured and used in various parts of the world.
  </p>

  <p>
    Significant quantities remain from the military stockpiles of the former socialist bloc. These stocks, together with the large number of surviving <strong>TT-33</strong> pistols and submachine guns, sustain interest in the cartridge among collectors and shooters.
  </p>

  <p>
    The cartridge is also manufactured by modern ammunition producers, with both standard loads and various bullet types available.
  </p>

  <p>
    Thanks to its historical significance, <strong>7.62×25 Tokarev</strong> remains one of the most recognizable pistol cartridges associated with 20th-century small arms.
  </p>

  <h3>Interesting Fact</h3>

  <p>
    Although <strong>7.62×25 mm Tokarev</strong> is a Soviet cartridge, its design is directly related to the German <strong>7.63×25 mm Mauser</strong>. The two cartridges are so similar in dimensions that they are often considered part of the same historical line of development.
  </p>

  <p>
    One of the most interesting aspects is that <strong>7.62×25 mm Tokarev</strong> continued to be used long after the end of World War II. In some countries, it remained in service in various TT variants and submachine guns into the second half of the 20th century.
  </p>

  <p>
    Today, the cartridge is particularly interesting to collectors and historical shooting enthusiasts because it brings together the history of Soviet TT pistols, World War II submachine guns, and the development of high-velocity pistol cartridges.
  </p>

  <TechnicalData
    language="en"
    title="7.62×25 mm Tokarev"
    data={[
      ["Designation", "7.62×25 mm Tokarev"],
      ["Other designations", "7.62 mm Tokarev, 7.62×25 TT"],
      ["Type", "Pistol cartridge"],
      ["Bullet diameter", "~7.85 mm"],
      ["Nominal caliber", "7.62 mm"],
      ["Case length", "25.00 mm"],
      ["Maximum cartridge length", "35.20 mm"],
      ["Case type", "Rimless, cylindrical"],
      ["Ignition", "Centerfire"],
      ["Typical bullet weight", "~5.5–5.6 g"],
      ["Typical muzzle velocity", "~400–450 m/s"],
      ["Typical muzzle energy", "~450–550 J"],
      ["Maximum pressure", "250 MPa"],
    ]}
  />
  <p>
    The dimensions and maximum pressure are based on the established specifications for this cartridge. Ballistic performance depends on the specific ammunition, bullet weight and design, and barrel length.
  </p>
</Section>
<Section
  id="7-63x25-mauser"
  title="7.63×25 mm Mauser (.30 Mauser)"
>
  <img
    src="/images/calibers/cartridges/7.63x25 Mauser.png"
    alt="7.63×25 mm Mauser (.30 Mauser)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      The cartridge of the legendary Mauser C96 and one of the fastest pistol cartridges of its time.
    </em>
  </p>
  <p>
    The <strong>7.63×25 mm Mauser</strong> cartridge, also known in the United States as <strong>.30 Mauser Automatic</strong>, is one of the most significant pistol cartridges of the late 19th and early 20th centuries.
  </p>

  <p>
    Developed for the legendary <strong>Mauser C96</strong> self-loading pistol, it became one of the most recognizable high-velocity pistol cartridges of its era. Its high muzzle velocity for the time, relatively flat trajectory, and good penetration made <strong>7.63×25 Mauser</strong> an unusual and powerful pistol cartridge.
  </p>

  <p>
    Its history is particularly interesting because of its direct connection to the later Soviet <strong>7.62×25 Tokarev</strong>.
  </p>

  <h3>Development History</h3>

  <p>
    The history of <strong>7.63×25 Mauser</strong> begins with another important cartridge: the <strong>7.65×25 mm Borchardt</strong>, developed in <strong>1893</strong> for the <strong>Borchardt C-93</strong> self-loading pistol.
  </p>

  <p>
    Building on this design, the German company <strong>Mauser</strong> developed its more powerful <strong>7.63×25 mm</strong> cartridge for a new self-loading pistol that would later become known as the <strong>Mauser C96</strong>.
  </p>

  <p>
    The pistol was introduced in <strong>1896</strong>, and the new cartridge became its standard ammunition. Thus, <strong>7.63×25 Mauser</strong> established itself as one of the first widely adopted high-velocity pistol cartridges.
  </p>

  <h3>Mauser C96 – The Firearm the Cartridge Was Designed For</h3>

  <img
    src="/images/calibers/cartridges/Mauser C96.png"
    alt="Mauser C96"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
    The <strong>Mauser C96</strong> stood apart from almost all contemporary pistols because of its unusual design.
  </p>

  <p>
    Its magazine was located in front of the trigger guard, and ammunition was initially loaded from above using a stripper clip. The distinctive long barrel and high bullet velocity gave the firearm unusual ballistic performance for its time.
  </p>

  <p>
    The pistol could also be fitted with a wooden <strong>holster stock</strong>, allowing it to be used as a shoulder-supported firearm and increasing its practical shooting range.
  </p>

  <p>
    Numerous C96 variants were produced, and manufacture continued for decades.
  </p>

  <p>
    One of the best-known compact variants was the so-called <strong>Bolo Mauser</strong>, distinguished by its shorter barrel and more compact dimensions. This variant became particularly popular in Russia and was later closely associated with the period following the Russian Revolution.
  </p>

  <h3>Popularity in Russia</h3>

  <p>
    As early as the beginning of the 20th century, the <strong>Mauser C96</strong> gained considerable popularity in Russia.
  </p>

  <p>
    The firearm was used by officers, military personnel, members of various security organizations, and civilians. Its popularity was so great that <strong>7.63×25 Mauser</strong> became a well-known cartridge beyond its original German market.
  </p>

  <p>
    During the Russian Civil War, the <strong>C96</strong> was used by different sides in the conflict. Its distinctive appearance further contributed to its status as a symbol of the era.
  </p>

  <h3>Design and Ballistic Characteristics</h3>

  <p>
    <strong>7.63×25 Mauser</strong> is a rimless cartridge with a bottlenecked case and centerfire ignition.
  </p>

  <p>
    Its dimensions are relatively compact, but its propellant charge allows it to achieve high muzzle velocity.
  </p>

  <p>
    According to C.I.P. data, the maximum cartridge length is <strong>35.08 mm</strong>, and the case length is <strong>25.15 mm</strong>. The bullet diameter listed in the dimensional documentation is approximately <strong>7.86 mm</strong>. C.I.P. specifies a maximum permissible pressure of <strong>2250 bar</strong>.
  </p>

  <p>
    High velocity is one of the cartridge's most characteristic features. Depending on the specific ammunition and barrel length, velocities of around <strong>400–440 m/s</strong> can be encountered, although historical and modern ammunition may have different ballistic characteristics.
  </p>

  <p>
    This places <strong>7.63 Mauser</strong> among the relatively fast pistol cartridges of its era.
  </p>

  <h3>The Connection with 7.62×25 Tokarev</h3>

  <p>
    One of the most interesting chapters in the history of <strong>7.63 Mauser</strong> is its influence on the development of the Soviet <strong>7.62×25 Tokarev</strong>.
  </p>

  <p>
    In the late 1920s, Soviet designers used <strong>7.63×25 Mauser</strong> as the basis for developing a new pistol cartridge.
  </p>

  <p>
    In 1930, the Soviet <strong>7.62 mm Pistol Cartridge, Model 1930</strong> was adopted. It later became known as <strong>7.62×25 Tokarev</strong>.
  </p>

  <p>
    The two cartridges have very similar designs and dimensions, and their historical connection is clear. However, they should not be regarded as completely identical ammunition.
  </p>

  <p>
    Differences exist in bullet and barrel dimensions, as well as in standardized pressure limits. For example, C.I.P. specifies <strong>2250 bar</strong> for <strong>7.63 Mauser</strong> and <strong>2500 bar</strong> for <strong>7.62×25 Tokarev</strong>.
  </p>

  <p>
    The historical sequence can be represented as follows:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>7.65×25 Borchardt → 7.63×25 Mauser → 7.62×25 Tokarev</strong>
  </p>

  <h3>7.63×25 Mauser and 7.62×25 Tokarev in Wartime</h3>

  <p>
    The historical relationship between the two cartridges extends beyond their design. Their very similar dimensions had practical significance during World War II.
  </p>

  <p>
    <strong>7.63×25 Mauser was already well known in Russia and the USSR before the introduction of 7.62×25 Tokarev.</strong> After the Soviet cartridge was developed, both types of ammunition continued to exist alongside one another.
  </p>

  <p>
    During World War II, German forces captured significant numbers of Soviet submachine guns, including the <strong>PPSh-41</strong> and <strong>PPS-43</strong>. Some captured PPSh-41s were adopted into German service under the designation <strong>MP 717(r)</strong>.
  </p>

  <p>
    The similar dimensions of <strong>7.63×25 Mauser</strong> and <strong>7.62×25 Tokarev</strong> made it possible to use <strong>7.63×25 Mauser</strong> in a number of captured Soviet firearms. This allowed German forces to use available German and other stocks of <strong>7.63×25 Mauser</strong> rather than relying entirely on captured Soviet ammunition.
  </p>

  <p>
    A similar practice existed in <strong>Finland</strong>. Finnish forces used captured Soviet submachine guns, and <strong>7.63×25 Mauser</strong> was used as an alternative cartridge. Finnish military stores also contained boxes labeled <strong>7.63 mm pistol ammunition</strong> that held repackaged captured Soviet <strong>7.62×25 Tokarev</strong> cartridges.
  </p>

  <p>
    According to information cited in literature on Finnish use of this cartridge, Finland even purchased <strong>1 million 7.63×25 Mauser cartridges from FN</strong> for use in firearms chambered for this caliber.
  </p>

  <p>
    The similarity between the two cartridges therefore had not only technical significance but also real military implications.
  </p>

  <h3>Interchangeability with 7.62×25 Tokarev</h3>

  <p>
    Despite their almost identical overall geometry, <strong>7.63×25 Mauser</strong> and <strong>7.62×25 Tokarev</strong> should not be considered universally interchangeable.
  </p>

  <p>
    Historically, there have been many instances of <strong>7.63×25 Mauser</strong> being used in firearms chambered for <strong>7.62×25 Tokarev</strong>. This was possible because of the cartridges' similar dimensions.
  </p>

  <p>
    The reverse situation, however, is more problematic. Differences exist in barrel dimensions and pressure standards. C.I.P. specifies a maximum pressure of <strong>2250 bar for 7.63 Mauser</strong>, compared with <strong>2500 bar for 7.62×25 Tokarev</strong>.
  </p>

  <p>
    For this reason, <strong>7.62×25 Tokarev should not automatically be used in historical firearms designed for 7.63×25 Mauser</strong>. The firearm's condition and specific design, as well as the characteristics of the ammunition, are essential considerations.
  </p>

  <p>
    This distinction is also important for collectors, as many historical firearms and cartridges exist for which the markings <strong>7.62 and 7.63 mm</strong> alone are not sufficient to determine a safe combination.
  </p>

  <h3>Distribution and Applications</h3>

  <p>
    The 7.63×25 Mauser was originally designed for the <strong>Mauser C96</strong>, but over time it also came to be used in other firearms.
  </p>

  <p>
    The cartridge is particularly associated with the first half of the 20th century and remains closely linked to various C96 variants and copies.
  </p>

  <p>
    Its popularity was not due solely to the firearm for which it was designed. For its time, it offered an unusual combination of:
  </p>

  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "30px",
      fontSize: "1.1em",
      marginBottom: "35px",
    }}
  >
    <li>High muzzle velocity;</li>
    <li>A relatively flat trajectory;</li>
    <li>Good penetration;</li>
    <li>The ability to use a relatively light bullet.</li>
  </ul>

  <p>
    These characteristics were among the reasons the cartridge attracted the attention of military designers and influenced the subsequent development of pistol ammunition.
  </p>

  <h3>7.63 Mauser and Mauser C96 Pistols</h3>

  <p>
    Over the years, Mauser produced numerous variants of the C96.
  </p>

  <p>
    These differed in barrel length, capacity, design, and intended purpose. Variants adapted for automatic fire were also produced.
  </p>

  <p>
    Despite the variety of models, <strong>7.63×25 Mauser</strong> remained the principal cartridge historically associated with the C96.
  </p>

  <p>
    This combination of the C96's distinctive silhouette and the high-velocity <strong>7.63 Mauser</strong> cartridge made the firearm one of the icons of the early history of self-loading pistols.
  </p>

  <h3>Interesting Fact</h3>

  <p>
    The 7.63×25 Mauser is part of one of the most interesting evolutionary lines in the history of pistol ammunition.
  </p>

  <p>
    The development progressed from <strong>7.65×25 Borchardt</strong> to <strong>7.63×25 Mauser</strong>, and decades later the same concept influenced the Soviet <strong>7.62×25 Tokarev</strong>.
  </p>

  <p>
    Thus, a design concept that originated in <strong>1893</strong> continued to influence ammunition and firearms throughout the 20th century.
  </p>

  <TechnicalData
    language="en"
    title="7.63×25 mm Mauser"
    data={[
      ["Designation", "7.63×25 mm Mauser"],
      ["American designation", ".30 Mauser Automatic"],
      ["Type", "Pistol cartridge"],
      ["Country of origin", "Germany"],
      ["Year of introduction", "1896"],
      ["Nominal caliber", "7.63 mm"],
      ["Bullet diameter", "~7.86 mm"],
      ["Case length", "25.15 mm"],
      ["Maximum cartridge length", "35.08 mm"],
      ["Case type", "Rimless, bottlenecked"],
      ["Ignition", "Centerfire"],
      ["Bullet weight", "Approximately 5.5–6.0 g"],
      ["Muzzle velocity", "Approximately 400–440 m/s"],
      ["Muzzle energy", "Approximately 450–600 J"],
      ["Maximum pressure according to C.I.P.", "2250 bar"],
    ]}
  />

  <p>
    Ballistic performance depends on the specific ammunition, bullet weight and design, and barrel length. With the C96, different barrel lengths and historical loads can produce substantially different results.
  </p>

  <p>
    The dimensions and maximum pressure are based on data from <strong>C.I.P.</strong>
  </p>
</Section>
<Section
  id="7-65x17-browning"
  title="7.65×17 mm Browning (.32 ACP)"
>
  <img
    src="/images/calibers/cartridges/7.65x17.png"
    alt="7.65×17 mm Browning (.32 ACP)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      John Browning's small cartridge that turned the pocket pistol into one of
      the most popular personal firearms of the 20th century.
    </em>
  </p>
  <p>
    The <strong>7.65×17 mm Browning</strong> cartridge, known in Europe as
    <strong> 7.65 Browning</strong> and in the United States as
    <strong> .32 ACP (Automatic Colt Pistol)</strong>, is one of the most
    historically significant small-caliber pistol cartridges.
  </p>

  <p>
    Developed by <strong>John Moses Browning</strong> in the late 19th century,
    it was designed for his compact self-loading pistol, which later became known
    as the <strong> FN Browning Model 1899/1900</strong>. Its combination of
    small dimensions, low recoil, and relatively simple design made it possible
    to produce exceptionally compact and reliable pistols.
  </p>

  <p>
    Over the following decades, <strong>7.65 Browning</strong> became one of the
    most widely used cartridges for compact pistols in Europe. It was used by
    numerous military and police organizations, as well as by civilians seeking
    a small and easily concealable firearm.
  </p>

  <h3>Origins and Development</h3>

  <p>
    The history of <strong>7.65 Browning</strong> began around
    <strong> 1896–1897</strong>, when John Browning developed a new compact
    self-loading pistol and designed a suitable cartridge for it.
  </p>

  <p>
    The cartridge's design was closely linked to the operating principle of the
    firearm. Browning used a <strong> blowback action</strong>, in which the
    slide is not mechanically locked to the barrel. Reliable operation with this
    type of mechanism requires a cartridge with moderate pressure, allowing a
    relatively simple design.
  </p>

  <p>
    In <strong>1897</strong>, Browning presented his design to
    Hart O. Berg, a representative of the Belgian company
    <strong> Fabrique Nationale (FN)</strong>. On July 17 of that year, an
    agreement was signed granting FN the rights to manufacture the pistol in
    certain markets. FN began preparing for mass production of both the firearm
    and the new cartridge.
  </p>

  <p>
    The pistol was introduced in <strong>January 1899</strong> as the
    <strong> FN Browning Model 1899</strong>. It quickly became a commercial
    success.
  </p>

  <h3>FN Browning Model 1899</h3>

  <img
    src="/images/calibers/cartridges/FN Browning 1899.png"
    alt="FN Browning Model 1899"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    The <strong>FN Browning Model 1899</strong> was the original version of the
    pistol, designed by John Browning and manufactured by FN. In 1900, the design
    was refined, resulting in the <strong>Model 1900</strong>, which incorporated
    a number of changes intended to improve the design and manufacturing process.
  </p>

  <p>
    The Model 1900 differed from the Model 1899 in several respects, including
    a redesigned frame and slide, a different sight configuration, and other
    details. The newer model was also slightly more compact and lighter.
    The <strong> Model 1900</strong> became FN's major commercial success and
    was produced in enormous quantities.
  </p>

  <p>
    Both models used the same cartridge –
    <strong> 7.65×17 mm Browning (.32 ACP)</strong>. The Model 1899 laid the
    foundation, while the Model 1900 turned Browning's design into one of the
    most successful European pocket pistols of the early 20th century.
  </p>

  <p>
    In 1900, FN introduced the improved <strong>Model 1900</strong>, which,
    following changes requested by the Belgian military, was adopted as a
    service pistol. FN manufactured more than
    <strong>700,000 Model 1900 pistols</strong>, most of them intended for the
    civilian market.
  </p>

  <h3>From the Belgian Browning to the .32 ACP</h3>

  <p>
    The cartridge was originally known as
    <strong> 7.65 mm Browning</strong>.
  </p>

  <p>
    In <strong>1903</strong>, Colt began manufacturing the compact
    <strong>Colt Model 1903 Pocket Hammerless</strong>, also designed by
    John Browning. For the American market, the cartridge was given the
    designation <strong> .32 ACP – .32 Automatic Colt Pistol</strong>.
  </p>

  <p>
    This established the two main designations that remain in use today:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>7.65×17 mm Browning</strong> – European designation
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>.32 ACP</strong> – American designation
  </p>

  <p>
    Other designations include <strong>7.65 Browning</strong>,
    <strong> 7.65 mm Browning Short</strong>, and <strong> .32 Auto</strong>.
  </p>

  <h3>Design and Characteristics</h3>

  <p>
    <strong>7.65 Browning</strong> is a cartridge with a
    <strong> semi-rimmed case, cylindrical case body, and centerfire
    ignition</strong>.
  </p>

  <p>
    The small projecting rim allows the cartridge to be positioned in the
    chamber, while its design is also suitable for reliable feeding from a
    magazine.
  </p>

  <p>
    The cartridge was designed for firearms with a blowback action, which does
    not require the barrel and slide to lock together. This allows compact
    pistols to be built with simple and reliable mechanisms.
  </p>

  <p>
    According to current <strong>C.I.P.</strong> data, the maximum cartridge
    length is <strong>25.00 mm</strong>, the maximum case length is
    <strong> 17.60 mm</strong>, and the maximum mean pressure is
    <strong> 1600 bar</strong>.
  </p>

  <h3>The Era of Pocket Pistols</h3>

  <p>
    During the first half of the 20th century, <strong>7.65 Browning</strong>
    became one of the de facto standards for
    <strong>compact self-defense pistols</strong>.
  </p>

  <p>
    Some of the best-known firearms chambered for this cartridge include:
  </p>

  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "30px",
      fontSize: "1.1em",
      marginBottom: "35px",
    }}
  >
    <li><strong>FN Browning Model 1899</strong></li>
    <li><strong>FN Browning Model 1900</strong></li>
    <li><strong>FN Browning Model 1910</strong></li>
    <li><strong>Colt Model 1903 Pocket Hammerless</strong></li>
    <li><strong>Walther PP</strong></li>
    <li><strong>Walther PPK</strong></li>
    <li><strong>Mauser HSc</strong></li>
    <li><strong>Savage Model 1907</strong></li>
    <li><strong>Beretta 418</strong></li>
    <li><strong>HK 4</strong></li>
  </ul>

  <p>
    The <strong>Walther PP and PPK</strong>, introduced in 1929, were
    particularly significant. They combined compact dimensions with a
    double-action mechanism and became extremely popular police and civilian
    pistols in Europe.
  </p>

  <h3>Military and Police Use</h3>

  <p>
    Despite its relatively modest ballistic performance,
    <strong>7.65 Browning</strong> became widely used by European police and
    military organizations.
  </p>

  <p>
    Its appeal was not its power, but rather the
    <strong>balance of size, reliability, manageable recoil, and sufficient
    effectiveness for the intended role of a compact personal firearm</strong>.
  </p>

  <p>
    Numerous European countries and police services used pistols chambered for
    this cartridge throughout the 20th century. It remained widely used even
    after more powerful 9 mm ammunition appeared.
  </p>

  <p>
    In Germany, for example, various versions of the
    <strong>Walther PP/PPK</strong> and, later, the
    <strong>Mauser HSc</strong> were used by police and armed forces.
  </p>

  <h3>Popularity and Culture</h3>

  <p>
    <strong>7.65 Browning</strong> also has an interesting connection to popular
    culture.
  </p>

  <p>
    During the 20th century, small pistols chambered for this cartridge became
    a symbol of the <strong>pocket pistol</strong> – compact, easy to conceal,
    and relatively easy to handle.
  </p>

  <p>
    The cartridge is also associated with the popularity of the
    <strong>Walther PPK</strong>, which became one of the world's most
    recognizable compact pistols thanks to the cultural image of James Bond.
  </p>

  <p>
    It is a good example of how a cartridge with relatively modest ballistic
    performance can acquire enormous historical and cultural significance.
  </p>

  <h3>Ballistic Characteristics</h3>

  <p>
    <strong>7.65 Browning</strong> was not designed as a powerful cartridge.
  </p>

  <p>
    Its relatively light bullet and moderate propellant charge produce low
    recoil and allow it to be used in very small pistols. This was especially
    important in the early 20th century, when compactness and reliability were
    the main advantages of pocket firearms.
  </p>

  <p>
    At the same time, the cartridge is significantly less powerful than modern
    standard pistol ammunition such as <strong>9×19 mm</strong>.
  </p>

  <p>
    Its historical role should therefore be understood in the context of
    firearms intended for <strong>personal defense and concealed carry</strong>,
    rather than as a substitute for powerful military pistol cartridges.
  </p>

  <h3>Interesting Fact</h3>

  <p>
    The <strong>FN Browning Model 1900</strong> was one of the most successful
    early self-loading pistols in Europe.
  </p>

  <p>
    During its first decade of production, FN manufactured more than
    <strong>700,000 Model 1900 pistols</strong>. This enormous production run
    also helped make <strong> 7.65 Browning</strong> one of the most widely
    used European pistol cartridges.
  </p>

  <h3>The Cartridge Today</h3>

  <p>
    Although <strong>7.65 Browning</strong> has gradually lost ground to more
    powerful 9 mm cartridges, it has not disappeared.
  </p>

  <p>
    The cartridge is still manufactured today. Current
    <strong> C.I.P.</strong> standards continue to include it in the modern
    nomenclature of pistol cartridges.
  </p>

  <p>
    It remains particularly interesting to owners and collectors of historical
    pistols such as the <strong>FN Browning Model 1900</strong>,
    <strong> FN Browning Model 1910</strong>, <strong>Walther PP/PPK</strong>,
    <strong> Mauser HSc</strong>, and <strong>Colt Model 1903</strong>.
  </p>

  <TechnicalData
    language="en"
    title="7.65×17 mm Browning"
    data={[
      ["Designation", "7.65×17 mm Browning"],
      ["American designation", ".32 ACP / .32 Auto"],
      ["Type", "Pistol cartridge"],
      ["Country of origin", "Belgium"],
      ["Designer", "John Moses Browning"],
      ["Year of development", "1896–1897"],
      ["First production", "1899"],
      ["Case length", "17.60 mm"],
      ["Maximum cartridge length", "25.00 mm"],
      ["Bullet diameter", "~7.85 mm"],
      ["Case type", "Semi-rimmed, cylindrical"],
      ["Ignition", "Centerfire"],
      ["Maximum mean pressure (C.I.P.)", "1600 bar"],
      ["Typical bullet mass", "~4.5–4.7 g"],
      ["Typical muzzle velocity", "~270–310 m/s"],
      ["Typical muzzle energy", "~170–220 J"],
    ]}
  />

  <p>
    Ballistic performance depends on the specific cartridge load, bullet mass,
    bullet design, and barrel length. Values of around <strong>300 m/s</strong>
    and <strong> 200 J</strong> are typical of some modern standard loads, but
    they are not universal characteristics of all 7.65 Browning ammunition.
  </p>
</Section>
<Section
  id="7-65x21-parabellum"
  title="7.65×21 mm Parabellum (.30 Luger)"
>
  <img
    src="/images/calibers/cartridges/7.65x21 Parabellum.png"
    alt="7.65×21 mm Parabellum (.30 Luger)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      The cartridge behind the legendary Luger Parabellum, marking the beginning
      of one of the most famous pistol systems in history.
    </em>
  </p>
  <p>
    <em>
      The cartridge behind the legendary Luger Parabellum, marking the beginning
      of one of the most famous pistol systems in history.
    </em>
  </p>

  <p>
    The <strong>7.65×21 mm Parabellum</strong> cartridge, also known as
    <strong> 7.65 mm Luger</strong> and <strong> .30 Luger</strong>, is one of
    the most interesting pistol cartridges of the late 19th and early 20th
    centuries.
  </p>

  <p>
    Developed around <strong>1898 by Georg Luger</strong>,
    <strong> 7.65×21 mm Parabellum</strong> was based on the
    <strong> 7.65×25 mm Borchardt</strong>, used in the
    <strong> Borchardt C-93</strong> pistol. Following trials of the C-93 in
    1897, Luger was tasked with improving the Borchardt design. He shortened
    the case from 25 mm to approximately 21 mm, allowing a more compact
    mechanism, a shorter toggle-lock action, and a slimmer, angled grip. This
    produced the cartridge that became an integral part of the
    <strong>Parabellum</strong> system.
  </p>

  <p>
    In 1900, Switzerland adopted the Parabellum pistol for military service, and
    <strong> 7.65×21 mm</strong> became the standard cartridge for the Swiss
    Parabellum.
  </p>

  <h3>History and Development</h3>
  <p>
    To understand the origins of 7.65×21 Parabellum, we must return to the
    <strong> 7.65×25 Borchardt</strong> cartridge and the
    <strong>Borchardt C-93</strong> pistol, discussed in detail below.
  </p>

  <p>
    The Borchardt C-93 was one of the first successful self-loading pistols, but
    its design was large, heavy, and relatively awkward for military use. The
    German company <strong>Deutsche Waffen- und Munitionsfabriken (DWM)</strong>
    assigned <strong>Georg Luger</strong> the task of improving the system.
  </p>

  <p>
    Luger retained Borchardt's basic toggle-lock principle but substantially
    modified the firearm's design. The grip was angled, the mechanism was made
    more compact, and the pistol's balance was significantly improved.
  </p>

  <p>
    One of the most important changes concerned the ammunition.
  </p>

  <p>
    Luger used <strong>7.65×25 mm Borchardt</strong> as the starting point but
    shortened the case to approximately <strong>21.6 mm</strong>. The shorter
    cartridge allowed a more compact breech mechanism and a shorter operating
    stroke. At the same time, it made possible a slimmer and more ergonomic grip.
  </p>

  <p>
    This resulted in the <strong>7.65×21 mm Parabellum</strong>.
  </p>

  <p>
    The historical sequence is:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>
      7.65×25 Borchardt → 7.65×21 Parabellum → 9×19 Parabellum
    </strong>
  </p>

  <h3>Luger Parabellum Model 1900</h3>

  <img
    src="/images/calibers/cartridges/Parabellum Model 1900.png"
    alt="Luger Parabellum Model 1900"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    Switzerland became the first country to adopt the Parabellum as a standard
    military sidearm. The original Swiss version used
    <strong> 7.65×21 mm</strong>. This marked the beginning of the Parabellum
    system's long military history.
  </p>

  <h3>7.65 Parabellum and Switzerland</h3>

  <p>
    The Swiss Army used <strong>7.65×21 Parabellum</strong> for decades.
  </p>

  <p>
    The original <strong>Pistole 1900</strong> was followed by the improved
    <strong> Model 1900/06</strong>, and later by the Swiss
    <strong> Model 1906/29</strong>.
  </p>

  <p>
    After the First World War, production of Swiss Parabellum pistols gradually
    shifted to <strong>Waffenfabrik Bern</strong>.
  </p>

  <p>
    The <strong>Model 1906/29</strong> is particularly interesting. Manufactured
    in Switzerland, it remained in service long after newer designs appeared.
    The last Swiss Parabellum pistols were gradually replaced by the
    <strong> SIG P210</strong>, adopted in 1949.
  </p>

  <p>
    Swiss military P210 pistols are chambered in
    <strong>9×19 mm Parabellum</strong>, while
    <strong> 7.65×21 mm</strong> is found in civilian and sporting versions of
    the P210.
  </p>

  <h3>7.65×21 Parabellum in Bulgaria</h3>

  <p>
    The history of <strong>7.65×21 Parabellum</strong> holds a special place in
    Bulgarian military history.
  </p>

  <p>
    Bulgaria was among the countries that adopted the
    <strong> Parabellum pistol in 7.65 mm</strong>.
  </p>

  <p>
    The first delivery to Bulgaria consisted of approximately
    <strong>1,000 Model 1900 pistols</strong> manufactured by DWM. This was
    followed in <strong>1906–1907</strong> by a further approximately
    <strong>1,250–1,500 Model 1906 pistols</strong>, also chambered in 7.65 mm.
  </p>

  <p>
    Bulgarian Parabellum pistols became a characteristic part of the personal
    firearms carried by Bulgarian officers in the early 20th century.
  </p>

  <p>
    Special variants intended for Bulgaria can be identified by distinctive
    Bulgarian markings. Some bear the inscription
    <strong> "Огънъ"</strong> and the Bulgarian royal coat of arms.
  </p>

  <p>
    Bulgaria later also purchased Parabellum pistols in
    <strong>9 mm</strong>, but the early Bulgarian Luger pistols were chambered
    in <strong>7.65×21 mm</strong>.
  </p>

  <h3>Design and Characteristics</h3>

  <p>
    <strong>7.65×21 Parabellum</strong> is a rimless cartridge with a
    bottlenecked case and centerfire ignition.
  </p>

  <p>
    It is a direct design descendant of the
    <strong>7.65×25 Borchardt</strong>, but its case is approximately 3.4 mm
    shorter.
  </p>

  <p>
    According to <strong>C.I.P.</strong> data, the case length is
    <strong> 21.59 mm</strong>, the maximum cartridge length is
    <strong> 29.85 mm</strong>, and the bullet diameter is approximately
    <strong> 7.85 mm</strong>. The maximum permissible pressure is
    <strong> 2350 bar</strong>.
  </p>

  <p>
    The bullet traditionally has a <strong>metal jacket</strong>, with various
    designs and materials appearing over the years.
  </p>

  <p>
    The standard historical load uses a bullet weighing approximately
    <strong> 6.0 g</strong>. Typical ballistic performance for the standard
    cartridge is approximately <strong>370 m/s</strong> and
    <strong> 410 J</strong>, although actual results depend on the ammunition
    and barrel length.
  </p>

  <h3>Why Did Luger Shorten the Case?</h3>

  <p>
    This is one of the cartridge's most interesting design features.
  </p>

  <p>
    In the Borchardt C-93, the long case of the
    <strong>7.65×25 mm</strong> cartridge took up considerable space in the grip.
  </p>

  <p>
    Luger shortened the case to approximately <strong>21.6 mm</strong>. This
    allowed him to reduce the travel of the toggle-lock mechanism and create a
    more compact design with a slimmer, angled grip.
  </p>

  <p>
    The cartridge modification was therefore not merely a ballistic change. It
    was part of the overall engineering development of the new pistol.
  </p>

  <h3>From 7.65×21 to 9×19 Parabellum</h3>

  <p>
    The success of <strong>7.65×21 Parabellum</strong> demonstrated the
    potential of the Luger system, but the need for a more powerful cartridge
    gradually emerged.
  </p>

  <p>
    The solution was to adapt the design for a larger
    <strong> 9 mm bullet</strong>.
  </p>

  <p>
    In <strong>1902</strong>, the <strong>9×19 mm Parabellum</strong> was
    developed. The new cartridge retained the basic case length of
    <strong> 7.65×21</strong>, but the bullet diameter was increased to 9 mm.
    This produced a significantly more powerful cartridge that gradually
    replaced <strong> 7.65×21</strong> in military service.
  </p>

  <p>
    Over the following decades, <strong>9×19 mm Parabellum</strong> became one
    of the most widely used pistol cartridges in the world.
  </p>

  <p>
    <strong>
      The detailed history, design, development, and spread of 9×19 mm
      Parabellum will be covered in a separate article.
    </strong>
  </p>

  <h3>Applications</h3>

  <p>
    Despite gradually being displaced by <strong>9×19 mm</strong>,
    <strong> 7.65×21 Parabellum</strong> continued to be used through a
    significant part of the 20th century.
  </p>

  <p>
    Its principal military application was associated with the various
    <strong> Luger Parabellum</strong> models, especially the Swiss variants.
  </p>

  <p>
    The cartridge was also used in other firearms, including the
    <strong> SIG P210</strong>, which was manufactured in
    <strong>7.65×21 mm</strong> for the civilian and sporting markets.
  </p>

  <p>
    The cartridge has also been used in other pistols in various countries, but
    historically it remains most closely associated with the
    <strong>Parabellum</strong> system.
  </p>

  <h3>Special Loads for Long-Barreled Variants</h3>

  <p>
    One particularly interesting aspect of the history of
    <strong>7.65 Parabellum</strong> concerns the
    <strong> long-barreled and carbine variants of the Parabellum system</strong>.
  </p>

  <p>
    Ammunition with an <strong>increased propellant charge</strong> was developed
    for these firearms to take advantage of the longer barrel and achieve a
    higher muzzle velocity. Such loads appeared as early as the beginning of
    the 20th century and differed from standard pistol loads.
  </p>

  <p>
    This ammunition should not be treated as a standard
    <strong> 7.65×21 load</strong> for an ordinary Parabellum pistol.
  </p>

  <h3>Interesting Fact</h3>

  <p>
    The name <strong>"Parabellum"</strong> comes from the Latin phrase:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>"Si vis pacem, para bellum" – "If you want peace, prepare for war."</strong>
  </p>

  <p>
    "Parabellum" was also the telegraphic address used by
    <strong> DWM</strong>.
  </p>

  <p>
    For this reason, the name gradually became a designation not only for the
    pistol but also for its cartridge.
  </p>

  <p>
    The later designation <strong>9×19 mm Parabellum</strong> derives from this
    system and is now much more familiar than the original
    <strong> 7.65×21 mm</strong>.
  </p>

  <h3>The Cartridge Today</h3>

  <p>
    <strong>7.65×21 Parabellum</strong> is no longer a major military cartridge,
    but it continues to be manufactured in limited quantities.
  </p>

  <p>
    Today's main interest in the cartridge is associated with
    <strong> collectible and historical firearms</strong>, especially Swiss
    Parabellum pistols and early Luger models.
  </p>

  <p>
    The cartridge is also notable for its place in the development of pistol
    ammunition: it represents the transitional link between
    <strong> 7.65×25 Borchardt</strong> and <strong> 9×19 Parabellum</strong>.
  </p>

  <TechnicalData
    language="en"
    title="7.65×21 mm Parabellum"
    data={[
      ["Designation", "7.65×21 mm Parabellum"],
      ["Other designations", "7.65 mm Luger / .30 Luger"],
      ["Type", "Pistol cartridge"],
      ["Country of origin", "Germany"],
      ["Designer", "Georg Luger"],
      ["Year of development", "Around 1898"],
      ["Design origin", "7.65×25 mm Borchardt"],
      ["Case length", "21.59 mm"],
      ["Maximum cartridge length", "29.85 mm"],
      ["Bullet diameter", "Approximately 7.85 mm"],
      ["Case type", "Rimless, bottlenecked"],
      ["Ignition", "Centerfire"],
      ["Bullet mass", "Approximately 6.0 g"],
      ["Muzzle velocity", "Approximately 370 m/s"],
      ["Muzzle energy", "Approximately 410 J"],
      ["Maximum pressure (C.I.P.)", "2350 bar"],
    ]}
  />

  <p>
    Ballistic performance depends on the specific cartridge and barrel length.
    The values shown are characteristic of the standard historical load with a
    bullet weighing approximately 6.0 g. The dimensions and maximum pressure
    follow the C.I.P. data.
  </p>
</Section>
<Section
  id="7-65x25-borchardt"
  title="7.65×25 mm Borchardt"
>
  <img
    src="/images/calibers/cartridges/7.65x25 Borchardt.png"
    alt="7.65×25 mm Borchardt"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      The cartridge that marked the beginning of one of the most interesting evolutionary lines
      in the history of semi-automatic pistols.
    </em>
  </p>
  <p>
    <strong>7.65×25 mm Borchardt</strong> is a German pistol cartridge developed
    in <strong>1893</strong> for the <strong>Borchardt C-93</strong> semi-automatic pistol
    designed by Hugo Borchardt. It holds a special place in the history of firearms
    ammunition, as it was among the first successfully developed
    <strong> rimless pistol cartridges</strong> and marked the beginning of a design lineage
    from which <strong>7.63×25 mm Mauser</strong>, <strong>7.62×25 mm Tokarev</strong>,
    <strong>7.65×21 mm Parabellum</strong>, and ultimately
    <strong>9×19 mm Parabellum</strong> would later emerge.
  </p>

  <h3>Borchardt C-93</h3>

  <img
    src="/images/calibers/cartridges/Borchardt C-93.png"
    alt="Borchardt C-93"
    style={{
      width: "45%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    The cartridge was created for the <strong>Borchardt C-93</strong> pistol,
    developed by the German designer <strong>Hugo Borchardt</strong>. The firearm itself
    was one of the most important early semi-automatic pistol designs and used
    a complex toggle-lock mechanism based on the locking principle of the Maxim machine gun.
  </p>

  <h3>History of Development</h3>

  <p>
    In the early 1890s, semi-automatic pistols were still a new and experimental field.
    Designers were looking for a way to create a compact personal firearm that could use
    the energy of the shot itself to reload automatically.
  </p>

  <p>
    During this period, <strong>Hugo Borchardt</strong> developed his semi-automatic
    <strong>C-93</strong> pistol. It required a new cartridge that combined a relatively
    small diameter with a high muzzle velocity for its time.
  </p>

  <p>
    Thus, around <strong>1893</strong>, the
    <strong>7.65×25 mm Borchardt</strong> appeared.
  </p>

  <p>
    Its design employed a construction unusual for pistol ammunition at the time:
    a <strong>rimless, bottlenecked case</strong> combined with a centerfire primer.
    The case shape allowed reliable feeding from the magazine while also providing
    a relatively large volume for the propellant charge.
  </p>

  <p>
    Some historical sources also identify <strong>Georg Luger</strong> as having
    participated in the cartridge's development. Luger was working with Borchardt
    at the time and later used the C-93 as a starting point for his own design.
    However, his role in creating the 7.65×25 mm Borchardt itself remains historically
    disputed, which is why the cartridge is most commonly associated with
    <strong>Borchardt C-93 and Hugo Borchardt</strong>.
  </p>

  <h3>The First Successful Rimless Pistol Cartridge</h3>

  <p>
    One of the most important features of the <strong>7.65×25 Borchardt</strong>
    is its <strong>rimless design</strong>.
  </p>

  <p>
    In older cartridges, the rim generally played an important role in positioning
    the cartridge in the chamber. In the <strong>7.65×25 Borchardt</strong>,
    this function was achieved through the geometry of the case and chamber.
  </p>

  <p>
    The case is <strong>bottlenecked</strong>, with a clearly defined shoulder and neck.
    This design allows a relatively large propellant charge to be used in a cartridge
    with a small bullet diameter.
  </p>

  <p>
    It was precisely this combination of a <strong>rimless case, high velocity,
    and suitability for a self-loading firearm</strong> that made the cartridge
    one of the most important early steps in the development of modern pistol ammunition.
  </p>

  <h3>Borchardt C-93 – The Firearm It Was Designed For</h3>

  <p>
    The <strong>7.65×25 Borchardt</strong> is inseparably linked to the
    <strong>Borchardt C-93</strong>.
  </p>

  <p>
    The C-93 uses a <strong>toggle-lock action</strong>, in which the barrel and
    bolt move backward when the weapon is fired. After a short movement, the mechanism
    unlocks and the bolt continues rearward, extracting and ejecting the spent case.
    The recoil mechanism then returns the bolt forward and feeds a new cartridge.
  </p>

  <p>
    The pistol uses a <strong>detachable magazine with an 8-round capacity</strong>.
  </p>

  <p>
    The design was exceptionally advanced for 1893, but it also had significant
    shortcomings. The C-93 was large and relatively heavy, while the positioning
    of its mechanisms behind the grip resulted in unusual balance and considerable
    dimensions. These characteristics later prompted Georg Luger to work on a more
    compact design.
  </p>

  <h3>Construction and Ballistic Characteristics</h3>

  <p>
    The <strong>7.65×25 mm Borchardt</strong> is a rimless cartridge with a
    bottlenecked case and centerfire ignition.
  </p>

  <p>
    The case length is approximately <strong>25.15 mm</strong>, and the bullet
    diameter is about <strong>7.86 mm</strong>.
  </p>

  <p>
    The cartridge uses bullets weighing approximately <strong>5.5 g</strong>.
    Depending on the specific historical ammunition and firearm, ballistic figures
    vary, but muzzle velocity is approximately <strong>390–400 m/s</strong>.
  </p>

  <p>
    With a 5.5 g bullet traveling at around 390 m/s, muzzle energy is approximately
    <strong>420 J</strong>.
  </p>

  <p>
    For the late nineteenth century, this represented a very high velocity for
    a pistol cartridge.
  </p>

  <p>
    This high velocity was one of the characteristics that later attracted the
    attention of designers working on the next generation of semi-automatic pistols.
  </p>

  <h3>From Borchardt to Mauser</h3>

  <p>
    The historical significance of the <strong>7.65×25 Borchardt</strong> extends
    far beyond the C-93.
  </p>

  <p>
    When the <strong>Feederle</strong> brothers began work on the design that would
    later become known as the <strong>Mauser C96</strong>, they used the
    <strong>7.65×25 Borchardt</strong> as the basis for their cartridge.
  </p>

  <p>
    This led to the development of the <strong>7.63×25 mm Mauser</strong>.
  </p>

  <p>
    The two cartridges have virtually identical basic geometric dimensions, but
    Mauser developed its own version with a different charge and higher ballistic
    performance. For this reason, the two cartridges should not be treated simply
    as different designations for the same ammunition.
  </p>

  <p>
    This marked the beginning of one of the best-known lineages in pistol cartridge history:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>
      7.65×25 Borchardt → 7.63×25 Mauser → 7.62×25 Tokarev
    </strong>
  </p>

  <h3>From Borchardt to Parabellum</h3>

  <p>
    The same cartridge also influenced the work of
    <strong>Georg Luger</strong>.
  </p>

  <p>
    Following trials of the Borchardt C-93 in 1897, the German arms industry
    assigned Luger the task of improving the design.
  </p>

  <p>
    One of the main changes was shortening the Borchardt case.
  </p>

  <p>
    This resulted in the <strong>7.65×21 mm Parabellum</strong>.
  </p>

  <p>
    Shortening the case by approximately 4 mm allowed Luger to create a more
    compact mechanism, reduce the travel of the toggle-lock action, and develop
    a slimmer pistol with an angled grip.
  </p>

  <p>
    This marked the beginning of the second major lineage:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>
      7.65×25 Borchardt → 7.65×21 Parabellum → 9×19 Parabellum
    </strong>
  </p>

  <p>
    In this way, a cartridge developed in 1893 became a direct predecessor of
    <strong>9×19 mm Parabellum</strong>, one of the most widely used pistol cartridges
    in the world.
  </p>

  <h3>The Connection to 7.62×25 Tokarev</h3>

  <p>
    Borchardt's influence continued into the twentieth century.
  </p>

  <p>
    The <strong>7.63×25 Mauser</strong>, derived from the
    <strong>7.65×25 Borchardt</strong>, later served as the basis for the Soviet
    <strong>7.62×25 Tokarev</strong>.
  </p>

  <p>
    Tokarev retained the basic concept and similar dimensions of its predecessors,
    but used more powerful loads and was intended for a newer generation of military
    pistols and submachine guns.
  </p>

  <p>
    Thus, more than three decades after Borchardt's introduction, its design concept
    continued to live on in one of the principal Soviet pistol cartridges.
  </p>

  <h3>Borchardt, Mauser, and Tokarev – Similar, but Not Identical</h3>

  <p>
    At first glance, the <strong>7.65×25 Borchardt</strong>,
    <strong>7.63×25 Mauser</strong>, and <strong>7.62×25 Tokarev</strong>
    appear to be practically the same cartridge under different designations.
  </p>

  <p>
    Historically, however, they are <strong>different cartridges</strong>,
    developed for different firearms and with different ballistic characteristics.
  </p>

  <p>
    It is particularly important to note that later Mauser and Tokarev loads can
    be significantly more powerful than the original Borchardt. This is why these
    cartridges should not be considered automatically interchangeable simply because
    their dimensions are similar.
  </p>

  <p>
    This distinction is especially important to collectors.
  </p>

  <h3>Distribution and Production</h3>

  <p>
    The Borchardt C-93 never achieved the widespread adoption of the later
    Mauser C96 and Luger Parabellum.
  </p>

  <p>
    Production of the C-93 was relatively limited, with approximately
    <strong>3,000 pistols produced</strong> commonly cited.
  </p>

  <p>
    The cartridge itself, however, was manufactured by several producers, including
    companies outside Germany. Manufacturers of the <strong>7.65×25 Borchardt</strong>
    at various times included <strong>DWM</strong>, <strong>Eley Brothers</strong>,
    <strong>Kynoch</strong>, <strong>Remington</strong>, and
    <strong>Winchester</strong>.
  </p>

  <p>
    This shows that the cartridge's significance was not determined solely by the
    number of C-93 pistols produced. Its true historical value lies in the fact
    that its design became the basis for several much more successful cartridges.
  </p>

  <h3>The End of Its Independent Use</h3>

  <p>
    With the arrival of more advanced designs, the <strong>7.65×25 Borchardt</strong>
    gradually disappeared from practical use.
  </p>

  <p>
    The Borchardt C-93 itself was superseded by more compact and convenient designs,
    the most important of which was the <strong>Luger Parabellum</strong>.
  </p>

  <p>
    Rather than disappearing without a trace, however, Borchardt's design concept
    continued to evolve.
  </p>

  <p>
    <strong>7.63×25 Mauser</strong> inherited the cartridge's basic dimensions.
  </p>

  <p>
    <strong>7.65×21 Parabellum</strong> inherited the concept but used a shorter case.
  </p>

  <p>
    These were later followed by <strong>7.62×25 Tokarev</strong> and
    <strong>9×19 Parabellum</strong>.
  </p>

  <h3>The Legacy of 7.65×25 Borchardt</h3>

  <p>
    The history of the <strong>7.65×25 Borchardt</strong> demonstrates how a
    relatively rare cartridge can have an enormous influence on the development
    of firearms technology.
  </p>

  <p>
    The C-93 itself remained relatively uncommon, but its cartridge became the
    basis for several of the best-known pistol cartridges of the twentieth century.
  </p>

  <p>
    Its place in this evolution can be represented as follows:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>7.65×25 Borchardt</strong>
  </p>

  <p style={{ textAlign: "center" }}>
    ↓
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>7.63×25 Mauser</strong>
  </p>

  <p style={{ textAlign: "center" }}>
    ↓
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>7.62×25 Tokarev</strong>
  </p>

  <p style={{ textAlign: "center" }}>
    And in parallel:
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>7.65×25 Borchardt</strong>
  </p>

  <p style={{ textAlign: "center" }}>
    ↓
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>7.65×21 Parabellum</strong>
  </p>

  <p style={{ textAlign: "center" }}>
    ↓
  </p>

  <p style={{ textAlign: "center" }}>
    <strong>9×19 Parabellum</strong>
  </p>

  <p>
    For this reason, the <strong>7.65×25 Borchardt</strong> should not be viewed
    simply as the cartridge of a rare pistol. It is
    <strong> one of the starting points in the modern history of high-velocity
    pistol ammunition</strong>.
  </p>

  <h3>Interesting Fact</h3>

  <p>
    The <strong>Borchardt C-93</strong> pistol is so unusual that it effectively
    looks like a transition between early experimental self-loading firearms and
    the future Luger.
  </p>

  <p>
    Luger retained the basic toggle-lock principle but changed almost everything
    around it: the shape of the grip, the arrangement of the mechanisms, and
    the length of the cartridge.
  </p>

  <p>
    In this way, a relatively cumbersome pistol led to the
    <strong>Luger Parabellum</strong>, and its cartridge eventually led to
    <strong>9×19 mm</strong>, which more than a century later remains one of the
    most widely used pistol cartridges in the world.
  </p>

  <h3>The Cartridge Today</h3>

  <p>
    The <strong>7.65×25 mm Borchardt</strong> has long since ceased to have
    any practical military or law-enforcement application.
  </p>

  <p>
    Today, it has almost entirely <strong>historical and collector significance</strong>,
    primarily associated with the Borchardt C-93 and the history of early
    semi-automatic pistols.
  </p>

  <p>
    Nevertheless, the cartridge remains extremely important for understanding
    the development of pistol ammunition.
  </p>

  <p>
    Without the <strong>7.65×25 Borchardt</strong>, the history of
    <strong>7.63×25 Mauser</strong>, <strong>7.62×25 Tokarev</strong>,
    <strong>7.65×21 Parabellum</strong>, and <strong>9×19 Parabellum</strong>
    would look very different.
  </p>

  <h3>Technical Data</h3>

  <TechnicalData
    language="en"
    title="7.65×25 mm Borchardt"
    data={[
      ["Parameter", "Value"],
      ["Designation", "7.65×25 mm Borchardt"],
      ["Other designations", "7.65 mm Borchardt"],
      ["Type", "Pistol cartridge"],
      ["Origin", "German Empire"],
      ["Year of development", "1893"],
      ["Associated firearm", "Borchardt C-93"],
      ["Designer", "Hugo Borchardt*"],
      ["Case", "Rimless, bottlenecked"],
      ["Case length", "25.15 mm"],
      ["Maximum cartridge length", "approximately 34 mm"],
      ["Bullet diameter", "approximately 7.86 mm"],
      ["Ignition", "Centerfire"],
      ["Typical bullet", "approximately 5.5 g"],
      ["Muzzle velocity", "approximately 390–400 m/s*"],
      ["Muzzle energy", "approximately 420 J*"],
      ["Primary firearm", "Borchardt C-93"],
    ]}
  />

  <p>
    * Ballistic characteristics depend on the specific historical ammunition
    and firearm. Various reference sources give values of approximately
    385–400 m/s and around 400–425 J.
  </p>

  <p>
    * Historical sources do not agree on the cartridge's authorship. Hugo Borchardt
    is directly associated with the development of the C-93 and its cartridge,
    while Georg Luger is also identified in some accounts as a participant or
    co-author of certain design solutions. For this reason, the cartridge is
    presented here as part of the <strong>Borchardt C-93</strong> system,
    without categorically attributing the entire design to a single designer.
  </p>

  <section>
    <h2>A History That Comes Full Circle</h2>

    <p>
      At first glance, <strong>7.65×25 mm Borchardt</strong>,
      <strong>7.63×25 mm Mauser</strong>, <strong>7.62×25 mm Tokarev</strong>,
      and <strong>7.65×21 mm Parabellum</strong> are simply four different
      cartridges from the late nineteenth and early twentieth centuries.
      Examined in sequence, however, they reveal one of the most interesting
      lineages in the development of pistol ammunition.
    </p>

    <p>
      The interesting thing is that GunsAtlas examines this history in reverse
      order compared with its historical development. We begin with the later
      cartridges and gradually work our way back to the
      <strong>7.65×25 mm Borchardt</strong>, which actually stands at the beginning
      of this story.
    </p>

    <p>
      In <strong>1893</strong>, the Borchardt C-93 and its 7.65×25 mm cartridge
      represented one of the early successful implementations of a self-loading
      pistol system. Just a few years later, its design was already influencing
      the next generation of firearms and ammunition.
    </p>

    <p>
      Two particularly important branches developed from it.
    </p>

    <p>
      One passed through <strong>7.63×25 mm Mauser</strong> and later the Soviet
      <strong>7.62×25 mm Tokarev</strong>:
    </p>

    <p style={{ textAlign: "center" }}>
      <strong>
        7.65×25 Borchardt → 7.63×25 Mauser → 7.62×25 Tokarev
      </strong>
    </p>

    <p>
      The other led to <strong>7.65×21 mm Parabellum</strong> and subsequently
      to one of the most widely used pistol cartridges in the world:
    </p>

    <p style={{ textAlign: "center" }}>
      <strong>
        7.65×25 Borchardt → 7.65×21 Parabellum → 9×19 mm Parabellum
      </strong>
    </p>

    <p>
      This illustrates an important aspect of ammunition development: new cartridges
      rarely emerge entirely independently of their predecessors. Designers build
      on existing solutions, modify dimensions, loads, and construction, and
      gradually adapt them to new requirements.
    </p>

    <p>
      Thus, a cartridge developed for a relatively rare pistol in
      <strong>1893</strong> became connected to several of the most significant
      pistol cartridges of the twentieth century.
    </p>

    <p>
      And this is where the history of these four cartridges comes full circle:
      we began with later developments and, having reached
      <strong>7.65×25 mm Borchardt</strong>, discover that we have reached not
      the end, but <strong>the beginning of an entire evolution</strong>.
    </p>
  </section>
</Section>

<Section
  id="8-5x26-mars"
  title="8.5×26 mm Mars (.330 Mars)"
>
  <img
    src="/images/calibers/cartridges/8.5x26 Mars.png"
    alt="8.5×26 mm Mars (.330 Mars)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
    <em>
      One of the most powerful and unusual pistol cartridges of the early 20th century.
    </em>
  </p>
  <p>
  <strong>8.5×26 mm Mars</strong>, also known as
  <strong> .330 Mars</strong> and <strong> .330 Gabbet-Fairfax</strong>, is a rare
  British pistol cartridge from the late 19th and early 20th centuries. It was
  specifically developed for the <strong>Mars</strong> self-loading pistol,
  designed by the British inventor <strong>Hugh Gabbet-Fairfax</strong>.
</p>

<p>
  The cartridge is among the most powerful pistol cartridges developed in the
  early 20th century. However, the weapon's unusual design, complex mechanism,
  large dimensions, and heavy recoil limited its practical use.
</p>
<h3>Development History</h3>

<p>
  In the late 19th century, self-loading pistols were still a relatively new
  technology, and designers were exploring different approaches to creating
  reliable and powerful automatic firearms. Among them was the British inventor
  <strong> Hugh Gabbet-Fairfax</strong>, who developed an unusual self-loading
  pistol design that became known as the <strong>Mars</strong>.
</p>

<p>
  Special cartridges in several calibers were developed for the weapon. One of
  them was <strong> .330 Mars</strong>, which received the metric designation
  <strong> 8.5×26 mm Mars</strong>. The cartridge used a bottlenecked,
  rimless case and was designed for the pistol's specific operating mechanism.
</p>

<p>
  In <strong>1899</strong>, Webley &amp; Scott began work on manufacturing the
  Mars pistol. The ammunition was produced by British manufacturers, including
  <strong>Kynoch</strong>.
</p>
<h3>The Mars Pistol</h3>

<img
  src="/images/calibers/cartridges/Mars pistol.png"
  alt="Mars pistol"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "0 auto 30px auto",
  }}
/>
<p>
  The cartridge is inseparably linked to the Mars pistol. The weapon was unusual
  not only because of its size and power, but also because of its operating
  mechanism.
</p>

<p>
  The Mars used <strong>long recoil operation of the barrel and bolt</strong>,
  combined with a rotating bolt. Its feeding system was also unusual — cartridges
  were drawn backward from the magazine and then raised toward the chamber.
</p>

<p>
  The Mars was conceived as an exceptionally powerful self-loading pistol. For
  its time, it offered impressive firepower, but this came at the cost of its
  size, weight, complexity, and heavy recoil.
</p>

<p>
  These characteristics proved to be serious disadvantages in practical use.
</p>
<h3>Design and Features</h3>

<p>
  <strong>8.5×26 mm Mars</strong> is a rimless cartridge with a bottlenecked case.
  The nominal bullet diameter is approximately <strong>8.5 mm</strong>, while
  the case length is approximately <strong>26 mm</strong>.
</p>

<p>
  The cartridge's design was tailored to the Mars's specific operating mechanism.
  The combination of a relatively heavy bullet and a substantial propellant
  charge provided a high muzzle velocity.
</p>

<p>
  Different ballistic figures can be found for this cartridge in historical and
  modern sources. Velocities of around <strong>530 m/s (1750 ft/s)</strong> are
  reported. With a bullet weighing approximately <strong>9 g</strong>, this
  corresponds to a kinetic energy of roughly <strong>1260–1275 J</strong>.
</p>

<p>
  These figures explain the reputation of the .330 Mars as one of the most
  powerful pistol cartridges of the early 20th century.
</p>
<h3>Military Trials</h3>

<p>
  The Mars's power attracted the attention of the British military. Between
  <strong> 1901 and 1903</strong>, the pistol was repeatedly presented for
  military trials and demonstrations.
</p>

<p>
  The trials showed that the weapon had good accuracy and considerable
  penetration, but they also revealed serious shortcomings. These included its
  complex design, heavy weight, strong recoil, heavy trigger pull, and problems
  with feeding and case ejection. During some trials, cases were ejected backward
  toward the shooter's face.
</p>

<p>
  Ultimately, the Mars failed to secure a military contract and
  <strong> was never adopted by the British Army</strong>.
</p>
<h3>End of Production</h3>

<p>
  After failing the military trials, the Mars was also offered for civilian use,
  but its unusual design, high price, and heavy recoil prevented it from achieving
  commercial success.
</p>

<p>
  In <strong>1905–1906</strong>, attempts were made to revive the project through
  the Mars Automatic Pistol Syndicate, but these also failed. By
  <strong> 1907</strong>, production had been permanently discontinued.
</p>

<p>
  Probably <strong>around 80 pistols</strong> were manufactured, making the Mars
  and its cartridges exceptionally rare collector's items.
</p>
<h3>The Mars Cartridge Family</h3>

<p>
  <strong>.330 Mars</strong> was not the only cartridge developed for the Mars
  system.
</p>

<p>
  Other cartridges from the <strong> Mars</strong> family were also used during
  its development, including:
</p>

<ul>
  <li><strong>.450 Mars Short</strong></li>
  <li><strong>.450 Mars Long</strong></li>
  <li><strong>.360 Mars</strong></li>
  <li><strong>.330 Mars</strong></li>
</ul>

<p>
  All of them used distinctive bottlenecked cases and were developed to deliver
  considerable firepower for their era.
</p>
<h3>Interesting Fact</h3>

<p>
  One reason the Mars remains part of firearms history is the paradoxical
  combination of <strong>exceptional power and an exceptionally complex design</strong>.
</p>

<p>
  During military trials, heavy recoil proved to be one of the weapon's most
  serious drawbacks. One of the officers who participated in the 1902 trials
  described firing the Mars as an extremely unpleasant experience.
</p>

<p>
  The Mars is a telling example of the early development of self-loading pistols,
  when designers experimented with both new operating mechanisms and very
  powerful cartridges.
</p>

<h3>The Cartridge Today</h3>

<p>
  Today, <strong>8.5×26 mm Mars (.330 Mars)</strong> is effectively obsolete and
  is of interest primarily to collectors of rare firearms and ammunition.
</p>

<p>
  Original cartridges are exceptionally rare, and finding a Mars pistol in good
  condition is even more difficult.
</p>

<p>
  Because of the small number of weapons produced and the fact that production
  ended more than a century ago, the cartridge has no modern practical application.
</p>

<p>
  It remains interesting primarily as an example of the early development of
  self-loading pistols and the efforts of designers of the era to create
  increasingly powerful ammunition.
</p>
<h3>Technical Data</h3>

<TechnicalData
  language="en"
  title="8.5×26 mm Mars (.330 Mars)"
  data={[
    ["Specification", "Data"],
    ["Designation", "8.5×26 mm Mars"],
    ["Other designation", ".330 Mars"],
    ["Alternative designation", ".330 Gabbet-Fairfax"],
    ["Type", "Pistol cartridge"],
    ["Case design", "Rimless, bottlenecked"],
    ["Case length", "approximately 26 mm"],
    ["Overall cartridge length", "approximately 36–37 mm"],
    ["Bullet diameter", "approximately 8.5 mm"],
    ["Bullet weight", "approximately 9 g"],
    ["Muzzle velocity", "approximately 530 m/s*"],
    ["Kinetic energy", "approximately 1260–1275 J*"],
    ["Primary firearm", "Mars Automatic Pistol"],
  ]}
/>

<p>
  * Ballistic figures vary depending on the load used and the specific historical
  source. The energy figure of approximately <strong>1270 J</strong> is
  calculated for a 9 g bullet with a muzzle velocity of 530 m/s.
</p>

</Section>

<Section
  id="9-17x-browning-short"
  title="9×17 mm Browning Short (.380 ACP)"
>
  <img
    src="/images/calibers/cartridges/9х17 short.png"
    alt="9×17 mm Browning Short (.380 ACP)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    John Browning's small 9 mm cartridge, which became one of the most widely used
    rounds for compact pistols during the 20th century.
  </em>
</p>
<p>
  <strong>9×17 mm Browning Short</strong>, known in the United States as
  <strong> .380 ACP</strong> or <strong>.380 Auto</strong>, is one of the most
  significant compact pistol cartridges in history. Developed by
  <strong> John Moses Browning</strong> in the early 20th century, it offers
  a larger bullet and greater power than the 7.65×17 mm Browning (.32 ACP), while
  remaining suitable for relatively small and lightweight self-loading pistols.
</p>

<p>
  In Europe, the cartridge acquired various designations, including
  <strong> 9 mm Browning Short</strong>, <strong>9 mm Kurz</strong>, and
  <strong> 9 mm Corto</strong>. Despite the different names, these refer to the
  same basic cartridge. C.I.P. registers it as
  <strong> 9 mm Browning Court</strong>, with alternative names including 9 mm
  Browning Kurz, 9 mm Browning Corto, .380 ACP, and .380 Auto.
</p>

<h3>Development History</h3>

<p>
  The history of the 9×17 mm Browning Short is closely connected with the
  development of compact self-loading pistols by <strong>John Browning</strong>.
</p>

<p>
  By the late 19th and early 20th centuries, Browning already had considerable
  experience with small self-loading pistols. His
  <strong>7.65×17 mm Browning (.32 ACP)</strong> became an extremely successful
  cartridge for compact firearms.
</p>

<p>
  Gradually, however, a need emerged for a more powerful cartridge that could
  be used in a pistol of similar dimensions. The solution was to increase the
  bullet diameter to 9 mm while retaining a relatively short case.
</p>

<p>
  The new cartridge was developed in <strong>1908</strong> and was intended for
  the new <strong>Colt Model 1908 Pocket Hammerless</strong>. Its American
  designation became <strong>.380 Automatic Colt Pistol (.380 ACP)</strong>.
</p>
<h3>Colt Model 1908 Pocket Hammerless</h3>

<img
  src="/images/calibers/cartridges/Colt Model1908.png"
  alt="Colt Model 1908 Pocket Hammerless"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "0 auto 30px auto",
  }}
/>
<p>
  The pistol was designed by Browning as a more powerful version of the compact
  Colt Model 1903. The new cartridge allowed the firearm to retain its
  characteristic flat, compact dimensions while offering a larger bullet than
  the 7.65×17 mm Browning.
</p>

<p>
  This combination proved successful and marked the beginning of the .380 ACP's
  long service life as a compact-pistol cartridge.
</p>
<h3>From America to Europe</h3>

<p>
  In the United States, the cartridge became established as <strong>.380 ACP</strong>,
  while in Europe it acquired the designations <strong>9 mm Browning Short</strong>,
  <strong> 9 mm Kurz</strong>, <strong>9 mm Corto</strong>, and
  <strong> 9×17 mm </strong>.
</p>

<p>
  Its spread across Europe began somewhat later. One of the most important
  models was the <strong>FN Browning Model 1910</strong>, designed by Browning
  for the Belgian company <strong>Fabrique Nationale (FN)</strong>.
</p>

<p>
  The Model 1910 was designed to accommodate both
  <strong> 7.65×17 mm Browning</strong> and the new
  <strong> 9×17 mm Browning Short</strong>. Production of the pistol began in
  1910, while the 9 mm version appeared in <strong> 1912</strong>.
</p>

<p>
  This is a particularly interesting connection with the previously discussed
  7.65×17 mm Browning: both cartridges occupy the same general niche, but the
  9×17 mm offers a larger bullet and greater power.
</p>

<p>
  The FN Model 1910 became one of the most successful compact pistols of its
  time and remained in production until <strong>1983</strong>.
</p>

<h3>Design and Features</h3>

<p>
  The 9×17 mm Browning Short is a <strong>rimless cartridge with a cylindrical
  case and centerfire ignition</strong>.
</p>

<p>
  According to the current <strong>C.I.P.</strong> dimensions, the nominal case
  length is <strong>17.30 mm</strong>, while the maximum cartridge length is
  <strong> 25.00 mm</strong>. The bullet diameter is approximately
  <strong> 9.04 mm</strong>.
</p>

<p>
  For comparison, the <strong>7.65×17 mm Browning</strong> has a case of similar
  length, but its bullet diameter is considerably smaller. This allowed Browning
  to create a 9 mm cartridge that remained compact enough for small pistols.
</p>

<p>
  The cartridge is particularly well suited to firearms with a
  <strong>straight-blowback action</strong>. In this system, the barrel and slide
  are not mechanically locked together when the shot is fired. The slide's
  sufficient mass and the force of the recoil spring keep it closed for the
  necessary amount of time.
</p>

<p>
  This makes it possible to build relatively simple and reliable pistols.
</p>

<p>
  Classic firearms chambered for this cartridge include the
  <strong>FN Model 1910</strong>, <strong>Walther PP</strong>,
  <strong>Walther PPK</strong>, and <strong>Beretta M1934</strong>. The Walther
  PP/PPK, for example, use a straight-blowback action and became widely used
  police and civilian pistols in Europe.
</p>

<p>
  Later, .380 ACP pistols with locked-breech designs also appeared, demonstrating
  that a straight-blowback action is not mandatory for this cartridge.
</p>

<h3>Ballistic Characteristics</h3>

<p>
  The 9×17 mm was developed as a <strong>compromise between compactness and power</strong>.
</p>

<p>
  Compared with the 7.65×17 mm Browning, it uses a larger and generally heavier
  bullet. Compared with the 9×19 mm Parabellum, however, it has considerably
  less power.
</p>

<p>
  For a historical Belgian load with a bullet weighing approximately
  <strong>6.16 g</strong>, a muzzle velocity of around <strong>290 m/s</strong>
  is reported, corresponding to approximately <strong>259 J</strong>. Modern
  factory ammunition can vary considerably depending on bullet weight and
  construction. For example, modern loads may use a 5.5 g bullet at 305 m/s or
  a 6.61 g bullet at 285 m/s.
</p>

<p>
  Therefore, there is no single universal figure for the muzzle velocity or
  muzzle energy of the 9×17 mm.
</p>

<p>
  Its low to moderate power was one of the factors that made it possible to
  develop small, relatively lightweight pistols with manageable recoil.
</p>
<h3>Military and Police Use</h3>

<p>
  Although the .380 ACP was originally intended primarily for compact pistols,
  it achieved significant <strong>police and service use</strong> in Europe.
</p>

<p>
  Particularly well-known pistols include:
</p>

<ul>
  <li><strong>FN Browning Model 1910</strong></li>
  <li><strong>FN Browning Model 1922</strong></li>
  <li><strong>Walther PP</strong></li>
  <li><strong>Walther PPK</strong></li>
  <li><strong>Beretta M1934</strong></li>
  <li><strong>ČZ vz. 38</strong></li>
  <li><strong>FÉG 37M</strong></li>
</ul>

<p>
  During World War II, various pistols chambered in 9×17 mm were used by German
  military and police organizations, as well as by other European countries.
</p>

<p>
  After World War II, the cartridge continued to play an important role in
  police service. In some European countries, it remained in service into the
  1960s and 1970s.
</p>

<p>
  Its military significance gradually declined as the more powerful
  <strong>9×19 mm Parabellum</strong> became established as a standard pistol
  cartridge, particularly after the creation of NATO and the adoption of 9×19 mm
  as a standard pistol round.
</p>

<h3>Notable Firearms</h3>

<p>
  Over more than a century of use, the 9×17 mm cartridge has been chambered in
  a vast number of pistols.
</p>

<p>
  Some of the best known include:
</p>

<ul>
  <li><strong>Colt Model 1908 Pocket Hammerless</strong></li>
  <li><strong>FN Browning Model 1910</strong></li>
  <li><strong>FN Browning Model 1922</strong></li>
  <li><strong>Walther PP</strong></li>
  <li><strong>Walther PPK</strong></li>
  <li><strong>Beretta M1934</strong></li>
  <li><strong>ČZ vz. 38</strong></li>
  <li><strong>FÉG 37M</strong></li>
  <li><strong>SIG Sauer P230/P232</strong></li>
  <li><strong>Browning BDA</strong></li>
</ul>

<p>
  This variety demonstrates how firmly the cartridge became established in the
  compact-pistol category.
</p>
<h3>9×17 mm and 7.65×17 mm Browning</h3>

<p>
  The 9×17 mm has a particularly important connection with the
  <strong>7.65×17 mm Browning (.32 ACP)</strong>.
</p>

<p>
  Both cartridges belong to the same concept of compact self-loading pistols
  developed by John Browning. The 7.65×17 mm is the older of the two, while the
  9×17 mm offers a larger bullet diameter within a similar overall concept and
  comparable dimensions.
</p>

<p>
  This relationship is especially clear in the <strong>FN Model 1910</strong>,
  which was offered in both calibers.
</p>

<p>
  The 9×17 mm can therefore be viewed as a development of Browning's concept
  for a small service and civilian pistol, seeking to provide a larger bullet
  without significantly increasing the firearm's dimensions.
</p>

<h3>Relationship to Other Cartridges</h3>

<p>
  The 9×17 mm Browning Short is part of the broader development of cartridges
  designed by John Browning for self-loading pistols.
</p>

<p>
  Chronologically, it appeared after the <strong>7.65×17 mm Browning
  (.32 ACP)</strong> and offered a larger caliber while retaining compact
  dimensions.
</p>

<p>
  It should not be confused with the <strong>9×20 mm Browning Long</strong>,
  another Belgian cartridge developed for more powerful pistols, with different
  dimensions and ballistic characteristics.
</p>

<p>
  The 9×17 mm is also not directly interchangeable with the
  <strong>9×19 mm Parabellum</strong>. Despite their similar nominal bullet
  diameters, the two cartridges differ in dimensions, pressure, and intended use.
</p>

<h3>Not to Be Confused with .38 ACP</h3>

<p>
  One of the most common misconceptions is confusing <strong>.380 ACP</strong>
  with <strong>.38 ACP</strong>.
</p>

<p>
  Their names are similar, but they are <strong>two different cartridges</strong>.
</p>

<p>
  <strong>.380 ACP</strong> is 9×17 mm — a relatively short cartridge intended
  primarily for compact pistols.
</p>

<p>
  <strong>.38 ACP</strong> is Browning's older cartridge, known as
  <strong>9×23 mm SR</strong>. It has a considerably longer case and higher
  ballistic performance.
</p>

<p>
  Therefore, <strong>.380 ACP and .38 ACP are not interchangeable designations</strong>.
</p>


<p>
  The existence of so many cartridges with a nominal bullet diameter of 9 mm
  often leads to confusion.
</p>

<h3>Interesting Fact</h3>

<p>
  One of the most interesting features of the .380 ACP is that it has managed
  to fulfill <strong>two different roles</strong>.
</p>

<p>
  In the United States, the cartridge remains strongly associated with compact
  and pocket pistols, while in Europe it also became a widely used
  <strong>police and service cartridge</strong>.
</p>

<p>
  This explains why, during the 20th century, both extremely small pocket pistols
  and relatively large service models could be found chambered in .380 ACP.
</p>

<h3>The Cartridge Today</h3>

<p>
  More than a century after its creation, the <strong>9×17 mm Browning Short</strong>
  remains in production.
</p>

<p>
  Although it has been replaced by more powerful cartridges in many military
  and police organizations, the .380 ACP remains popular in
  <strong> compact and subcompact pistols</strong>.
</p>

<p>
  Modern production offers a wide range of ammunition with different bullet
  designs and ballistic characteristics.
</p>

<p>
  The cartridge has thus retained its original concept for more than a century
  after its development — <strong>a compact firearm, moderate recoil, and
  sufficient power for its intended purpose</strong>.
</p>

<h3>Technical Data</h3>

<TechnicalData
  language="en"
  title="9×17 mm Browning Short (.380 ACP)"
  data={[
    ["Specification", "Data"],
    ["Primary designation", "9×17 mm Browning Short"],
    ["American designation", ".380 ACP / .380 Auto"],
    ["European designations", "9 mm Browning Short / 9 mm Kurz / 9 mm Corto"],
    ["C.I.P. designation", "9 mm Browning Court"],
    ["Type", "Pistol cartridge"],
    ["Origin", "United States"],
    ["Designer", "John Moses Browning"],
    ["Year developed", "1908"],
    ["Case length", "17.30 mm"],
    ["Maximum cartridge length", "25.00 mm"],
    ["Bullet diameter", "approximately 9.04 mm"],
    ["Case type", "Rimless, cylindrical"],
    ["Ignition", "Centerfire"],
    ["Maximum average pressure according to C.I.P.", "1350 bar"],
    ["Typical bullet weight", "approximately 5.5–6.2 g"],
    ["Typical muzzle velocity", "approximately 285–305 m/s*"],
    ["Typical muzzle energy", "approximately 220–270 J*"],
    ["First widely known firearm", "Colt Model 1908 Pocket Hammerless"],
    ["Primary purpose", "Compact and service self-loading pistols"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific ammunition, bullet weight and
  construction, and barrel length. For example, an original FN load with a
  bullet weighing approximately 6.16 g is reported to have a muzzle velocity of
  around 290 m/s and energy of around 260 J, while modern loads can differ
  considerably.
</p>
</Section>

<Section
  id="9-18-ultra-police"
  title="9×18 mm Ultra / 9×18 mm Police"
>
  <img
    src="/images/calibers/cartridges/9x18 Ultra.png"
    alt="9×18 mm Ultra / 9×18 mm Police"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
  <em>
    <strong>
      The German intermediate 9 mm cartridge, developed in the 1930s and revived
      in the 1970s, but ultimately unable to displace the 9×19 Parabellum.
    </strong>
  </em>
</p>
<p>
  <strong>9×18 mm Ultra</strong>, also known as <strong>9×18 mm Police</strong>,
  <strong>9 mm Ultra</strong>, <strong>9 mm Police</strong>, and
  <strong>9 mm Super</strong>, is a German pistol cartridge developed with the
  aim of filling the gap between the relatively weak
  <strong>9×17 mm Browning Short (.380 ACP)</strong> and the more powerful
  <strong>9×19 mm Parabellum</strong>.
</p>

<p>
  Its history is unusual. The first version appeared in Germany in
  <strong>1936</strong> as an experimental cartridge developed by
  <strong>GECO (Gustav Genschow &amp; Co.) and Walther</strong> in connection
  with the requirements of German military organizations. This project remained
  limited in scope and did not become a widely adopted service cartridge.
</p>

<p>
  During the 1960s and early 1970s, the idea was revived. This time, the goal
  was to create a <strong>police cartridge</strong> that offered greater power
  than the 9×17 mm while allowing the use of compact pistols with a
  <strong>straight-blowback action</strong>.
</p>

<p>
  The <strong>Walther PP Super</strong> and <strong>SIG P230</strong> appeared,
  but the second attempt also achieved only limited success. German police
  forces gradually turned to the <strong>9×19 mm Parabellum</strong>, which
  offered greater ballistic performance and already enjoyed enormous
  international distribution.
</p>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "30px",
  }}
>
  <div style={{ width: "43%", textAlign: "center" }}>
    <h3>Walther PP Super</h3>

    <img
      src="/images/calibers/cartridges/Walther PP Super_9x18 ultra .png"
      alt="Walther PP Super"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>

  <div style={{ width: "43%", textAlign: "center" }}>
    <h3>SIG P230</h3>

   <img
  src="/images/calibers/cartridges/SIG P230_9x18 ultra.png"
  alt="SIG P230"
  style={{
    width: "100%",
    height: "auto",
    display: "block",
  }}
/>
    
  </div>
</div>
<h3>Development History</h3>

<p>
  During the 1930s, German designers explored the possibility of developing a
  cartridge more powerful than the
  <strong> 9×17 mm Browning Short</strong>, but that would not reach the
  performance of the <strong>9×19 mm Parabellum</strong>.
</p>

<p>
  The reason was related to pistol design.
</p>

<p>
  Relatively low-powered cartridges can be used in firearms with a
  <strong>straight-blowback action</strong>, allowing for a simpler and more
  compact design. More powerful cartridges such as the 9×19 mm, however,
  generally require a locking system.
</p>

<p>
  The idea was to find an intermediate solution: <strong>a more powerful 9 mm
  cartridge that could still operate in a straight-blowback firearm</strong>.
</p>

<p>
  Around <strong>1936</strong>, GECO and Walther developed the first
  <strong> 9 mm Ultra</strong>. This version was associated with the requirements
  of the German military, including the Luftwaffe, and was conceived as a more
  powerful alternative to the 9 mm Kurz.
</p>

<p>
  The pre-war version used a case approximately
  <strong> 18.5 mm</strong> long, making it slightly longer than the case of the
  later standardized 9 mm Police.
</p>

<p>
  The project never reached large-scale production, and its development was
  discontinued during World War II.
</p>
<h3>The Second Life of the 9 mm Ultra</h3>

<p>
  After World War II, the idea of an intermediate 9 mm cartridge became relevant
  once again.
</p>

<p>
  During the 1960s, the German police sought a more powerful alternative to the
  widely used <strong>7.65×17 mm Browning</strong> and
  <strong> 9×17 mm Browning Short</strong>.
</p>

<p>
  At the same time, they wanted a firearm more compact than standard pistols
  chambered in 9×19 mm.
</p>

<p>
  This marked the beginning of a new phase in the cartridge's development.
</p>

<p>
  SIG worked on the <strong>9 mm Police</strong> in connection with the
  development of its new <strong>P230</strong> pistol, while Dynamit Nobel/GECO
  developed the version known as the <strong>9 mm Ultra</strong>. The Austrian
  company <strong>Hirtenberger</strong>, which manufactured the 9 mm Police,
  also participated in the ammunition's development.
</p>

<p>
  Gradually, the two versions converged, and <strong> 9 mm Police</strong> and
  <strong> 9 mm Ultra</strong> came to be used as designations for the same
  post-war standardized cartridge.
</p>

<p>
  This should be distinguished from the original pre-war
  <strong> 9 mm Ultra</strong>, which was a separate experimental version with
  different dimensions.
</p>
<h3>Design and Features</h3>

<p>
  The post-war <strong>9×18 mm Ultra/Police</strong> is a
  <strong>rimless cartridge with a cylindrical case and centerfire ignition</strong>.
</p>

<p>
  The case has a nominal length of approximately <strong>18 mm</strong>, while
  the overall cartridge length is approximately <strong>25.2–25.4 mm</strong>.
</p>

<p>
  The bullet diameter is approximately <strong>9.0 mm</strong>.
</p>

<p>
  One characteristic feature of the cartridge is the relatively small diameter
  of the case head compared with some other 9 mm designs. This is part of the
  geometry developed for the specific firearm systems.
</p>

<p>
  The fundamental concept remained the same as in the original project:
  <strong>to achieve the greatest possible power compatible with a
  straight-blowback action</strong>.
</p>

<p>
  This allowed the use of a relatively simple mechanism without the conventional
  locking system found in 9×19 mm pistols.
</p>
<h3>Ballistic Characteristics</h3>

<p>
  The 9×18 Ultra/Police occupies an intermediate position between
  <strong> 9×17 Browning Short</strong> and <strong>9×19 Parabellum</strong>.
</p>

<p>
  Typical loads use bullets weighing approximately <strong>6.1–6.5 g</strong>,
  with a muzzle velocity of around <strong>310–330 m/s</strong>.
</p>

<p>
  This produces a muzzle energy of approximately <strong>314–340 J</strong>,
  depending on the specific cartridge.
</p>

<p>
  For example, a 6.48 g bullet traveling at approximately 323 m/s has a kinetic
  energy of around <strong>338 J</strong>.
</p>

<p>
  These characteristics are noticeably greater than those typical of the
  <strong> 9×17 mm Browning Short</strong>, but remain below the level of
  standard <strong> 9×19 mm Parabellum</strong> loads.
</p>

<p>
  This was precisely the intended compromise.
</p>
<h3>Walther PP Super</h3>

<p>
  The best-known firearm designed for this cartridge is the
  <strong>Walther PP Super</strong>.
</p>

<p>
  The pistol was introduced in the early 1970s as a development of the well-known
  Walther PP concept, but it was considerably larger and more robust.
</p>

<p>
  It uses a <strong>straight-blowback action</strong> and was specifically
  developed for the 9 mm Police/Ultra cartridge.
</p>

<p>
  Walther sought to create a modern police firearm that would offer more power
  than traditional 7.65 mm and 9×17 mm pistols without requiring the locked-breech
  system used for 9×19 mm.
</p>

<p>
  The PP Super was tested by German police organizations, including those in
  <strong>Bavaria and Rhineland-Palatinate</strong>, but it did not achieve
  widespread adoption.
</p>

<h3>SIG P230</h3>

<p>
  The other principal pistol associated with this cartridge is the
  <strong>SIG P230</strong>.
</p>

<p>
  SIG developed the 9 mm Police in connection with requirements for a compact
  police firearm.
</p>

<p>
  The P230 also uses a <strong>straight-blowback action</strong> and was designed
  to combine relatively compact dimensions with greater power than traditional
  9×17 mm pistols.
</p>

<p>
  The <strong>Walther PP Super and SIG P230</strong> became the best-known
  firearm systems associated with the 9×18 Ultra/Police.
</p>
<h3>Police Use</h3>

<p>
  The cartridge's revival during the 1960s and 1970s was directly connected with
  the development of police firearms in West Germany.
</p>

<p>
  The idea appeared logical:
</p>

<p>
  <strong>9×17 mm → insufficient power</strong>
</p>

<p>
  <strong>9×18 mm Police → intermediate solution</strong>
</p>

<p>
  <strong>9×19 mm → more powerful, but requires a more complex design</strong>
</p>

<p>
  In practice, however, the advantage of the 9×18 mm gradually disappeared.
</p>

<p>
  The development of compact pistols with locked barrels made it possible to
  create relatively small firearms chambered in <strong>9×19 mm</strong>.
</p>

<p>
  As a result, there was no longer a need for a separate intermediate cartridge
  simply to retain a straight-blowback action.
</p>

<p>
  German police organizations gradually adopted <strong>9×19 mm</strong> and
  firearms such as the <strong>Walther P5</strong> and
  <strong>SIG-Sauer P225</strong>.
</p>

<p>
  This effectively ended the attempt to establish the
  <strong>9×18 Ultra/Police</strong> as a standard police cartridge.
</p>
<h3>Why Did the Cartridge Fail to Gain Acceptance?</h3>

<p>
  The reason for its lack of success is interesting.
</p>

<p>
  The 9×18 Ultra/Police was designed to fill a specific technical niche. It
  offered more power than the <strong>9×17 mm</strong> while retaining the
  possibility of using a straight-blowback action.
</p>

<p>
  The problem was that firearm technology continued to evolve.
</p>

<p>
  As compact pistols with locked barrels became smaller, lighter, and more
  reliable, the advantages of a straight-blowback action were no longer
  sufficient to justify a separate cartridge.
</p>

<p>
  At the same time, the <strong>9×19 mm</strong> was already a firmly established
  cartridge supported by an enormous manufacturing and logistical infrastructure.
</p>

<p>
  Consequently, the <strong>9×18 Ultra/Police</strong> became an
  <strong>intermediate solution whose historical necessity gradually disappeared</strong>.
</p>
<h3>9×18 Ultra and 9×18 Makarov</h3>

<p>
  This is one of the most important sections concerning this cartridge.
</p>

<p>
  <strong>9×18 mm Ultra/Police and 9×18 mm Makarov are different cartridges.</strong>
</p>

<p>
  The shared "9×18" designation is coincidental and does not imply interchangeability.
</p>

<p>
  One visible difference is the bullet diameter. The 9×18 Ultra bullet measures
  approximately <strong>9.0 mm</strong>, while the
  <strong>9×18 Makarov</strong> bullet measures approximately
  <strong>9.25 mm</strong>.
</p>

<p>
  They also differ in cartridge geometry, pressure, and ballistic characteristics.
</p>

<p>
  Therefore:
</p>

<p>
  <strong>9×18 Ultra ≠ 9×18 Makarov</strong>
</p>

<p>
  This distinction is particularly important when collecting ammunition, since
  two cartridges marked "9×18" may look similar while being intended for
  entirely different firearms.
</p>

<h3>9×18 Ultra and 9×17 Browning Short</h3>

<p>
  The relationship between these two cartridges is much more direct than their
  relationship with the 9×18 Makarov.
</p>

<p>
  The 9×18 Ultra was developed specifically as a
  <strong>more powerful intermediate alternative to the 9×17 Browning Short</strong>.
</p>

<p>
  It retained relatively compact dimensions and the concept of a firearm with
  a straight-blowback action, but used a longer case and a larger propellant charge.
</p>

<p>
  It can therefore be viewed as an attempt to develop the concept further:
</p>

<p>
  <strong>9×17 Browning Short → 9×18 Ultra/Police</strong>
</p>

<p>
  However, this should not be interpreted as a direct design derivative in the
  same way that, for example, <strong>7.63×25 Mauser → 7.62×25 Tokarev</strong>
  represents a clearly documented historical lineage.
</p>

<p>
  In the case of the 9×18 Ultra, it is more accurate to describe it as a
  <strong>development within the same conceptual niche</strong>.
</p>

<h3>Not to Be Confused with the 9×18 Makarov</h3>

<p>
  <strong>9×18 Ultra / Police</strong>
</p>

<ul>
  <li>Germany / Western Europe</li>
  <li>Case approximately 18 mm long</li>
  <li>Bullet approximately 9.0 mm in diameter</li>
  <li><strong>Walther PP Super</strong></li>
  <li><strong>SIG P230</strong></li>
  <li>Designed for relatively compact pistols with a straight-blowback action</li>
</ul>

<p style={{ marginTop: "30px" }}>
  <strong>9×18 Makarov</strong>
</p>

<ul>
  <li>USSR</li>
  <li>Different design</li>
  <li>Bullet approximately 9.25 mm in diameter</li>
  <li>PM Makarov and other Soviet/Eastern European firearms</li>
  <li>Separate history and ballistic characteristics</li>
</ul>

<p style={{ marginTop: "30px" }}>
  The two cartridges <strong>are not interchangeable</strong>.
</p>

<h3>Other Firearms</h3>

<p>
  In addition to the <strong>Walther PP Super</strong> and
  <strong>SIG P230</strong>, the 9×18 Ultra/Police was also chambered in a
  limited number of other firearms.
</p>

<p>
  These include:
</p>

<ul>
  <li><strong>Mauser HSc-80</strong></li>
  <li><strong>Benelli B76</strong></li>
  <li><strong>Steyr GB</strong> — developed and offered in a version for the 9×18 Ultra</li>
  <li>Other experimental and limited-production designs</li>
</ul>

<p style={{ marginTop: "30px" }}>
  The main production firearms with which the cartridge remains historically
  associated, however, are the <strong>Walther PP Super</strong> and
  <strong>SIG P230</strong>.
</p>

<h3>The Cartridge Today</h3>

<p>
  Today, the 9×18 Ultra/Police is a <strong>rare cartridge</strong>, of interest
  primarily to collectors and owners of the few remaining firearms designed for it.
</p>

<p>
  Despite its limited distribution, the cartridge has not disappeared entirely.
  Ammunition has been produced by companies such as <strong>GECO, Hirtenberger,
  Fiocchi, Norma, and Dynamit Nobel</strong>, and modern-manufactured cartridges
  can still be found on the collectors' market.
</p>

<p>
  Its history remains interesting because the same basic idea experienced
  <strong>two separate lives</strong> — first during the 1930s and again during
  the 1960s and 1970s.
</p>

<p>
  Both times, the outcome was similar: the <strong>9×19 mm Parabellum</strong>
  proved to be the more successful solution.
</p>

<h3>Interesting Fact</h3>

<p>
  The 9×18 Ultra is one of the rare examples of a cartridge that effectively
  received <strong>a second chance several decades after its original development</strong>.
</p>

<p>
  The pre-war project of 1936 remained limited and experimental. After the war,
  however, the same concept once again appeared attractive to the German police.
</p>

<p>
  This time, the cartridge received a new name — <strong>9 mm Police</strong> —
  and specialized production pistols were developed for it.
</p>

<p>
  The story nevertheless ended with a gradual transition to
  <strong> 9×19 mm Parabellum</strong>.
</p>
<h3>Technical Data</h3>

<TechnicalData
  language="en"
  title="9×18 mm Ultra / 9×18 mm Police"
  data={[
    ["Primary designation", "9×18 mm Ultra / 9×18 mm Police"],
    ["Other designations", "9 mm Ultra, 9 mm Police, 9 mm Super"],
    ["Type", "Pistol cartridge"],
    ["Origin", "Germany"],
    ["Original development", "1936"],
    ["Post-war development", "1960s–1970s"],
    ["Case type", "Rimless, cylindrical"],
    ["Case length", "approximately 18 mm"],
    ["Overall cartridge length", "25.2–25.4 mm"],
    ["Bullet diameter", "approximately 9.0 mm"],
    ["Typical bullet weight", "6.1–6.5 g"],
    ["Typical muzzle velocity", "310–330 m/s*"],
    ["Typical muzzle energy", "approximately 314–340 J*"],
    ["Primary firearms", "Walther PP Super, SIG P230"],
    ["Primary purpose", "Compact police and service pistols"],
  ]}
/>

<p>
  * Ballistic figures depend on the specific cartridge, bullet weight and
  construction, and barrel length. Reported figures for the 9 mm Police are
  around 310–330 m/s and 314–333 J with bullets weighing approximately 6.1–6.5 g.
</p>

<p>
  <strong>Important:</strong> the pre-war <strong>9 mm Ultra developed in 1936</strong>
  should not automatically be treated as identical to the standardized
  post-war <strong>9×18 mm Police/Ultra</strong>. The original version had a
  longer case and represents a separate early stage in the cartridge's development.
</p>


</Section>
 <Section
  id="9x18-makarov"
  title="9×18 mm Makarov (9×18 PM)"
>
  <img
    src="/images/calibers/cartridges/9x18PM.png"
    alt="9×18 mm Makarov"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      9×18 mm Makarov, also known as 9×18 PM or 9 mm Makarov, is a Soviet
      pistol cartridge developed shortly after World War II. It was designed
      for a new generation of service pistols that had to be more compact and
      simpler than the previously used TT-33, while providing greater power
      than 7.65×17 mm and 9×17 mm Browning.
    </em>
  </p>
  <p>
    The cartridge was designed by Soviet engineer <strong>Boris Vladimirovich Syomin in 1946</strong> and was initially developed independently of any specific pistol. In 1947, Nikolay Fyodorovich Makarov began developing his pistol around the new cartridge. In <strong>1951, the 9×18 mm cartridge and the Makarov pistol were adopted by the Soviet Army</strong>.
  </p>

  <p>
    Thus, 9×18 PM became one of the most important pistol cartridges of the
    Eastern Bloc and remained a standard service cartridge for the armed
    forces, police, and security services of numerous socialist countries
    for decades.
  </p>

  <h3>Development History</h3>

  <p>
    After the end of World War II, the Soviet military leadership sought a
    new service pistol to replace the <strong>TT-33</strong>.
  </p>

  <p>
    The 7.62×25 mm Tokarev is a powerful, high-velocity cartridge, but the
    TT-33 pistol is relatively large for a service sidearm. The new concept
    called for a more compact pistol with a simpler design, easier handling,
    and more moderate ballistics.
  </p>

  <p>
    In <strong>1946, Boris Syomin</strong> developed the new 9 mm cartridge.
    The concept was to achieve sufficient power with relatively low recoil
    and pressure, allowing the future pistol to operate with a
    <strong>simple blowback action</strong>.
  </p>

  <p>
    This was an important design compromise. A simple blowback action does
    not require a mechanism to lock the barrel to the slide. This makes the
    weapon simpler, easier to manufacture, and easier to maintain.
  </p>

  <p>
    Interestingly, the new Soviet cartridge also has a historical connection
    to the German-developed <strong>9×18 mm Ultra</strong>. Soviet designers
    had access to German designs after the war, and a number of sources
    identify the Ultra as one of the influences on the development of
    9×18 Makarov. This does not mean, however, that the two cartridges are
    identical or interchangeable.
  </p>

  <p>
    This connection is particularly interesting in the context of cartridge
    development:
  </p>

  <p>
    <strong>9×17 mm Browning Short → 9×18 mm Ultra → 9×18 mm Makarov</strong>
  </p>

  <p>
    This represents a design and historical connection, rather than a
    straightforward progression within a single cartridge family.
  </p>

  <h3>The Makarov Pistol</h3>

  <img
    src="/images/calibers/cartridges/Makarov.png"
    alt="Makarov pistol"
    style={{
      width: "47%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    In 1947, Nikolay Fyodorovich Makarov developed his pistol for the new
    cartridge. A number of Soviet designers participated in the competition,
    and foreign pistols, including models from Walther, Browning, Sauer, and
    Beretta, were also used for comparison. In 1948, Makarov's design was
    selected.
  </p>

  <p>
    Following testing and refinement, the <strong>9-mm Makarov pistol, Model 1951 (PM), was adopted for service in 1951</strong>.
  </p>

  <p>
    Its design is exceptionally well suited to the cartridge's characteristics.
    The PM uses a <strong>simple blowback action</strong>, a fixed barrel, and
    a relatively small number of parts. This makes it straightforward to
    manufacture, reliable, and easy to maintain.
  </p>

  <p>
    The combination of cartridge and firearm proved to be one of the most
    successful examples of matching ammunition to a specific weapon design.
  </p>

  <h3>Design and Characteristics of 9×18 mm Makarov</h3>

  <p>
    9×18 mm Makarov is a <strong>rimless cartridge with a slightly tapered case</strong>.
    The nominal case length is approximately <strong>18.1 mm</strong>, while
    the overall cartridge length is approximately <strong>25 mm</strong>.
  </p>

  <p>
    The cartridge's most distinctive feature is its bullet diameter.
  </p>

  <p>
    While the bullet diameter of most widely used 9 mm cartridges, such as
    9×17 mm Browning Short and 9×19 mm Parabellum, is approximately 9.0 mm,
    the diameter of the 9×18 Makarov bullet is approximately
    <strong>9.25–9.27 mm</strong>.
  </p>

  <p>
    This difference is also related to the traditional Soviet method of
    designating the calibers of rifled firearms—by the diameter across the
    lands of the rifling, rather than by the bullet diameter or the diameter
    across the grooves.
  </p>

  <p>
    The larger bullet diameter provides a greater cross-sectional area
    without significantly increasing the overall length of the cartridge.
  </p>

  <h3>Ballistics</h3>

  <p>
    9×18 Makarov occupies an intermediate position between 9×17 mm Browning
    Short and 9×19 mm Parabellum.
  </p>

  <p>
    The typical military bullet weighs approximately <strong>6 g</strong>,
    and a standard cartridge has a muzzle velocity of around
    <strong>315–320 m/s</strong>. With a 6 g bullet traveling at 319 m/s,
    the kinetic energy is approximately <strong>305 J</strong>. CIP data for
    a 6 g bullet indicate approximately <strong>319 m/s and 313 J</strong>
    when measured using a 97 mm test barrel.
  </p>

  <p>
    This is higher than the typical energy of 9×17 mm Browning Short, but
    considerably lower than that of standard 9×19 mm Parabellum ammunition.
  </p>

  <p>
    This moderate ballistic performance is precisely what allows the use of
    a simple blowback action, one of the cartridge's primary design goals.
  </p>

  <h3>The Simple Blowback Action</h3>

  <p>
    The concept behind 9×18 PM cannot be considered separately from the way
    the Makarov pistol operates.
  </p>

  <p>
    In a simple blowback action, the barrel is not locked to the slide.
    When the cartridge is fired, the slide begins moving backward under the
    pressure of the propellant gases, but its mass and the recoil spring
    slow the movement sufficiently for the weapon to operate safely.
  </p>

  <p>
    Standard pistols chambered in the more powerful
    <strong>9×19 mm Parabellum</strong> generally use a locking mechanism
    between the barrel and slide. This allows them to handle higher
    pressures without requiring an excessively heavy slide.
  </p>

  <p>
    There are exceptions. For example, the <strong>HK P7</strong> uses a
    gas-delayed blowback system. This design is more complex than a
    conventional simple blowback action.
  </p>

  <p>
    Therefore, it is not accurate to say that all 9×19 mm pistols use a
    locked-breech system, although locking systems are much more common in
    modern service pistol designs.
  </p>

  <h3>Bullets and Ammunition Development</h3>

  <p>
    The original Soviet standard cartridge used a bullet with a
    <strong>lead core</strong>. In <strong>1954</strong>, a cartridge with a
    <strong>steel core</strong>, designated 57-N-181S, was introduced.
  </p>

  <p>
    The steel-core bullet offers improved penetration characteristics and
    allows savings in strategically more valuable materials. Numerous
    versions of 9×18 mm ammunition were subsequently developed in different
    manufacturing countries, using different core materials, coatings, and
    configurations for various purposes.
  </p>

  <p>
    Standard military cartridges commonly use <strong>steel cases</strong>,
    reducing manufacturing costs compared with brass cases.
  </p>

  <p>
    Large quantities of steel-cased ammunition coated with a thin layer of
    copper alloy were manufactured in the Soviet Union and Eastern Bloc
    countries. This coating is often referred to as tombac or red brass.
  </p>

  <h3>Distribution Throughout the Eastern Bloc</h3>

  <p>
    After its adoption by the Soviet Union, 9×18 mm Makarov quickly became
    a standard pistol cartridge in countries within the Soviet sphere of
    influence.
  </p>

  <p>
    The cartridge was used in <strong>Poland, Czechoslovakia, Hungary,
    Bulgaria, Romania, the German Democratic Republic, China</strong>, and
    other countries.
  </p>

  <p>
    These countries developed their own pistols and PM variants, as well as
    their own ammunition production lines.
  </p>

  <p>
    Well-known pistols chambered in this caliber include the Polish
    <strong>P-64 and P-83</strong>, the Hungarian <strong>PA-63</strong>,
    the Czechoslovakian <strong>CZ 82</strong>, East German variants of the
    PM, and numerous other designs.
  </p>

  <p>
    In this way, 9×18 mm Makarov became something of an Eastern counterpart
    to the Western 9×19 mm Parabellum—a standard service cartridge used by
    numerous armies, police forces, and security services for decades.
  </p>

  <h3>9×18 mm Makarov in Bulgaria</h3>

  <p>
    The cartridge has a particularly important history in Bulgaria.
  </p>

  <p>
    Production of <strong>9×18 mm pistol cartridges</strong> in Bulgaria
    began in <strong>1971–1972</strong>, followed by production of the
    9 mm Makarov pistol in <strong>1972–1974</strong>. This formed part of
    the development of Bulgaria's arms industry and the establishment of
    manufacturing facilities for Soviet-pattern firearms and ammunition.
  </p>

  <p>
    The Makarov pistol became one of the most widely used service weapons
    in Bulgaria. The 9×18 mm cartridge was used by the Bulgarian People's
    Army, the Ministry of Interior, and other organizations, while domestic
    ammunition production supplied large quantities for internal use and
    export.
  </p>

  <p>
    The cartridge remains closely associated with Bulgaria's arms history
    during the socialist period and with the equipment used by its security
    services in the following decades.
  </p>

  <h3>After the End of the Warsaw Pact</h3>

  <p>
    After the end of the Cold War, the role of 9×18 mm gradually declined.
    The main reason was the widespread transition to
    <strong>9×19 mm Parabellum</strong>, which offers greater ballistic
    performance and became a standard or widely used caliber in the armed
    forces and police of many countries.
  </p>

  <p>
    Nevertheless, 9×18 mm did not disappear.
  </p>

  <p>
    The enormous number of pistols and cartridges produced, along with the
    continued service of the PM and its variants, kept the cartridge in use
    beyond the end of the 20th century.
  </p>

  <h3>9×18 Makarov and 9×18 Ultra</h3>

  <p>
    It is important to draw a direct comparison with
    <strong>9×18 mm Ultra / Police</strong>.
  </p>

  <p>
    The two cartridges have the same nominal case length and can look very
    similar. However, they are <strong>not interchangeable</strong>.
  </p>

  <p>
    The main difference is the bullet diameter:
  </p>

  <ul>
    <li><strong>9×18 Ultra/Police</strong> – approximately <strong>9.02 mm</strong>;</li>
    <li><strong>9×18 Makarov</strong> – approximately <strong>9.25–9.27 mm</strong>.</li>
  </ul>
  <br />

  <p>
    A pistol designed for one cartridge must not be assumed to be compatible
    with the other simply because both are designated “9×18.”
  </p>

  <p>
    The historical connection between the two cartridges is nevertheless
    interesting. The German 9×18 Ultra predates the Soviet cartridge by a
    decade and belongs to the same search for an intermediate cartridge
    between 9×17 and 9×19 mm.
  </p>

  <h3>Connection to 7.62×25 Tokarev</h3>

  <p>
    9×18 Makarov was intended to replace 7.62×25 mm Tokarev as the Soviet
    Army's standard pistol cartridge, although the two cartridges differ
    completely in design.
  </p>

  <p>
    The 7.62×25 mm is a high-velocity cartridge with a bottlenecked case
    and a relatively small bullet. The 9×18 mm uses a larger and heavier
    bullet, but at a significantly lower velocity.
  </p>

  <p>
    This was a deliberate change in design philosophy: rather than
    maximizing velocity and penetration, the goal was to achieve
    <strong>a more compact weapon, a simpler design, and adequate service performance</strong>.
  </p>

  <p>
    The development can therefore be represented as follows:
  </p>

  <p>
    <strong>7.62×25 Tokarev → 9×18 Makarov → 9×19 mm</strong>
  </p>

  <p>
    The final transition, however, was gradual and differed from country
    to country.
  </p>

  <h3>The Cartridge Today</h3>

  <p>
    Although 9×18 mm Makarov has gradually been replaced by 9×19 mm
    Parabellum as the primary service pistol cartridge in many countries,
    it continues to be manufactured and used.
  </p>

  <p>
    Bulgaria is one example of a country where production of this cartridge
    continues today. <strong>Arsenal JSCo.</strong> offers 9×18 mm ammunition
    with a bimetallic case and versions with both steel and lead cores.
    The cartridge is listed for use in the Makarov pistol and the Shipka
    submachine gun.
  </p>

  <p>
    <strong>NITI – Kazanlak</strong> also manufactures special 9×18 mm
    Makarov cartridges, including blank cartridges.
  </p>

  <p>
    As a result, 9×18 mm Makarov, developed in the Soviet Union shortly
    after World War II, continues to be manufactured in Bulgaria more than
    seven decades after its creation.
  </p>

  <h3>Interesting Fact</h3>

  <p>
    Although it may seem natural today to call it “9×18 Makarov,” this
    <strong>was not the cartridge's original official Soviet designation</strong>.
    It was adopted for service as the <strong>9 mm pistol cartridge</strong>,
    and the name “Makarov” gradually became established to distinguish it
    from other 9 mm cartridges.
  </p>

  <p>
    This is particularly important because the existence of
    <strong>9×18 Ultra/Police</strong> shows how misleading the caliber
    designation alone can be.
  </p>

  <p>
    Two cartridges can both be designated <strong>9×18</strong>, look almost
    identical, and still have different bullet diameters and be
    non-interchangeable.
  </p>

  <TechnicalData
    language="en"
    title="9×18 mm Makarov"
    data={[
      ["Designation", "9×18 mm Makarov"],
      ["Other designations", "9×18 PM, 9 mm Makarov"],
      ["Type", "Pistol cartridge"],
      ["Case", "Rimless, steel/bimetallic"],
      ["Case length", "18.1 mm"],
      ["Overall cartridge length", "~25 mm"],
      ["Bullet diameter", "9.25 mm"],
      ["Bullet mass", "5.95 g"],
      ["Muzzle velocity*", "302.5 m/s (V₁₀)"],
      ["Kinetic energy*", "~272 J"],
      ["Average chamber pressure*", "117.7 MPa"],
      ["Primary firearm", "Makarov pistol (PM)"],
      ["Other firearms", "9×18 mm pistols and submachine guns"],
    ]}
  />
  <p></p>
  <p>
    <strong>* Data from Arsenal JSCo. for its 9×18 mm ammunition.</strong>
    The manufacturer lists a bullet mass of 5.95 g, an average velocity of
    V₁₀ = 302.5 m/s, and an average chamber pressure of 117.7 MPa. Based on
    these figures, the kinetic energy is approximately 272 J. Arsenal offers
    two versions—FMJ with a steel core and FMJ with a lead core—and lists the
    Makarov pistol and Shipka as compatible firearms.
  </p>

  <p>
    <strong>Note:</strong> The ballistic performance of 9×18 mm Makarov
    depends on the specific manufacturer, bullet type, and propellant
    charge. The figures of 302.5 m/s and approximately 272 J given above
    are the current data published by the Bulgarian manufacturer Arsenal
    JSCo. for its 9×18 mm ammunition.
  </p>
</Section>

<Section
  id="9x18-pmm"
  title="9×18 mm PMM"
>

  

  <img
    src="/images/calibers/cartridges/9x18 PMM.png"
    alt="9×18 mm PMM"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
<p>
  <em>
    The modernized Soviet cartridge designed to give the Makarov pistol
    greater power.
  </em>
</p>
<p>
  <strong>9×18 mm PMM</strong> is a modernized version of the Soviet
  <strong>9×18 mm PM (Makarov)</strong> cartridge, developed in the early 1990s
  for the modernized <strong>PMM – Modernized Makarov Pistol</strong>.
</p>

<p>
  The main goal of the development was to increase the muzzle velocity, muzzle
  energy, and penetration of the standard 9×18 mm PM without changing the
  cartridge's overall dimensions. This made it possible to use the more powerful
  ammunition in a modernized version of the existing Makarov pistol.
</p>

<p>
  The new cartridge received the designation <strong>7N16</strong>. It uses a case
  with the same basic dimensions as the standard 9×18 mm PM, but is loaded with
  a more powerful propellant charge and uses a new bullet design. As a result,
  the muzzle velocity increases significantly, and the muzzle energy is approximately
  <strong>1.7 times higher</strong> than that of the standard cartridge.
</p>
<h2>Development History</h2>

<p>
  By the late 1980s, the Makarov pistol was already becoming outdated in terms
  of its design concept. The emergence of modern pistols with higher magazine
  capacities and the use of personal ballistic protection created new requirements
  for service handguns.
</p>

<p>
  The standard <strong>9×18 mm PM</strong> is reliable and
  compact, but its ballistic performance has limitations, particularly in terms of
  penetration.
</p>

<p>
  In the early 1990s, Soviet
  designers began modernizing the PM. Alongside changes to the pistol itself, a new
  high-impulse cartridge was developed – <strong>9×18 PMM, designation 7N16</strong>.
</p>

<p>
  This led to the combination of <strong>PMM + 9×18 PMM</strong>,
  intended to extend the service life of the Makarov design and improve its combat
  performance.
</p>
<h2>Design and Features</h2>

<p>
  One of the most interesting features of the 9×18 PMM is that <strong>the
  basic case dimensions remain unchanged</strong>. This allows the new cartridge
  to retain the same overall dimensions for use in the modernized pistol design.
</p>

<p>
  However, the case contains a more powerful propellant charge. The use of
  a more energetic spherical propellant makes it possible to significantly increase
  muzzle velocity without changing the cartridge's basic dimensions.
</p>

<p>
  The bullet design was also changed. It is lighter than the standard 9×18 PM
  bullet, and its nose is elongated and shaped like a truncated cone.
  This design contributes to the increased velocity and improved penetration.
</p>

<p>
  The bullet weighs approximately <strong>5.5 g</strong>, compared with around
  6.1 g for the standard 9×18 PM.
</p>
  {/* Text about the cartridge will be added here. */}

<h3>Modernized Makarov Pistol – PMM – The Firearm Designed for the New Cartridge</h3>

<img
  src="/images/calibers/cartridges/PMM.png"
  alt="Modernized Makarov Pistol – PMM"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "0 auto 30px auto",
  }}
/>

<p>
  The development of the 9×18 PMM is closely linked to
  the modernization of the pistol itself.
</p>

<p>
  The PMM features a <strong>wider frame and a double-stack
  magazine</strong>, allowing it to hold up to 12 cartridges. The most significant
  change related to the new ammunition is the design of the chamber.
</p>

<p>
  In early versions of the PMM, <strong>helical grooves</strong> were
  cut into the chamber. These increase resistance during case extraction and
  thereby slow the slide's movement when firing.
  This allows the firearm to operate with the higher pressure of the 9×18 PMM.
</p>

<p>
  Thus, modernization involves more than just a new
  cartridge — the firearm itself must also be adapted to handle the increased
  stress.
</p>
<h3>Ballistic Characteristics</h3>

<p>
  The main advantage of the 9×18 PMM is its significant
  increase in velocity and energy.
</p>

<p>
  With a standard bullet weighing approximately <strong>5.4–5.8 g</strong>,
  the muzzle velocity is reported to be approximately <strong>420–435 m/s</strong>.
</p>

<p>
  Muzzle energy is around <strong>485–505 J</strong>, depending on
  the specific load and test conditions. By comparison, the standard 9×18
  mm PM produces approximately 275–315 J.
</p>

<p>
  The PMM thus achieves ballistic performance that
  approaches that of some more powerful handgun cartridges, while retaining
  the compact dimensions of the original 9×18 mm cartridge.
</p>
<h3>Penetration</h3>

<p>
  The increased velocity and changes to the bullet design improve
  its penetration.
</p>

<p>
  This was particularly important in the late 20th century, when the use of
  body armor and other forms of personal protection was becoming increasingly widespread.
</p>

<p>
  The PMM was developed during a period when the standard 9×18 mm was already being
  regarded as insufficiently powerful for the new requirements of service handguns.
</p>

<p>
  Nevertheless, the 9×18 PMM did not turn the PM into an equivalent replacement for
  modern pistols chambered in <strong>9×19 mm Parabellum</strong>. Instead, it was
  an attempt to improve the capabilities of the existing system without replacing
  it entirely.
</p>
<h3>Relationship with the 9×18 mm PM</h3>

<p>
  The 9×18 PMM retains the basic dimensions of the standard
  9×18 mm PM, but the two cartridges <strong>should not be considered equivalent in
  terms of operating loads</strong>.
</p>

<p>
  The PMM is a high-impulse cartridge with a more powerful charge and
  higher operating loads. For this reason, it is intended for firearms
  specifically adapted to use it.
</p>

<p>
  This is particularly important because the two
  cartridges look very similar. Using the high-pressure PMM in a standard
  Makarov pistol that was not designed for it can subject the firearm to dangerous
  levels of stress.
</p>

<p>
  This very feature became one of the
  obstacles to the cartridge's widespread adoption. Older PM pistols had been
  manufactured in enormous numbers, and distinguishing between the standard PM and
  the modernized PMM created practical problems.
</p>
<h3>Limited Adoption</h3>

<p>
  Despite its improved performance, the 9×18 PMM did
  not become a new standard handgun cartridge.
</p>

<p>
  One reason was that the modernization came at a
  time of major changes in Russian small arms. Alongside the PMM, efforts were
  underway to develop an entirely new service pistol capable of using more powerful
  cartridges and competing with contemporary Western designs.
</p>

<p>
  Ultimately, the PMM saw limited adoption, while the standard 9×18 mm PM
  continued to serve as the primary cartridge for the vast number of Makarov pistols.
  The PMM itself was used in limited quantities by Russian security forces.
</p>
<h3>Relationship to Other Cartridges</h3>

<p>
  The 9×18 PMM is an interesting example of the
  modernization of an existing cartridge:
</p>

<p>
  <strong>9×18 mm PM → 9×18 mm PMM</strong>
</p>

<p>
  Unlike the introduction of an entirely new caliber, in this case
  the designers retained the basic dimensions of the older cartridge and increased
  its capabilities by changing the propellant charge and bullet design.
</p>

<p>
  This made a significant improvement in
  ballistic performance possible, but also created the need for a specially adapted
  firearm.
</p>
<h3>Interesting Fact</h3>

<p>
  The 9×18 PMM is an example of how far a cartridge
  design can be developed without changing its basic dimensions.
</p>

<p>
  Approximately <strong>the same case</strong> that was used decades earlier
  for the standard 9×18 PM now operates with a more powerful charge and a new
  bullet in the PMM. The result is an approximately <strong>1.7-fold increase in
  muzzle energy</strong>.
</p>
<h3>The Cartridge Today</h3>

<p>
  Today, the 9×18 PMM is a <strong>rare, specialized cartridge</strong>.
  It remains associated primarily with the modernized PMM pistol and the limited
  number of firearms adapted to use it.
</p>

<p>
  The standard <strong>9×18 mm PM</strong>, however, continues
  to be far more widespread. This is one reason the PMM remains a relatively little-known
  chapter in the history of Soviet and Russian handgun ammunition.
</p>
<TechnicalData
  language="en"
  title="9×18 mm PMM"
  data={[
    ["Designation", "9×18 mm PMM"],
    ["Index", "7N16"],
    ["Type", "Handgun cartridge"],
    ["Origin", "USSR / Russia"],
    ["Development period", "Early 1990s"],
    ["Case type", "Rimless, cylindrical"],
    ["Case length", "18 mm"],
    ["Overall cartridge length", " 25 mm"],
    ["Bullet diameter", " 9.25 mm"],
    ["Bullet weight", "5.4–5.8 g"],
    ["Muzzle velocity", "420–435 m/s*"],
    ["Muzzle energy", " 485–505 J*"],
    ["Primary firearm", "PMM (Modernized Makarov Pistol)"],
    ["Primary purpose", "Higher-power service handgun cartridge"],
  ]}
/>
<p>
  * Ballistic characteristics depend on the
  specific load and test conditions. The values shown are typical
  for the 9×18 PMM with a bullet weighing approximately 5.4–5.8 g.
</p>

<p>
  <strong>Important note:</strong> The 9×18 PMM should not be treated as equivalent to
  the standard 9×18 mm PM simply because they share the same basic dimensions. The PMM is
  a higher-pressure cartridge intended for firearms specifically adapted to use it.
</p>

</Section>

<Section
  id="9x19-parabellum"
  title="9×19 mm Luger Parabellum"
>
  <img
    src="/images/calibers/cartridges/9x19 Parabellum.png"
    alt="9×19 mm Luger Parabellum"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
<p>
  <em>
    The cartridge that became a global standard and one of the most successful designs
    in the history of firearm ammunition.
  </em>
</p>
<p>
  <strong>9×19 mm Luger</strong>, also known as <strong>9×19 mm Parabellum</strong>,
  <strong>9 mm Luger</strong>, <strong>9 mm Para</strong>, and <strong>9 mm NATO</strong>,
  is one of the most widely used handgun cartridges in the world.
</p>

<p>
  It was developed in <strong>1902 by Georg Luger </strong> at the German company
  <strong> Deutsche Waffen- und Munitionsfabriken (DWM)</strong> as an evolution of
  the earlier <strong>7.65×21 mm Parabellum</strong>. The main goal was to increase
  the bullet diameter and effectiveness without changing the fundamental design
  of the Parabellum pistol.
</p>

<p>
  The new cartridge was created by expanding the case mouth of the 7.65×21 mm
  and using a 9 mm bullet. This produced a design that remains widely used more
  than a century later.
</p>

<p>
  Today, 9×19 mm is used by armed forces, police, and other agencies in a vast
  number of countries. The cartridge has also been standardized by NATO to
  <strong>ensure functional interchangeability of ammunition</strong>
  among the armed forces of member states. The standardization agreement
  <strong> STANAG 4090</strong> is associated with the interchangeability requirements
  for 9×19 mm ammunition, while the detailed technical requirements are published in
  <strong>AOP-4090 – Technical Performance Specification Providing for the
  Interchangeability of 9 mm × 19 Ammunition</strong>.
</p>
<h2>Development History</h2>

<p>
  To understand the emergence of the 9×19 mm Parabellum, we must go back to the
  <strong> 7.65×25 mm Borchardt</strong> and its successor,
  the <strong> 7.65×21 mm Parabellum</strong>.
</p>

<p>
  Georg Luger refined the design of the Borchardt C-93 in the late 19th century
  and created the more compact Parabellum pistol. The 7.65×21 mm cartridge was
  developed for it and was <strong>adopted by Switzerland in 1900</strong>.
</p>

<p>
  It soon became clear, however, that military users wanted a larger bullet diameter
  and greater stopping power.
</p>

<p>
  In <strong>1902</strong>, Luger developed a new version using the same
  basic case, but with an expanded mouth and a <strong>9 mm bullet</strong>. The new
  cartridge retained the overall concept of the 7.65×21 Parabellum while offering
  a heavier and wider bullet.
</p>

<p>
  This established one of the most important development lines in the history of handgun cartridges:
</p>

<p>
  <strong>7.65×25 Borchardt → 7.65×21 Parabellum → 9×19 Parabellum</strong>
</p>
<h2>Early Trials</h2>

<p>
  The new cartridge was not immediately adopted as a widely accepted standard.
</p>

<p>
  In 1902, the 9 mm Parabellum was submitted for trials, and German military
  authorities showed interest in the new caliber.
</p>

<p>
  One of the main reasons was the need for greater bullet impact and stopping power
  compared with the 7.65 mm Parabellum.
</p>

<p>
  The original 9 mm bullet had a <strong>truncated-cone shape</strong>,
  different from the later classic rounded profile most commonly associated with
  the 9×19 mm today.
</p>

<p>
  This early version was used in the cartridge's first military trials.
</p>
<h2>The German Navy – The First Official Adoption</h2>

<p>
  In <strong>1904, the Imperial German Navy</strong> adopted the 9 mm Parabellum
  pistol as the <strong>Pistole 04 (P04)</strong>.
</p>
<h2>Pistole 04</h2>

<img
  src="/images/calibers/cartridges/Pistole 04.png"
  alt="Pistole 04"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "0 auto 30px auto",
  }}
/>
<p>
  This was the first official military adoption of the 9×19 mm Parabellum.
</p>

<p>
  The naval version featured a longer <strong>150 mm barrel</strong> and an
  adjustable rear sight with settings for 100 and 200 meters. It became known as
  the <strong> Navy Luger</strong>.
</p>

<p>
  The new cartridge thus gained its first major military application.
</p>
<h2>Pistole 08 (Luger Parabellum) – The German Army's Pistol</h2>

<img
  src="/images/calibers/cartridges/Luger Parabellum P08.png"
  alt="Pistole 08 (Luger Parabellum)"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "0 auto 30px auto",
  }}
/>
<p>
  In <strong>1908, the German Army</strong> adopted the Parabellum in its final
  approved configuration as the <strong>Pistole 08</strong>, or <strong>P08</strong>.
</p>

<p>
  The pistol was chambered for the 9×19 mm Parabellum and gradually became one
  of the most recognizable military pistols of the 20th century.
</p>

<p>
  The P08 was widely used by the German armed forces during
  <strong>World War I and World War II</strong>. It remained in service during
  the interwar period, and production continued at various facilities.
</p>

<p>
  The 9×19 mm was no longer just a cartridge for a new pistol. It was beginning to
  become an internationally recognized military round.
</p>
<h2>Design and Features</h2>

<p>
  The 9×19 mm Parabellum is a <strong>rimless cartridge with a cylindrical,
  slightly tapered case and centerfire ignition</strong>.
</p>

<p>
  Unlike the earlier cartridges in the Borchardt–Parabellum family, its case is
  shorter than that of the 7.65×25 Borchardt, but has a larger diameter toward the front.
</p>

<p>
  According to current <strong>C.I.P.</strong> data, the maximum case length is
  <strong>19.15 mm</strong>, while the maximum overall cartridge length is
  <strong>29.69 mm</strong>. The bullet diameter is approximately <strong>9.03 mm</strong>.
  C.I.P. specifies a maximum mean pressure of <strong>2350 bar</strong> for the
  standard 9 mm Luger.
</p>

<p>
  The cartridge is available with a wide range of bullets of different weights and designs.
  These include standard FMJ bullets, semi-jacketed and hollow-point designs for
  civilian and police use, subsonic variants, specialized ammunition, and military loads.
</p>

<p>
  The ability to accommodate a huge variety of bullets and loads is one of the reasons
  the cartridge has remained relevant for more than a century.
</p>
<h2>From the Truncated Cone to the Classic 9 mm Bullet</h2>

<p>
  The original military bullet for the 9×19 mm had a
  <strong>truncated-cone shape</strong>.
</p>

<p>
  Over time, its shape changed, and the more familiar
  <strong>rounded, oval profile</strong> became established.
</p>

<p>
  This change was associated with the development of the ammunition and the need for
  reliable operation in different firearms.
</p>

<p>
  This classic profile gradually became the characteristic appearance of the
  9 mm Parabellum bullet.
</p>
<h2>9×19 mm During the World Wars</h2>

<p>
  During <strong>World War I</strong>, the 9×19 mm Parabellum was used not only
  in pistols but also in the first German submachine guns.
</p>

<p>
  This was an important development because the same cartridge began to serve
  different categories of firearms.
</p>

<p>
  After the war, the 9×19 mm continued to be used in Germany and a number of other
  countries. Following the introduction of pistols such as the <strong>Walther P38</strong>,
  and later the <strong>Browning Hi-Power</strong>, <strong>SIG P210</strong>, and many
  other designs, the cartridge gradually became an international standard.
</p>

<p>
  World War II further increased its prevalence. The 9×19 mm was used by the German
  armed forces in pistols and submachine guns, and after the war, large quantities
  of firearms and ammunition remained in various parts of Europe and the world.
</p>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    margin: "30px 0",
  }}
>
  <div style={{ flex: 1, textAlign: "center" }}>
    <h3>Walther P38</h3>
    <img
      src="/images/calibers/cartridges/Walther P38.png"
      alt="Walther P38"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>

  <div style={{ flex: 1, textAlign: "center" }}>
    <h3>Browning Hi-Power</h3>
    <img
      src="/images/calibers/cartridges/Browning Hi-Power.png"
      alt="Browning Hi-Power"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>

  <div style={{ flex: 1, textAlign: "center" }}>
    <h3>SIG P210</h3>
    <img
      src="/images/calibers/cartridges/SIG P210.png"
      alt="SIG P210"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>
</div>
<h2>From a German Cartridge to NATO</h2>

<p>
  After World War II, the 9×19 mm became increasingly established among Western countries.
</p>

<p>
  This was facilitated by the fact that the cartridge already had decades of military
  service behind it and a broad manufacturing base.
</p>

<p>
  NATO gradually standardized the 9 mm Parabellum as its primary handgun cartridge.
  <strong>STANAG 4090</strong>, published in 1982, addresses the standardization of
  the 9 mm Parabellum and the provision of functional interchangeability of ammunition
  on the battlefield. The current version of the standard continues to govern the
  interchangeability of 9×19 mm ammunition.
</p>

<p>
  Thus, a cartridge developed in Germany in the early 20th century became standard
  ammunition for one of the world's largest military alliances.
</p>
<h2>9×19 mm and the United States</h2>

<p>
  One of the most important steps in the cartridge's global spread was associated
  with the United States.
</p>

<p>
  For decades, the US armed forces used the
  <strong> .45 ACP</strong> as their primary handgun cartridge. In the late 1970s
  and early 1980s, however, a large-scale program began to select a new service pistol.
</p>

<p>
  The requirements were also linked to the goal of compatibility with NATO's standard
  9 mm ammunition. In 1985, the <strong>Beretta 92F</strong> was selected as the
  new standard pistol of the US armed forces and received the designation
  <strong>M9</strong>. Official introduction began in 1986.
</p>

<p>
  This was an important moment in the history of the 9×19 mm. One of the world's
  largest producers and users of small arms definitively moved from .45 ACP to 9 mm.
</p>

<p>
  The M9 was used by the US armed forces for decades, and 9×19 mm remains the
  standard caliber for American service pistols, including the later M17/M18 system.
</p>
<h2>9×19 mm and Submachine Guns</h2>

<p>
  The cartridge's history is not limited to pistols.
</p>

<p>
  As early as World War I, the 9×19 mm began to be used in automatic firearms.
  It later became one of the principal cartridges for
  <strong>submachine guns</strong>.
</p>

<p>
  Some of the best-known firearms chambered for 9×19 mm include:
</p>

<ul>
  <li><strong>MP 18</strong></li>
  <li><strong>MP 28</strong></li>
  <li><strong>MP 34</strong></li>
  <li><strong>MP 40</strong></li>
  <li><strong>Sten</strong></li>
  <li><strong>Sterling</strong></li>
  <li><strong>Uzi</strong></li>
  <li><strong>H&K MP5</strong></li>
</ul>

<p>
  This dual role — in both pistols and submachine guns — contributed significantly
  to the cartridge's global spread.
</p>
<h2>Global Adoption</h2>

<p>
  After World War II, the 9×19 mm gradually became an international standard.
</p>

<p>
  It is used in a vast number of military and police pistols, as well as in
  submachine guns. The cartridge is manufactured in dozens of countries and has become
  one of the most readily available handgun cartridges in the world.
</p>

<p>
  Today, it is a standard or widely used cartridge in many military and police
  organizations. Its combination of relatively compact dimensions, good
  ballistic performance, moderate recoil, and an extensive international manufacturing
  base has made it an exceptionally successful design.
</p>

<p>
  The 9×19 mm is widely described as the <strong>most widely used handgun cartridge
  in the world</strong>.
</p>
<h2>Bulgaria</h2>

<p>
  The 9×19 mm also holds a significant place in the history of Bulgarian small arms.
</p>

<p>
  Bulgaria used Parabellum pistols as early as the beginning of the 20th century,
  including those chambered in <strong> 7.65×21 mm</strong>, and later in
  <strong> 9 mm Parabellum</strong>.
</p>

<p>
  During the 20th century, the 9×19 mm was also used in various submachine guns and
  other firearms supplied to or used in Bulgaria.
</p>

<p>
  After the end of the Cold War, the 9×19 mm continued to be used in Bulgarian
  service and police firearms, and the cartridge is also manufactured in Bulgaria.
</p>

<p>
  This makes the 9×19 mm part of both global history and the modern history of
  Bulgarian small arms.
</p>
<h2>Different Variants and Loads</h2>

<p>
  One reason the 9×19 mm has remained relevant for so long is the enormous
  variety of available variants.
</p>

<p>
  The cartridge is manufactured with bullets of different weights and designs,
  ranging from light bullets weighing around 6 g to heavy variants weighing around
  9.5 g or more.
</p>

<p>
  Available types include:
</p>
<ul>
  <li><strong>FMJ</strong> – standard military and training bullet;</li>
  <li><strong>JHP</strong> – jacketed hollow-point bullet;</li>
  <li><strong>SP</strong> – soft-point or exposed-tip bullet;</li>
  <li><strong>Subsonic</strong> variants;</li>
  <li><strong>Heavy bullets</strong>;</li>
  <li>Specialized police and sporting loads;</li>
  <li>Higher-pressure variants.</li>
</ul>

<p>&nbsp;</p>

<p>
  For NATO military ammunition, the standard bullet is designed to provide the
  required compatibility across different firearms and manufacturers.
</p>

<p>
  The American <strong>M882 Ball</strong>, for example, uses a bullet weighing
  <strong>124 gr (8.04 g)</strong>, and official US documentation lists a muzzle
  velocity of <strong>385 m/s</strong> for this ammunition.
</p>


<h2>9×19 NATO</h2>

<p>
  It is important to distinguish between the general designation <strong> 9×19 mm  </strong>
  and the specific standard <strong>9 mm NATO</strong>.
</p>

<p>
  9 mm NATO is a military ammunition standard designed to meet NATO requirements.
  It is not a separate caliber — geometrically, it belongs to the 9×19 mm family.
</p>

<p>
  C.I.P. specifies a maximum mean pressure of
  <strong>2350 bar</strong> for 9 mm Luger, while specific military NATO specifications
  have their own requirements and testing methods.
</p>

<p>
  Therefore, the terms "9×19," "9 mm Luger," "9 mm Parabellum," and "9 mm NATO"
  should not be treated as fully interchangeable technical designations.
</p>


<h2>Relationship with 7.65×21 Parabellum</h2>

<p>
  The 9×19 mm is a direct successor to the <strong>7.65×21 mm Parabellum</strong>.
</p>

<p>
  When developing the new cartridge, Georg Luger retained the basic case design
  but expanded the case mouth to accommodate a larger 9 mm bullet.
</p>

<p>
  This relatively small change led to the creation of a cartridge that would
  subsequently become far more significant than its predecessor.
</p>

<p>
  The historical development can be represented as follows:
</p>

<p>
  <strong>7.65×25 Borchardt → 7.65×21 Parabellum → 9×19 Parabellum</strong>
</p>

<p>
  This is one of the clearest evolutionary lines in the history of modern handgun cartridges.
</p>


<h2>Relationship with Other Cartridges</h2>

<p>
  The history of the 9×19 mm is also connected to the development of a number of
  other handgun cartridges.
</p>

<p>
  The larger diameter and relatively high velocity of the 9×19 mm place it between
  less powerful compact cartridges such as the <strong>9×17 mm Browning Short</strong>
  and more powerful designs such as the <strong>.40 S&W</strong> and
  <strong>.45 ACP</strong>.
</p>

<p>
  During the 20th century, many cartridges appeared that sought to offer a different
  balance of size, power, and recoil. However, the 9×19 mm retained its enormous
  advantage thanks to its established international manufacturing and military infrastructure.
</p>


<h2>Interesting Fact</h2>

<p>
  The name <strong>"Parabellum"</strong> was not invented specifically for the cartridge.
</p>

<p>
  It comes from the Latin phrase:
</p>

<p>
  <strong>"Si vis pacem, para bellum" – "If you want peace, prepare for war."</strong>
</p>

<p>
  <strong>Parabellum</strong> was the telegraphic designation of the German company
  <strong>DWM</strong>, and the name later became associated with the pistol and cartridge.
</p>

<p>
  This is why two widely used names exist today for the same ammunition:
</p>

<p>
  <strong>9×19 mm Luger = 9×19 mm Parabellum</strong>
</p>

<p>
  The historical connection with DWM and Georg Luger's pistol makes both
  names widely recognizable.
</p>


<h2>The Cartridge Today</h2>

<p>
  More than <strong>120 years after its development</strong>, the 9×19 mm Parabellum
  remains one of the most important handgun cartridges in the world.
</p>

<p>
  It is used by military and police organizations, in sporting pistols,
  civilian firearms, and numerous submachine guns.
</p>

<p>
  The enormous number of existing firearms, manufacturers, and ammunition types
  creates a self-sustaining standard of sorts — the more firearms use
  9×19 mm, the more widely the cartridge is manufactured, and widespread production
  in turn makes the caliber even more attractive for new firearm systems.
</p>

<p>
  Today, the 9×19 mm is not merely a historically successful cartridge. It is an
  <strong>active global standard</strong>, officially standardized for
  interchangeability within NATO.
</p>
<TechnicalData
  language="en"
  title="9×19 mm Luger / Parabellum"
  data={[
    ["Designation", "9×19 mm Luger / Parabellum"],
    ["Other designations", "9 mm Luger, 9 mm Parabellum, 9 mm Para, 9 mm NATO"],
    ["Type", "Handgun / submachine gun cartridge"],
    ["Origin", "Germany"],
    ["Developer", "Georg Luger / DWM"],
    ["Year of development", "1902"],
    ["First military adoption", "German Navy, 1904"],
    ["Adoption by the German Army", "1908"],
    ["Case type", "Rimless, cylindrical/slightly tapered"],
    ["Case length", "19.15 mm"],
    ["Maximum cartridge length", "29.69 mm"],
    ["Bullet diameter", "Approximately 9.03 mm"],
    ["Ignition type", "Centerfire"],
    ["Typical bullet weight", "6.0–9.5 g"],
    ["Typical muzzle velocity", "300–400 m/s*"],
    ["Typical muzzle energy", "Approximately 400–600 J*"],
    ["Maximum mean pressure under C.I.P.", "2350 bar"],
    ["Primary purpose", "Military, police, civilian, and sporting firearms"],
  ]}
/>

<p>
  * The term <strong>9 mm NATO</strong> refers to a specific military standard
  for 9×19 mm ammunition and should not be treated as a fully interchangeable
  technical designation with 9 mm Luger or 9 mm Parabellum.
</p>
<p>
  * Ballistic characteristics depend on bullet weight and design,
  the specific load, and barrel length. Standard 9×19 mm FMJ ammunition with a bullet
  weighing approximately 7.5–8.0 g typically achieves velocities of around
  350–400 m/s.
  Military NATO ammunition may have different characteristics depending on
  the specific specification. C.I.P. defines the standard geometric dimensions
  and maximum mean pressure of the 9 mm Luger.
</p>

<p>
  ** 9 mm NATO is not a separate caliber, but a standardized military version of
  9×19 mm. NATO uses standards to ensure the interchangeability of 9×19 mm ammunition.
</p>

  {/* Text about 9×19 mm will be added here. */}
</Section>

  <Divider />


        </div>
      </main>
    </>
  );
}
