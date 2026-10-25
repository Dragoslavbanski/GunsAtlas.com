
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
<Section
  id="9x20-browning-long"
  title="9×20 mm Browning Long"
>
  <img
    src="/images/calibers/cartridges/9x20 Browning long.png"
    alt="9×20 mm Browning Long"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    The powerful Belgian cartridge designed for one of John Browning's most successful pistols of the early 20th century.
  </em>
</p>
<p>
  <strong>9×20 mm Browning Long</strong>, also known as <strong>9 mm Browning Long</strong> and <strong>9×20 mm SR</strong>, is a
  Belgian handgun cartridge developed in the early 20th century for the <strong>FN Browning
  Model 1903</strong>. It is one of the most powerful cartridges used in pistols with
  a blowback action and saw extensive military and police use in Europe.
</p>

<p>
  The cartridge was developed by <strong>John Moses Browning</strong>
  in collaboration with the Belgian company <strong>Fabrique Nationale (FN)</strong>.
  The pistol and ammunition were introduced in <strong>1903</strong>, and the system was adopted by several European countries in the following years.
</p>

<p>
  For its time, the 9×20 Browning Long offered an impressive combination of muzzle velocity and muzzle energy. However, it appeared during a period when the <strong>9×19 mm Parabellum</strong> was also being developed, gradually becoming the more successful military handgun cartridge.
</p>
<Section
  id="history-creation"
  title="Development History"
>
  <p>
    In the early 20th century, John Browning was already an established firearms designer, while <strong>Fabrique Nationale</strong> in Belgium was manufacturing
    his successful small Browning Model 1900 pistol in 7.65 mm caliber.
  </p>

  <p>
    A more powerful pistol was needed for military purposes, however. FN commissioned Browning to develop a larger model intended
    for military and police use.
  </p>

  <p>
    The new pistol was designated the <strong>FN Browning Model 1903</strong>, also known as the <strong>Browning No. 2</strong>. The new 9×20 mm Browning Long was
    developed for it. The pistol was introduced in 1903 and used a <strong>blowback action</strong>,
    which is particularly interesting given the cartridge's relatively high power.
  </p>

  <p>
    To make it possible to use a powerful 9 mm cartridge in a blowback-operated firearm, the pistol's design relied on
    a relatively heavy slide and a suitable balance between slide mass, recoil spring strength, and the characteristics of the ammunition.
  </p>
</Section>
<h2>FN Browning Model 1903</h2>

<img
  src="/images/calibers/cartridges/FN Browning Model 1903.png"
  alt="FN Browning Model 1903"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "0 auto 30px auto",
  }}
/>
<p>
  The <strong>FN Browning Model 1903</strong> is one of John Browning's most significant military pistols.
</p>

<p>
  It was developed from his earlier design but enlarged to accommodate the more powerful 9×20 Browning
  Long. The pistol has a <strong>7-round magazine</strong>, and its characteristic blowback design allows for relatively
  simple mechanics.
</p>

<p>
  Its reliability, good accuracy, relatively moderate weight, and quick reloading made the Model 1903 attractive to
  military and police organizations.
</p>

<p>
  More than <strong>58,000</strong> pistols were produced by FN, while the Swedish version manufactured by <strong>Husqvarna</strong>
  reached more than <strong>89,000 units</strong>.
</p>
<Section
  id="construction-features"
  title="Design and Features"
>
  <p>
    The 9×20 Browning Long is a <strong>semi-rimmed cartridge</strong> with a cylindrical case.
  </p>

  <p>
    This is an important design feature. The rim is slightly wider than the body of the case and serves to position the cartridge in
    the chamber. For this reason, the designation <strong>9×20 mm SR Browning Long</strong> is frequently found in technical literature.
  </p>

  <p>
    According to current <strong>C.I.P.</strong> data, the maximum cartridge length is approximately <strong>30.50 mm</strong>, while the case dimensions
    are just over 20 mm. The bullet diameter is approximately <strong>9.09 mm</strong>. C.I.P. specifies a maximum mean pressure of
    <strong>1650 bar</strong>.
  </p>

  <p>
    The cartridge was designed to provide substantial power while remaining suitable for a firearm
    with a blowback action.
  </p>
</Section>
<Section
  id="ballistic-characteristics"
  title="Ballistic Characteristics"
>
  <p>
    For the early 20th century, the 9×20 Browning Long had impressive ballistic performance.
  </p>

  <p>
    The typical bullet weighs around <strong>7.1 g</strong>, and historical figures for the cartridge indicate a muzzle velocity of approximately
    <strong> 335 m/s</strong> and muzzle energy of approximately <strong> 398 J</strong>.
  </p>

  <p>
    These characteristics place it close to some early loads of the <strong>9×19 mm Parabellum</strong>, although the two cartridges are
    structurally different.
  </p>

  <p>
    Its considerable power for the time was one of the reasons the 9×20 Browning Long saw military use.
  </p>
</Section>
<Section
  id="military-police-use"
  title="Military and Police Use"
>
  <p>
    The FN Browning Model 1903 was adopted by several countries and security organizations.
  </p>

  <p>
    Notable users included:
  </p>

  <ul>
    <li><strong>Belgium</strong></li>
    <li><strong>Sweden</strong></li>
    <li><strong>Russia</strong> – police and gendarmerie units of the Russian Empire</li>
    <li><strong>Serbia</strong></li>
    <li><strong>Paraguay</strong></li>
    <li><strong>Peru</strong></li>
    <li><strong>Ottoman Empire</strong></li>
    <li><strong>Finland</strong></li>
    <li><strong>Colombia</strong> and other countries.</li>
  </ul>

  <p>&nbsp;</p>

  <p>
    The cartridge became particularly important in <strong>Sweden</strong>, where the pistol was adopted as the <strong>m/1907</strong>.
    After obtaining a license, Sweden began domestic production of the firearm at <strong>Husqvarna</strong> factories,
    which continued until 1942.
  </p>
</Section>
<Section
  id="9x20-finland"
  title="9×20 Browning Long in Finland"
>
  <p>
    The cartridge also has an interesting history in Finland.
  </p>

  <p>
    The Finnish Army used FN Model 1903 pistols and Swedish Husqvarna m/07 pistols. During the <strong>Winter War (1939–1940)</strong>,
    Finnish and Swedish volunteers used these pistols against Soviet forces.
  </p>

  <p>
    After the Winter War, Swedish volunteer formations left a significant number of FN
    Model 1903 and Husqvarna m/07 pistols in Finland. Some were subsequently used by Finnish troops during the <strong>Continuation War</strong>.
  </p>

  <p>
    Thus, the 9×20 Browning Long remained in Finnish service even after it had become outdated compared with more modern 9 mm cartridges.
  </p>
</Section>
<Section
  id="swedish-m07"
  title="The Swedish m/07"
>
  <p>
    Sweden was one of the most important users of the 9×20 Browning Long.
  </p>

  <p>
    In <strong>1907</strong>, the Swedish Army adopted the pistol as the <strong>Pistol m/07</strong>, after which domestic licensed
    production began. Husqvarna manufactured tens of thousands of pistols, with total production exceeding 89,000 units.
  </p>

  <p>
    The m/07 remained the standard personal sidearm of the Swedish Army until the adoption of the <strong>Lahti L-35 (m/40)</strong> in 1940,
    after which it was relegated to reserve-pistol status.
  </p>

  <p>
    Interestingly, the m/07 was later brought out of storage and used again during the <strong>1980s</strong>, when the Swedish
    Army temporarily faced a shortage of reliable pistols because of problems with the slides of the Lahti L-35.
  </p>

  <p>
    This means that a firearm designed in the early 20th century for the 9×20 Browning Long remained in active Swedish service for almost eight
    decades after its introduction.
  </p>
</Section>
<h2>Relationship with 9×19 mm Parabellum</h2>

<p>
  The history of the 9×20 Browning Long developed alongside that of the <strong>9×19 mm Parabellum</strong>.
</p>

<p>
  The two cartridges were developed at approximately the same time and shared a similar concept — a relatively powerful 9 mm cartridge for
  a semiautomatic pistol.
</p>

<p>
  The 9×20 Browning Long, however, uses a <strong>semi-rimmed case</strong> and was intended for a blowback-operated pistol. The 9×19 Parabellum is
  rimless and was developed for a pistol with a locked-breech mechanism.
</p>

<p>
  Ultimately, the 9×19 Parabellum proved to be the more successful design and gradually replaced the 9×20 Browning Long in military service.
</p>
<h2>Why Did the 9×20 Browning Long Fail to Become Established?</h2>

<p>
  The main problem was not a lack of merit.
</p>

<p>
  The cartridge offered good ballistic performance, and the FN Browning Model 1903 was a reliable, well-designed pistol. The problem was that the 9×20
  Browning Long appeared at a time when other, more successful 9 mm systems were being developed.
</p>

<p>
  One particularly important competitor was the <strong>9×19 mm Parabellum</strong>, which offered a similar concept but was designed for a locked
  breech and subsequently achieved enormous international adoption.
</p>

<p>
  Military users gradually favored standardized pistol systems chambered in 9×19 mm, while the 9×20 Browning Long remained primarily associated with
  the historical firearms for which it had been developed.
</p>
<h2>The Cartridge Today</h2>

<p>
  The 9×20 Browning Long is no longer a standard military or police cartridge.
</p>

<p>
  It is found primarily among collectors and owners of historical <strong>FN Model 1903</strong> and <strong>Husqvarna m/07</strong> pistols.
  Although production is now very limited, the ammunition still appears on the collector market.
</p>

<p>
  Interestingly, historical 9×20 Browning Long cartridges were manufactured not only in Belgium and Sweden, but also by manufacturers
  in other countries. These included <strong>Kynoch</strong> in the United Kingdom and various manufacturers in Europe.
</p>

<p>
  Today, the 9×20 Browning Long has primarily historical and collectible significance. After World War II, the cartridge gradually
  lost its military and police role and remained associated mainly with the historical pistols for which it was developed.
</p>
<h2>Interesting Fact</h2>

<p>
  The 9×20 Browning Long is one of the most powerful cartridges used in a <strong>mass-produced blowback-operated pistol</strong>.
</p>

<p>
  This is an unusual combination. With more powerful handgun cartridges, designers usually move to a locked-breech action, but Browning managed to create a working system using a heavy slide and blowback operation.
</p>

<p>
  The FN Model 1903 thus became an interesting example of the limits of the blowback system in the early history of semiautomatic pistols.
</p>
<TechnicalData
  language="en"
  title="9×20 mm Browning Long"
  data={[
    ["Designation", "9×20 mm Browning Long"],
    ["Alternative designation", "9 mm Browning Long / 9×20 mm SR"],
    ["Type", "Handgun cartridge"],
    ["Origin", "Belgium"],
    ["Developer", "John Moses Browning / FN"],
    ["Year of development", "Approximately 1902–1903"],
    ["Case length", "Approximately 20 mm"],
    ["Maximum cartridge length", "Approximately 30.5 mm"],
    ["Bullet diameter", "Approximately 9.09 mm"],
    ["Case type", "Semi-rimmed, cylindrical"],
    ["Ignition", "Centerfire"],
    ["Typical bullet weight", "Approximately 7.1 g"],
    ["Muzzle velocity", "Approximately 335 m/s*"],
    ["Muzzle energy", "Approximately 398 J*"],
    ["Maximum mean pressure under C.I.P.", "1650 bar"],
    ["Primary firearms", "FN Browning Model 1903 / Husqvarna m/07"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific ammunition and barrel length. The values of approximately <strong>335 m/s and 398 J</strong> are
  historical figures typical of a bullet weighing around 7.1 g.
</p>
</Section>
<Section
  id="9x21-russian-gyurza"
  title="9×21 mm Russian (Gyurza)"
>
  <img
    src="/images/calibers/cartridges/9×21 mm Russian.png"
    alt="9×21 mm Russian (Gyurza)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    The Russian high-impulse cartridge designed to engage targets protected by body armor.
  </em>
</p>
<p>
  <strong>9×21 mm Russian</strong>, also known as <strong>9×21 mm Gyurza</strong>, is a Russian pistol cartridge developed in the late 1980s and early 1990s by the <strong>Central Research Institute of Precision Engineering</strong> (<strong>Центральный научно-исследовательский институт точного машиностроения</strong>, abbreviated <strong>ЦНИИТОЧМАШ</strong>). It was created as part of the development of a new generation of pistol systems for the Russian armed forces and special services.
</p>

<p>
  The main objective was to create a compact pistol cartridge with greater effectiveness against targets protected by body armor than traditional pistol cartridges. To achieve this, a specialized series of bullets was developed, among which the armor-piercing <strong>SP-10</strong>, later assigned the designation <strong>7N29</strong>, holds a particularly important place.
</p>

<p>
  The cartridge is closely associated with the <strong>SR-1 “Vektor”</strong> pistol, also known as the <strong>“Gyurza”</strong>. The pistol was later adopted by various Russian state agencies under the designation <strong>SPS — Serdyukov Self-Loading Pistol</strong>.
</p>
<h2>Development History</h2>

<p>
  In the late 1980s, the Soviet Union began developing a new pistol system intended to replace the outdated <strong>9×18 mm PM</strong> in certain roles.
</p>

<p>
  The requirements for the new weapon were significantly more demanding than those for a conventional service pistol. In addition to good accuracy and reliability, it had to be capable of engaging targets protected by body armor and other light barriers.
</p>

<p>
  Development was assigned to <strong>TsNIITochMash</strong>. As part of the program, a new pistol and a new high-impulse cartridge were developed simultaneously.
</p>

<p>
  In the early 1990s, the experimental <strong>RG052</strong> cartridge was created, forming the basis for the production <strong>SP-10</strong>. The ammunition was developed by specialists at TsNIITochMash, including designer <strong>Alexander Yuriev</strong>.
</p>

<p>
  Unlike conventional pistol cartridges, which are designed primarily to balance size, recoil, and overall effectiveness, the new 9×21 mm placed particular emphasis on <strong>penetration</strong>.
</p>
<h2>The “Vektor” / “Gyurza” Pistol</h2>

<img
  src="/images/calibers/cartridges/Gyurza pistol.png"
  alt="The “Vektor” / “Gyurza” pistol"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "0 auto 30px auto",
  }}
/>
<p>
  The new cartridge was developed alongside the pistol, which initially received various experimental designations before becoming known as the <strong>SR-1 “Vektor”</strong> and <strong>“Gyurza”</strong>.
</p>

<p>
  The pistol was developed by a team led by <strong>Pyotr Serdyukov</strong> at TsNIITochMash.
</p>

<p>
  Unlike the widely used <strong>PM</strong>, which operates with a blowback action, the new pistol uses a <strong>locked-breech system with a moving barrel</strong>, allowing it to use a significantly more powerful cartridge.
</p>

<p>
  This is an important design distinction. The increased power of the 9×21 mm cartridge could not practically be used in a standard blowback system such as that of the PM.
</p>

<p>
  The pistol was designed to combine relatively compact dimensions with high firepower and the ability to engage protected targets.
</p>

<h2>Design and Characteristics</h2>

<p>
  The 9×21 mm Russian is a <strong>rimless cartridge with a cylindrical case and centerfire ignition</strong>.
</p>

<p>
  Unlike the Italian <strong>9×21 IMI</strong>, the Russian 9×21 mm is a different design and should not be regarded as a variant of the Italian cartridge.
</p>

<p>
  The case is approximately <strong>21 mm</strong> long, while the overall cartridge length is approximately <strong>33 mm</strong> for typical military loads. The bullet diameter is approximately <strong>9.05 mm</strong>.
</p>

<p>
  The cartridge is produced in several variants with different purposes. This is one of its most interesting characteristics: <strong>9×21 mm is not a single type of ammunition</strong>, but an entire family of specialized cartridges.
</p>

<h2>SP-10 (7N29) — The Armor-Piercing Cartridge</h2>

<p>
  The best-known variant is the <strong>SP-10</strong>, designated <strong>7N29</strong>.
</p>

<p>
  It uses a bullet with a <strong>heat-treated steel core</strong>, designed to provide enhanced penetration. The bullet's construction enables it to engage both unprotected targets and targets wearing certain types of personal body armor.
</p>

<p>
  According to TsNIITochMash data, the bullet's muzzle velocity is approximately <strong>435 m/s</strong>. The cartridge is intended to engage unprotected targets at distances of up to 100 m and body-armored targets at shorter distances, depending on the armor class.
</p>

<p>
  The SP-10 bullet weighs approximately <strong>7.1 g</strong>, while the complete cartridge weighs approximately <strong>11.6 g</strong>.
</p>

<p>
  It is the armor-piercing SP-10 that gives the 9×21 mm its reputation as an unusually powerful pistol cartridge.
</p>

<h2>Other 9×21 mm Variants</h2>

<p>
  Other types of ammunition have also been developed for the Russian 9×21 mm.
</p>

<p>
  The <strong>SP-11 (7N28)</strong> uses a bullet with a <strong>lead core</strong> and is intended primarily for use against unprotected targets. It was developed as a less expensive alternative to the SP-10 and has a lower tendency to ricochet. TsNIITochMash lists a muzzle velocity of approximately <strong>390 m/s</strong> and a bullet weight of approximately <strong>8.1 g</strong>.
</p>

<p>
  Other specialized variants include the <strong>SP-12</strong> and <strong>SP-13 (7BT3)</strong>. The SP-13 uses an armor-piercing tracer bullet and is intended for specialized tasks.
</p>

<p>
  As a result, the 9×21 mm gradually became more than a single cartridge: it developed into a <strong>family of ammunition types designed for different purposes</strong>.
</p>

<h2>Military and Special-Purpose Applications</h2>

<p>
  The 9×21 mm was originally developed for the needs of Russian special services and military units.
</p>

<p>
  The <strong>SP-10</strong> was adopted in <strong>1996</strong>, followed by the <strong>SP-11</strong> in <strong>1997</strong>.
</p>

<p>
  The cartridges are used primarily in pistols of the <strong>SR-1/SPS</strong> family and, later, in the compact submachine gun <strong>SR-2 “Veresk”</strong>.
</p>

<p>
  This significantly expanded the role of the 9×21 mm. The cartridge was no longer intended solely for use in self-loading pistols; it was also used in automatic weapons designed for close combat.
</p>

<h2>Ballistic Characteristics</h2>

<p>
  The 9×21 mm is significantly more powerful than the standard <strong>9×18 mm PM</strong>.
</p>

<p>
  Different combinations of bullet weight and muzzle velocity are found among its various versions.
</p>

<p>
  For the SP-10, reported bullet weights range from approximately <strong>6.7–7.1 g</strong>, with velocities of around <strong>410–435 m/s</strong>. This produces a muzzle energy of approximately <strong>560–670 J</strong>, depending on the specific load and test barrel used.
</p>

<p>
  The SP-11 uses a heavier bullet weighing approximately <strong>8.1 g</strong>, traveling at around <strong>390 m/s</strong>, producing approximately <strong>615 J</strong>.
</p>

<p>
  These figures illustrate why the 9×21 mm occupies a distinctly different performance category from the 9×18 mm PM.
</p>

<h2>9×21 mm and 9×18 mm PM</h2>

<p>
  There is one point in your original text that I would correct definitively:
</p>

<p>
  <strong>The 9×21 mm should not be described as merely an extended version of the 9×18 mm PM.</strong>
</p>

<p>
  Although it was conceptually developed to provide significantly greater effectiveness than the Soviet 9×18 mm, the Russian 9×21 mm is an independent design.
</p>

<p>
  It belongs to a new generation of ammunition developed for weapons with locked-breech actions and specialized applications.
</p>

<p>
  The difference between the two cartridges is substantial and cannot be reduced to case length alone.
</p>

<h2>9×21 Russian and 9×19 Parabellum</h2>

<p>
  The 9×21 mm Russian is also interesting in the context of the development of modern pistol ammunition.
</p>

<p>
  It is similar in dimensions to certain other 9 mm cartridges, but it is not interchangeable with them.
</p>

<p>
  It is particularly important not to confuse it with the <strong>9×21 IMI</strong>, developed for the Italian civilian market. The Italian cartridge is based on the <strong>9×19 mm Parabellum</strong>, whereas the Russian 9×21 mm is a separate design with a different purpose.
</p>

<p>
  This is a good example of why the designation <strong>“9×21” alone is insufficient to identify a cartridge</strong>.
</p>

<h2>The Cartridge Today</h2>

<p>
  The 9×21 mm Russian continues to be manufactured and used in Russia.
</p>

<p>
  The cartridge remains associated primarily with weapons developed by TsNIITochMash and with specialized military and police units. TsNIITochMash continues to manufacture 9×21 mm ammunition, including the armor-piercing SP-10 and other specialized variants.
</p>

<p>
  Unlike the 9×19 mm Parabellum, it has never achieved widespread international distribution. Its role remains specialized: a <strong>high-impulse pistol cartridge capable of using armor-piercing bullets</strong>.
</p>

<h2>Interesting Fact</h2>

<p>
  When developing the 9×21 mm, Russian designers did not limit themselves to a single universal bullet.
</p>

<p>
  The development of the <strong>SP-10, SP-11, SP-12, and SP-13</strong> illustrates a different approach: the same caliber is used to create ammunition for different purposes, including armor penetration, general-purpose use, reduced ricochet tendency, and specialized applications.
</p>

<p>
  In this way, a relatively uncommon pistol cartridge became the foundation for an entire system of specialized ammunition.
</p>
<TechnicalData
  title="9×21 mm Russian"
  language="en"
  data={[
    ["Designation", "9×21 mm Russian"],
    ["Other designations", "9×21 mm Gyurza"],
    ["Type", "Pistol / submachine gun cartridge"],
    ["Origin", "USSR / Russia"],
    ["Developer", "TsNIITochMash"],
    ["Development began", "Late 1980s – early 1990s"],
    ["Case length", "Approximately 20.9–21.0 mm"],
    ["Overall cartridge length", "Approximately 32.7–33.0 mm"],
    ["Bullet diameter", "Approximately 9.05 mm"],
    ["Case type", "Rimless, cylindrical"],
    ["Ignition", "Centerfire"],
    ["Main variants", "SP-10 (7N29), SP-11 (7N28), SP-12, SP-13 (7BT3)"],
    ["Bullet weight", "Approximately 6.7–8.1 g"],
    ["Muzzle velocity", "Approximately 390–435 m/s*"],
    ["Muzzle energy", "Approximately 560–615+ J*"],
    ["Main firearms", "SR-1 “Vektor” / SPS, SR-2 “Veresk”"],
  ]}
/>
<p>
  * Ballistic performance depends on the specific cartridge variant. For example, the SP-10 is reported to have a bullet weight of approximately 6.7–7.1 g and a muzzle velocity of 410–435 m/s, while the SP-11 uses a heavier bullet at a lower muzzle velocity.
</p>
</Section>
<Section
  id="9x21-imi"
  title="9×21 mm IMI"
>
  <img
    src="/images/calibers/cartridges/9x21 IMI.png"
    alt="9×21 mm IMI"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    The Italian cartridge developed as a civilian alternative to 9×19 Parabellum, which became one of the most popular pistol calibers in Italy.
  </em>
</p>
<p>
  <strong>9×21 mm IMI</strong> is a rimless 9 mm pistol cartridge developed in the 1980s as an alternative to <strong>9×19 mm Parabellum</strong> for the Italian civilian market.
</p>

<p>
  Its history is linked to Italian legislation, which for decades imposed restrictions on the civilian use of handguns chambered in 9×19 mm. This created demand for a cartridge offering similar dimensions and ballistic characteristics while remaining distinct from the standard military 9×19 mm.
</p>

<p>
  In the early 1980s, Italians <strong>Erasmo Giordano</strong> and <strong>Armando Piscetta</strong> developed several versions of a 9 mm cartridge with a case lengthened to approximately 21 mm. These developments gave rise to <strong>9×21 GP</strong> and <strong>9×21 Jäger</strong>, after which the Israeli company <strong>Israel Military Industries (IMI)</strong> began manufacturing the version designated <strong>9×21 IMI</strong>.
</p>
<h2>Development History</h2>

<p>
  The history of the 9×21 mm is closely linked to Italian firearms legislation. During the 1970s and early 1980s, civilian handguns chambered in <strong>9×19 mm Parabellum</strong> were subject to special restrictions because the cartridge was classified as military ammunition. At the same time, the civilian market showed considerable interest in powerful 9 mm pistols.
</p>

<p>
  This created a need for a cartridge with characteristics similar to those of the 9×19 mm but with a different design.
</p>

<p>
  In the early 1980s, <strong>Erasmo Giordano</strong> and <strong>Armando Piscetta</strong>, who was associated with the Italian company <strong>Jäger</strong>, began working on a new 9 mm cartridge. One of the first solutions used a <strong>7.65×21 mm Parabellum</strong> case whose mouth was expanded to accommodate a 9 mm bullet. This resulted in the <strong>9×21 GP</strong> — the designation derives from the names <strong>Giordano-Piscetta</strong>. The resulting cartridge had a shape very similar to that of the 9×19 mm Parabellum.
</p>

<p>
  The next design was the <strong>9×21 Jäger</strong>. It used a case made by shortening the <strong>9×23 mm Steyr</strong> to approximately 21 mm. Unlike the 9×21 GP, this case was cylindrical. The variant received approval for civilian firearms in Italy but failed to gain traction because no manufacturer undertook large-scale ammunition production.
</p>

<p>
  In 1984, a semiautomatic version of the Israeli <strong>UZI</strong>, known as the <strong>IMI Defender</strong>, was introduced to the Italian market in 9×21 mm. The Israeli company <strong>Israel Military Industries (IMI)</strong> began manufacturing suitable ammunition. Its design was similar to the earlier 9×21 GP: the case was approximately 21 mm long and had a shape similar to that of the 9×19 mm.
</p>

<p>
  On <strong>October 24, 1984</strong>, the Italian Weapons Commission approved the IMI Defender in this caliber for the civilian market. From that point onward, the 9×21 IMI began to spread rapidly throughout Italy.
</p>

<p>
  The cartridge, which began as an Italian development intended to overcome legislative restrictions, thus became a mass-produced round with a wide range of applications.
</p>
<h2>The Emergence of the 9×21 IMI</h2>

<p>
  The design of the <strong>9×21 IMI</strong> is very similar to that of the <strong>9×19 mm Parabellum</strong>. The main difference is the case length — approximately <strong>21 mm instead of 19 mm</strong>.
</p>

<p>
  Despite the longer case, the overall cartridge length remains almost the same as that of the 9×19 mm. This is achieved by positioning the bullet differently within the case.
</p>

<p>
  This design makes it possible to manufacture pistols similar in size and construction to 9×19 mm firearms, but specifically chambered for the 9×21 IMI.
</p>

<p>
  The first widely known model introduced to the Italian market was the <strong>IMI Defender</strong>, a semiautomatic version of the Micro UZI. Following its introduction, numerous manufacturers began offering pistols in the new caliber.
</p>
<h2>Design and Characteristics</h2>

<p>
  The 9×21 IMI is a <strong>rimless cartridge with a slightly tapered case and centerfire ignition</strong>.
</p>

<p>
  According to data from the <strong>Commission Internationale Permanente pour l'Épreuve des Armes à Feu Portatives (C.I.P.)</strong> — the <strong>Permanent International Commission for the Proof of Small Arms</strong> — the case length is <strong>21.15 mm</strong>, and the maximum overall cartridge length is <strong>29.75 mm</strong>. The bullet diameter is <strong>9.03 mm</strong>.
</p>

<p>
  The case is slightly longer than that of the 9×19 mm, but the overall lengths of the two cartridges are almost identical. This allows the 9×21 IMI to be used in compact pistols with a design similar to that of firearms chambered in 9×19 mm.
</p>

<p>
  The cartridge uses various bullet types, including full metal jacket (FMJ) bullets intended for sporting, training, and other civilian applications.
</p>
<h2>9×21 IMI and 9×19 Parabellum</h2>

<p>
  The 9×21 IMI was developed specifically to give the Italian civilian market access to pistols with characteristics similar to those of firearms chambered in <strong>9×19 mm Parabellum</strong>.
</p>

<p>
  With comparable bullets, the two cartridges can have very similar ballistic characteristics. For example, C.I.P. lists reference values for the 9×21 IMI of <strong>390 m/s and 570 J</strong> with a 7.45 g bullet, and <strong>360 m/s and 518 J</strong> with an 8.0 g bullet.
</p>

<p>
  However, this does not mean that the two cartridges are interchangeable. <strong>9×21 IMI and 9×19 mm are different cartridges and must only be used in firearms chambered for the respective cartridge.</strong>
</p>

<p>
  An interesting point is that, despite its longer case, the 9×21 IMI is not necessarily more powerful than the 9×19 mm. Actual ballistic performance depends on the specific load, bullet, and firearm.
</p>
<h2>Popularity in Italy</h2>

<p>
  The 9×21 IMI became an exceptionally successful cartridge on the Italian civilian market.
</p>

<p>
  Numerous manufacturers began offering pistols in this caliber, including <strong>Beretta</strong>, <strong>Tanfoglio</strong>, <strong>Benelli</strong>, <strong>SIG Sauer</strong>, and other companies.
</p>

<p>
  Many of these firearms are mechanically similar to their 9×19 mm counterparts. A manufacturer can adapt an existing design by changing the barrel and chamber without developing an entirely new pistol.
</p>

<p>
  Some specialized Italian sources estimate that the 9×21 accounted for approximately <strong>80%</strong> of civilian pistols in Italy during the period of its greatest popularity. This figure is not official statistical data, but it illustrates the cartridge's widespread acceptance.
</p>
<h2>The Cartridge Outside Italy</h2>

<p>
  Historically, Italy has remained the primary market for the 9×21 IMI. The cartridge is also found in other countries where civilian use of the 9×19 mm has been restricted.
</p>

<p>
  One such country is <strong>Mexico</strong>, where legislation also places restrictions on civilian possession of firearms in certain military calibers.
</p>

<p>
  Outside these markets, the 9×21 IMI remains a relatively niche cartridge. The widespread international availability of the 9×19 mm means that most countries have not had the same need for a civilian alternative.
</p>
<h2>9×21 IMI and 9×21 Russian</h2>

<p>
  The 9×21 IMI should not be confused with the Russian <strong>9×21 mm</strong>, developed for the <strong>SPS “Gyurza”</strong> system and used in specialized military and police firearms.
</p>

<p>
  Although their designations are identical, these are <strong>two different cartridges</strong>, developed for different purposes and featuring different designs and ballistic characteristics.
</p>

<p>
  The Russian 9×21 is not mechanically or practically interchangeable with the 9×21 IMI.
</p>

<p>
  Therefore, the designation <strong>9×21</strong> alone is insufficient to identify a specific cartridge.
</p>
<h2>The Cartridge Today</h2>

<p>
  For decades, the 9×21 IMI enjoyed a major advantage in the Italian civilian market because of restrictions on civilian use of the 9×19 mm.
</p>

<p>
  This changed with Italy's <strong>Legge 238/2021</strong>, amendments to which entered into force in <strong>2022</strong>. The law removed the restriction in the relevant legislation that placed 9×19 mm Parabellum semiautomatic handguns in a special category. At the same time, it introduced a requirement for 9×19 mm ammunition intended for the armed forces and state armed services to bear NATO markings or other markings indicating its specific intended use.
</p>

<p>
  This means that, following the change, <strong>civilian handguns chambered in 9×19 mm can be acquired and possessed under Italy's general legal framework for civilian firearms</strong>, subject to the applicable requirements.
</p>

<p>
  The change significantly reduced the 9×21 IMI's original advantage. Nevertheless, the cartridge has not disappeared. The large number of firearms manufactured in this caliber ensures its continued presence in the Italian civilian and sporting markets.
</p>

<p>
  Today, the 9×21 IMI remains an interesting example of how <strong>legislative restrictions can stimulate the creation and widespread adoption of a new cartridge</strong> that is technically very similar to an existing round.
</p>
<h2>Interesting Fact</h2>

<p>
  For decades, Italian shooters could use a pistol with dimensions and characteristics similar to those of a 9×19 mm firearm, but chambered for the <strong>9×21 IMI</strong>.
</p>

<p>
  As a result, an entire market ecosystem of firearms, ammunition, and accessories developed around a specialized cartridge. Manufacturers that otherwise offered their models primarily in 9×19 mm began producing dedicated 9×21 IMI versions for the Italian market.
</p>

<p>
  This is one of the clearest examples in the history of modern ammunition of the influence national legislation can have on the development of the firearms industry.
</p>
<TechnicalData
  title="9×21 mm IMI"
  language="en"
  data={[
    ["Designation", "9×21 mm IMI"],
    ["Other designations", "9×21 IMI, 9 mm IMI, 9 mm Italian"],
    ["Type", "Pistol cartridge"],
    ["Origin", "Italy / Israel"],
    ["Initial development", "Early 1980s"],
    ["9×21 IMI production", "1984"],
    ["Case type", "Rimless, slightly tapered"],
    ["Case length", "21.15 mm"],
    ["Maximum cartridge length", "29.75 mm"],
    ["Bullet diameter", "9.03 mm"],
    ["Ignition type", "Centerfire"],
    ["Typical bullet weight", "7.45–8.0 g"],
    ["Muzzle velocity", "Approximately 360–390 m/s*"],
    ["Muzzle energy", "Approximately 518–570 J*"],
    ["Maximum pressure according to C.I.P.", "235 MPa"],
  ]}
/>
<p>
  * Ballistic performance depends on the specific manufacturer, bullet weight and design, and barrel length. C.I.P. lists reference values of <strong>390 m/s and 570 J</strong> with a 7.45 g bullet and <strong>360 m/s and 518 J</strong> with an 8.0 g bullet. The maximum permitted pressure is <strong>235 MPa</strong>.
</p>
</Section>
<Section
  id="9x22-357-sig"
  title="9×22 mm .357 SIG"
>
  <img
    src="/images/calibers/cartridges/9x22 357 sig.png"
    alt="9×22 mm .357 SIG"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
    
  <em>
    The high-velocity pistol cartridge designed to combine a 9 mm bullet with high muzzle velocity and ballistic performance approaching that of more powerful handgun ammunition.
  </em>
</p>
<p>
  The <strong>.357 SIG</strong> cartridge, also known as <strong>9×22
  mm</strong>, is a rimless pistol cartridge developed in the United States in the early 1990s. It was created at the initiative of <strong>SIGARMS</strong> in cooperation with the American ammunition manufacturer <strong>Federal Cartridge Company</strong>.
</p>

<p>
  The new cartridge was introduced in <strong>1994</strong>. The main idea was to achieve a very high muzzle velocity using a relatively light <strong>9 mm bullet</strong>, while keeping the cartridge suitable for use in modern self-loading pistols.
</p>

<p>
  The name <strong>.357 SIG</strong> is associated with SIG and the concept of high-velocity ballistics similar to that of the <strong>.357 Magnum</strong>. However, the two cartridges are different: .357 Magnum is a revolver cartridge, whereas .357 SIG was specifically developed for self-loading pistols.
</p>
<h2>Development History</h2>

<p>
  By the early 1990s, the <strong>.40
  S&amp;W</strong> had already become established as a pistol cartridge developed as an intermediate option between the 9×19 mm and heavier handgun ammunition.
</p>

<p>
  Designers sought a way to achieve even higher muzzle velocity by using a smaller, more aerodynamic bullet.
</p>

<p>
  The solution was to use a case based on the <strong>.40
  S&amp;W</strong>, narrowed at the front to accommodate a bullet with a diameter of approximately 9 mm.
</p>

<p>
  This led to the development of the <strong>.357 SIG</strong>.
</p>

<p>
  The cartridge is closely related to the .40
  S&amp;W in its design, but it is not simply a .40 S&amp;W loaded with a 9 mm bullet. Its case has a <strong>bottleneck shape</strong>, with a neck specifically designed for the smaller bullet.
</p>

<p>
  The new cartridge was standardized by <strong>SAAMI in
  1994</strong>.
</p>
<h2>Why Was the .357 SIG Developed?</h2>

<p>
  The main objective was to combine:
</p>

<ul
  style={{
    width: "80%",
    margin: "0 auto 30px auto",
    paddingLeft: "40px",
    boxSizing: "border-box",
    fontSize: "1.15em",
    listStyleType: "disc",
  }}
>
  <li style={{ color: "#fff" }}>the high velocity of a lightweight 9 mm bullet;</li>
  <li style={{ color: "#fff" }}>substantial muzzle energy;</li>
  <li style={{ color: "#fff" }}>a relatively flat trajectory;</li>
  <li style={{ color: "#fff" }}>the ability to be used in compact self-loading pistols;</li>
  <li style={{ color: "#fff" }}>design compatibility with pistols developed for .40 S&amp;W.</li>
</ul>
<p>
  High velocity is one of the cartridge's most distinctive characteristics. With suitable ammunition, the .357 SIG achieves velocities significantly higher than those typical of standard 9×19 mm loads.
</p>
<h2>Design and Characteristics</h2>
<p>
  The .357 SIG is a <strong>rimless cartridge with a bottleneck case and centerfire ignition</strong>.
</p>
<p>
  The case has a base diameter close to that of the .40 S&amp;W, but narrows toward the neck, where the 9 mm bullet is seated.
</p>
<p>
  This design makes it relatively straightforward to adapt certain pistol systems originally developed for .40
  S&amp;W. In some models, a different barrel and the corresponding components can be used without changing the firearm's basic design.
</p>
<p>
  This is one reason the .357 SIG became available in pistols that were also offered in .40 S&amp;W.
</p>
<p>
  According to <strong>SAAMI</strong> standards, the case length is approximately <strong>21.97 mm</strong>, while the maximum overall cartridge length is approximately <strong>28.96 mm</strong>.
</p>
<h2>High Operating Pressure</h2>
<p>
  The .357 SIG is a <strong>high-pressure pistol cartridge</strong>. The high pressure is necessary to achieve the high muzzle velocity for which it was designed.
</p>
<p>
  However, this also places greater stress on the firearm and generally produces more noticeable recoil than standard 9×19 mm loads.
</p>
<p>
  For this reason, the cartridge's specific performance should be evaluated according to the ammunition being used, rather than its nominal designation alone.
</p>
<h2>.357 SIG and .357 Magnum</h2>

<p>
  Despite their similar designations, <strong>.357 SIG and .357
  Magnum are not the same cartridge</strong>.
</p>

<p>
  The .357 Magnum was developed for revolvers and uses a significantly longer case. The .357 SIG was developed for self-loading pistols and uses a rimless bottleneck case.
</p>

<p>
  Both cartridges use bullets with similar nominal diameters, but their designs, dimensions, intended applications, and performance characteristics are different.
</p>

<p>
  The purpose of the .357 SIG is to provide <strong>high-velocity 9 mm ballistics in a self-loading pistol</strong>, rather than to serve as a direct equivalent of the .357 Magnum.
</p>
<h2>Ballistic Characteristics</h2>

<p>
  High muzzle velocity is the most distinctive characteristic of the .357 SIG.
</p>

<p>
  Depending on bullet weight and design, modern ammunition typically achieves muzzle velocities of approximately <strong>380–450
  m/s</strong>.
</p>

<p>
  With a bullet weighing approximately <strong>8.0 g</strong> traveling at 400 m/s, muzzle energy is approximately <strong>640 J</strong>. With a lighter bullet and higher velocity, energy can exceed <strong>700 J</strong>.
</p>

<p>
  This places the .357 SIG among the highest-velocity modern pistol cartridges in the 9 mm class.
</p>

<p>
  Ballistic performance depends on the specific manufacturer, bullet weight and design, and barrel length.
</p>
<h2>Popularity and Use</h2>

<p>
  The .357 SIG achieved its greatest popularity in the <strong>United States</strong>, where it has been used by civilian shooters as well as some law enforcement agencies.
</p>

<p>
  The cartridge is available for pistols from a number of manufacturers, including:
</p>

<ul
  style={{
    width: "80%",
    margin: "0 auto 30px auto",
    paddingLeft: "40px",
    boxSizing: "border-box",
    fontSize: "1.15em",
    listStyleType: "disc",
  }}
>
  <li style={{ color: "#fff" }}><strong>SIG Sauer</strong></li>
  <li style={{ color: "#fff" }}><strong>Glock</strong></li>
  <li style={{ color: "#fff" }}><strong>Smith &amp; Wesson</strong></li>
  <li style={{ color: "#fff" }}><strong>Heckler &amp; Koch</strong></li>
  <li style={{ color: "#fff" }}><strong>Beretta</strong></li>
  <li style={{ color: "#fff" }}><strong>Springfield Armory</strong></li>
  <li style={{ color: "#fff" }}>other manufacturers.</li>
</ul>

<p>
  The cartridge has a particularly close association with <strong>SIG Sauer</strong>, as the company was responsible for its development and initial promotion.
</p>
<h2>SIG Sauer P229</h2>

<img
  src="/images/calibers/cartridges/SIG Sauer P229.png"
  alt="SIG Sauer P229"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "0 auto 30px auto",
  }}
/>
<p>
  One of the best-known pistols chambered in .357 SIG is the <strong>SIG Sauer P229</strong>.
</p>

<p>
  The P229 was developed for high-performance pistol cartridges and has been offered in several calibers, including <strong>.40 S&amp;W</strong> and <strong>.357 SIG</strong>.
</p>

<p>
  The close design relationship between the two cartridges allows manufacturers to use the same basic firearm platform for different types of ammunition.
</p>

<p>
  This helped the .357 SIG spread relatively quickly during the 1990s.
</p>
<h2>Advantages and Disadvantages</h2>

<p>
  The main advantage of the .357 SIG is its <strong>high velocity</strong>. This provides a flat trajectory and substantial muzzle energy when using a relatively lightweight 9 mm bullet.
</p>

<p>
  Another design advantage is that it can be used in a number of pistol systems based on the .40 S&amp;W.
</p>

<p>
  On the other hand, its high operating pressure places greater stress on the firearm and produces more noticeable recoil. The ammunition is also generally more expensive and less widely available than 9×19 mm.
</p>

<p>
  These characteristics limit its widespread adoption despite its impressive ballistic performance.
</p>
<h2>.357 SIG and 9×19 mm</h2>

<p>
  A comparison with <strong>9×19 mm Parabellum</strong> is inevitable.
</p>

<p>
  The 9×19 mm has enormous worldwide availability, a wide variety of ammunition, and generally lower costs. It also produces less recoil in firearms of comparable design.
</p>

<p>
  The .357 SIG, by contrast, is focused on <strong>higher muzzle velocity and high-velocity ballistics</strong>.
</p>

<p>
  As a result, the .357 SIG has not replaced the 9×19 mm. It remains a specialized cartridge with its own niche, primarily in the American market.
</p>
<h2>The Cartridge Today</h2>

<p>
  The .357 SIG continues to be manufactured and remains a standardized cartridge under the <strong>SAAMI</strong> system.
</p>

<p>
  It is used by civilian shooters, law enforcement agencies, and pistol manufacturers, although it has not achieved the same level of adoption as the 9×19 mm.
</p>

<p>
  Interest in the cartridge is driven primarily by its distinctive combination of a <strong>9 mm bullet, high muzzle velocity, and substantial muzzle energy</strong>.
</p>
<h2>Interesting Fact</h2>

<p>
  The .357 SIG is one of the more interesting modern pistol cartridges to use a <strong>bottleneck case</strong>. It combines a 9 mm bullet with a case derived from the larger .40 S&amp;W.
</p>

<p>
  This adaptation of an existing design produced a new cartridge that occupies its own place between standard 9 mm ammunition and more powerful pistol cartridges.
</p>
<TechnicalData
  title=".357 SIG / 9×22 mm"
  language="en"
  data={[
    ["Designation", ".357 SIG / 9×22 mm"],
    ["Type", "Pistol cartridge"],
    ["Origin", "United States"],
    ["Development", "Early 1990s"],
    ["Standardization", "1994"],
    ["Case length", "21.97 mm"],
    ["Maximum cartridge length", "28.96 mm"],
    ["Bullet diameter", "Approximately 9.0 mm"],
    ["Case type", "Rimless, bottleneck"],
    ["Ignition", "Centerfire"],
    ["Bullet weight", "Approximately 6.1–9.5 g"],
    ["Muzzle velocity", "Approximately 380–450 m/s*"],
    ["Muzzle energy", "Approximately 500–800 J*"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific cartridge, bullet weight and design, and barrel length. The figures provided are approximate and do not represent universal characteristics of all .357 SIG ammunition.
</p>
<h2 id="9x23-explanation">
  9×23 mm — Different Cartridges with the Same Designation
</h2>

<p>
  Next, we will examine a group of pistol cartridges that are among the easiest to confuse during identification. The reason is simple: several <strong>different cartridges carry the designation 9×23 mm</strong>, even though they are not interchangeable.
</p>

<p>
  These include:
</p>

<ul
  style={{
    width: "80%",
    margin: "0 auto 30px auto",
    paddingLeft: "40px",
    boxSizing: "border-box",
    fontSize: "1.15em",
    listStyleType: "disc",
  }}
>
  <li style={{ color: "#fff" }}><strong>9×23 mm Bergmann-Bayard / 9 mm Largo</strong></li>
  <li style={{ color: "#fff" }}><strong>9×23 mm Steyr</strong></li>
  <li style={{ color: "#fff" }}><strong>9×23 mm .38 ACP / .38 Auto</strong></li>
  <li style={{ color: "#fff" }}><strong>9×23 mm .38 Super</strong></li>
</ul>

<p>
  Despite sharing the same metric designation, these cartridges have different origins, designs, dimensions, and ballistic characteristics. <strong>9×23 mm Bergmann-Bayard and 9×23 mm Steyr</strong> are particularly easy to confuse because their external dimensions are very similar.
</p>

<p>
  Additional confusion arises from American designations. <strong>.38 ACP</strong>, also known as <strong>.38 Auto</strong> or <strong>9×23 mm SR</strong>, is an American pistol cartridge with a semi-rimmed case, developed for the Colt M1900 pistol. The designation <strong>SR (Semi-Rimmed)</strong> is important because it distinguishes the cartridge from the rimless 9×23 mm Bergmann-Bayard and 9×23 mm Steyr.
</p>

<p>
  In turn, the <strong>.38 Super</strong> is a more powerful development of the .38 ACP. The two cartridges are closely related in dimensions, but they should not be presented as completely identical in terms of ballistics and operating characteristics.
</p>

<p>
  Particular attention should be paid to the difference between <strong>.38 ACP</strong> and <strong>.380 ACP</strong>. Although their designations look almost identical, they are <strong>two entirely different cartridges</strong>. The .38 ACP is 9×23 mm SR, whereas the .380 ACP is <strong>9×17 mm Browning Short</strong>, which we have already covered.
</p>

<p>
  Likewise, <strong>9×23 mm Bergmann-Bayard / Largo should not be confused with 9×23 mm Winchester</strong>, a modern high-pressure cartridge designed for different purposes and with different performance characteristics.
</p>

<p>
  Therefore, for cartridges in this group, <strong>the designation “9×23” alone is insufficient for reliable identification</strong>. The case shape, dimensions, rim configuration, markings, and intended application must also be considered.
</p>
</Section>
<Section
  id="9x23-bergmann-bayard"
  title="9×23 mm Bergmann-Bayard / 9 mm Largo"
>
  <img
    src="/images/calibers/cartridges/9x23 Bergman.png"
    alt="9×23 mm Bergmann-Bayard / 9 mm Largo"
    style={{
      width: "43%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    The German cartridge that became a standard pistol round in Spain and gave rise to one of the most interesting European 9 mm cartridge systems.
  </em>
</p>
  <p>
  <strong>9×23 mm Bergmann-Bayard</strong>, also known as <strong>9 mm Largo</strong>, <strong>9 mm Bayard</strong>, <strong>9 mm
  Bergmann-Bayard</strong>, and <strong>9 mm Campo-Giro</strong>, is a European pistol cartridge
  developed in the early 20th century for the self-loading pistols of <strong>Theodor
  Bergmann</strong>.
</p>

<p>
  The cartridge was designed for the <strong>Bergmann Mars</strong> and
  was later used in the improved <strong>Bergmann-Bayard</strong>. After its adoption
  by the Spanish Army, it became widely known in Spain as <strong>9 mm Largo</strong>
  (“long”) and gradually became one of the country's principal pistol cartridges.
</p>

<p>
  For its time, the 9×23 mm Bergmann-Bayard offered
  impressive ballistic performance. Depending on the specific load and firearm, bullet
  velocity was approximately <strong>325–400 m/s</strong>, and muzzle energy could
  exceed <strong>500 J</strong>. This placed it among the relatively powerful European
  pistol cartridges of the early 20th century.
</p>
<h2>Development History</h2>

<p>
  The history of the 9×23 mm Bergmann-Bayard is closely linked to
  the development of self-loading pistols by the German designer <strong>Theodor
  Bergmann</strong>.
</p>

<p>
  In the early 20th century, Bergmann developed a
  pistol intended for the military market. The new design was named the <strong>Mars</strong>
  and used a locked-breech mechanism based on principles also employed in Bergmann's
  machine guns.
</p>

<p>
  A powerful, purpose-designed cartridge was developed for the new pistol:
  the <strong>9 mm Bergmann</strong>, which later became the 9×23 mm
  Bergmann-Bayard. The initial development was associated with the
  <strong>Bergmann Mars 1903</strong>.
</p>

<p>
  The new cartridge used a rimless case with a shape transitioning from bottlenecked to cylindrical, along with a 9 mm bullet. By the standards of the era, it offered unusually high velocity and energy, attracting military interest.
</p>
<h2>The Bergmann Mars and the Emergence of the Bergmann-Bayard</h2>

<p>
  In <strong>1905</strong>, the Spanish Army selected
  the Bergmann pistol as its new self-loading personal firearm and ordered approximately <strong>3,000
  pistols</strong>. The weapon was chambered for the 9 mm Bergmann cartridge.
</p>

<p>
  However, Bergmann lacked sufficient
  manufacturing capacity to fulfill the Spanish order on his own. Production was therefore
  transferred to the Belgian company <strong>Anciens
  Établissements Pieper (AEP)</strong>.
</p>

<p>
  Pieper used the trade name <strong>Bayard</strong>,
  from which the name <strong>Bergmann-Bayard</strong> originated.
</p>

<p>
  The Belgian company made several design
  changes to the pistol and produced the improved <strong>Bergmann-Bayard Model 1908</strong>.
  This version was instrumental in establishing the cartridge under the designation
  <strong>9 mm Bergmann-Bayard</strong>.
</p>
<img
  src="/images/calibers/cartridges/Bergmann-Bayard Model 1908.png"
  alt="Bergmann-Bayard Model 1908"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto 30px auto",
  }}
/>
<h2>9 mm Largo</h2>

<p>
  Spain played a decisive role in the cartridge's subsequent
  spread.
</p>

<p>
  In the Spanish designation system, it received the
  name <strong>9 mm Largo</strong> — “9 mm long.” This distinguished it from other
  widely used 9 mm cartridges of the period, including the 9 mm Parabellum.
</p>

<p>
  The Spanish designation <strong>Largo</strong>
  gradually became the cartridge's most recognizable name.
</p>

<p>
  Following Bergmann's design, a number of Spanish manufacturers
  began developing their own pistols for this cartridge. Among the best known were
  <strong>Campo-Giro</strong>, <strong>Astra</strong>, <strong>Star</strong>, and <strong>Llama</strong>.
</p>

<p>
  In this way, the 9×23 mm evolved from a cartridge designed for
  a specific German pistol into an entire Spanish firearms system.
</p>
<h2>Military and Police Use</h2>

<p>
  The 9×23 mm Bergmann-Bayard saw official military
  service in several European countries.
</p>

<p>
  The Spanish Army adopted the cartridge along with the Bergmann
  pistol during the first decade of the 20th century. It was later used in other Spanish
  pistols, including the <strong>Campo-Giro</strong>, as well as numerous designs from
  Astra and Star.
</p>

<p>
  The cartridge also saw military service in <strong>Denmark</strong>,
  where the <strong>Bergmann-Bayard Model 1910</strong> was adopted by the Danish Army.
  The improved <strong>Model 1910/21</strong> was subsequently produced and
  used in Denmark.
</p>

<p>
  In Belgium, the cartridge was also associated with
  Bergmann-Bayard pistols manufactured by Pieper.
</p>
<h2>The Spanish Firearms Industry</h2>

<p>
  Spain, however, played the most important role in the long service life of the 9×23 mm
  Bergmann-Bayard.
</p>

<p>
  Spanish manufacturers did not simply continue using the
  cartridge; they also developed a wide range of their own firearms chambered for it.
</p>

<p>
  Among the best known were:
</p>

<ul
  style={{
    width: "80%",
    margin: "0 auto 30px auto",
    paddingLeft: "40px",
    boxSizing: "border-box",
    fontSize: "1.15em",
    listStyleType: "disc",
  }}
>
  <li style={{ color: "#fff" }}><strong>Campo-Giro</strong></li>
  <li style={{ color: "#fff" }}><strong>Astra 400</strong></li>
  <li style={{ color: "#fff" }}><strong>Astra 903</strong></li>
  <li style={{ color: "#fff" }}><strong>Star Model 1920</strong></li>
  <li style={{ color: "#fff" }}><strong>Star Model 1921</strong></li>
  <li style={{ color: "#fff" }}><strong>Star Model 1922</strong></li>
  <li style={{ color: "#fff" }}>various <strong>Llama</strong> models</li>
</ul>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    margin: "30px 0",
  }}
>
  <div style={{ flex: 1, textAlign: "center" }}>
    <h3>Campo-Giro M1913</h3>
    <img
      src="/images/calibers/cartridges/Campo-Giro M1913.png"
      alt="Campo-Giro M1913"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>

  <div style={{ flex: 1, textAlign: "center" }}>
    <h3>Astra 400</h3>
    <img
      src="/images/calibers/cartridges/Astra 400.png"
      alt="Astra 400"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>

  <div style={{ flex: 1, textAlign: "center" }}>
    <h3>Star Model 1921</h3>
    <img
      src="/images/calibers/cartridges/Star Model 1921.png"
      alt="Star Model 1921"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>
</div>
<p>
  The cartridge was also used in some Spanish submachine guns. As a result,
  the 9 mm Largo remained widely used within the Spanish military and police
  systems for decades.
</p>

<p>
  The <strong>Astra 400</strong> is particularly well known. It used the 9 mm Largo and featured an unusual
  straight-blowback action despite the relatively powerful cartridge.
</p>
<h2>Design and Characteristics</h2>

<p>
  The 9×23 mm Bergmann-Bayard is a <strong>rimless cartridge with
  a cylindrical-to-slightly-tapered case and a centerfire primer</strong>.
</p>

<p>
  The case is approximately <strong>23 mm</strong> long,
  while the overall cartridge length is around <strong>33.5 mm</strong>. The bullet diameter is
  approximately <strong>9.0–9.05 mm</strong>.
</p>

<p>
  Standard military loads are found with bullets weighing approximately
  <strong>8.1–8.6 g</strong>, although specific characteristics vary by
  manufacturer and production period.
</p>

<p>
  Historical and modern reference sources report
  different ballistic figures. For example, a bullet weighing around 8.1 g is reported to have
  a velocity of approximately <strong>341 m/s</strong> and energy of around <strong>470 J</strong>, while
  some Spanish military loads were considerably more powerful.
</p>
<h2>9×23 mm Bergmann-Bayard and 9×23 mm Steyr</h2>

<p>
  This distinction deserves particular attention.
</p>

<p>
  <strong>9×23 mm Bergmann-Bayard and 9×23 mm Steyr are
  different cartridges.</strong>
</p>

<p>
  Both are 9×23 mm cartridges, but they have different designs,
  origins, and ballistic characteristics.
</p>

<p>
  Because their dimensions are similar, they are among the cartridges
  most easily confused during visual identification. The Bergmann-Bayard uses different bullet types and a
  specific case geometry, whereas the 9×23 mm Steyr is a separate Austrian development.
</p>

<p>
  Therefore, the designation <strong>“9×23” alone is not
  sufficient to identify the cartridge</strong>.
</p>
<h2>Alternative Designations</h2>

<p>
  Over the years, the 9×23 mm Bergmann-Bayard has acquired
  numerous designations depending on the country, manufacturer, and firearm.
</p>

<p>
  Some of the most common are:
</p>

<ul
  style={{
    width: "80%",
    margin: "0 auto 30px auto",
    paddingLeft: "40px",
    boxSizing: "border-box",
    fontSize: "1.15em",
    listStyleType: "disc",
  }}
>
  <li style={{ color: "#fff" }}><strong>9×23 mm</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Bergmann-Bayard</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Bergmann-Bayard Long</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Bayard</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Largo</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Campo-Giro</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Bergmann 1910/21</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Astra 1921</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Star Auto-Pistol</strong></li>
  <li style={{ color: "#fff" }}><strong>9 mm Danish Pistol Cartridge</strong></li>
</ul>

<p>
  Despite the different names, these designations refer to a cartridge
  from the same basic design lineage.
</p>
<h2>The Cartridge in Spain Through the Late 20th Century</h2>

<p>
  The 9 mm Largo had an unusually long service life as a military
  and police cartridge.
</p>

<p>
  In Spain, it remained a principal pistol cartridge
  for decades and was also used in submachine guns.
</p>

<p>
  It was only in the second half of the 20th century that it gradually
  began to be replaced by the <strong>9×19 mm Parabellum</strong>. Nevertheless, the 9 mm Largo
  continued to be encountered in Spain long after the introduction of the more modern
  standard 9 mm cartridge.
</p>

<p>
  This is one reason the cartridge remains of interest to collectors today.
</p>
<h2>The Cartridge Today</h2>

<p>
  The 9×23 mm Bergmann-Bayard is no longer a standard
  military cartridge, but it continues to exist thanks to the large number of
  historical firearms chambered for it.
</p>

<p>
  The cartridge is found mainly among collectors and
  owners of historical pistols, especially Spanish models from <strong>Astra, Star,
  and Llama</strong>, as well as Bergmann-Bayard pistols.
</p>

<p>
  Ammunition for the 9 mm Largo continues to be
  produced in limited quantities, including by manufacturers serving the
  American market.
</p>
<h2>Interesting Fact</h2>

<p>
  The name <strong>Largo</strong> (“long”) is particularly fitting
  for this cartridge because, during the first half of the 20th century, Spain used
  several different 9 mm cartridges at the same time.
</p>

<p>
  As a result, <strong>9 mm Largo</strong> gradually became
  the unofficial but highly recognizable name for the 9×23 mm Bergmann-Bayard.
</p>

<p>
  The cartridge's history is also a good example of how
  ammunition designed for a specific German pistol could gain much wider and longer-lasting
  use through another country—in this case, Spain.
</p>
<TechnicalData
  title="9×23 mm Bergmann-Bayard"
  language="en"
  data={[
    ["Designation", "9×23 mm Bergmann-Bayard"],
    ["Other designations", "9 mm Largo / 9 mm Bayard / 9 mm Bergmann-Bayard / 9 mm Campo-Giro"],
    ["Type", "Pistol cartridge"],
    ["Origin", "Germany"],
    ["Developer", "Theodor Bergmann"],
    ["Initial development", "Around 1903"],
    ["Case", "Rimless, cylindrical to slightly tapered"],
    ["Case length", "Approximately 23.0 mm"],
    ["Maximum cartridge length", "Approximately 33.5 mm"],
    ["Bullet diameter", "Approximately 9.0–9.05 mm"],
    ["Bullet weight", "Approximately 8.0–9.0 g"],
    ["Muzzle velocity", "Approximately 325–400 m/s*"],
    ["Muzzle energy", "Approximately 450–580 J*"],
    ["Main firearms", "Bergmann Mars, Bergmann-Bayard, Campo-Giro, Astra, Star, Llama"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific cartridge, bullet weight and design, and barrel length. Published figures for historical loads vary considerably. Some Spanish military ammunition has been reported to achieve velocities of around 400 m/s and energy exceeding 600 J, while other standard loads were considerably more moderate.
</p>
</Section>
<Section
  id="9x23-steyr"
  title="9×23 mm Steyr"
>
  <img
    src="/images/calibers/cartridges/9x23 Steyr.png"
    alt="9×23 mm Steyr"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>An Austro-Hungarian pistol cartridge developed for the
  Steyr M1912 and used by several European armies.</em>
</p>
<p>
  <strong>9×23 mm Steyr</strong>, also known
  as <strong>9 mm Steyr</strong>, <strong>9 mm Steyr-Mannlicher</strong>, and <strong>9 mm M1912</strong>, is
  an Austro-Hungarian pistol cartridge developed in the early 20th century specifically for
  the <strong>Steyr M1911/M1912</strong> pistols.
</p>

<p>
  The cartridge was developed by <strong>Österreichische
  Waffenfabriks-Gesellschaft (Steyr)</strong> and adopted alongside the Steyr
  M1912 system. It offered relatively high velocity and muzzle energy for its time and
  became a standard cartridge for many Austro-Hungarian pistols during the First World War.
</p>
<h2>Development History</h2>

<p>
  In the early 20th century, Steyr developed a new
  self-loading pistol for military use. The initial model was known as the <strong>Steyr
  M1911</strong>, while its improved version received the designation <strong>M1912</strong>.
</p>
<h2>Steyr M1911</h2>

<img
  src="/images/calibers/cartridges/Steyr M1911.png"
  alt="Steyr M1911"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto 30px auto",
  }}
/>
<p>
  A special cartridge, the <strong>9 mm Steyr</strong>, was developed
  for the new pistol. It was designed as a powerful military cartridge suitable for
  a service pistol, with its design tailored to the Steyr's operating mechanism.
</p>

<p>
  The M1912 pistol was adopted for service in <strong>1912</strong>,
  and during the First World War it became one of the principal Austro-Hungarian
  military pistols. Hundreds of thousands were produced, most of them for the
  armed forces of Austria-Hungary.
</p>
<h2>Steyr M1911/M1912</h2>

<p>
  The Steyr M1912 was an unusual pistol for its time.
  Instead of a detachable magazine, it used an <strong>internal magazine holding 8
  cartridges</strong>, loaded from the top with a stripper clip.
</p>

<p>
  Its design used <strong>short-recoil operation and a
  rotating-barrel locking system</strong>. This made it possible to use the relatively
  powerful 9 mm Steyr without requiring an exceptionally heavy slide.
</p>

<p>
  The pistol was known for its reliability and
  durability and remained in service long after the end of the Austro-Hungarian Empire.
</p>
<h2>Military Use</h2>

<p>
  The 9×23 mm Steyr became a standard pistol
  cartridge of Austria-Hungary during the First World War.
</p>

<p>
  After the empire dissolved, the cartridge continued
  to be used in several countries that inherited or purchased Steyr pistols.
</p>

<p>
  These included:
</p>

<ul
  style={{
    width: "80%",
    margin: "0 auto 30px auto",
    paddingLeft: "40px",
    boxSizing: "border-box",
    fontSize: "1.15em",
    listStyleType: "disc",
  }}
>
  <li style={{ color: "#fff" }}><strong>Austria</strong></li>
  <li style={{ color: "#fff" }}><strong>Romania</strong></li>
  <li style={{ color: "#fff" }}><strong>Chile</strong></li>
  <li style={{ color: "#fff" }}><strong>Czechoslovakia</strong></li>
  <li style={{ color: "#fff" }}>Germany, in limited numbers through the use of Austrian firearms</li>
</ul>

<p>
  Romania purchased a substantial number of Steyr M1912 pistols, while Chile also adopted the pistol for military service.
</p>
<h2>9×23 mm Steyr and Submachine Guns</h2>

<p>
  The cartridge was not limited to pistols.
</p>

<p>
  In the early 20th century, automatic variants of the Steyr
  were also developed. Later, the <strong>Steyr-Solothurn MP34</strong> was
  produced in several calibers, including <strong>9×23 mm Steyr</strong>, alongside 9×25
  mm Mauser.
</p>

<p>
  This allowed the relatively powerful
  cartridge to be used in automatic firearms as well.
</p>
<h2>The Cartridge After 1938</h2>

<p>
  Following the <strong>Anschluss in 1938</strong>, when Austria
  was annexed by the German Reich, large numbers of Austrian Steyr M1912 pistols entered
  German service.
</p>

<p>
  To achieve greater standardization of
  weaponry, many of these pistols were <strong>converted to 9×19 mm
  Parabellum</strong> by replacing the barrel. The same happened to some
  Steyr submachine guns.
</p>

<p>
  This gradually reduced the role of the 9×23 mm Steyr
  in military service.
</p>
<h2>Design and Characteristics</h2>

<p>
  The 9×23 mm Steyr is a <strong>rimless cartridge with
  a bottlenecked case and a centerfire primer</strong>.
</p>

<p>
  One interesting feature is the way the cartridge
  is positioned in the chamber: it <strong>headspaces on the case mouth</strong>.
</p>

<p>
  According to published standardized dimensions,
  the case length is approximately <strong>23.05–23.20 mm</strong>, while the maximum overall
  cartridge length is around <strong>33.0–33.1 mm</strong>. The bullet diameter is approximately <strong>9.0
  mm</strong>.
</p>

<p>
  This explains why the cartridge is often described
  simply as <strong>9×23 mm</strong>, even though its actual geometry differs from
  that of other cartridges sharing the same metric designation.
</p>
<h2>9×23 mm Steyr and 9×23 mm Largo</h2>

<p>
  This is one of the most important distinctions to understand
  when discussing this caliber.
</p>

<p>
  <strong>9×23 mm Steyr and 9×23 mm Bergmann-Bayard (9 mm
  Largo) are different cartridges.</strong>
</p>

<p>
  They have nearly the same nominal length and
  use a 9 mm bullet, but their case dimensions are not identical. The 9 mm Steyr has a
  different base diameter and other dimensions compared with the 9 mm Largo.
</p>

<p>
  Therefore, they <strong>must not be considered
  interchangeable</strong>. The fact that some Largo cartridges may physically fit in certain
  Steyr firearms because of variations between individual examples does not mean the two
  cartridges are interchangeable or that such use is safe.
</p>

<p>
  This is particularly important with collectible firearms,
  as the two cartridges can be very difficult to distinguish visually.
</p>
<h2>Ballistic Characteristics</h2>

<p>
  The 9×23 mm Steyr was a relatively powerful pistol
  cartridge for the early 20th century.
</p>

<p>
  Standard loads are reported with bullets weighing
  approximately <strong>7–7.6 g</strong>. Depending on the specific ammunition and barrel length,
  muzzle velocity can be approximately <strong>310–370 m/s</strong>, with muzzle
  energy reaching around <strong>500 J</strong>.
</p>

<p>
  For example, a bullet weighing approximately <strong>7 g</strong> is
  reported to achieve around <strong>370 m/s and 526 J</strong>.
</p>

<p>
  This places the 9×23 mm Steyr among the relatively powerful
  European pistol cartridges of its era.
</p>
<h2>Distribution</h2>

<p>
  After the First World War, the 9×23 mm Steyr continued
  to be used in Austria, Romania, and Chile.
</p>

<p>
  Romania's use of the Steyr M1912 was particularly significant.
  Romania purchased tens of thousands of pistols of this type, some of which were
  delivered before the outbreak of the First World War.
</p>

<p>
  Chile was also an important user of the Steyr system.
  The first major foreign order for the pistol came from Chile: in 1912,
  <strong>5,000 pistols</strong> were ordered.
</p>

<h2>The Cartridge Today</h2>

<p>
  Today, the 9×23 mm Steyr is a <strong>rare historical cartridge</strong>.
  It is no longer a standard military round, but limited quantities are still produced
  for collectors and shooting enthusiasts. Modern ammunition has been produced, for example,
  by <strong>Fiocchi</strong>, and other manufacturers have also offered it at various times.
</p>

<p>
  Interest in the cartridge today is primarily associated with
  historical <strong>Steyr M1911/M1912</strong> pistols and other firearms chambered
  for this caliber.
</p>

<h2>Interesting Fact</h2>

<p>
  The Steyr M1912 pistol was used in various
  conflicts and by different armies for decades. Some examples even received
  <strong>a new lease on life in 9×19 mm Parabellum</strong> after being converted
  for the German Army.
</p>

<p>
  As a result, the same pistol can be encountered today in
  two different versions: the original <strong>9×23 mm Steyr</strong> or a version converted to <strong>9×19
  mm Parabellum</strong>.
</p>
<TechnicalData
  title="9×23 mm Steyr"
  language="en"
  data={[
    ["Designation", "9×23 mm Steyr"],
    ["Other designations", "9 mm Steyr / 9 mm Steyr-Mannlicher / 9 mm M1912"],
    ["Type", "Pistol cartridge"],
    ["Origin", "Austria-Hungary"],
    ["Developed for", "Steyr M1911/M1912"],
    ["Adopted for service", "1912"],
    ["Case", "Rimless, bottlenecked"],
    ["Case length", "Approximately 23.1 mm"],
    ["Maximum cartridge length", "Approximately 33.0 mm"],
    ["Bullet diameter", "Approximately 9.0 mm"],
    ["Bullet weight", "Approximately 7.0–7.6 g"],
    ["Muzzle velocity", "Approximately 310–370 m/s*"],
    ["Muzzle energy", "Approximately 365–530 J*"],
    ["Main firearms", "Steyr M1911/M1912, Steyr-Solothurn MP34"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific cartridge, bullet weight and design, and barrel length. Historical and modern loads can differ considerably.
</p>

<p>
  <strong>Important:</strong> The 9×23 mm Steyr
  must not be confused with the <strong>9×23 mm Bergmann-Bayard / 9 mm Largo</strong>. Despite
  their similar designations and comparable external dimensions, they are different cartridges.
</p>
</Section>
<Section
  id="9x23-sr-38-acp"
  title="9×23 mm SR (.38 ACP / .38 Auto)"
>
  <img
    src="/images/calibers/cartridges/9×23 SR .38 ACP .38 Auto.png"
    alt="9×23 mm SR (.38 ACP / .38 Auto)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>One of the first high-velocity American pistol cartridges, developed by John Browning for the Colt M1900.</em>
</p>
<p>
  <strong>9×23 mm SR</strong>, best known
  as <strong>.38 ACP (Automatic Colt Pistol)</strong>, <strong>.38 Auto</strong>, or <strong>.38
  Automatic</strong>, is an American pistol cartridge developed by <strong>John Moses
  Browning</strong> in the late 19th century and introduced to the market in <strong>1900</strong> for
  the <strong>Colt M1900</strong> pistol.
</p>

<p>
  The cartridge is notable not only for its early introduction,
  but also for its design. It uses a <strong>semi-rimmed case</strong>,
  whose rim protrudes slightly beyond the case body and helps position the
  cartridge correctly in the chamber.
</p>

<p>
  The metric designation <strong>9×23 mm SR</strong> is a convenient
  way to distinguish it from other cartridges designated 9×23 mm.
</p>
<h2>Development History</h2>

<p>
  The history of the .38 ACP is directly connected to
  the development of the first successful self-loading pistols by <strong>John Browning</strong>.
</p>

<p>
  In the late 19th century, Browning developed a new
  generation of self-loading pistols for the American company <strong>Colt</strong>. The
  new firearm also required a suitable smokeless-powder pistol cartridge that could
  deliver significantly higher velocity than the revolver ammunition widely used at the time.
</p>

<p>
  The first experimental versions of what would become the .38
  ACP appeared as early as <strong>1897</strong>. During development, the case design
  underwent several changes, and by 1898 the <strong>semi-rimmed</strong> case configuration
  had been established. This remained a defining feature of the production cartridge.
</p>

<p>
  In <strong>1899</strong>, the new cartridge and pistol underwent
  military trials. In <strong>1900</strong>, Colt began series production of the
  <strong>Colt M1900</strong> and the .38 ACP cartridge.
</p>
<h2>Colt M1900</h2>

<img
  src="/images/calibers/cartridges/Colt M1900.png"
  alt="Colt M1900"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto 30px auto",
  }}
/>
<p>
  The Colt M1900 was the first production pistol designed
  specifically for the .38 ACP.
</p>

<p>
  The pistol used <strong>short-recoil operation and
  a locked breech</strong>, with the barrel and slide moving together during the initial
  phase of recoil. The barrel locked to the slide through locking lugs and was unlocked
  by a link mechanism. This design became the foundation for the subsequent development
  of Browning and Colt pistols.
</p>

<p>
  The Colt M1900 had a magazine capacity of <strong>7 rounds</strong>
  and represented an exceptionally modern design for its time.
</p>
<h2>Cartridge Design</h2>

<p>
  The .38 ACP is a <strong>cartridge with a generally rimless
  design but a semi-rimmed case, a straight cylindrical case body, and a centerfire primer</strong>.
</p>

<p>
  The semi-rimmed case is one of the cartridge's most distinctive
  features. It allows the cartridge to <strong>headspace on the rim at the front
  of the chamber</strong>, determining its correct position relative to the barrel
  and firing mechanism.
</p>

<p>
  This design solution was used at a time when
  self-loading pistols were still evolving and different manufacturers were experimenting
  with ways to position cartridges in the chamber.
</p>

<p>
  The case is approximately <strong>22.9 mm</strong> long, while
  the maximum overall cartridge length is around <strong>32.5–33 mm</strong>. The bullet
  diameter is approximately <strong>9.0 mm</strong>.
</p>
<h2>Early High-Powered Loads</h2>

<p>
  One interesting aspect of the .38 ACP's history is that
  early ammunition loads were relatively powerful.
</p>

<p>
  Initial commercial loads are reported to have achieved
  velocities of around <strong>380 m/s</strong> with a bullet weighing approximately <strong>8.4 g</strong>,
  while experimental loads reached even higher velocities.
</p>

<p>
  However, these performance levels proved too demanding
  for early Colt pistols. Manufacturers subsequently reduced the power of standard loads,
  and muzzle velocities gradually settled at more moderate levels.
</p>

<p>
  This is an important part of the cartridge's history because
  later .38 ACP ammunition should not be directly compared with the most powerful early
  experimental loads.
</p>
<h2>.38 ACP and .38 Super</h2>

<p>
  The history of the .38 ACP eventually led to the development
  of one of the best-known high-velocity pistol cartridges: the <strong>.38 Super</strong>.
</p>

<p>
  During the 1920s, Colt began offering the
  <strong>Super .38 Automatic</strong> pistol, based on the Colt M1911 platform.
  The ammunition initially used was standard .38 ACP, but high-velocity loads developed
  specifically for stronger pistols appeared during the 1930s. These gradually became
  established under the designation <strong>.38 Super</strong>.
</p>

<p>
  This distinction is extremely important:
</p>

<p>
  <strong>.38 ACP and .38 Super are not simply two names for
  the same standard cartridge.</strong>
</p>

<p>
  The .38 Super is a high-pressure variant intended
  for firearms capable of withstanding the corresponding stresses.
</p>

<h2>.38 ACP and 9×19 mm Parabellum</h2>

<p>
  The .38 ACP is one of the early high-velocity
  pistol cartridges, and its ballistic performance can be comparable to that of the 9×19 mm
  in certain specific loads.
</p>

<p>
  However, this does not mean the two cartridges are
  identical or interchangeable.
</p>

<p>
  <strong>9×19 mm Parabellum and 9×23 mm SR (.38 ACP) are
  different cartridges</strong>, with different case geometry, operating pressures,
  and specifications.
</p>

<p>
  It is particularly important not to attribute the
  performance characteristics of the <strong>.38 Super</strong> to standard .38 ACP.
  The high-pressure .38 Super loads are significantly more powerful than standard .38 ACP ammunition.
</p>

<h2>Different 9×23 mm Cartridges</h2>

<p>
  The designation <strong>9×23 mm</strong> alone is not
  sufficient to identify a cartridge.
</p>

<p>
  This group includes several different designs:
</p>

<ul
  style={{
    width: "80%",
    margin: "0 auto 30px auto",
    paddingLeft: "40px",
    boxSizing: "border-box",
    fontSize: "1.15em",
    listStyleType: "disc",
  }}
>
  <li style={{ color: "#fff" }}><strong>9×23 mm SR (.38 ACP / .38 Auto)</strong></li>
  <li style={{ color: "#fff" }}><strong>9×23 mm Bergmann-Bayard / 9 mm Largo</strong></li>
  <li style={{ color: "#fff" }}><strong>9×23 mm Steyr</strong></li>
  <li style={{ color: "#fff" }}><strong>9×23 mm Winchester</strong></li>
</ul>

<p>
  These cartridges have similar metric designations, but they are <strong>different
  cartridges</strong> and must not be considered interchangeable.
</p>

<p>
  For the .38 ACP, the designation <strong>SR</strong> is particularly
  useful because it indicates the presence of a <strong>semi-rimmed</strong> case.
</p>
<h2>.38 ACP and .380 ACP — Two Completely Different Cartridges</h2>

<p>
  One of the most common sources of confusion involves
  the designations <strong>.38 ACP</strong> and <strong>.380 ACP</strong>.
</p>

<p>
  Despite their similar spelling, these are <strong>two
  different cartridges</strong>.
</p>

<p>
  <strong>.38 ACP</strong> is the 9×23 mm SR
  — a longer and significantly more powerful cartridge with a semi-rimmed case.
</p>

<p>
  <strong>.380 ACP</strong> is the 9×17 mm
  Browning Short — a shorter cartridge with a rimless cylindrical case.
</p>

<p>
  Therefore:
</p>

<p>
  <strong>.38 ACP ≠ .380 ACP</strong>
</p>

<p>
  The similarity between the names is purely historical and can
  easily lead to confusion.
</p>
<h2>The Cartridge Today</h2>

<p>
  The .38 ACP is no longer a widely used service
  cartridge, but production continues in limited quantities.
</p>

<p>
  Interest in it today is primarily associated with
  historical firearms such as the <strong>Colt M1900, M1902, and M1903 Pocket Model</strong>, as well as
  collectible examples and firearms from the early 20th century.
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
    <h3>Colt M1902</h3>
    <img
      src="/images/calibers/cartridges/Colt M1902.png"
      alt="Colt M1902"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>

  <div style={{ flex: 1, textAlign: "center" }}>
    <h3>Colt M1903 Pocket</h3>
    <img
      src="/images/calibers/cartridges/Colt M1903 Pocket.png"
      alt="Colt M1903 Pocket"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>
</div>
<p>
  However, the cartridge's significance extends far beyond
  its limited modern use. Its development formed part of the evolution that led to
  later American pistol cartridges such as the <strong>.38 Super</strong>.
</p>
<h2>Interesting Fact</h2>

<p>
  The .38 ACP was one of the first American pistol
  cartridges to combine a <strong>self-loading pistol, smokeless powder, and a muzzle
  velocity that was high for its era</strong>.
</p>

<p>
  Even the earliest loads were powerful enough to
  prompt a subsequent reduction in ballistic performance because of the stresses they placed
  on early pistols.
</p>

<p>
  The cartridge thus represented an important step in the
  development of American self-loading pistols, from the <strong>Colt M1900</strong> to
  later Colt and Browning designs.
</p>
<TechnicalData
  title="9×23 mm SR (.38 ACP / .38 Auto)"
  language="en"
  data={[
    ["Designation", "9×23 mm SR"],
    ["American designation", ".38 ACP / .38 Auto / .38 Automatic"],
    ["Type", "Pistol cartridge"],
    ["Origin", "United States"],
    ["Developer", "John Moses Browning / Colt"],
    ["Year introduced", "1900"],
    ["Case type", "Semi-rimmed, cylindrical"],
    ["Case length", "Approximately 22.9 mm"],
    ["Maximum cartridge length", "Approximately 32.5–33.0 mm"],
    ["Bullet diameter", "Approximately 9.0 mm"],
    ["Bullet weight", "Approximately 7.0–8.4 g"],
    ["Muzzle velocity", "Approximately 320–350 m/s*"],
    ["Muzzle energy", "Approximately 420–460 J*"],
    ["Primary firearm", "Colt M1900"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific cartridge, bullet weight and design, and barrel length. Historical .38 ACP loads varied considerably, with early experimental and initial commercial loads being more powerful than later standard ammunition.
</p>

<p>
  <strong>Important:</strong> <strong>9×23 mm SR (.38 ACP)</strong> must not be confused with
  <strong>9×23 mm Largo, 9×23 mm Steyr, or 9×23 mm Winchester</strong>. These are different
  cartridges. Likewise, <strong>.38 ACP is not .380 ACP (9×17 mm Browning Short)</strong>.
</p>
</Section>
<Section
  id="9x23-sr-38-super"
  title="9×23 mm SR (.38 Super)"
>
  <img
    src="/images/calibers/cartridges/9x23 HR 38 Super.png"
    alt="9×23 mm SR (.38 Super)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>The high-velocity American cartridge designed for the
  Colt M1911, which later became a legend in practical shooting.</em>
</p>
<p>
  <strong>9×23 mm SR (.38 Super)</strong>, known as <strong>.38 Super</strong>, <strong>.38 Super Auto</strong>, <strong>.38 Super
  Automatic</strong>, and <strong>Super .38</strong>, is an American pistol cartridge developed
  from the older <strong>.38 ACP (.38 Auto)</strong>.
</p>

<p>
  The external dimensions of the two cartridges are practically
  identical, but the .38 Super uses a significantly more powerful load and operates at higher
  pressure. For this reason, .38 Super must be regarded as a <strong>separate
  cartridge</strong>, despite being a direct successor to the .38 ACP.
</p>

<p>
  The cartridge was introduced by <strong>Colt in 1929</strong>
  for the <strong>Colt M1911 Government Model</strong> pistol. The main objective was to
  develop a high-velocity pistol cartridge with better penetration than
  the standard pistol cartridges of the time.
</p>
<h2>Colt M1911 Government Model</h2>

<img
  src="/images/calibers/cartridges/Colt M1911 Government Model.png"
  alt="Colt M1911 Government Model"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto 30px auto",
  }}
/>
<h2>History of Development</h2>

<p>
  The history of the .38 Super begins with the <strong>.38 ACP</strong>,
  developed by John Moses Browning and introduced in 1900 for the Colt M1900.
</p>

<p>
  The .38 ACP uses a semi-rimmed case and offered
  a relatively high velocity for its time. After the adoption of the .45 ACP as
  the standard American military cartridge in 1911, the .38 ACP gradually faded into
  the background.
</p>

<p>
  The introduction of the <strong>Colt M1911</strong>, however, created
  an opportunity to use a more powerful cartridge with a smaller bullet diameter.
</p>

<p>
  In <strong>1929, Colt introduced the M1911 in .38 Super</strong>.
  The new cartridge was based on the .38 ACP but was designed to withstand significantly
  higher pressures. Colt marketed it as a high-velocity cartridge for the M1911.
</p>

<p>
  The designation <strong>.38 Super</strong> later became established,
  while modern standards also frequently use the name <strong>.38 Super Auto</strong>.
</p>
<h2>.38 ACP and .38 Super</h2>

<p>
  This is one of the most important characteristics of this
  cartridge.
</p>

<p>
  <strong>.38 ACP and .38 Super have practically identical
  case dimensions</strong>, but they differ in terms of operating pressure.
</p>

<p>
  The .38 Super was designed for stronger firearms and
  higher pressure. The C.I.P. specifies a maximum pressure of <strong>2300 bar for
  .38 Super Auto</strong>.
</p>

<p>
  For this reason, older pistols designed for the .38
  ACP must not automatically be considered suitable for the .38 Super.
</p>

<p>
  This similarity between the two cartridges is also why
  Colt used a different commercial designation. The aim was to reduce
  the risk of the more powerful new cartridge being used in older .38 ACP pistols.
</p>

<p>
  Under modern standards, <strong>.38 ACP and .38 Super +P are treated as separate cartridges</strong>, despite their practically identical case geometry.
</p>
<h2>The Colt M1911 in .38 Super</h2>

<p>
  The .38 Super was developed specifically with the <strong>Colt
  M1911</strong> platform in mind.
</p>

<p>
  Using a smaller 9 mm bullet instead of the standard
  .45 ACP bullet makes it possible to combine high velocity with greater
  magazine capacity.
</p>

<p>
  The cartridge is particularly well suited to the M1911's
  design, which had already demonstrated its ability to function with powerful pistol
  cartridges.
</p>

<p>
  Colt marketed the .38 Super as a high-velocity
  alternative to the .45 ACP. According to historical data, more than <strong>200,000 Colt pistols chambered in .38 Super</strong> were produced between 1929 and
  1969.
</p>
<h2>Why Was It Developed?</h2>

<p>
  In the late 1920s, automobiles and protective
  equipment began to change the requirements for pistol ammunition.
</p>

<p>
  A smaller, faster bullet offered advantages when
  fired against metal barriers and vehicle structures compared with slower,
  heavier bullets.
</p>

<p>
  High velocity and a relatively flat trajectory
  became the main selling points of the .38 Super.
</p>

<p>
  Colt presented it as a powerful, high-velocity
  cartridge designed for the M1911. The cartridge attracted interest among both civilian
  shooters and law enforcement personnel.
</p>
<h2>Design and Characteristics</h2>

<p>
  The .38 Super is a <strong>semi-rimmed pistol cartridge</strong>,
  similar to the .38 ACP.
</p>

<p>
  Its case is cylindrical and features a small
  protruding rim at the rear.
</p>

<p>
  According to C.I.P. data, the case length is <strong>22.86
  mm</strong>, while the maximum overall cartridge length is <strong>32.51 mm</strong>. The maximum
  pressure is <strong>2300 bar</strong>.
</p>

<p>
  These dimensions are practically identical to those of
  the .38 ACP.
</p>

<p>
  This does not mean, however, that the two cartridges are
  interchangeable in all firearms. The main difference lies in the <strong>operating
  pressure and the corresponding propellant load</strong>.
</p>
<h2>The Headspace Problem</h2>

<p>
  The original .38 Super pistols used the same
  cartridge-positioning principle as the older .38 ACP: headspacing on the small
  semi-rimmed case rim.
</p>

<p>
  In the M1911, this created an accuracy problem
  because the cartridge could move slightly within the chamber.
</p>

<p>
  Later, gunsmith and barrel maker <strong>Irv Stone</strong>
  of <strong>Bar-Sto Precision</strong> developed barrels in which the .38 Super headspaces
  on the front edge of the case — <strong>case-mouth headspacing</strong>. This significantly
  improved accuracy.
</p>

<p>
  Modern .38 Super pistols generally use this
  approach.
</p>
<h2>Ballistic Characteristics</h2>

<p>
  The main advantage of the .38 Super is its high
  muzzle velocity.
</p>

<p>
  With a typical bullet weighing approximately <strong>7.5–8.4 g</strong>,
  modern factory ammunition can achieve velocities of approximately <strong>360–400
  m/s</strong>, depending on the specific load and barrel length.
</p>

<p>
  With a bullet weighing around 8.4 g and a velocity of approximately 390 m/s,
  the kinetic energy is about <strong>640 J</strong>.
</p>

<p>
  Lighter bullets are also available, with
  velocities that can exceed <strong>400 m/s</strong>. Historical and modern sources
  show considerable variation depending on the specific ammunition.
</p>

<p>
  These figures place the .38 Super well above the
  standard .38 ACP and made it one of the fastest pistol cartridges of its
  time.
</p>
<h2>.38 Super and 9×19 Parabellum</h2>

<p>
  The .38 Super and <strong>9×19 mm Parabellum</strong> are
  relatively similar in bullet diameter and ballistic performance, but they use
  different cases.
</p>

<p>
  The .38 Super has a longer case — approximately <strong>22.86 mm</strong>,
  compared with 19 mm for the 9×19.
</p>

<p>
  With certain modern loads, the .38 Super can
  achieve higher velocity and energy than standard 9×19 mm ammunition, but this depends
  on the specific cartridge.
</p>

<p>
  It should not be assumed that the .38 Super automatically
  "outperforms" every 9×19 mm load. Modern 9×19 ammunition is also available
  across a wide range of performance levels.
</p>
<h2>Popularity in the United States and Latin America</h2>

<p>
  The .38 Super never became a standard American
  military cartridge, but it found a niche among civilian shooters, law enforcement
  agencies, and particularly in Latin American markets.
</p>

<p>
  In some countries south of the United States, civilian
  ownership of firearms in traditional military calibers has been restricted. This
  created demand for powerful pistols chambered in calibers that did not fall into the same
  category.
</p>

<p>
  As a result, the .38 Super became particularly popular in <strong>Mexico
  and other Latin American countries</strong>. Spanish manufacturers such as <strong>Star, Astra,
  and Llama</strong> also produced pistols chambered for it.
</p>
<h2>.38 Super and Law Enforcement</h2>

<p>
  The cartridge was conceived as a powerful service round
  and attracted the interest of American police officers and other personnel during the
  first half of the 20th century.
</p>

<p>
  Its high velocity was particularly valued when
  using a pistol against vehicle structures and other hard barriers.
</p>

<p>
  Nevertheless, the .38 Super never became a universal standard for American law enforcement. The .45 ACP and, later, the 9×19 mm remained much more widely used.
</p>
<h2>The Revival of .38 Super in Practical Shooting</h2>

<p>
  One of the most interesting chapters in the history of the .38
  Super began in the <strong>1980s</strong>.
</p>

<p>
  The cartridge found a new lease on life in dynamic
  shooting sports, particularly <strong>IPSC and USPSA</strong>.
</p>

<p>
  The combination of a relatively light bullet, high
  velocity, and the ability to use a compensator made the .38 Super highly
  suitable for competition pistols.
</p>

<p>
  It became one of the most popular calibers in the Open Division of practical shooting. Its high velocity makes it possible
  to achieve the required <strong>Major power factor</strong>, while the compensator reduces
  perceived recoil and allows rapid follow-up shots.
</p>

<p>
  Thus, a cartridge developed in 1929 for a
  high-velocity service pistol found a new lease on life more than half a century
  later.
</p>
<h2>.38 Super Today</h2>

<p>
  Today, the .38 Super remains in production and retains
  a niche among competitive shooters and enthusiasts of the <strong>1911</strong>
  platform.
</p>

<p>
  The cartridge is particularly popular in competition
  pistols, which are often equipped with compensators and high-capacity magazines.
</p>

<p>
  Modern manufacturers offer .38 Super ammunition with
  various bullet designs, including FMJ and specialized competition and
  defensive loads.
</p>

<p>
  Although the 9×19 mm is incomparably more widespread,
  the .38 Super retains its reputation as a high-velocity American pistol
  cartridge.
</p>
<h2>Interesting Fact</h2>

<p>
  <strong>The .38 Super is one of the longest-serving
  high-velocity pistol cartridges developed during the first half of the 20th century.</strong>
</p>

<p>
  Created for the Colt M1911 in 1929, it survived
  through nearly the entire 20th century. Rather than disappearing with the arrival of
  more modern 9 mm ammunition, it found a new role in competitive shooting.
</p>

<p>
  Its history therefore spans three distinct
  stages:
</p>

<p>
  <strong>.38 ACP → .38 Super → Competition .38 Super</strong>
</p>
<h2>Technical Data</h2>

<TechnicalData
  language="en"
  title="9×23 mm SR (.38 Super)"
  data={[
    ["Designation", "9×23 mm SR"],
    ["Primary designation", ".38 Super"],
    ["Other designations", ".38 Super Auto / .38 Super Automatic / Super .38"],
    ["Type", "Pistol cartridge"],
    ["Country of origin", "United States"],
    ["Manufacturer at introduction", "Colt"],
    ["Year of introduction", "1929"],
    ["Design origin", ".38 ACP / .38 Auto"],
    ["Case type", "Semi-rimmed, cylindrical"],
    ["Case length", "22.86 mm"],
    ["Maximum overall cartridge length", "32.51 mm"],
    ["Bullet diameter", "Approx. 9.0 mm"],
    ["Bullet weight", "Approximately 7.5–8.4 g"],
    ["Muzzle velocity", "Approximately 360–400 m/s*"],
    ["Muzzle energy", "Approximately 500–650 J*"],
    ["Maximum pressure according to C.I.P.", "2300 bar"],
    ["Primary historical firearm", "Colt M1911 Government Model"],
    ["Modern applications", "Competitive and civilian shooting"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific
  cartridge, bullet weight and design, and barrel length. Considerable differences exist
  between historical and modern .38 Super loads.
  C.I.P. specifies a maximum pressure of <strong>2300 bar</strong>.
</p>

<p>
  <strong>Important:</strong> <strong>9×23 mm SR
  (.38 Super)</strong> must not be confused with <strong>9×23 mm SR (.38 ACP / .38 Auto)</strong>,
  despite their practically identical case dimensions. The .38 Super is a high-pressure
  cartridge and must not be used in firearms designed exclusively for the .38
  ACP. It must also not be confused with the <strong>9×23
  mm Bergmann-Bayard (Largo), 9×23 mm Steyr, or 9×23 mm Winchester</strong>.
</p>
</Section>
<Section
  id="9x23-winchester"
  title="9×23 mm Winchester"
>
  <img
    src="/images/calibers/cartridges/9x23 Winchester.png"
    alt="9×23 mm Winchester"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>The high-pressure American cartridge developed for
  practical shooting as a modern rimless alternative to the .38 Super.</em>
</p>
<p>
  <strong>9×23 mm Winchester</strong> is an American pistol cartridge developed in the early 1990s and
  officially introduced in <strong>1996</strong>. It was designed primarily for the needs
  of <strong>practical shooting</strong>, where it needed to combine high muzzle
  velocity, substantial energy, and the ability to achieve a high <strong>Power Factor</strong>
  with relatively moderate recoil.
</p>

<p>
  The cartridge is particularly interesting because of
  its similarity to the existing <strong>.38 Super</strong>. Both use a bullet with a diameter
  of approximately 9 mm and have a case around 23 mm long, but their designs are different.
  While the .38 Super has a <strong>semi-rimmed</strong> case, the 9×23 Winchester is <strong>rimless</strong>
  and uses a significantly reinforced case designed for very
  high pressure.
</p>

<p>
  This design allows the 9×23 Winchester to achieve ballistic performance comparable to that of some magnum pistol cartridges without using a bottlenecked case.
</p>
<h2>History of Development</h2>

<p>
  The history of the 9×23 Winchester begins in the early
  <strong>1990s</strong>, when American designer <strong>John Ricco</strong>
  developed a new 9 mm case design.
</p>

<p>
  Ricco filed a patent in <strong>1992</strong> for
  an improved case design initially known as the <strong>9×23 Super</strong>.
  <strong>Winchester Ammunition</strong> technology was used to manufacture the prototypes.
</p>

<p>
  The main idea was to create a powerful 9 mm cartridge
  that could take advantage of <strong>1911</strong>-style platforms while avoiding
  some of the shortcomings of the .38 Super.
</p>

<p>
  The semi-rimmed case of the .38 Super can
  cause feeding problems, particularly in pistols with
  modified magazines and in competition configurations.
</p>

<p>
  The new cartridge addressed this problem by
  using a <strong>rimless case</strong>.
</p>

<p>
  Winchester modified the prototype design, and
  the resulting cartridge was eventually designated the <strong>9×23 Winchester</strong>.
</p>
<h2>The Introduction of the 9×23 Winchester</h2>

<p>
  The new cartridge was publicly introduced in <strong>1996</strong>
  at the annual meeting of the <strong>National Rifle Association (NRA)</strong>.
</p>

<p>
  Its primary purpose was practical shooting, particularly
  competitions governed by <strong>IPSC</strong> and <strong>USPSA</strong> rules.
</p>

<p>
  At the time, competitors were looking for a way to
  achieve the required <strong>Major Power Factor</strong> while using
  a smaller, faster bullet than the .45 ACP.
</p>

<p>
  The 9×23 Winchester was designed specifically with this goal in mind.
</p>

<p>
  With a bullet weighing around 8 g, it can achieve
  velocities exceeding <strong>430 m/s</strong> while retaining the relatively compact
  dimensions of a pistol cartridge.
</p>
<h2>The Connection with the .38 Super</h2>

<p>
  The history of the 9×23 Winchester is difficult to
  discuss separately from that of the <strong>.38 Super</strong>.
</p>

<p>
  The .38 Super was already an established cartridge in practical
  shooting, particularly in <strong>1911</strong> pistols. However, it uses a semi-rimmed
  case.
</p>

<p>
  During the development of the 9×23 Winchester, the aim was
  to retain the high ballistic performance of the .38 Super while adopting a more
  modern case design.
</p>

<p>
  This led to the development of the <strong>rimless 9×23 Winchester</strong>.
</p>

<p>
  The two cartridges are similar in dimensions and
  intended applications, but <strong>they are not the same cartridge and are not interchangeable</strong>.
</p>

<p>
  The 9×23 Winchester has a significantly stronger case construction and is designed for much higher pressures than the standard .38 ACP.
</p>
<h2>Case Design</h2>

<p>
  One of the most important features of the 9×23 Winchester
  is its <strong>heavily reinforced case</strong>.
</p>

<p>
  Its external geometry resembles an elongated 9×19 mm
  Parabellum, but the case is designed to withstand significantly higher pressure.
</p>

<p>
  The case walls and base are reinforced, allowing it to
  accommodate a large propellant charge.
</p>

<p>
  Unlike the .38 Super, the case is <strong>rimless</strong>,
  improving feeding and allowing more reliable operation in competition
  pistols.
</p>

<p>
  The case is almost cylindrical, with a slight
  taper toward the mouth.
</p>

<p>
  This differs from the bottlenecked cases used by the <strong>.357
  SIG</strong>, <strong>9×25 Dillon</strong>, and other high-velocity 9 mm cartridges.
</p>
<h2>High Operating Pressure</h2>

<p>
  The 9×23 Winchester is unusual because of its extremely
  high operating pressure.
</p>

<p>
  The <strong>Sporting Arms and Ammunition Manufacturers'
  Institute (SAAMI)</strong> specifies a maximum pressure of approximately <strong>55,000 psi</strong>,
  equivalent to approximately <strong>379 MPa</strong>.
</p>

<p>
  This figure is significantly higher than the pressure of
  standard 9×19 mm Parabellum ammunition.
</p>

<p>
  For this reason, the 9×23 Winchester must be used
  <strong>only in firearms specifically designed for this cartridge</strong>.
</p>

<p>
  Its external similarity to the 9×19 and other 9 mm cartridges does not make them interchangeable.
</p>
<h2>Ballistic Characteristics</h2>

<p>
  The high operating pressure allows the 9×23 Winchester to
  achieve very high muzzle velocities.
</p>

<p>
  With a bullet weighing approximately <strong>8 g (124–125 gr)</strong>,
  Winchester factory ammunition has achieved velocities of approximately <strong>440–450
  m/s</strong> in tests using a suitable test barrel.
</p>

<p>
  With an 8 g bullet traveling at approximately 450 m/s,
  the kinetic energy is about <strong>810 J</strong>. Published factory data
  show figures of approximately <strong>790–800 J</strong>, depending on the specific cartridge
  and test barrel.
</p>

<p>
  This places the 9×23 Winchester well above
  standard 9×19 mm loads and brings its energy close to that of some
  high-performance pistol cartridges.
</p>
<h2>9×23 Winchester and the 1911 Platform</h2>

<p>
  The cartridge is particularly well suited to pistols of the <strong>Colt M1911</strong>
  type.
</p>

<p>
  The case is relatively long, measuring approximately
  <strong>22.86 mm</strong>, while the overall cartridge length reaches approximately <strong>33.02 mm</strong>.
</p>

<p>
  This means that standard compact pistols designed for
  9×19 mm are not the natural platform for this cartridge.
</p>

<p>
  The 1911 platform has magazines of sufficient length and
  a design that allows the use of this type of cartridge.
</p>

<p>
  For this reason, the 9×23 Winchester remains closely associated with
  competition pistols based on the 1911.
</p>
<h2>Practical Shooting</h2>

<p>
  The primary reason for developing the 9×23 Winchester was <strong>competitive shooting</strong>.
</p>

<p>
  In practical shooting disciplines, results depend not only on accuracy but also on shooting speed and ammunition power.
</p>

<p>
  The 9×23 Winchester was designed to deliver a high <strong>Power Factor</strong> without requiring the use of the heavier .45 ACP.
</p>

<p>
  This allows competitors to use a relatively light 9 mm bullet at high velocity.
</p>

<p>
  The cartridge is particularly interesting for <strong>Open</strong>
  and other competition configurations of the 1911, where compensators and specially prepared firearms are used.
</p>

<h2>Why Didn't the 9×23 Winchester Become Widely Adopted?</h2>

<p>
  Despite its impressive performance, the cartridge never achieved widespread adoption.
</p>

<p>
  One reason is that its original purpose was closely tied to the rules of practical shooting.
</p>

<p>
  Meanwhile, competition rules changed, and the minimum Power Factor for the <strong>Major</strong> category was reduced. This weakened one of the new cartridge's main advantages.
</p>

<p>
  As a result, competitors could achieve the required performance with established cartridges such as the <strong>9×19</strong>, <strong>.38 Super</strong>, and <strong>.45 ACP</strong>.
</p>

<p>
  The 9×23 Winchester therefore remained a high-performance but relatively niche cartridge.
</p>

<h2>9×23 Winchester and Other 9×23 mm Cartridges</h2>

<p>
  The designation <strong>9×23 mm</strong> is a source of considerable confusion.
</p>

<p>
  The 9×23 Winchester must not be confused with:
</p>

<ul
  style={{
    listStyleType: "disc",
    paddingLeft: "28px",
    marginTop: "16px",
    marginBottom: "28px",
  }}
>
  <li><strong>9×23 mm Bergmann-Bayard / 9 mm Largo</strong></li>
  <li><strong>9×23 mm Steyr</strong></li>
  <li><strong>9×23 mm SR (.38 ACP / .38 Auto)</strong></li>
  <li><strong>9×23 mm SR (.38 Super)</strong></li>
</ul>

<p>
  Although all these cartridges use 9 mm bullets and cases approximately 23 mm long, they are different designs.
</p>

<p>
  The distinction from the <strong>.38 Super</strong> is particularly important.
</p>

<p>
  The .38 Super uses a <strong>semi-rimmed</strong> case, whereas the 9×23 Winchester is <strong>rimless</strong>. In addition, the Winchester cartridge uses a significantly reinforced case and is designed for very high pressure.
</p>

<p>
  Therefore, the designation <strong>9×23 mm alone is not sufficient to identify a cartridge</strong>.
</p>
<h2>9×23 Winchester and .357 SIG</h2>

<p>
  The 9×23 Winchester is also frequently compared with the <strong>.357 SIG</strong>,
  as both cartridges were developed around a similar concept: achieving high
  velocity and energy with a 9 mm bullet.
</p>

<p>
  Their designs, however, are different.
</p>

<p>
  The .357 SIG uses a <strong>bottlenecked case</strong>
  based on the .40 S&amp;W, whereas the 9×23 Winchester has an almost cylindrical case.
</p>

<p>
  Depending on the factory load, the two cartridges
  can achieve similar ballistic performance. However, the 9×23 Winchester operates
  at extremely high pressure and is optimized for a different firearm
  platform.
</p>

<h2>The Cartridge Today</h2>

<p>
  The 9×23 Winchester never achieved the popularity
  of the 9×19 mm or .38 Super.
</p>

<p>
  Nevertheless, the cartridge remains in production
  and is used by shooters who own firearms designed for it.
</p>

<p>
  Its primary niche remains <strong>sport and
  competitive shooting</strong>, particularly with pistols based on the 1911.
</p>

<p>
  It is also of interest to collectors because of
  its unusual design and its place in the history of
  high-velocity 9 mm ammunition.
</p>

<h2>Interesting Fact</h2>

<p>
  The 9×23 Winchester was developed at a time when the <strong>.38
  Super was already an established cartridge in practical shooting</strong>, but its semi-rimmed
  case design created certain problems in competition firearms.
</p>

<p>
  The new cartridge offered an elegant solution:
</p>

<p>
  <strong>9 mm bullet + rimless case + very high
  pressure.</strong>
</p>

<p>
  The concept was technically successful, but it emerged
  at a time when changes to practical shooting rules were already beginning to
  reduce the need for such a powerful cartridge.
</p>
<h2>Technical Data</h2>

<TechnicalData
  language="en"
  title="9×23 mm Winchester"
  data={[
    ["Designation", "9×23 mm Winchester"],
    ["Other designations", "9×23 Winchester / 9×23 Win"],
    ["Type", "Pistol cartridge"],
    ["Country of origin", "United States"],
    ["Development period", "1992–1995"],
    ["Commercial introduction", "1996"],
    ["Principal developers", "John Ricco / Winchester Ammunition"],
    ["Case type", "Rimless, almost cylindrical"],
    ["Case length", "22.86 mm"],
    ["Maximum overall cartridge length", "33.02 mm"],
    ["Bullet diameter", "Approximately 9.04 mm"],
    ["Ignition type", "Centerfire"],
    ["Typical bullet weight", "Approximately 8.0 g"],
    ["Muzzle velocity", "Approximately 400–450 m/s*"],
    ["Muzzle energy", "Approximately 640–800 J*"],
    ["Maximum pressure according to SAAMI", "Approximately 379 MPa"],
    ["Primary purpose", "Practical and competitive shooting"],
    ["Primary firearm platform", "Colt M1911 and derivatives"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific
  cartridge, bullet weight and design, and barrel length. Factory data for 124–125 gr
  bullets show velocities of approximately 440–450 m/s and energy of approximately
  790–800 J when measured using suitable test barrels.
</p>

<p>
  <strong>Important:</strong> <strong>9×23 mm Winchester</strong> is a different cartridge from
  <strong>9×23 mm Bergmann-Bayard (Largo), 9×23 mm Steyr, .38 ACP, and .38 Super</strong>,
  despite similar designations and comparable dimensions. They must not be considered
  interchangeable.
</p>
</Section>
<Section
  id="9x25-mauser-export"
  title="9×25 mm Mauser Export"
>
  <img
    src="/images/calibers/cartridges/9x25 Mauser.png"
    alt="9×25 mm Mauser Export"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    The powerful 9 mm cartridge developed for the Mauser C96 as an export variant of the legendary 7.63×25 Mauser, which later found a new lease on life in submachine guns.
  </em>
</p>
<p>
  <strong>9×25 mm Mauser</strong>, also known as <strong>9 mm Mauser Export</strong>, is a German pistol cartridge developed in the early 20th century for the <strong>Mauser C96</strong> family.
</p>

<p>
  The cartridge represents an increase in caliber over the existing <strong>7.63×25 mm Mauser</strong>.
  The case length was retained, but the bottlenecked design was replaced with an
  almost cylindrical case for a 9 mm bullet. The result was an unusually powerful
  9 mm cartridge for its time, intended primarily for export markets in Africa, Asia,
  and South America.
</p>

<p>
  The 9×25 Mauser is particularly interesting because of its later history. After limited
  use in pistols, it found a much more suitable application in <strong>submachine guns</strong>,
  where its high velocity and power could be used more effectively.
</p>

<h2>History of Development</h2>

<p>
  By the beginning of the 20th century, the <strong>7.63×25 mm Mauser</strong> was already an established cartridge for the Mauser C96.
  Its high muzzle velocity distinguished it from many other pistol
  cartridges of the era.
</p>

<p>
  Mauser, however, was looking for ways to expand the C96's market, particularly in countries where
  pistols of a larger caliber were in demand.
</p>

<p>
  Around <strong>1904–1905</strong>, the new <strong>9×25 mm Mauser Export</strong> was developed. The cartridge used the
  7.63×25 Mauser case as its starting point, but the case was changed from a bottlenecked shape to a <strong>cylindrical
  form</strong> and fitted with a 9 mm bullet. This increased the bullet diameter without
  increasing the case length.
</p>

<p>
  Some reference works give <strong>1907</strong> as the beginning of production, when
  DWM began manufacturing the cartridge for export versions of the Mauser.
</p>

<p>
  The name <strong>"Mauser Export"</strong> is directly related to its intended market.
  The cartridge was aimed primarily at foreign customers rather than the German
  armed forces.
</p>

<h2>9×25 Mauser and the Mauser C96</h2>

<p>
  The principal firearm for which the cartridge was intended was the <strong>Mauser C96</strong>.
</p>

<p>
  The C96 version chambered in 9×25 mm received the designation <strong>M1912 Mauser Export</strong> and was
  developed with export markets in mind. Pistols in this caliber are
  exceptionally rare compared with standard 7.63×25 mm C96 models.
</p>

<p>
  Because of the different case shape, the firearm had to be adapted. In the 9×25
  mm Mauser version, the magazine follower was also modified with a characteristic
  recess to help feed the cylindrical case correctly.
</p>

<p>
  The barrel and chamber were also different. The 9×25 mm version incorporated design
  changes to accommodate the larger caliber and the cartridge's characteristics.
</p>

<p>
  Because relatively few pistols were produced, this C96 variant is particularly
  interesting to collectors today. According to surviving production records, approximately
  <strong>150 C96 pistols in 9×25 mm Mauser Export</strong> were manufactured.
</p>

<h2>Design and Relationship to 7.63×25 Mauser</h2>

<p>
  The 9×25 mm Mauser is a direct design relative of the <strong>7.63×25 mm Mauser</strong>.
</p>

<p>
  The case length of both cartridges is practically identical, at approximately <strong>25 mm</strong>.
  The main changes concern the diameter and shape of the case.
</p>

<p>
  The 7.63×25 Mauser has a <strong>bottlenecked</strong> case, whereas the 9×25 Mauser has a <strong>cylindrical</strong> case.
</p>

<p>
  This is an interesting example of an existing cartridge being developed by changing the bullet diameter
  without altering the basic case length.
</p>

<p>
  The result was:
</p>

<p>
  <strong>7.63×25 Mauser → 9×25 Mauser Export</strong>
</p>

<p>
  However, these are different cartridges designed for different chambers.
</p>
<h2>A Powerful Cartridge for Its Time</h2>

<p>
  The 9×25 Mauser was an unusually powerful pistol cartridge for the early 20th century.
</p>

<p>
  With a standard bullet weighing approximately <strong>8 g</strong>, it could achieve velocities of around <strong>400 m/s</strong>,
  corresponding to a muzzle energy of approximately <strong>670 J</strong> with a specific
  standardized load.
</p>

<p>
  This placed it among the most powerful pistol cartridges of its era.
</p>

<p>
  An interesting feature is that despite the increased bullet diameter compared with the 7.63×25 Mauser,
  the ballistic performance of some loads remained similar. This allowed
  Mauser to retain some of the characteristics of its high-velocity cartridge
  while switching to a larger 9 mm bullet.
</p>
<h2>Why Didn't the 9×25 Mauser Become a Mainstream Pistol Cartridge?</h2>

<p>
  The main problem was not a lack of power, but quite the opposite.
</p>

<p>
  The 9×25 Mauser was <strong>very powerful for pistols of the early 20th century</strong>. The Mauser C96 was relatively large
  and heavy, but even this pistol faced considerable design demands when using
  such a powerful cartridge.
</p>

<p>
  As a result, the 9×25 Mauser failed to displace the more widely used <strong>7.63×25 Mauser</strong>,
  which remained the principal cartridge for the C96.
</p>

<p>
  More importantly, other 9 mm designs gradually gained ground on the international market,
  including the <strong>9×19 mm Parabellum</strong> and <strong>9×23 mm Largo</strong>.
</p>

<p>
  This limited the adoption of the 9×25 Mauser as a standard pistol
  cartridge.
</p>

<h2>From Pistol to Submachine Gun</h2>

<p>
  The cartridge's history did not end with its limited use in the C96.
</p>

<p>
  In the 1930s, the 9×25 Mauser acquired a new role: use in <strong>submachine guns</strong>.
</p>

<p>
  Its characteristics were much better suited to this role. The longer barrel of an automatic
  firearm allowed more complete use of the propellant charge, while the greater mass of
  the firearm itself made the powerful cartridge easier to control.
</p>

<p>
  The 9×25 Mauser was used in several firearms from Central Europe, including the <strong>Steyr MP30/MP34</strong>,
  as well as certain Swiss and Hungarian designs. The cartridge also found use
  in firearms from the <strong>SIG/Kiraly</strong> family.
</p>

<p>
  Thus, a cartridge that proved too specialized for widespread use in pistols found
  a second life in automatic firearms.
</p>

<h2>9×25 Mauser in Austria, Hungary, and Switzerland</h2>

<p>
  During the 1930s and 1940s, production of the 9×25 Mauser resumed, and the cartridge became
  increasingly common in military and police submachine guns.
</p>

<p>
  It was manufactured by German companies such as <strong>DWM, Geco, and RWS</strong>, as well as by manufacturers in
  Austria and Hungary. The cartridge was also produced by companies such as <strong>Kynoch, Fiocchi</strong>,
  and Société Française des Munitions.
</p>

<p>
  This illustrates the interesting transformation in its intended role:
</p>

<p>
  <strong>1900s — a powerful export pistol cartridge</strong>
</p>

<p>
  <strong>1930s–1940s — a submachine gun cartridge</strong>
</p>
<h2>Comparison with 9×19 Parabellum</h2>

<p>
  The 9×25 Mauser is often discussed alongside the <strong>9×19 mm Parabellum</strong>, but the two cartridges
  have different designs.
</p>

<p>
  The 9×19 has a case approximately <strong>19 mm</strong> long and was developed specifically for the Parabellum system.
</p>

<p>
  The 9×25 Mauser uses a considerably longer case, approximately <strong>25 mm</strong>, inherited from the 7.63×25
  Mauser.
</p>

<p>
  With certain loads, the 9×25 Mauser can achieve very high velocity and energy, but its
  high power and larger cartridge dimensions limit its practical
  applications.
</p>

<p>
  Ultimately, the <strong>9×19 Parabellum</strong> became a much more versatile and widely
  adopted military and police cartridge.
</p>

<h2>9×25 Mauser and 9×23 Largo</h2>

<p>
  The 9×25 Mauser appeared at a time when various countries were already using powerful 9 mm cartridges.
</p>

<p>
  Of particular importance to Mauser's export strategy was the <strong>9×23 mm Largo</strong>, widely used in
  Spain and Latin America.
</p>

<p>
  However, the two cartridges differ in dimensions and design and <strong>are not interchangeable</strong>.
</p>

<p>
  The 9×25 Mauser remains a distinct German design, initially associated with the Mauser C96 and
  later with certain submachine guns.
</p>

<h2>An Interesting Design Detail</h2>

<p>
  The 9×25 mm Mauser case is approximately the same length as the 7.63×25 Mauser case, but
  it no longer has the characteristic shoulder of a bottlenecked case.
</p>

<p>
  This may appear to be a relatively minor change, but it required adaptations to the firearm.
</p>

<p>
  The C96 received a specially modified magazine follower to facilitate
  feeding the new cartridge. This is a good example of how changing an ammunition design
  can lead to specific structural modifications to the firearm itself.
</p>

<h2>The Cartridge Today</h2>

<p>
  Today, the <strong>9×25 mm Mauser Export</strong> is an exceptionally rare cartridge.
</p>

<p>
  Its practical significance has long since disappeared, but it remains important to the history of Mauser and
  early submachine guns.
</p>

<p>
  It is of greatest interest to collectors of the <strong>Mauser C96</strong>, particularly those seeking rare
  9×25 mm examples, as well as European submachine guns that used
  this caliber.
</p>

<p>
  Its history is also interesting because of the unusual path it followed: it began as an attempt to
  create a more powerful cartridge for the C96, but ultimately found
  a more suitable application in automatic firearms.
</p>

<h2>Interesting Fact</h2>

<p>
  The 9×25 Mauser is one of those cartridges for which <strong>the pistol could not fully exploit
  the ammunition's potential, while the submachine gun offered a much more suitable application</strong>.
</p>

<p>
  This is precisely why the cartridge has two quite different chapters in its history.
</p>

<p>
  The first is associated with the rare <strong>Mauser C96 Export</strong>.
</p>

<p>
  The second began decades later with European submachine guns, for which
  high velocity and power were genuine advantages.
</p>

<p>
  Thus, the <strong>9×25 Mauser Export</strong> remains an interesting example of a cartridge that failed to become
  a mainstream pistol round but found a second life in another
  category of firearms.
</p>
<h2>Technical Data</h2>

<TechnicalData
  language="en"
  title="9×25 mm Mauser"
  data={[
    ["Designation", "9×25 mm Mauser"],
    ["Other designation", "9 mm Mauser Export"],
    ["Type", "Pistol / submachine gun cartridge"],
    ["Country of origin", "Germany"],
    ["Development period", "Around 1904–1905"],
    ["Introduction into production", "Around 1907"],
    ["Parent cartridge", "7.63×25 mm Mauser"],
    ["Case type", "Rimless, cylindrical"],
    ["Case length", "Approximately 24.9 mm"],
    ["Maximum overall cartridge length", "Approximately 32.8 mm"],
    ["Bullet diameter", "Approximately 9.02 mm"],
    ["Ignition type", "Centerfire"],
    ["Typical bullet weight", "Approximately 8.0 g"],
    ["Muzzle velocity", "Approximately 400–405 m/s*"],
    ["Muzzle energy", "Approximately 650–675 J*"],
    ["Maximum pressure", "Approximately 260 MPa*"],
    ["Principal firearms", "Mauser C96 M1912, Steyr MP30/MP34, and other submachine guns"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific cartridge, bullet weight, and barrel
  length. Figures of approximately 404 m/s and 671 J are reported for a load with an 8 g
  bullet fired from a 5.5-inch test barrel.
</p>
<p>
  <strong>The 9×25 mm Mauser Export must not be confused with other cartridges designated 9×25 mm.</strong>
  Other designs with similar metric designations exist, including
  <strong>9×25 Super Auto G</strong> and <strong>9×25 Dillon</strong>, but these are
  structurally different cartridges intended for different purposes.
</p>
</Section>
<Section
  id="9x25-super-auto-g"
  title="9×25 mm Super Auto G"
>
  <img
    src="/images/calibers/cartridges/9x25 Super Auto G.png"
    alt="9×25 mm Super Auto G"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

  <p>
    <em>
      An Austrian high-velocity 9 mm pistol cartridge developed by necking down
      the 10 mm Auto case.
    </em>
  </p>

  <p>
    <strong>9×25 mm Super Auto G</strong> is an Austrian pistol cartridge
    developed in the early 1990s by Austrian firearms technician and
    ballistician <strong>Horst Grillmayer</strong>. The cartridge was officially
    recognized by <strong>C.I.P.</strong> in <strong>1991</strong> and is also
    known as <strong>9×25 Super Auto Grillmayer</strong> or, in abbreviated
    form, 9×25 SAG.
  </p>

  <p>
    Its design is unusual for a 9 mm cartridge. The <strong>10 mm Auto</strong>
    case was used as the basis, with its neck narrowed to accept a bullet
    approximately <strong>9.03 mm</strong> in diameter. The resulting case is
    rimless and bottlenecked, retaining the large case-head diameter of the
    10 mm Auto.
  </p>

  <p>
    The concept behind the design is straightforward: the large internal
    capacity of the 10 mm Auto case allows a relatively light 9 mm bullet to
    be used at high pressure. This makes a very high muzzle velocity possible
    for a pistol cartridge.
  </p>

  <h2>Development History</h2>

  <p>
    In the late 1980s and early 1990s, <strong>10 mm Auto</strong> attracted
    considerable attention as a powerful pistol cartridge. Its large case and
    ability to operate at relatively high pressure made it a suitable basis
    for developing various derivative designs.
  </p>

  <p>
    Horst Grillmayer applied this concept to the development of the 9×25 Super
    Auto G. Rather than designing an entirely new case, the existing
    <strong>10 mm Auto</strong> case was narrowed at the shoulder and neck to
    accommodate a 9 mm bullet. The first prototypes were made from
    Hertenberger-produced 10 mm Auto cases.
  </p>

  <p>
    The cartridge was introduced and described in <strong>1991</strong>, and
    on <strong>May 17, 1991</strong>, it was registered with
    <strong>C.I.P.</strong> as the 9 × 25 Super Auto G, originating in Austria.
    The specification was subsequently revised in 2013.
  </p>

  <h2>Construction</h2>

  <p>
    At first glance, the 9×25 Super Auto G resembles an elongated 9 mm
    cartridge, but its construction is quite different. The case is
    <strong>rimless and bottlenecked</strong>, with a large case head and a
    clearly defined shoulder.
  </p>

  <p>
    According to C.I.P., the case length is <strong>25.35 mm</strong>, while
    the maximum overall cartridge length is <strong>32.70 mm</strong>. The
    bullet diameter is approximately <strong>9.03 mm</strong>.
  </p>

  <p>
    This design retains a substantial portion of the case capacity of the
    10 mm Auto while using a smaller and lighter bullet. This combination
    lies at the heart of the Super Auto G concept.
  </p>

  <h2>High Velocity</h2>

  <p>
    The primary goal of the 9×25 Super Auto G is to achieve a very high muzzle
    velocity through the combination of a large case, a relatively light
    9 mm bullet, and high operating pressure.
  </p>

  <p>
    The design shares some conceptual similarities with later high-velocity
    cartridges such as the <strong>.357 SIG</strong>, but the 9×25 Super Auto G
    uses a significantly larger case and was developed differently.
  </p>

  <p>
    C.I.P. specifies a maximum pressure of <strong>255 MPa</strong>
    (2550 bar). This is slightly below 36,985 psi.
  </p>

  <h2>The Connection with the Glock 20</h2>

  <p>
    The 9×25 Super Auto G was developed with use in modern self-loading
    pistols in mind. According to the International Ammunition Association,
    the cartridge was adapted for the <strong>Glock 20</strong>, which was
    originally designed for 10 mm Auto.
  </p>

  <p>
    This is a logical choice because the Glock 20 uses a platform designed
    around the large 10 mm Auto case. When switching to the 9×25 Super Auto G,
    the basic case geometry remains similar to that of the 10 mm Auto, while
    the bullet has a smaller diameter.
  </p>

  <h2>9×25 Super Auto G and 9×25 Dillon</h2>

  <p>
    The 9×25 Super Auto G is not the only cartridge developed by necking down
    the 10 mm Auto case to 9 mm.
  </p>

  <p>
    A closely related cartridge is the American <strong>9×25 Dillon</strong>,
    which also uses the 10 mm Auto as its basis. The two cartridges are
    ballistically similar, but they are not identical and differ in their
    dimensions.
  </p>

  <p>
    The 9×25 Dillon was developed earlier, in <strong>1988</strong>, whereas
    the 9×25 Super Auto G is associated with Horst Grillmayer's work in
    <strong>1991</strong>.
  </p>

  <p>
    This is an interesting example of the independent development of a very
    similar idea: using the high-capacity 10 mm Auto case to create a
    high-velocity 9 mm cartridge.
  </p>

  <h2>Why Did the Cartridge Remain Rare?</h2>

  <p>
    Despite its interesting design, the 9×25 Super Auto G never became a
    widely available factory-produced cartridge.
  </p>

  <p>
    According to the International Ammunition Association, the cartridge did
    not achieve widespread commercial production. Prototypes and small
    production runs are known, including examples produced by
    <strong>Otto Planiavsky Munitions (OPM)</strong> in South Africa.
  </p>

  <p>
    Some known prototypes use modified 10 mm Auto cases. This is characteristic
    of many rare, specialized cartridges that never progress to mass
    production.
  </p>

  <p>
    Meanwhile, the 9 mm pistol cartridge market developed in a different
    direction. More compact and widely standardized cartridges such as
    <strong>9×19 mm Parabellum</strong> retained their enormous importance,
    while specialized high-velocity designs remained niche products.
  </p>

  <h2>Other Developments by Grillmayer</h2>

  <p>
    The 9×25 Super Auto G was just one of the many designs developed by
    <strong>Horst Grillmayer</strong>, an Austrian firearms technician and
    ballistician. He worked on a range of unconventional cartridges and
    experimental designs. These included other specialized calibers such as
    <strong>9×22 Major</strong> and various hunting cartridges.
  </p>

  <p>
    Interestingly, the development of the 9×25 Super Auto G was part of the
    search for high-velocity 9 mm solutions during a period when 10 mm Auto
    was still attracting considerable interest.
  </p>

  <h2>The Cartridge Today</h2>

  <p>
    Today, the <strong>9×25 mm Super Auto G</strong> remains an extremely rare
    cartridge. It is primarily of historical and collector interest rather
    than having widespread practical applications.
  </p>

  <p>
    It is also interesting for GunsAtlas because it demonstrates how a single
    basic case can serve as the foundation for different cartridges. In this
    instance, <strong>10 mm Auto</strong> provides the basis for a 9 mm design
    focused on achieving very high velocity.
  </p>

  <h2>Interesting Fact</h2>

  <p>
    <strong>The 9×25 Super Auto G and 9×25 Dillon appear to represent almost
    the same concept, but they are two separate developments.</strong> Both
    cartridges use a 10 mm Auto case necked down for a 9 mm bullet, but their
    designs are not identical.
  </p>

  <p>
    This makes the family of cartridges designated <strong>9×25 mm</strong>
    particularly interesting: behind what appears to be a simple, identical
    designation lie distinct designs developed at different times.
  </p>

  <h2>Technical Data</h2>

  <TechnicalData
    language="en"
    title="9×25 mm Super Auto G"
    data={[
      ["Designation", "9×25 mm Super Auto G"],
      ["Other designations", "9×25 SAG / 9×25 Super Auto Grillmayer"],
      ["Type", "Pistol cartridge"],
      ["Origin", "Austria"],
      ["Development", "1991"],
      ["Developer", "Horst Grillmayer"],
      ["Parent case", "10 mm Auto"],
      ["Case type", "Rimless, bottlenecked"],
      ["Case length", "25.35 mm"],
      ["Maximum cartridge length", "32.70 mm"],
      ["Bullet diameter", "9.03 mm"],
      ["Neck diameter", "9.63 mm"],
      ["Case-head diameter", "10.80 mm"],
      ["Rim diameter", "10.85 mm"],
      ["Primer type", "Centerfire, Large Pistol"],
      ["Case capacity", "Approximately 1.60 cm³"],
      ["Maximum pressure (C.I.P.)", "255 MPa"],
      ["Primary firearm platform", "Pistols based on the 10 mm Auto"],
    ]}
  />

  <p>
    <strong>Important:</strong> The <strong>9×25 mm Super Auto G</strong> is
    a different cartridge from the <strong>9×25 mm Mauser Export</strong> and
    the <strong>9×25 mm Dillon</strong>. Despite their similar designations,
    the three cartridges have different histories and case geometries.
  </p>
</Section>
<Section
  id="9x1-29-38-special"
  title="9.1×29 mm R (.38 Special)"
>
  <img
    src="/images/calibers/cartridges/9.1x29 38 Special.png"
    alt="9.1×29 mm R (.38 Special)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      The legendary Smith &amp; Wesson revolver cartridge, which became one of
      the most widely used rounds for police, service, and civilian revolvers.
    </em>
  </p>
  <p>
    <strong>.38 Special</strong>, also known as <strong>.38 Smith &amp; Wesson Special</strong>,
    <strong>.38 Spl.</strong>, and in metric notation as <strong>9.1×29 mm R</strong>,
    is one of the most famous revolver cartridges in history.
  </p>

  <p>
    It was developed by <strong>Smith &amp; Wesson</strong> in the late 19th
    century as a more powerful evolution of the older <strong>.38 Long Colt</strong>.
    The cartridge was introduced in <strong>1898</strong>, and in 1899 it was
    offered alongside the new <strong>Smith &amp; Wesson Military &amp; Police</strong>
    revolver, later known as the <strong>Model 10</strong>.
  </p>

  <p>
    The combination of relatively moderate recoil, good accuracy, reliability,
    and power that was substantial for its time made the .38 Special an
    exceptionally successful cartridge. For decades, it was widely used by
    police, military organizations, security services, sport shooters, and
    civilians.
  </p>

  <h2>Development History</h2>

  <p>
    By the late 19th century, <strong>Smith &amp; Wesson</strong> had already
    accumulated extensive experience in manufacturing revolvers and their
    ammunition.
  </p>

  <p>
    At the time, the <strong>.38 Long Colt</strong> was widely used, but
    Smith &amp; Wesson sought a more powerful cartridge for a new generation
    of revolvers with solid frames and swing-out cylinders.
  </p>

  <p>
    The company developed a new cartridge with a longer case and a larger
    powder charge. The new round was designated
    <strong>.38 Smith &amp; Wesson Special</strong>.
  </p>

  <p>
    Initially, it used <strong>black powder</strong> and a bullet weighing
    approximately <strong>158 gr (10.24 g)</strong>. The early load produced
    a velocity of around <strong>775 ft/s (236 m/s)</strong>, but smokeless
    powder loads began to appear shortly afterward.
  </p>

  <p>
    In <strong>1899</strong>, Smith &amp; Wesson introduced the new
    <strong>Military &amp; Police</strong> revolver, designed for use with
    .38 Special. The firearm became a major success and was later designated
    the <strong>Model 10</strong>.
  </p>

  <h3>Smith &amp; Wesson - Model 10.</h3>
  <img
    src="/images/calibers/cartridges/S W Model 10.png"
    alt="Smith &amp; Wesson Model 10"
    style={{
      width: "45%",
      height: "auto",
      display: "block",
      margin: "30px auto",
    }}
  />
  <p>
    From the very beginning, the cartridge was therefore associated with one
    of the most successful revolver series in history.
  </p>

  <h2>Evolution from .38 Long Colt</h2>

  <p>
    The .38 Special is directly related to the older
    <strong>.38 Long Colt</strong>.
  </p>

  <p>
    The main difference is the increased case length. The .38 Special uses
    the same general bullet diameter, but its case is approximately
    <strong>0.529 in (13.4 mm)</strong> longer.
  </p>

  <p>
    This design relationship has an important practical consequence:
    revolvers chambered for .38 Special can also use .38 Long Colt, whereas
    the reverse is not possible because of the greater length of the
    .38 Special cartridge.
  </p>

  <p>
    The new cartridge gradually displaced the .38 Long Colt as a more powerful
    and modern revolver round.
  </p>

  <h2>Construction and Characteristics</h2>

  <p>
    The .38 Special is a <strong>rimmed, straight-walled, centerfire cartridge</strong>.
  </p>

  <p>
    The rim serves an important function in a revolver: it allows the cartridge
    to be properly positioned in the cylinder and facilitates case extraction
    after firing.
  </p>

  <p>
    The case is cylindrical, and the cartridge uses bullets with a nominal
    diameter of <strong>.357 in</strong>, or approximately <strong>9.07 mm</strong>.
  </p>

  <p>
    This illustrates one of the peculiarities of the American cartridge
    designation system. Although the cartridge is called <strong>.38</strong>,
    the actual bullet diameter is approximately 9.1 mm.
  </p>

  <p>
    For this reason, the metric designation <strong>9.1×29 mm R</strong> is
    also encountered.
  </p>

  <p>
    This designation does not mean that the .38 Special is the same cartridge
    as the various 9 mm pistol rounds. The letter <strong>R</strong> stands
    for <strong>Rimmed</strong>, a characteristic feature of revolver
    cartridges.
  </p>

  <h2>Why Is It Called .38?</h2>

  <p>
    The <strong>.38</strong> designation originates from the historical
    American system of naming cartridges.
  </p>

  <p>
    With older revolver ammunition, the number was often associated with the
    approximate bullet diameter or the dimensions of the cartridge being used.
  </p>

  <p>
    As designs evolved, the designation did not always remain an exact match
    for the actual bullet diameter.
  </p>

  <p>
    For the .38 Special, the nominal designation of <strong>.38 in</strong>
    corresponds to approximately <strong>9.65 mm</strong>, whereas the actual
    bullet diameter is approximately <strong>.357 in (9.07 mm)</strong>.
  </p>

  <p>
    Therefore, the <strong>.38 Special</strong> should not be interpreted as
    a cartridge with a bullet measuring exactly 9.65 mm in diameter.
  </p>

  <h2>Spread and Adoption</h2>

  <p>
    The .38 Special gradually became one of the most widely used revolver
    cartridges in the world.
  </p>

  <p>
    During the first half of the 20th century, it was widely used by American
    police forces and various law enforcement agencies.
  </p>

  <p>
    <strong>Smith &amp; Wesson Military &amp; Police</strong> revolvers became
    standard police firearms in a large number of departments. Colt also began
    offering revolvers chambered for .38 Special, including the
    <strong>Colt Police Positive</strong>.
  </p>

  <p>
    Over time, nearly every major revolver manufacturer introduced models
    chambered for this cartridge.
  </p>

  <p>
    The versatility of the .38 Special is one of the main reasons it remained
    popular for many decades after its introduction.
  </p>

  <h2>.38 Special and American Law Enforcement</h2>

  <p>
    The .38 Special played a particularly important role in the history of
    American law enforcement.
  </p>

  <p>
    For decades, revolvers chambered for this cartridge were among the most
    widely used service firearms in the United States.
  </p>

  <p>
    There were several reasons for this:
  </p>

  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "28px",
      marginTop: "16px",
      marginBottom: "28px",
      fontSize: "20px",
    }}
  >
    <li>simple and reliable revolver design;</li>
    <li>relatively moderate recoil;</li>
    <li>good accuracy;</li>
    <li>adequate power for service use;</li>
    <li>a wide selection of bullets and ammunition types.</li>
  </ul>

  <p>
    The .38 Special gradually became something of a standard for the American
    police revolver.
  </p>

  <p>
    With the widespread adoption of self-loading pistols during the final
    decades of the 20th century, its role as a service cartridge declined,
    but .38 Special revolvers continued to see widespread use.
  </p>

  <h2>Military Use</h2>

  <p>
    The .38 Special was not designed as a primary military cartridge, but it
    also found military applications.
  </p>

  <p>
    During World War II, Smith &amp; Wesson manufactured large quantities of
    <strong>Military &amp; Police</strong> revolvers, including the so-called
    <strong>Victory Models</strong>, for British and Allied forces.
    Smith &amp; Wesson states that more than <strong>800,000</strong> such
    revolvers were supplied to the British military during the war.
  </p>

  <p>
    This is an interesting example of a cartridge originally developed as
    American police and civilian ammunition that later also became part of
    military supply programs.
  </p>

  <h2>Bullet Types and Loads</h2>

  <p>
    Over more than a century of production, the .38 Special has acquired a
    huge variety of loadings.
  </p>

  <p>
    Bullets of different weights and designs are used, ranging from lightweight
    target-shooting bullets to heavy lead and hollow-point bullets for service
    and civilian applications.
  </p>

  <p>
    Some of the most characteristic bullet types include:
  </p>

  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "28px",
      marginTop: "16px",
      marginBottom: "28px",
      fontSize: "20px",
    }}
  >
    <li><strong>Lead Round Nose (LRN)</strong>;</li>
    <li><strong>Wadcutter (WC)</strong>;</li>
    <li><strong>Semi-Wadcutter (SWC)</strong>;</li>
    <li><strong>Full Metal Jacket (FMJ)</strong>;</li>
    <li><strong>Jacketed Hollow Point (JHP)</strong>;</li>
    <li><strong>+P</strong> loads with increased pressure.</li>
  </ul>

  <p>
    The <strong>wadcutter</strong> bullet is particularly important. It has a
    flat nose and is widely used in target shooting and training.
  </p>

  <p>
    The .38 Special is also known for its very good accuracy when suitable
    target loads are used.
  </p>

  <h2>.38 Special +P</h2>

  <p>
    A variant known as <strong>.38 Special +P</strong> is also available,
    using ammunition loaded to higher pressure.
  </p>

  <p>
    +P ammunition is not simply a "more powerful version" that can be used
    indiscriminately in every .38 Special revolver. Suitability depends on
    the specific firearm and its manufacturer.
  </p>

  <p>
    This is particularly important with older revolvers, as historical designs
    are not always intended to withstand the stresses associated with modern
    +P ammunition.
  </p>

  <h2>Ballistic Characteristics</h2>

  <p>
    The ballistic performance of the .38 Special varies considerably depending
    on bullet weight and design, the type of load, and barrel length.
  </p>

  <p>
    The classic load with a <strong>158-gr (10.24 g)</strong> bullet is known
    for its relatively moderate muzzle velocity. Modern standard ammunition
    can achieve approximately <strong>230–300 m/s</strong>, depending on the
    specific load and barrel.
  </p>

  <p>
    For example, SAAMI data show different velocities for standard .38 Special
    loads depending on bullet weight, with figures of approximately
    <strong>750–900 ft/s</strong> listed for 158-gr bullets, depending on the
    test configuration.
  </p>

  <p>
    With a standard 158-gr bullet and a velocity of around
    <strong>270–275 m/s</strong>, kinetic energy is approximately
    <strong>380–390 J</strong>.
  </p>

  <p>
    For this reason, the figure of approximately <strong>420 J</strong>
    mentioned in the earlier text is possible for a particular load, but
    should not be presented as a universal characteristic of the .38 Special.
  </p>

  <h2>.38 Special and .357 Magnum</h2>

  <p>
    One of the most interesting chapters in the cartridge's history is its
    relationship with the <strong>.357 Magnum</strong>.
  </p>

  <p>
    The .357 Magnum was developed later as a significantly more powerful
    revolver cartridge, but it uses a lengthened case based on the
    .38 Special.
  </p>

  <p>
    This creates an important practical rule:
  </p>

  <p>
    <strong>
      A revolver chambered for .357 Magnum can use .38 Special ammunition,
      but a revolver chambered only for .38 Special must not use .357 Magnum.
    </strong>
  </p>

  <p>
    In this way, the .38 Special became the foundation for an entire family
    of powerful revolver cartridges.
  </p>

  <h2>.38 Special and .38 S&amp;W</h2>

  <p>
    The name creates another common source of confusion.
  </p>

  <p>
    <strong>.38 Special</strong> is not the same cartridge as
    <strong>.38 S&amp;W</strong>.
  </p>

  <p>
    Despite their similar designations, the two cartridges have different
    dimensions and designs and <strong>are not interchangeable</strong>.
  </p>

  <p>
    This is important when identifying older ammunition and firearms, since
    the designation ".38" alone is not sufficient to identify a specific
    cartridge.
  </p>

  <h2>The Cartridge Today</h2>

  <p>
    More than 120 years after its introduction, the .38 Special continues
    to be manufactured and used.
  </p>

  <p>
    It remains particularly popular in revolvers intended for target shooting,
    training, collecting, and personal use.
  </p>

  <p>
    Modern production includes a huge selection of standard and specialized
    loads.
  </p>

  <p>
    Although self-loading pistols chambered for 9×19 mm and other modern
    calibers have largely replaced .38 Special revolvers in service roles,
    the cartridge retains a remarkably strong presence.
  </p>

  <p>
    It is one of the rare cartridges that continues to be mass-produced and
    used in a vast number of firearms more than a century after its creation.
  </p>

  <h2>Interesting Fact</h2>

  <p>
    The history of the .38 Special is closely linked to one of the most
    successful revolver series in the world.
  </p>

  <p>
    The <strong>Smith &amp; Wesson Military &amp; Police</strong>, later known
    as the <strong>Model 10</strong>, has been in continuous production since
    1899. Smith &amp; Wesson states that more than
    <strong>6 million units</strong> have been produced.
  </p>

  <p>
    Thus, the .38 Special did more than become a popular cartridge — it became
    part of the history of the revolver itself, one of the most recognizable
    personal firearms of the 20th century.
  </p>

  <h2>Technical Data</h2>

  <TechnicalData
    language="en"
    title=".38 Special"
    data={[
      ["Designation", ".38 Special"],
      ["Full designation", ".38 Smith & Wesson Special"],
      ["Metric designation", "9.1×29 mm R"],
      ["Type", "Revolver cartridge"],
      ["Origin", "United States"],
      ["Developer", "Smith & Wesson"],
      ["Year of development", "1898"],
      ["Production began", "1898"],
      ["Case type", "Rimmed, straight-walled"],
      ["Case length", "Approximately 29.34 mm"],
      ["Maximum cartridge length", "Approximately 39.37 mm"],
      ["Bullet diameter", "Approximately 9.07 mm (.357 in)"],
      ["Primer type", "Centerfire"],
      ["Typical bullet weight", "Approximately 8.0–10.2 g"],
      ["Muzzle velocity", "Approximately 230–300 m/s*"],
      ["Muzzle energy", "Approximately 280–450 J*"],
      ["Maximum pressure", "Approximately 150 MPa according to C.I.P."],
      ["Primary applications", "Revolvers, target shooting, law enforcement, and civilian use"],
    ]}
  />

  <p>
    * Ballistic performance depends on the specific cartridge, bullet weight
    and design, and barrel length. Standard 158-gr (10.24 g) loads typically
    produce velocities of around 230–275 m/s, while other modern loads may
    achieve higher figures. SAAMI data show substantial variations depending
    on bullet weight and test barrel.
  </p>

  <p>
    <strong>Important:</strong> <strong>.38 Special</strong>,
    <strong>.38 S&amp;W</strong>, <strong>.38 Long Colt</strong>,
    <strong>.38 ACP</strong>, <strong>.38 Super</strong>, and
    <strong>9×23 mm Winchester</strong> are different cartridges despite
    similarities in their designations. For the .38 Special, the metric
    designation <strong>9.1×29 mm R</strong> further emphasizes that it is a
    <strong>rimmed revolver cartridge</strong>, not a standard 9 mm pistol
    cartridge.
  </p>
</Section>
<Section
  id="9x1-33-357-magnum"
  title="9.1×33 mm R (.357 Magnum)"
>
  <img
    src="/images/calibers/cartridges/9.1x33.357 Magnum.png"
    alt="9.1×33 mm R (.357 Magnum)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
    <em>
      The legendary Magnum revolver cartridge that ushered in the era of
      high-performance revolver ammunition.
    </em>
  </p>
  <p>
    <strong>.357 Magnum</strong>, also known as <strong>.357 S&amp;W Magnum</strong>,
    is one of the most famous revolver cartridges in history. Developed in the
    United States in <strong>1934</strong> and introduced by
    <strong>Smith &amp; Wesson in 1935</strong>, it was designed as a
    significantly more powerful evolution of the <strong>.38 Special</strong>.
  </p>

  <p>
    The cartridge was developed through the work of <strong>Elmer Keith</strong>,
    <strong>Phil Sharpe</strong>, and <strong>Douglas B. Wesson</strong>, with
    <strong>Winchester</strong> contributing to the development of the
    ammunition itself. The main objective was to create a powerful revolver
    cartridge capable of delivering significantly higher velocity and
    penetration than the standard .38 Special.
  </p>

  <p>
    From its introduction, the .357 Magnum became a symbol of the powerful
    revolver. It found applications among police and law enforcement agencies,
    hunters, sport shooters, and civilian users.
  </p>

  <h2>Development History</h2>

  <p>
    The history of the .357 Magnum began in the 1930s with the development of
    high-powered loads for the <strong>.38 Special</strong>.
  </p>

  <p>
    At the time, American law enforcement agencies were increasingly
    encountering criminals who used automobiles as cover. Prohibition and
    organized crime created additional interest in more powerful pistol and
    revolver ammunition.
  </p>

  <p>
    The standard .38 Special no longer fully met every requirement of certain
    service users. The introduction of the <strong>.38 Super</strong> for the
    Colt M1911 pistol also demonstrated the potential of high-velocity 9 mm
    ammunition.
  </p>

  <p>
    Smith &amp; Wesson had already developed the heavy-frame
    <strong>.38/44 Heavy Duty</strong> and <strong>.38/44 Outdoorsman</strong>
    revolvers, which used a reinforced frame based on the company's .44-caliber
    revolvers. These firearms could handle loads considerably more powerful
    than standard .38 Special ammunition.
  </p>

  <p>
    It was with these firearms that <strong>Elmer Keith</strong> and
    <strong>Phil Sharpe</strong> experimented with heavy bullets and
    high-velocity loads.
  </p>

  <p>
    Sharpe brought the project to the attention of <strong>Douglas B. Wesson</strong>,
    who was a senior figure at Smith &amp; Wesson at the time.
    Subsequently, <strong>Winchester Repeating Arms Company</strong> became
    involved in developing the new cartridge.
  </p>

  <h2>The Creation of the .357 Magnum</h2>

  <p>
    By <strong>1934</strong>, the design of the new cartridge had taken shape.
  </p>

  <p>
    The main change compared with the .38 Special was an increase in case
    length of approximately <strong>3.4 mm</strong>. This prevented the new
    cartridge from being chambered in a cylinder designed exclusively for
    .38 Special.
  </p>

  <p>
    This was an extremely important design decision.
  </p>

  <p>
    The increased case length itself <strong>was not the primary reason for
    the cartridge's greater power</strong>. Instead, it allowed substantially
    higher operating pressures and larger powder charges while preventing the
    more powerful ammunition from being used in standard .38 Special revolvers.
  </p>

  <p>
    The new cartridge received the designation <strong>.357 Magnum</strong>.
  </p>

  <p>
    In <strong>1935, Smith &amp; Wesson introduced the first revolver
    chambered for it</strong>, known as the <strong>Registered Magnum</strong>,
    later associated with the <strong>Model 27</strong> designation.
  </p>

  <h3>Smith &amp; Wesson - Registered Magnum. Model 27.</h3>
  <img
    src="/images/calibers/cartridges/Smith & Wesson Model 27.png"
    alt="Smith &amp; Wesson Model 27"
    style={{
      width: "45%",
      height: "auto",
      display: "block",
      margin: "30px auto",
    }}
  />
  <p>
    Initially, the revolver was produced as a special-order model and could
    be configured with different barrel lengths, sights, and other features.
    The first examples were individually manufactured and supplied with a
    registration certificate.
  </p>

  <h2>Why .357, Not .38?</h2>

  <p>
    At first glance, the designation <strong>.357 Magnum</strong> seems
    unusual because .357 is numerically smaller than .38.
  </p>

  <p>
    The reason lies in the historical American cartridge designation system.
  </p>

  <p>
    The .38 Special uses a bullet with a diameter of approximately
    <strong>.357 in (9.07 mm)</strong>. The ".38" designation was inherited
    from older cartridges and does not directly correspond to the actual
    bullet diameter.
  </p>

  <p>
    For the new cartridge, manufacturers used the designation
    <strong>.357</strong>, which more accurately reflects the actual bullet
    diameter.
  </p>

  <p>
    Consequently, the two cartridges have virtually the same bullet diameter,
    but the .357 Magnum uses a longer, stronger case and operates at
    significantly higher pressure.
  </p>

  <h2>The Relationship with .38 Special</h2>

  <p>
    The .357 Magnum is directly related to the .38 Special.
  </p>

  <p>
    Both cartridges use bullets of approximately the same diameter, but they
    differ in case length and operating characteristics.
  </p>

  <p>
    This creates an important rule:
  </p>

  <p>
    <strong>A .357 Magnum revolver can use .38 Special ammunition, but a
    revolver designed exclusively for .38 Special must not use .357 Magnum.</strong>
  </p>

  <p>
    The shorter .38 Special case allows the cartridge to fit inside the longer
    chamber of a .357 Magnum revolver.
  </p>

  <p>
    The reverse is not possible because of the greater case length of the
    .357 Magnum.
  </p>

  <p>
    This feature makes the .357 Magnum and .38 Special one of the most
    interesting pairs of revolver cartridges.
  </p>

  <h2>Construction and Characteristics</h2>

  <p>
    The .357 Magnum is a <strong>rimmed, straight-walled, centerfire cartridge</strong>.
  </p>

  <p>
    The case is approximately <strong>32.6 mm</strong> long, while the maximum
    overall cartridge length is about <strong>40 mm</strong>.
  </p>

  <p>
    The bullet has a nominal diameter of approximately
    <strong>.357 in (9.07 mm)</strong>.
  </p>

  <p>
    Although its dimensions are relatively similar to those of the .38 Special,
    the .357 Magnum was designed to operate at significantly higher pressure.
  </p>

  <p>
    This allows a wide range of bullets with different weights and designs
    to be used, from lightweight, high-velocity bullets to heavier bullets
    intended for hunting and other specialized applications.
  </p>

  <h2>The First Magnum</h2>

  <p>
    The .357 Magnum is often described as the <strong>first widely adopted
    Magnum revolver cartridge</strong>.
  </p>

  <p>
    The term "Magnum" gradually became a designation for ammunition offering
    greater power than standard cartridges of the same caliber.
  </p>

  <p>
    With the .357 Magnum, this concept proved exceptionally successful.
  </p>

  <p>
    The cartridge delivers substantially higher velocity and energy than the
    .38 Special while remaining compact enough for use in a revolver.
  </p>

  <h2>Police Use</h2>

  <p>
    The high penetration of the .357 Magnum quickly attracted the attention
    of American law enforcement agencies.
  </p>

  <p>
    The cartridge can penetrate automobile body panels and some early forms
    of protective equipment, a particularly important capability during an
    era when vehicles were frequently used as cover.
  </p>

  <p>
    This helped make it one of the best-known police cartridges in the
    United States.
  </p>

  <p>
    <strong>Smith &amp; Wesson</strong>, <strong>Colt</strong>, and
    <strong>Ruger</strong> revolvers chambered for .357 Magnum gradually
    became symbols of the American police revolver.
  </p>

  <p>
    Over the following decades, however, self-loading pistols gradually
    displaced revolvers as the primary service firearm.
  </p>

  <h2>Hunting and Civilian Use</h2>

  <p>
    The .357 Magnum did not remain solely a police cartridge.
  </p>

  <p>
    Its high power also made it suitable for hunting small and medium-sized
    game, as well as for sport shooting and civilian use.
  </p>

  <p>
    During the cartridge's development, <strong>Douglas B. Wesson</strong>
    demonstrated its capabilities on hunting expeditions.
  </p>

  <p>
    The cartridge is used in a wide variety of revolvers, ranging from
    substantial full-size models to more compact firearms designed for carry.
  </p>

  <h2>Ballistic Characteristics</h2>

  <p>
    One of the most distinctive characteristics of the .357 Magnum is its
    high muzzle velocity.
  </p>

  <p>
    Performance varies considerably depending on bullet weight, the specific
    load, and barrel length.
  </p>

  <p>
    With a bullet weighing approximately <strong>158 gr (10.24 g)</strong>,
    velocities of around <strong>350–450 m/s</strong> are encountered with
    various factory loads and barrel lengths.
  </p>

  <p>
    Lighter bullets can achieve even higher velocities.
  </p>

  <p>
    With a 10.2 g bullet traveling at 411 m/s, kinetic energy is approximately
    <strong>860 J</strong>. This is a realistic figure for a powerful load,
    but it should not be presented as a universal characteristic of all
    .357 Magnum ammunition.
  </p>

  <p>
    For this reason, using a range of values rather than a single figure is
    more appropriate for the technical data on GunsAtlas.
  </p>

  <h2>.357 Magnum and .38 Special</h2>

  <p>
    The difference between these two cartridges is much greater than their
    external appearance might suggest.
  </p>

  <p>
    <strong>.38 Special</strong> is the older and less powerful cartridge.
  </p>

  <p>
    <strong>.357 Magnum</strong> uses a longer case, higher pressure, and
    significantly more powerful loads.
  </p>

  <p>
    Nevertheless, the two cartridges retain almost the same bullet diameter.
  </p>

  <p>
    This is what makes the .357 Magnum so practical: a .357 Magnum revolver
    can fire both the powerful Magnum cartridge and the milder .38 Special.
  </p>

  <p>
    This combination allows the same revolver to be used for different
    purposes.
  </p>

  <h2>.357 Magnum and the Desert Eagle</h2>

  <p>
    The .357 Magnum also has an interesting connection with self-loading
    pistols. The first production version of the Desert Eagle was chambered
    for .357 Magnum. Introduced in 1983, the pistol uses gas-operated
    functioning and a rotating bolt, allowing this powerful revolver cartridge
    to be used in a self-loading firearm. The Desert Eagle was later offered
    in .44 Magnum and subsequently in .50 Action Express.
  </p>

  <h3>Desert Eagle</h3>

  <img
    src="/images/calibers/cartridges/Desert eagle.png"
    alt="Desert Eagle"
    style={{
      width: "45%",
      height: "auto",
      display: "block",
      margin: "30px auto",
    }}
  />

  <h2>The Development of the Magnum Family</h2>

  <p>
    The success of the .357 Magnum influenced the development of other
    powerful revolver cartridges.
  </p>

  <p>
    Cartridges that followed include:
  </p>

  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "28px",
      marginTop: "16px",
      marginBottom: "28px",
      fontSize: "20px",
    }}
  >
    <li><strong>.44 Magnum</strong></li>
    <li><strong>.41 Magnum</strong></li>
    <li><strong>.454 Casull</strong></li>
    <li><strong>.460 S&amp;W Magnum</strong></li>
    <li><strong>.500 S&amp;W Magnum</strong></li>
  </ul>

  <p>
    The term <strong>Magnum</strong> thus gradually became a symbol of high
    power in revolver ammunition.
  </p>

  <p>
    The .357 Magnum, however, remains one of the most versatile members of
    this category.
  </p>

  <h2>The Cartridge Today</h2>

  <p>
    More than 90 years after its development, the .357 Magnum continues to
    be manufactured and used.
  </p>

  <p>
    It remains popular among shooters and hunters, and major firearms
    manufacturers continue to produce revolvers chambered for it.
  </p>

  <p>
    Although modern police forces have largely transitioned to self-loading
    pistols, the .357 Magnum maintains a strong presence in civilian shooting,
    hunting, and collectible firearms.
  </p>

  <p>
    Its combination of high power, relatively compact dimensions, and the
    ability to use .38 Special ammunition makes it one of the most successful
    designs in the history of revolver cartridges.
  </p>

  <h2>Interesting Fact</h2>

  <p>
    The first .357 Magnum was created as a <strong>custom-order revolver</strong>.
  </p>

  <p>
    Smith &amp; Wesson initially did not expect enormous demand for a firearm
    that cost <strong>$60</strong> in 1935 — approximately $15 more than the
    company's most expensive standard revolvers at the time.
  </p>

  <p>
    Those expectations proved wrong. Demand exceeded Smith &amp; Wesson's
    production capacity, and the .357 Magnum gradually became one of the
    best-known handgun cartridges in the world.
  </p>

  <h2>Technical Data</h2>

  <TechnicalData
    language="en"
    title=".357 Magnum"
    data={[
      ["Designation", ".357 Magnum"],
      ["Full designation", ".357 Smith & Wesson Magnum"],
      ["Metric designation", "9.1×33 mm R"],
      ["Type", "Revolver cartridge"],
      ["Origin", "United States"],
      ["Development", "1934"],
      ["Introduction", "1935"],
      ["Developers", "Elmer Keith, Phil Sharpe, Douglas B. Wesson, Winchester"],
      ["Case type", "Rimmed, straight-walled"],
      ["Case length", "Approximately 32.6 mm"],
      ["Maximum cartridge length", "Approximately 40.4 mm"],
      ["Bullet diameter", "Approximately 9.07 mm (.357 in)"],
      ["Primer type", "Centerfire"],
      ["Typical bullet weight", "Approximately 7.1–10.2 g"],
      ["Muzzle velocity", "Approximately 350–450 m/s*"],
      ["Muzzle energy", "Approximately 600–900 J*"],
      ["Primary applications", "Revolvers, hunting, sport shooting, law enforcement, and civilian use"],
    ]}
  />

  <p>
    * Ballistic performance depends on the specific cartridge, bullet weight
    and design, and barrel length. Powerful factory loads with bullets
    weighing approximately 10.2 g can achieve velocities exceeding 400 m/s
    and energy levels of around 800–900 J. Historical development data show
    substantially higher velocities than those of standard .38 Special
    ammunition, even during the cartridge's initial testing.
  </p>

  <p>
    <strong>Important:</strong> <strong>.357 Magnum</strong> and
    <strong>.38 Special</strong> have similar bullet diameters but are
    different cartridges. A revolver designed for .357 Magnum can use
    .38 Special ammunition, whereas a firearm designed exclusively for
    .38 Special must not use .357 Magnum.
  </p>
</Section>
<Section
  id="10x22-40-sw"
  title="10×22 mm Smith & Wesson (.40 S&amp;W)"
>
  <img
    src="/images/calibers/cartridges/10x22 .40 S W.png"
    alt="10×22 mm Smith & Wesson (.40 S&W)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    An American cartridge designed as a compromise between 9×19 mm and .45 ACP, which became one of the most popular law enforcement cartridges in the United States.
  </em>
</p>
<p>
  <strong>.40 S&amp;W</strong>, also known as <strong>10×22 mm</strong>, is a rimless pistol cartridge developed by <strong>Smith &amp; Wesson</strong> and <strong>Winchester</strong> in the late 1980s. It was designed as a more compact alternative to <strong>10mm Auto</strong>, offering the ballistic performance of the reduced-power 10mm load used by the FBI while allowing the development of more compact pistols.
</p>

<p>
  Its introduction was directly related to changing requirements for service pistols in the United States following the 1986 Miami shootout. The FBI began searching for a cartridge with improved effectiveness and penetration through various barriers while remaining sufficiently controllable for service use.
</p>
<h2>Development History</h2>

<p>
  In 1986, a shootout between FBI agents and two heavily armed criminals in Miami led to an extensive analysis of the firearms and ammunition used by American law enforcement agencies. As a result, the FBI developed new ballistic testing protocols and began searching for a pistol cartridge that would provide greater effectiveness than the ammunition used at the time.
</p>

<p>
  One option under consideration was <strong>10mm Auto</strong>. However, full-power 10mm Auto ammunition produces substantial recoil and requires a relatively large pistol. During testing, the FBI determined that a reduced-power load using a bullet weighing approximately <strong>180 gr (11.7 g)</strong> could provide the required ballistic performance with significantly improved controllability.
</p>

<p>
  This led to the development of the so-called <strong>FBI load</strong> — a reduced-power 10mm Auto load that became the basis for the concept behind the future .40 S&amp;W.
</p>

<p>
  The problem was that 10mm Auto had a relatively long case and required large-frame pistols. This increased the size and weight of the firearm.
</p>

<p>
  Engineers at <strong>Smith &amp; Wesson</strong> determined that the reduced-power load did not require the full internal volume of the 10mm Auto case. The case could therefore be shortened without sacrificing the performance of the reduced-power load used by the FBI.
</p>

<p>
  Smith &amp; Wesson worked in cooperation with <strong>Winchester</strong>, resulting in the new <strong>.40 S&amp;W</strong> cartridge. It uses a bullet with the same nominal diameter as 10mm Auto, but its case is considerably shorter. This allows it to be used in pistols similar in size to those chambered for 9×19 mm.
</p>

<h2>The Introduction of .40 S&amp;W</h2>

<p>
  The new cartridge was officially introduced on <strong>January 17, 1990</strong>, alongside the <strong>Smith &amp; Wesson Model 4006</strong> pistol. Almost simultaneously, <strong>Glock</strong> introduced the <strong>Glock 22</strong> and <strong>Glock 23</strong>, designed for the new cartridge.
</p>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
    margin: "30px 0",
  }}
>
  <div style={{ width: "41%", textAlign: "center" }}>
    <h3>Smith &amp; Wesson Model 4006</h3>

    <img
      src="/images/calibers/cartridges/Smith & Wesson Model 4006.png"
      alt="Smith & Wesson Model 4006"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>

  <div style={{ width: "41%", textAlign: "center" }}>
    <h3>Glock 22</h3>

    <img
      src="/images/calibers/cartridges/Glock 22.png"
      alt="Glock 22"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  </div>
</div>
<p>
  This proved to be an extremely successful solution.
</p>

<p>
  .40 S&amp;W offers a larger bullet diameter than 9×19 mm while allowing the use of pistols with dimensions and magazine capacities similar to those of 9 mm service pistols.
</p>

<p>
  It therefore represents a compromise between <strong>9×19 mm</strong> and <strong>.45 ACP</strong> — a larger bullet than 9 mm, but in a more compact platform with greater capacity than typical single-stack .45 ACP pistols.
</p>
<h2>The Connection with 10mm Auto</h2>

<p>
  .40 S&amp;W is often described as a <strong>“shortened 10mm Auto,”</strong> which is largely accurate.
</p>

<p>
  Both cartridges use bullets of the same nominal diameter and have very similar case-head designs. The main difference is case length.
</p>

<p>
  The .40 S&amp;W case is approximately <strong>21.6 mm</strong> long, compared with approximately <strong>25.2 mm</strong> for 10mm Auto.
</p>

<p>
  However, .40 S&amp;W is not simply a shorter version of full-power 10mm Auto. It was developed around the ballistic performance of the <strong>reduced-power FBI load for 10mm Auto</strong>, which offers better controllability than full-power 10mm loads.
</p>

<p>
  This distinction is essential to understanding the cartridge's history.
</p>

<h2>Design and Features</h2>

<p>
  .40 S&amp;W is a <strong>rimless pistol cartridge with a cylindrical, slightly tapered case and centerfire ignition</strong>.
</p>

<p>
  The case is approximately <strong>21.6 mm</strong> long, while the maximum overall cartridge length is approximately <strong>28.8 mm</strong>.
</p>

<p>
  The bullet has a nominal diameter of <strong>10.16 mm (.400 inch)</strong>.
</p>

<p>
  A wide variety of bullet designs and weights have been developed for this cartridge. Common bullet weights include approximately <strong>8.7 g (135 gr), 10.7 g (165 gr), and 11.7 g (180 gr)</strong>.
</p>

<p>
  The cartridge uses a <strong>small pistol primer</strong>, unlike the original 10mm Auto, which uses a large pistol primer.
</p>

<h2>Ballistic Characteristics</h2>

<p>
  .40 S&amp;W was designed to deliver ballistic performance between that of 9×19 mm and .45 ACP, although its specific characteristics depend significantly on bullet weight and construction.
</p>

<p>
  With typical service loads using bullets weighing approximately <strong>10.7–11.7 g</strong>, muzzle velocity generally falls within the approximate range of <strong>290–350 m/s</strong>.
</p>

<p>
  Higher velocities can also be achieved with lighter bullets.
</p>

<p>
  Muzzle energy for standard factory ammunition is generally approximately <strong>450–600 J</strong>, depending on the specific load.
</p>

<p>
  This places .40 S&amp;W between standard 9×19 mm loads and full-power 10mm Auto loads.
</p>

<h2>.40 S&amp;W and 9×19 mm</h2>

<p>
  One of the main reasons for the success of .40 S&amp;W was that it could be chambered in pistols similar in size to those designed for 9×19 mm.
</p>

<p>
  In the early 1990s, this was particularly important for law enforcement. Agencies could use a larger bullet than 9 mm without switching to large pistols designed for 10mm Auto or .45 ACP.
</p>

<p>
  Pistols chambered in .40 S&amp;W generally have slightly lower magazine capacities than comparable 9×19 mm models because the larger case diameter takes up more space in the magazine. In return, they offer a larger bullet diameter and greater bullet weight.
</p>

<p>
  As a result, .40 S&amp;W became one of the main competitors to 9×19 mm among American law enforcement agencies during the 1990s.
</p>
<h2>The FBI and .40 S&amp;W</h2>

<p>
  The FBI's interest in .40 S&amp;W was one of the main reasons for its rapid adoption.
</p>

<p>
  It is important to clarify that <strong>the FBI did not adopt .40 S&amp;W immediately upon its introduction in 1990</strong>. Initially, the bureau used 10mm Auto with a reduced-power load, while the development of .40 S&amp;W proceeded alongside these developments.
</p>

<p>
  The FBI officially adopted <strong>.40 S&amp;W in 1997</strong>, using it in service pistols, including Glock models.
</p>

<p>
  Following the FBI's adoption of .40 S&amp;W, numerous other American law enforcement agencies also switched to the caliber.
</p>

<p>
  During the 1990s, .40 S&amp;W became one of the defining cartridges of American police firearms.
</p>

<h2>Adoption and Popularity</h2>

<p>
  The success of .40 S&amp;W was not limited to the FBI.
</p>

<p>
  The cartridge was quickly adopted by numerous American police and federal agencies. Manufacturers began offering nearly all major service pistol models in .40 S&amp;W.
</p>

<p>
  Well-known pistols chambered in this caliber include:
</p>

<ul
  style={{
    listStyleType: "disc",
    paddingLeft: "28px",
    marginTop: "16px",
    marginBottom: "28px",
    fontSize: "20px",
  }}
>
  <li><strong>Glock 22</strong></li>
  <li><strong>Glock 23</strong></li>
  <li><strong>Glock 27</strong></li>
  <li><strong>Smith &amp; Wesson Model 4006</strong></li>
  <li><strong>SIG Sauer P229</strong></li>
  <li><strong>Heckler &amp; Koch USP</strong></li>
  <li><strong>Beretta 96</strong></li>
  <li><strong>CZ 75</strong></li>
  <li><strong>Colt</strong></li>
  <li><strong>Smith &amp; Wesson</strong></li>
  <li>Many other designs.</li>
</ul>

<p>
  This made .40 S&amp;W one of the most widely used pistol cartridges in the United States during the 1990s and early 21st century.
</p>
<h2>Why Has .40 S&amp;W Lost Popularity?</h2>

<p>
  Despite its enormous success, .40 S&amp;W gradually began to lose ground during the 21st century.
</p>

<p>
  Advances in modern bullet design for <strong>9×19 mm</strong> significantly improved the effectiveness of 9 mm ammunition. At the same time, 9×19 mm offers milder recoil and greater magazine capacity in pistols of comparable size.
</p>

<p>
  This led a number of American law enforcement agencies to gradually return to 9×19 mm.
</p>

<p>
  The FBI, for example, switched back to <strong>9×19 mm</strong> during the 2010s after new testing demonstrated the advantages of modern 9 mm ammunition.
</p>

<p>
  Thus, the cartridge that seemed during the 1990s to be the ideal compromise between 9 mm and .45 ACP gradually gave way to modern 9×19 mm.
</p>

<h2>.40 S&amp;W and 10mm Auto</h2>

<p>
  The two cartridges are historically related, but they are not interchangeable.
</p>

<p>
  .40 S&amp;W is shorter and was designed for pistols with smaller frames. <strong>10mm Auto is longer and can use significantly more powerful loads.</strong>
</p>

<p>
  Because of their different dimensions and intended applications, a firearm designed for one cartridge must not be used with the other.
</p>

<p>
  This is a good example of cartridges that have almost the same bullet diameter but are designed for different firearm systems.
</p>

<h2>Interesting Fact</h2>

<p>
  .40 S&amp;W is one of the few modern pistol cartridges whose development was directly driven by the specific requirements of a major law enforcement organization.
</p>

<p>
  Rather than being developed simply as a new commercial caliber, it emerged as a practical solution to a specific problem: how to achieve the ballistic performance of reduced-power 10mm Auto in a more compact pistol.
</p>

<p>
  Just a few years after its introduction, the cartridge had already become a major competitor to 9×19 mm in the American law enforcement market.
</p>

<h2>The Cartridge Today</h2>

<p>
  Today, .40 S&amp;W no longer holds the dominant position it enjoyed during the 1990s and early 21st century.
</p>

<p>
  9×19 mm has gradually regained ground among American law enforcement agencies, but .40 S&amp;W continues to be manufactured and used.
</p>

<p>
  The large number of pistols produced for this cartridge ensures its continued presence in the civilian and sporting markets.
</p>

<p>
  It remains an important part of the history of modern service pistols and the development of American police ammunition.
</p>
<h2>Technical Data</h2>

<TechnicalData
  language="en"
  title="10×22 mm Smith &amp; Wesson (.40 S&amp;W)"
  data={[
    ["Designation", "10×22 mm Smith & Wesson"],
    ["American designation", ".40 S&W / .40 Smith & Wesson"],
    ["Type", "Pistol cartridge"],
    ["Origin", "United States"],
    ["Developers", "Smith & Wesson and Winchester"],
    ["Development period", "1989–1990"],
    ["Year introduced", "1990"],
    ["Case length", "Approximately 21.6 mm"],
    ["Maximum overall cartridge length", "Approximately 28.8 mm"],
    ["Bullet diameter", "Approximately 10.16 mm"],
    ["Case type", "Rimless, cylindrical/slightly tapered"],
    ["Ignition", "Centerfire"],
    ["Typical bullet weights", "8.7–11.7 g"],
    ["Muzzle velocity", "Approximately 290–350 m/s*"],
    ["Muzzle energy", "Approximately 450–600 J*"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific manufacturer, bullet weight and construction, and barrel length. .40 S&amp;W was developed around the characteristics of the reduced-power 10mm Auto load used by the FBI, but modern ammunition is available with a wide range of bullet designs and ballistic performance.
</p>
</Section>
<Section
  id="10x25-auto"
  title="10×25 mm Auto (10mm Auto)"
>
  <img
    src="/images/calibers/cartridges/10 х 25 Auto.png"
    alt="10×25 mm Auto (10mm Auto)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    The powerful American pistol cartridge developed as an alternative to .45 ACP, which became one of the most powerful widely available cartridges for semi-automatic pistols.
  </em>
</p>
<p>
  <strong>10mm Auto</strong>, also known as <strong>10×25 mm</strong>, is a rimless pistol cartridge developed in the United States in the late 1970s and early 1980s. Its creation is closely associated with American firearms expert <strong>Jeff Cooper</strong>, who sought a cartridge with greater velocity and a flatter trajectory than .45 ACP, while retaining a sufficiently large bullet and enough energy for serious service and defensive applications.
</p>

<p>
  Unlike .45 ACP, which uses a relatively heavy bullet at moderate velocity, Cooper's concept was to use a smaller-diameter bullet at a significantly higher muzzle velocity. The result was a cartridge with ballistic performance that was unusually powerful for a semi-automatic pistol of its time.
</p>

<p>
  Serial production began in <strong>1983</strong> with the <strong>Bren Ten</strong> pistol, while the ammunition was initially manufactured by the Swedish company <strong>Norma</strong>.
</p>
<h2>Development History</h2>

<p>
  The idea for 10mm Auto emerged in the United States during the 1970s. <strong>Jeff Cooper</strong> developed the concept of a cartridge with a diameter of approximately 10 mm that would combine a relatively heavy bullet with high muzzle velocity.
</p>

<p>
  Cooper believed that a service pistol should deliver substantial energy and good accuracy at longer distances, without being limited by the low velocity of traditional heavy bullets.
</p>

<p>
  The initial concept was known as <strong>.40 Super</strong> and went through various experimental forms. Several specialists contributed to its development, while the cartridge's final design took shape with the involvement of <strong>Dornaus &amp; Dixon Enterprises</strong>, the company developing the Bren Ten pistol.
</p>

<p>
  A modified <strong>.30 Remington</strong> case was used as the basis for the cartridge case. The result was a rimless, straight case approximately 25 mm long, designed for a bullet with a diameter of around 10 mm.
</p>

<p>
  During development, Cooper insisted that the new cartridge be designated <strong>10mm</strong>. The word <strong>Auto</strong> was added to emphasize its intended use in semi-automatic pistols.
</p>
<h2>The Bren Ten</h2>

<img
  src="/images/calibers/cartridges/Bren Ten.png"
  alt="Bren Ten"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto",
  }}
/>
<p>
  In 1979, <strong>Thomas Dornaus</strong> and <strong>Michael Dixon</strong> founded Dornaus &amp; Dixon with the aim of developing a new semi-automatic service pistol.
</p>

<p>
  The design of the future <strong>Bren Ten</strong> was heavily influenced by the Czech <strong>CZ 75</strong>, but it was enlarged and substantially modified to withstand the powerful new cartridge.
</p>

<p>
  Jeff Cooper served as a consultant and contributed to the concept and the requirements for the firearm.
</p>

<p>
  The Bren Ten was introduced in <strong>1983</strong>, alongside the launch of 10mm Auto. The ammunition was developed and manufactured by the Swedish company <strong>Norma Precision AB</strong>, which played an active role in finalizing the cartridge's ballistic characteristics.
</p>

<p>
  The initial concept called for very powerful loads. Testing, however, revealed that the high pressures placed considerable stress on the pistol. As a result, Norma's production ammunition featured more moderate performance.
</p>

<p>
  The Bren Ten proved expensive, and its production was plagued by problems involving quality, deliveries, and magazines. Dornaus &amp; Dixon ceased operations and went bankrupt in <strong>1986</strong>. After approximately 1,500 pistols had been produced, it appeared that 10mm Auto might remain a little-known experimental caliber.
</p>
<h2>The Colt Delta Elite Saves 10mm Auto</h2>

<p>
  The situation changed in 1987, when Colt introduced the Delta Elite, a variant of the legendary M1911 chambered for 10mm Auto.
</p>

<p>
  This was a crucial moment for the cartridge's future. Even after the demise of the Bren Ten, 10mm Auto now had another production firearm chambered for it.
</p>

<p>
  The Delta Elite demonstrated that the powerful cartridge could be used in a design based on the proven M1911, although the substantial stresses required additional attention to the firearm's construction and recoil springs.
</p>

<p>
  Other manufacturers entered the market after Colt.
</p>
<h2>10mm Auto and the FBI</h2>

<p>
  The biggest breakthrough for 10mm Auto came from the <strong>FBI</strong>.
</p>

<p>
  Following the <strong>1986 Miami shootout</strong>, in which two heavily armed criminals fought against eight FBI agents, the bureau began a thorough review of its service firearms and ammunition.
</p>

<p>
  The FBI was looking for a cartridge that would provide greater effectiveness than the .38 Special and 9mm ammunition used at the time.
</p>

<p>
  10mm Auto attracted attention because of its high velocity, energy, and ability to use relatively heavy bullets.
</p>

<p>
  In <strong>1989, the FBI adopted 10mm Auto</strong> with a reduced-power load. The so-called <strong>FBI load</strong> was considerably less powerful than full-power loads but provided the required ballistic performance with more moderate recoil. The FBI used this load in Smith &amp; Wesson pistols, while specialized units also used the <strong>Heckler &amp; Koch MP5/10</strong>.
</p>

<p>
  This marked the point at which 10mm Auto definitively moved beyond the niche category of experimental and sporting cartridges.
</p>
<h2>The Problem with Full-Power 10mm Auto</h2>

<p>
  Despite its impressive ballistic performance, 10mm Auto has one significant drawback: <strong>substantial recoil</strong>.
</p>

<p>
  Full-power loads make rapid, accurate follow-up shots difficult. In addition, the large pistol and considerable mechanical stresses are not ideal for every officer.
</p>

<p>
  This proved to be a problem for the FBI.
</p>

<p>
  Rather than using the cartridge at full power, the bureau preferred a reduced-power load that retained much of the required ballistic performance while being easier to control.
</p>

<p>
  This decision eventually led directly to the development of <strong>.40 S&amp;W</strong>.
</p>
<h2>From 10mm Auto to .40 S&amp;W</h2>

<p>
  One of the most interesting outcomes of the history of 10mm Auto was the development of <strong>.40 S&amp;W</strong>.
</p>

<p>
  After the FBI determined that the reduced-power 10mm load provided the required performance with milder recoil, it became clear that the full case length of 10mm Auto was unnecessary for achieving that ballistic performance.
</p>

<p>
  This led to the idea of shortening the case.
</p>

<p>
  <strong>.40 S&amp;W</strong> retains a bullet diameter of approximately 10 mm but uses a significantly shorter case. This makes it possible to develop more compact pistols and magazines similar in size to those designed for 9×19 mm.
</p>

<p>
  The new cartridge was introduced in <strong>1990</strong> by Smith &amp; Wesson and Winchester and quickly became one of the most popular police calibers in the United States.
</p>

<p>
  This established one of the most interesting lineages in the modern history of pistol ammunition:
</p>

<p>
  <strong>10mm Auto → .40 S&amp;W</strong>
</p>
<h2>Design and Features</h2>

<p>
  10mm Auto is a <strong>rimless cartridge with a straight case and centerfire ignition</strong>.
</p>

<p>
  According to C.I.P. specifications, the case length is <strong>25.20 mm</strong>, while the maximum overall cartridge length is <strong>32.00 mm</strong>. The nominal bullet diameter is approximately <strong>10.16 mm</strong>. C.I.P. specifies a maximum pressure of <strong>230 MPa</strong>.
</p>

<p>
  The cartridge accommodates a relatively wide range of bullet weights. Available variants use bullets weighing approximately <strong>9–15 g</strong>, with the most common service and sporting loads generally falling within the 10–12 g range.
</p>

<p>
  This versatility allows 10mm Auto to be used in pistols for self-defense and service use, as well as in sporting and hunting firearms.
</p>
<h2>Ballistic Characteristics</h2>

<p>
  10mm Auto is distinguished by its high muzzle velocity and substantial kinetic energy.
</p>

<p>
  With standard factory ammunition using bullets weighing approximately <strong>10–12 g</strong>, muzzle velocities typically fall within the approximate range of <strong>350–400 m/s</strong>, although the specific figures depend on bullet weight, powder charge, and barrel length.
</p>

<p>
  Some modern high-performance loads achieve even higher velocities.
</p>

<p>
  Muzzle energy with typical standard loads often falls within the range of <strong>600–750 J</strong>, while some specially developed high-performance loads can exceed <strong>800 J</strong>.
</p>

<p>
  Therefore, figures such as <strong>360–450 m/s and 730–1050 J</strong> should not be presented as universal characteristics of 10mm Auto. The upper end of these ranges is possible with certain modern high-performance loads, but it does not characterize the standard cartridge as a whole.
</p>
<h2>10mm Auto and .45 ACP</h2>

<p>
  The original concept behind 10mm Auto was closely tied to the goal of achieving higher velocity than .45 ACP.
</p>

<p>
  The two cartridges can use bullets of similar weight in some load configurations, but their ballistic philosophies differ.
</p>

<p>
  <strong>.45 ACP</strong> uses a larger-diameter and generally heavier bullet at a lower velocity.
</p>

<p>
  <strong>10mm Auto</strong> uses a smaller-diameter bullet but drives it at a significantly higher velocity.
</p>

<p>
  This gives 10mm Auto a flatter trajectory and higher energy with many modern loads.
</p>

<p>
  It is precisely this combination of diameter, bullet weight, and velocity that distinguishes 10mm Auto from traditional .45 ACP.
</p>
<h2>Adoption and Popularity</h2>

<p>
  Following the introduction of the Bren Ten and Colt Delta Elite, several manufacturers began offering pistols chambered in 10mm Auto.
</p>

<p>
  Some of the best-known examples include:
</p>

<ul
  style={{
    listStyleType: "disc",
    paddingLeft: "28px",
    marginTop: "16px",
    marginBottom: "28px",
    fontSize: "20px",
  }}
>
  <li><strong>Colt Delta Elite</strong></li>
  <li><strong>Glock 20</strong></li>
  <li><strong>Glock 29</strong></li>
  <li><strong>Smith &amp; Wesson Model 1006</strong></li>
  <li><strong>Smith &amp; Wesson Model 1076</strong></li>
  <li><strong>Smith &amp; Wesson Model 610</strong></li>
  <li><strong>Colt Double Eagle</strong></li>
  <li><strong>Springfield Armory Omega</strong></li>
  <li><strong>Heckler &amp; Koch MP5/10</strong></li>
</ul>

<p>
  The <strong>Glock 20</strong> proved particularly successful, combining a relatively high magazine capacity with the power of 10mm Auto. It became one of the most recognizable modern firearms chambered for this cartridge.
</p>
<h2>10mm Auto as a Hunting Cartridge</h2>

<p>
  In the United States, 10mm Auto has also found applications beyond traditional pistol use.
</p>

<p>
  When paired with a suitable firearm and ammunition, the cartridge is used for hunting certain types of game at relatively short distances.
</p>

<p>
  This is possible because of its high energy and the wide selection of available bullets.
</p>

<p>
  Unlike typical service pistol cartridges, 10mm Auto can be loaded with heavier bullets and used in pistols and revolvers intended for hunting.
</p>

<h2>10mm Auto Today</h2>

<p>
  After a period of relatively limited popularity, 10mm Auto has attracted renewed interest, particularly in the United States.
</p>

<p>
  This is due to its combination of high power, the relatively large magazine capacities of modern pistols, and the ability to use the same cartridge for self-defense, sport shooting, and certain hunting applications.
</p>

<p>
  The <strong>Glock 20</strong>, <strong>Glock 29</strong>, and other modern pistols continue to sustain interest in the cartridge, while ammunition manufacturers offer a wide range of loads.
</p>

<p>
  As a result, 10mm Auto, which appeared to have a limited future during the 1980s, continues to be manufactured more than four decades after its development.
</p>
<h2>Interesting Fact</h2>

<p>
  The history of 10mm Auto is directly connected to the development of <strong>.40 S&amp;W</strong>.
</p>

<p>
  The FBI initially adopted 10mm Auto but later determined that a reduced-power load was better suited to routine service use. This concept gave rise to the shorter .40 S&amp;W.
</p>

<p>
  Thus, one of the most powerful modern pistol cartridges became the direct “parent” of a cartridge that would become one of the most widely used police calibers in the United States during the 1990s.
</p>
<h2>Technical Data</h2>

<TechnicalData
  language="en"
  title="10 mm Auto"
  data={[
    ["Designation", "10 mm Auto"],
    ["Metric designation", "10×25 mm"],
    ["Type", "Pistol cartridge"],
    ["Origin", "United States / Sweden"],
    ["Developers", "Jeff Cooper, Dornaus & Dixon, and Norma"],
    ["Year introduced", "1983"],
    ["Case length", "25.20 mm"],
    ["Maximum overall cartridge length", "32.00 mm"],
    ["Bullet diameter", "Approximately 10.16 mm"],
    ["Case type", "Rimless, straight"],
    ["Ignition", "Centerfire"],
    ["Bullet weight", "Approximately 9–15 g"],
    ["Muzzle velocity", "Approximately 350–400 m/s*"],
    ["Muzzle energy", "Approximately 600–800 J*"],
    ["Maximum pressure according to C.I.P.", "230 MPa"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific ammunition, bullet weight and construction, and barrel length. Modern high-performance loads can exceed the typical values listed above. The dimensions and maximum pressure are based on C.I.P. specifications.
</p>
</Section>
<Section
    id="10-9x33-429-de"
    title="10.9×33 mm RB .429 DE"
  >
    <img
      src="/images/calibers/cartridges/10.9×33 mm.429 DE.png"
      alt="10.9×33 mm RB .429 DE"
      style={{
        width: "41%",
        height: "auto",
        display: "block",
        margin: "0 auto 30px auto",
      }}
    />

    <p>
      <em>
        A powerful pistol cartridge developed specifically for the Desert Eagle platform, combining a .429-inch bullet with a case derived from the design of the .50 Action Express.
      </em>
    </p>

    <p>
      <strong>.429 DE (10.9×33 mm RB)</strong> is an American pistol cartridge introduced in 2018 by <strong>Magnum Research</strong> for Desert Eagle semi-automatic pistols. It was designed to offer higher muzzle velocity and greater muzzle energy than the traditional .44 Magnum while using a bullet of approximately the same diameter.
    </p>

    <p>
      Unlike .44 Magnum, which was originally developed for revolvers, .429 DE is intended for a powerful gas-operated semi-automatic pistol. Its design allows relatively heavy bullets to be fired at high velocities, placing it among specialized, high-performance pistol cartridges.
    </p>

    <p>
      The cartridge is not simply a higher-powered version of .44 Magnum. Its foundation is <strong>.50 Action Express (.50 AE)</strong>, whose case was modified by narrowing the forward section to accommodate a bullet with a diameter of .429 inches.
    </p>

    <h2>Development History</h2>

    <p>
      The introduction of .429 DE is connected to the development of the Desert Eagle platform and the pursuit of greater ballistic performance using a bullet with a smaller diameter than that of .50 AE.
    </p>

    <p>
      In October <strong>2018</strong>, Magnum Research officially introduced the new cartridge. The manufacturer identified its primary objective as increasing muzzle velocity and muzzle energy compared with a standard .44 Magnum load using a 240-grain bullet.
    </p>

    <p>
      Development focused on the Desert Eagle pistol, already known for its ability to chamber powerful cartridges such as .50 AE and .44 Magnum. The new cartridge expanded the platform's capabilities without changing the firearm's fundamental concept.
    </p>

    <p>
      In <strong>2021</strong>, .429 DE was accepted for standardization by the American institute <strong>SAAMI</strong> (<em>Sporting Arms and Ammunition Manufacturers' Institute</em>). The organization published standardized cartridge and chamber dimensions, along with pressure specifications and test velocity data.
    </p>

    <h2>Design and Features</h2>

    <p>
      .429 DE uses a case derived from the .50 AE design, but with a narrower forward section intended for a bullet with a nominal diameter of <strong>.429 inches (approximately 10.9 mm)</strong>.
    </p>

    <p>
      The designation <strong>RB</strong> in its metric name stands for <em>rebated rim</em> — a case design in which the rim has a smaller diameter than the main body of the case. This feature is part of the design that allows the cartridge to function in the corresponding Desert Eagle system.
    </p>

    <p>The main design features include:</p>

    <ul
      style={{
        listStyleType: "disc",
        paddingLeft: "28px",
        marginTop: "16px",
        marginBottom: "28px",
        fontSize: "20px",
      }}
    >
      <li><strong>Narrowed forward case section</strong>, designed for a bullet with a diameter of .429 inches.</li>
      <li><strong>Reduced-diameter rim</strong> relative to the case body.</li>
      <li><strong>Centerfire ignition</strong> using a large pistol magnum primer.</li>
      <li><strong>Case approximately 33 mm long</strong>, derived from the .50 AE design.</li>
    </ul>

    <h2>Ballistic Characteristics</h2>

    <p>
      The main advantage of .429 DE is its ability to propel a heavy bullet at high muzzle velocity. According to Magnum Research, the cartridge reaches approximately <strong>1,600 ft/s (488 m/s)</strong> with a 240-grain bullet and around <strong>1,750 ft/s (533 m/s)</strong> with a 210-grain bullet.
    </p>

    <p>
      These figures are significantly higher than the typical velocities of many standard .44 Magnum loads, although actual results depend on the ammunition and test barrel. Barrel length must also be taken into account when comparing published figures.
    </p>

    <p>
      SAAMI specifies a maximum average pressure of <strong>46,000 psi (approximately 317 MPa)</strong> and a test velocity of 1,720 ft/s for a 240-grain bullet when using a standardized six-inch test barrel. This is a standardized test value, not a guarantee of the velocity achieved by every factory load.
    </p>

    <h2>.429 DE and .44 Magnum</h2>

    <p>
      Both cartridges use bullets with almost the same nominal diameter, but they were developed for different firearm systems and have significant design differences.
    </p>

    <p>
      <strong>.44 Magnum</strong> is a traditional revolver cartridge introduced in 1955. It is used in a wide range of revolvers, as well as in some rifles and semi-automatic pistols.
    </p>

    <p>
      <strong>.429 DE</strong> was developed specifically for the Desert Eagle platform and uses a case derived from the .50 AE design. Its primary objective is to achieve higher velocity and energy with a bullet diameter close to that of .44 Magnum.
    </p>

    <p>
      Despite the similar bullet diameters, <strong>the two cartridges are not interchangeable</strong>. Their different case dimensions and designs mean that each must be used only in a firearm specifically chambered for that cartridge.
    </p>

    <h2>.429 DE and .50 Action Express</h2>

    <p>
      The relationship between .429 DE and .50 AE is more direct than that between .429 DE and .44 Magnum. The .50 AE case serves as the structural basis for the newer cartridge.
    </p>

    <p>
      The .50 AE uses a bullet with a nominal diameter of approximately .500 inches, whereas .429 DE uses a .429-inch bullet. The narrower, lighter bullet allows a higher muzzle velocity to be achieved with a suitable load.
    </p>

    <p>
      According to Magnum Research, .429 DE offers approximately 25% higher velocity and 45% greater energy than the manufacturer's cited standard .44 Magnum load. These percentages should be understood as a specific manufacturer comparison, rather than a universal advantage over all .44 Magnum or .50 AE loads.
    </p>

    <h2>Firearms Chambered in .429 DE</h2>

    <p>
      The primary firearm for this cartridge is the <strong>Magnum Research Desert Eagle Mark XIX</strong> in the appropriate .429 DE configuration.
    </p>

    <p>
      The cartridge was developed for this platform, and its design relationship with .50 AE allows certain firearm components to be shared between the two configurations. According to published information about the system, converting from .50 AE to .429 DE may be possible by changing the barrel, provided the correct compatible components are used.
    </p>

    <p>
      This does not mean that every Desert Eagle can automatically use .429 DE without checking the specific model and configuration.
    </p>

    <h2>.429 DE Today</h2>

    <p>
      .429 DE remains a specialized cartridge closely associated with the Desert Eagle. Unlike widely available cartridges such as 9×19 mm or .44 Magnum, it does not have the same variety of firearms and applications.
    </p>

    <p>
      Its main significance lies in the development of high-performance semi-automatic pistols. It demonstrates how an existing case design can be adapted to a different bullet diameter and different ballistic objectives.
    </p>

    <p>
      The adoption of a SAAMI standard provides a common technical basis for the cartridge's dimensions and testing, but its actual use remains largely limited to firearms designed for it.
    </p>

    <h2>Interesting Fact</h2>

    <p>
      Although .429 DE and .44 Magnum use bullets with almost identical diameters, one was developed for revolvers, while the other was designed for a powerful semi-automatic pistol.
    </p>

    <p>
      This is a good example of why <strong>bullet diameter alone does not determine whether two cartridges are compatible</strong>. Case shape and dimensions, ignition method, and operating pressure are also essential factors.
    </p>

    <h2>Technical Data</h2>

    <TechnicalData
      language="en"
      title="10.9×33 mm RB .429 DE"
      data={[
        ["Designation", ".429 DE"],
        ["Metric designation", "10.9×33 mm RB"],
        ["Alternative name", ".429 Desert Eagle"],
        ["Type", "Pistol cartridge"],
        ["Origin", "United States"],
        ["Developer", "Magnum Research"],
        ["Introduced", "2018"],
        ["SAAMI standardization", "2021"],
        ["Case length", "Approximately 32.6 mm"],
        ["Maximum overall cartridge length", "39.12–40.64 mm"],
        ["Bullet diameter", "10.92 mm"],
        ["Case type", "Tapered, with a rebated rim"],
        ["Ignition", "Centerfire"],
        ["Bullet weight", "210–240 gr (approximately 13.6–15.6 g)"],
        ["Muzzle velocity", "Approximately 488–533 m/s*"],
        ["Muzzle energy", "Approximately 1,850–2,150 J*"],
        ["Maximum average pressure according to SAAMI", "46,000 psi (approximately 317 MPa)"],
        ["Primary firearm", "Magnum Research Desert Eagle Mark XIX"],
      ]}
    />

    <p>
      * Ballistic performance depends on the specific ammunition and test barrel. The values shown are approximate and based on published data from Magnum Research and SAAMI.
    </p>
  </Section>
  <Section
    id="10-97x33-44-remington-magnum"
    title="10.97×33 mm .44 Remington Magnum (.44 Magnum)"
>
  <img
    src="/images/calibers/cartridges/10.97x33.44 Magnum.png"
    alt="10.97×33 mm .44 Remington Magnum (.44 Magnum)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
  <p>
  <em>
    One of the most powerful and recognizable revolver cartridges in history, it has become a symbol of large-caliber handguns and revolvers.
  </em>
</p>
<p>
  <strong>.44 Remington Magnum</strong>, most commonly known as <strong>.44 Magnum</strong>, is a powerful American revolver cartridge developed during the first half of the 1950s. It was created as an evolution of the <strong>.44 Special</strong>, but with a much higher operating pressure and significantly greater muzzle velocity and energy.
</p>

<p>
  The cartridge was developed with the active involvement of American shooter and hunter <strong>Elmer Keith</strong>, who had spent years experimenting with powerful loads for the .44 Special. His goal was to create a revolver cartridge capable of delivering substantially greater power than the ammunition available at the time.
</p>

<p>
  In <strong>1955</strong>, development was completed, and <strong>Smith &amp; Wesson</strong> introduced the first revolver chambered for the new cartridge — the <strong>Smith &amp; Wesson Model 29</strong>. The cartridge itself was developed in cooperation with <strong>Remington</strong>, which took responsibility for its production.
</p>
<h3>Smith &amp; Wesson Model 29</h3>

<img
  src="/images/calibers/cartridges/Smith & Wesson Model 29.png"
  alt="Smith & Wesson Model 29"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto",
  }}
/>
<h2>Development History</h2>

<p>
  The history of the .44 Magnum began long before its introduction in 1955.
</p>

<p>
  As early as the 1870s, the <strong>.44 Smith &amp; Wesson Russian</strong> demonstrated the potential of heavy bullets with a large diameter. Later, the <strong>.44 Special</strong>, introduced in the early 20th century, became the basis for numerous experiments with more powerful loads.
</p>

<p>
  Among the most enthusiastic advocates of powerful .44-caliber revolvers was <strong>Elmer Keith</strong>. He experimented with increased powder charges and heavy bullets in the .44 Special, gradually achieving performance levels that significantly exceeded the cartridge's standard capabilities.
</p>

<p>
  These experiments demonstrated that a new, more powerful cartridge could be developed. However, this also required a firearm capable of safely withstanding the higher pressure.
</p>

<p>
  This led to cooperation between Keith, <strong>Smith &amp; Wesson</strong>, and <strong>Remington</strong>.
</p>

<p>
  The new cartridge was designated <strong>.44 Remington Magnum</strong>.
</p>
<h2>Why the .44 Magnum Is Not Simply a More Powerful .44 Special</h2>

<p>
  At first glance, the two cartridges look almost identical. Their main external difference is the case length.
</p>

<p>
  The .44 Magnum case is approximately 3.2 mm longer than the .44 Special case.
</p>

<p>
  This difference, however, is significant. The longer case allows for a larger powder charge, and the new cartridge was designed to operate at substantially higher pressure.
</p>

<p>
  For this reason, the .44 Magnum should not be regarded simply as a "long .44 Special." It is a new, more powerful cartridge designed for firearms specifically engineered to handle it.
</p>

<h2>Smith &amp; Wesson Model 29</h2>

<p>
  In 1955, Smith &amp; Wesson introduced the Model 29 — the revolver that would become inseparably associated with the history of the .44 Magnum.
</p>

<p>
  Initially, the Model 29 was offered with different barrel lengths, and additional variants appeared later. The firearm is large and heavy because it must withstand the high stresses generated by the .44 Magnum cartridge.
</p>

<p>
  Initially, the cartridge remained relatively niche. Its power was impressive, but the strong recoil and the large size of the revolvers limited its practical use.
</p>

<p>
  The situation changed during the 1970s.
</p>

<h2>.44 Magnum and "Dirty Harry"</h2>

<p>
  In 1971, the film "Dirty Harry" turned the Smith &amp; Wesson Model 29 and the .44 Magnum into worldwide icons.
</p>

<p>
  Clint Eastwood's character, Inspector Harry Callahan, uses the Model 29, and the film portrays it as an exceptionally powerful revolver.
</p>

<p>
  The film's popularity generated enormous interest in the Model 29 and the .44 Magnum. Smith &amp; Wesson itself has noted that demand for the revolver rose sharply during the 1970s following the film's success.
</p>

<p>
  As a result, the .44 Magnum gradually became more than just an ammunition cartridge; it also became a symbol of American gun culture.
</p>
<h2>Hunting Applications</h2>

<p>
  Unlike many other powerful handgun cartridges, the .44 Magnum has also found significant use as a <strong>hunting cartridge</strong>.
</p>

<p>
  It is used in large revolvers and in some carbines chambered for this cartridge. Depending on the specific ammunition and firearm, the .44 Magnum can be used to hunt various types of game at relatively short to medium distances.
</p>

<p>
  Its heavy bullet and high energy are among the main reasons the cartridge remains popular with hunters who prefer handguns.
</p>

<h2>.44 Magnum and the Desert Eagle</h2>

<p>
  Although the .44 Magnum is historically associated primarily with <strong>revolvers</strong>, its use is not limited to them.
</p>

<p>
  One of the best-known semiautomatic pistols chambered for the .44 Magnum is the <strong>Desert Eagle</strong>.
</p>

<p>
  This is particularly interesting because the Desert Eagle is one of the first widely known self-loading pistols designed to use Magnum revolver cartridges. Magnum Research lists the .44 Magnum among the Desert Eagle's principal chamberings, alongside the .357 Magnum, .50 AE, and .429 DE.
</p>

<p>
  The use of the .44 Magnum in the Desert Eagle illustrates just how substantial the stresses are that this pistol's design is engineered to withstand.
</p>

<p>
  There is, however, an important difference compared with revolvers: the Desert Eagle uses <strong>gas-operated action</strong>, allowing the firearm to use energy from the fired cartridge to cycle and reload.
</p>
<h2>.44 Magnum and .357 Magnum</h2>

<p>
  The .44 Magnum appeared two decades after the <strong>.357 Magnum</strong>, but the two cartridges share a similar historical role — both were developed as high-performance revolver cartridges.
</p>

<p>
  The .357 Magnum uses a smaller bullet at a higher velocity, whereas the .44 Magnum relies on a significantly heavier bullet with a larger diameter.
</p>

<p>
  Depending on the specific load, the .44 Magnum generally delivers higher muzzle energy, but this also comes with greater recoil.
</p>

<p>
  The two cartridges therefore represent different approaches to the concept of a powerful revolver cartridge:
</p>

<p>
  <strong>.357 Magnum → smaller bullet, high velocity</strong>
</p>

<p>
  <strong>.44 Magnum → larger, heavier bullet, high energy</strong>
</p>

<h2>.44 Magnum and .44 Special</h2>

<p>
  The historical connection between the two cartridges is direct.
</p>

<p>
  <strong>The .44 Magnum was developed from the .44 Special</strong>, but features a longer case and a substantially higher maximum pressure.
</p>

<p>
  For this reason, revolvers chambered for the .44 Magnum can generally also use .44 Special ammunition. The reverse is not true — .44 Magnum ammunition must not be used in firearms designed exclusively for the .44 Special.
</p>

<p>
  This relationship is similar to the development of other "Magnum" cartridges, in which the longer case serves not only to increase capacity but also to clearly distinguish the cartridge from its less powerful predecessor.
</p>

<h2>Adoption and Availability</h2>

<p>
  Following the introduction of the Model 29, the .44 Magnum gradually spread among revolver manufacturers.
</p>

<p>
  The cartridge became available in various models from <strong>Smith &amp; Wesson, Ruger, Colt</strong>, and other manufacturers.
</p>

<p>
  Different bullet designs also emerged, ranging from standard jacketed bullets to specialized hunting projectiles.
</p>

<p>
  The .44 Magnum became one of the most recognizable American revolver cartridges and has remained popular for decades after its introduction.
</p>

<h2>The Cartridge Today</h2>

<p>
  Today, the .44 Magnum continues to be widely manufactured and used.
</p>

<p>
  Its main applications include:
</p>

<ul
  style={{
    listStyleType: "disc",
    paddingLeft: "28px",
    marginTop: "16px",
    marginBottom: "28px",
    fontSize: "20px",
  }}
>
  <li>hunting revolvers;</li>
  <li>sport shooting;</li>
  <li>large self-defense revolvers;</li>
  <li>some carbines;</li>
  <li>powerful semiautomatic pistols such as the Desert Eagle.</li>
</ul>

<p>
  SAAMI maintains standardized dimensions and specifications for the <strong>.44 Remington Magnum</strong>, demonstrating that the cartridge remains part of the modern system of standardized American ammunition.
</p>

<h2>Interesting Fact</h2>

<p>
  Before the introduction of the .44 Magnum, <strong>Elmer Keith</strong> was already experimenting with powerful loads for the .44 Special.
</p>

<p>
  These experiments demonstrated that a heavy .44-caliber bullet could be driven at velocities far higher than those standard for the .44 Special.
</p>

<p>
  The .44 Magnum therefore did not emerge suddenly as an entirely new idea. It was the result of years of experimentation that ultimately led to the creation of a new cartridge and revolvers specifically designed for it.
</p>
<h2>Technical Specifications</h2>

<TechnicalData
  language="en"
  title=".44 Remington Magnum"
  data={[
    ["Other designation", ".44 Magnum"],
    ["Metric designation", "approximately 10.97×33 mm"],
    ["Type", "Revolver cartridge"],
    ["Origin", "United States"],
    ["Developed", "1950–1955"],
    ["Introduced", "1955"],
    ["Main developers", "Smith & Wesson, Remington, with significant contributions from Elmer Keith"],
    ["Case length", "32.6 mm"],
    ["Maximum cartridge length", "approximately 41.0 mm"],
    ["Bullet diameter", "approximately 10.9–11.0 mm"],
    ["Case type", "Rimmed, cylindrical"],
    ["Primer type", "Centerfire"],
    ["Bullet weight", "approximately 15–19 g"],
    ["Muzzle velocity", "approximately 350–450 m/s*"],
    ["Muzzle energy", "approximately 1,000–1,500 J*"],
    ["Main firearms", "Smith & Wesson Model 29, Ruger Super Blackhawk, Desert Eagle, and others"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific cartridge, bullet weight and design, and barrel length. With a bullet weighing approximately <strong>15.6 g</strong> and a velocity of around <strong>420 m/s</strong>, the kinetic energy is approximately <strong>1,375 J</strong>. The original figure of 1,318 J is therefore entirely plausible for a specific load, but it should not be presented as a universal characteristic of the .44 Magnum.
</p>
</Section>
<Section
  id="11-43x19-45-gap"
  title="11.43×19 mm .45 GAP (.45 Glock Automatic Pistol)"
>
  <img
    src="/images/calibers/cartridges/45 GAP.png"
    alt="11.43×19 mm .45 GAP (.45 Glock Automatic Pistol)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
<p>
  <em>
    The cartridge developed by Glock as a more compact alternative to the .45 ACP.
  </em>
</p>
<p>
  <strong>.45 GAP (Glock Automatic Pistol)</strong> is an American pistol cartridge developed in the early 21st century at the initiative of <strong>Glock</strong>. The goal was to create ammunition using a bullet of the same caliber as the <strong>.45 ACP</strong>, but with a shorter case that would allow the development of more compact pistols with smaller grips.
</p>

<p>
  The cartridge was developed by engineer <strong>Ernest Durham</strong> of <strong>CCI/Speer</strong> and introduced in <strong>2003</strong>. The first pistol designed for it was the <strong>Glock 37</strong>.
</p>

<p>
  The name <strong>GAP</strong> stands for <strong>Glock Automatic Pistol</strong>.
</p>
<h3>Glock 37</h3>

<img
  src="/images/calibers/cartridges/Glock 37.png"
  alt="Glock 37"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto",
  }}
/>
<h2>Development History</h2>

<p>
  By the late 20th century, Glock had already achieved enormous success with its <strong>9×19 mm</strong> pistols, but the company was looking for a way to offer a firearm with a larger bullet without significantly increasing the dimensions of the frame.
</p>

<p>
  The central idea was to develop a cartridge using a <strong>.45-caliber bullet</strong> but with a shorter case than the <strong>.45 ACP</strong>.
</p>

<p>
  The work was assigned to <strong>Ernest Durham</strong> of <strong>Speer</strong>, and modern case-design and propellant-development technologies were used during the process.
</p>

<p>
  The result was the <strong>.45 GAP</strong>, which retains the nominal bullet diameter of the .45 ACP but has a significantly shorter case.
</p>

<p>
  The cartridge was introduced in <strong>2003</strong>, and Glock developed a new series of pistols for it.
</p>

<h2>.45 GAP and .45 ACP</h2>

<p>
  The names of the two cartridges can easily create the impression that the .45 GAP is simply a shortened .45 ACP. However, this is not entirely accurate.
</p>

<p>
  The <strong>.45 ACP</strong> has a case length of approximately <strong>23 mm</strong>, whereas the <strong>.45 GAP</strong> case is approximately <strong>19.15 mm</strong> long.
</p>

<p>
  Both cartridges use bullets with a nominal diameter of <strong>11.43 mm</strong>, but they are different types of ammunition designed for different chambers.
</p>

<p>
  The shorter case allows Glock to produce pistols with more compact grips while retaining the large bullet diameter.
</p>

<p>
  However, the .45 GAP is not simply a weaker .45 ACP. Its operating pressure is higher than that of standard .45 ACP ammunition, allowing the shorter cartridge to achieve ballistic performance close to that of the .45 ACP.
</p>
<h2>Glock 37</h2>

<p>
  The first pistol specifically designed for the .45 GAP was the <strong>Glock 37</strong>.
</p>

<p>
  It was introduced alongside the new cartridge in 2003 and uses Glock's standard design, with the barrel locking through the interaction between the barrel and the slide.
</p>

<p>
  Following the Glock 37, the company developed more compact models:
</p>

<ul
  style={{
    listStyleType: "disc",
    paddingLeft: "28px",
    marginTop: "16px",
    marginBottom: "28px",
    fontSize: "20px",
  }}
>
  <li><strong>Glock 38</strong></li>
  <li><strong>Glock 39</strong></li>
</ul>

<p>
  This allowed the .45 GAP to be offered in pistols of different sizes, much like Glock's other chamberings.
</p>

<h2>Why Was the .45 GAP Developed?</h2>

<p>
  The main reason was <strong>grip size</strong>.
</p>

<p>
  The .45 ACP is a relatively large cartridge, and pistols designed for it generally require a larger frame and grip. This can be uncomfortable for shooters with smaller hands.
</p>

<p>
  With the .45 GAP, the shorter case allows the use of a more compact frame.
</p>

<p>
  Glock could therefore offer a pistol with a large <strong>.45-caliber bullet</strong> while keeping the frame dimensions closer to those of more compact models.
</p>

<h2>Law Enforcement Applications</h2>

<p>
  The .45 GAP gained its greatest recognition among certain American law enforcement agencies.
</p>

<p>
  The cartridge was adopted or used by various law enforcement organizations, including the <strong>Georgia State Patrol</strong>, the <strong>Georgia Bureau of Investigation</strong>, and the <strong>South Carolina Highway Patrol</strong>.
</p>

<p>
  The adoption of the .45 GAP in Georgia is particularly well known, as several law enforcement agencies in the state used the Glock 37.
</p>

<p>
  However, this did not lead to widespread adoption of the .45 GAP by American police forces.
</p>

<p>
  Ultimately, <strong>9×19 mm</strong> retained its dominant position, while the .45 GAP remained a relatively niche cartridge.
</p>

<h2>Design and Characteristics</h2>

<p>
  The .45 GAP is a <strong>rimless cartridge with a cylindrical case and centerfire ignition</strong>.
</p>

<p>
  Its case is significantly shorter than that of the .45 ACP, while its diameter is larger than that of many other modern pistol cartridges.
</p>

<p>
  According to the <strong>SAAMI</strong> standard, the nominal bullet diameter is <strong>11.43 mm</strong>. SAAMI maintains a separate standard for the .45 GAP, including cartridge dimensions and test-barrel specifications.
</p>

<p>
  The cartridge is available with various bullet designs and weights, including standard full metal jacket bullets and expanding bullets.
</p>

<h2>Ballistic Characteristics</h2>

<p>
  The .45 GAP was designed to deliver ballistic performance close to that of standard .45 ACP loads.
</p>

<p>
  Depending on the specific ammunition, bullet weights of approximately <strong>10–15 g</strong> are used.
</p>

<p>
  With lighter bullets, velocities of around <strong>330–350 m/s</strong> can be achieved, while heavier bullets generally travel at lower velocities.
</p>

<p>
  Muzzle energy for factory ammunition typically falls within a range of approximately <strong>400–600 J</strong>, depending on bullet weight and design.
</p>

<p>
  For this reason, the original specification of "250–360 m/s and 300–624 J" is too broad to be presented as typical of all .45 GAP ammunition.
</p>
<h2>Advantages and Disadvantages</h2>

<p>
  The main advantage of the .45 GAP is its ability to combine:
</p>

<ul
  style={{
    listStyleType: "disc",
    paddingLeft: "28px",
    marginTop: "16px",
    marginBottom: "28px",
    fontSize: "20px",
  }}
>
  <li>a large bullet diameter;</li>
  <li>a relatively compact frame;</li>
  <li>a shorter case;</li>
  <li>ballistic performance close to that of the .45 ACP.</li>
</ul>

<p>
  Its main disadvantage is that it has not managed to establish a sufficiently large practical niche.
</p>

<p>
  On one side is <strong>9×19 mm</strong>, which offers high magazine capacity and enormous international adoption.
</p>

<p>
  On the other side is the <strong>.45 ACP</strong>, which has more than a century of history and an enormous number of existing firearms.
</p>

<p>
  The .45 GAP falls between the two — technically interesting, but without a sufficiently significant advantage to displace either established cartridge.
</p>

<h2>.45 GAP and Glock</h2>

<p>
  The .45 GAP is one of the few modern pistol cartridges developed largely as part of a specific firearms manufacturer's strategy.
</p>

<p>
  The connection between the cartridge and Glock is so close that the designation <strong>GAP</strong> itself stands for <strong>Glock Automatic Pistol</strong>.
</p>

<p>
  This places it in an interesting group alongside cartridges such as the <strong>.357 SIG</strong>, which is also closely associated with a particular manufacturer and a specific approach to pistol ammunition development.
</p>

<h2>The Cartridge Today</h2>

<p>
  The .45 GAP never achieved the widespread adoption of the .45 ACP or 9×19 mm.
</p>

<p>
  Production of Glock pistols chambered for this cartridge is limited, and it remains primarily associated with the American market and existing Glock 37, 38, and 39 pistols.
</p>

<p>
  Despite its limited adoption, the .45 GAP holds an important place in the history of modern pistol cartridges.
</p>

<p>
  It illustrates manufacturers' attempts to retain the characteristics of a large-caliber cartridge while reducing the overall dimensions of the firearm.
</p>
<h2>Interesting Fact</h2>

<p>
  <strong>The .45 GAP is shorter than the .45 ACP, but it is not a weaker version of it.</strong>
</p>

<p>
  The developers' goal was precisely the opposite — to use a modern case design, propellant, and firearm to achieve performance close to that of the .45 ACP in a more compact system.
</p>

<p>
  The .45 GAP is therefore an interesting example of how <strong>cartridge dimensions and firearm dimensions can be optimized independently of bullet diameter</strong>.
</p>

<h2>Technical Specifications</h2>

<TechnicalData
  language="en"
  title=".45 GAP"
  data={[
    ["Full designation", ".45 Glock Automatic Pistol"],
    ["Metric designation", "11.43×19 mm"],
    ["Type", "Pistol cartridge"],
    ["Origin", "United States"],
    ["Developer", "Ernest Durham / CCI-Speer"],
    ["Associated manufacturer", "Glock"],
    ["Year introduced", "2003"],
    ["Case length", "approximately 19.15 mm"],
    ["Overall cartridge length", "approximately 27.2 mm"],
    ["Bullet diameter", "11.43 mm"],
    ["Case type", "Rimless, cylindrical"],
    ["Primer type", "Centerfire"],
    ["Bullet weight", "approximately 10–15 g"],
    ["Muzzle velocity", "approximately 300–350 m/s*"],
    ["Muzzle energy", "approximately 400–600 J*"],
    ["Main firearms", "Glock 37, Glock 38, Glock 39"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific ammunition, bullet weight and design, and barrel length. Cartridge dimensions and test specifications are standardized by <strong>SAAMI</strong>.
</p>
</Section>
<Section
  id="11-43x23-45-acp"
  title="11.43×23 mm .45 ACP (Automatic Colt Pistol)"
>
  <img
    src="/images/calibers/cartridges/45 ACP_fin.png"
    alt="11.43×23 mm .45 ACP (Automatic Colt Pistol)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />

<p>
  <em>
    One of the most famous pistol cartridges in history, it became a symbol of American firearms and is inseparably associated with the Colt M1911.
  </em>
</p>
<p>
  <strong>.45 ACP (Automatic Colt Pistol)</strong> is an American pistol cartridge developed by <strong>John Moses Browning</strong> in the early 20th century for a new generation of Colt self-loading pistols. Introduced in <strong>1904</strong>, it was created in response to the U.S. Army's requirement for a pistol cartridge with a larger caliber and greater effectiveness than the .38 Long Colt then in use.
</p>

<p>
  The cartridge gained enormous historical significance following the adoption of the <strong>Colt M1911</strong> by the U.S. Army on <strong>March 29, 1911</strong>. The .45 ACP remained the standard American military pistol cartridge for decades and was used in a vast number of pistols and submachine guns.
</p>
<h2>Development History</h2>

<p>
  The history of the .45 ACP is closely connected to the U.S. Army's search for a more effective pistol cartridge.
</p>

<p>
  In the late 19th century, American servicemen used revolvers chambered in <strong>.38 Long Colt</strong>. However, combat operations in the Philippines led to reports that this cartridge did not provide sufficiently effective results in some close-range encounters. Fighting against the Moro people on the island of Mindanao became particularly well known.
</p>

<p>
  As a result, the U.S. Army began looking for a more powerful pistol cartridge and a new self-loading firearm to use it.
</p>

<p>
  In <strong>1904</strong>, the well-known <strong>Thompson–LaGarde trials</strong> were conducted. These tests were intended to determine a suitable caliber for the future service pistol. Various designs and calibers were evaluated, and the results led to the conclusion that the future pistol should use a bullet with a diameter of at least <strong>.45 inch (11.43 mm)</strong>.
</p>

<p>
  The .45-caliber cartridge thus became the foundation of the new American military handgun.
</p>
<h2>John Browning and Colt</h2>

<p>
  By this time, <strong>John Moses Browning</strong> was already working with Colt on self-loading pistols.
</p>

<p>
  After .45 caliber was identified as the required size, Browning developed a new pistol and its corresponding ammunition. In <strong>1905</strong>, the <strong>Colt Model 1905</strong> appeared, becoming the first Colt self-loading pistol produced in series for a .45-caliber cartridge.
</p>
<h3>Colt Model 1905</h3>
<img
  src="/images/calibers/cartridges/Colt M1905.png"
  alt="Colt Model 1905"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto",
  }}
/>
<p>
  Further testing and design improvements followed.
</p>

<p>
  Browning and Colt gradually developed the system that would become known as the <strong>Colt M1911</strong>.
</p>

<p>
  On <strong>March 29, 1911</strong>, the U.S. Army officially adopted the <strong>Automatic Pistol, Caliber .45, M1911</strong>, along with its corresponding ammunition, the <strong>Caliber .45 Automatic Pistol Ball Cartridge, Model of 1911</strong>, known today as the <strong>.45 ACP</strong>.
</p>
<h3>Colt M1911 — The Pistol of the .45 ACP</h3>
<img
  src="/images/calibers/cartridges/Colt M1911.png"
  alt="Colt M1911 — The Pistol of the .45 ACP"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto",
  }}
/>
<p>
  The M1911 became one of the most significant self-loading firearms of the 20th century.
</p>

<p>
  The pistol uses the principle of <strong>short-recoil operation with a locked barrel and slide</strong> — a design developed by Browning that had an enormous influence on the evolution of self-loading pistols.
</p>

<p>
  The standard M1911 uses a single-stack magazine holding <strong>seven cartridges</strong>.
</p>

<p>
  The U.S. Army and the other branches of the U.S. armed forces used the M1911 and its modernized version, the <strong>M1911A1</strong>, for decades.
</p>

<p>
  The U.S. Army lists the M1911 as its standard service handgun from <strong>1911 to 1985</strong>, when its replacement with 9 mm pistols began.
</p>
<h2>.45 ACP in Wartime</h2>

<p>
  The .45 ACP saw extensive military use during both World Wars, the Korean War, and the Vietnam War.
</p>

<p>
  In addition to the M1911, the cartridge was used in a number of other firearms.
</p>

<p>Among the best-known examples are:</p>

<ul
  style={{
    listStyleType: "disc",
    paddingLeft: "28px",
    marginTop: "16px",
    marginBottom: "28px",
    fontSize: "20px",
  }}
>
  <li><strong>Colt M1911</strong></li>
  <li><strong>Colt M1911A1</strong></li>
  <li><strong>Thompson M1921/M1928</strong></li>
  <li><strong>Thompson M1/M1A1</strong></li>
  <li><strong>M3 "Grease Gun"</strong></li>
  <li><strong>M1928A1</strong></li>
</ul>

<p>
  The .45 ACP thus became not only a military pistol cartridge but also one of the most recognizable cartridges used in submachine guns.
</p>

<p>
  The U.S. military, for example, used the Thompson and M3 in .45 ACP, and military museum collections document the use of 30-round magazines with these firearms.
</p>

<h2>Design and Characteristics</h2>

<p>
  The .45 ACP is a <strong>rimless cartridge with a cylindrical, slightly tapered case and centerfire ignition</strong>.
</p>

<p>
  Unlike some older cartridges, in which the rim is used to position the cartridge in the chamber, the .45 ACP uses the <strong>case mouth</strong> to establish the correct headspacing.
</p>

<p>
  The nominal bullet diameter is <strong>11.43 mm (.45 inch)</strong>.
</p>

<p>
  The standard Ball bullet used by the U.S. military weighs approximately <strong>15 g (230 grains)</strong>. However, a vast number of other factory loads with different bullet weights and designs are available.
</p>

<p>
  SAAMI maintains standardized dimensions and specifications for the .45 ACP.
</p>
<h2>Ballistic Characteristics</h2>

<p>
  The .45 ACP was not designed as a high-velocity cartridge.
</p>

<p>
  Its core concept is the use of a <strong>heavy bullet at a moderate muzzle velocity</strong>.
</p>

<p>
  The typical military bullet, weighing approximately <strong>15 g</strong>, achieves a muzzle velocity of around <strong>250–260 m/s</strong>, depending on the specific ammunition and test barrel.
</p>

<p>
  With a 15 g bullet traveling at 255 m/s, the kinetic energy is approximately <strong>488 J</strong>.
</p>

<p>
  Modern factory ammunition is available with a wide range of bullet designs and ballistic characteristics. Bullet weights of approximately <strong>11–15 g</strong> are common, while velocity and energy depend on the specific load.
</p>

<p>
  For this reason, the .45 ACP should not be described using a single velocity or energy figure.
</p>

<h2>.45 ACP and Stopping Power</h2>

<p>
  The historical reputation of the .45 ACP is closely associated with its large bullet diameter and relatively high bullet weight.
</p>

<p>
  The U.S. Army selected the .45-caliber firearm following accumulated combat experience and testing, during which the larger caliber was considered more suitable for a military service pistol.
</p>

<p>
  This gradually established the .45 ACP's reputation as a powerful pistol cartridge.
</p>

<p>
  However, historical assessments of "stopping power" should be distinguished from modern ballistic research. The effects of a bullet impact depend on multiple factors, including bullet design, the location of the impact, and the specific circumstances.
</p>

<h2>Adoption and Popularity</h2>

<p>
  After World War II, the .45 ACP was already widely used beyond the U.S. armed forces.
</p>

<p>
  The cartridge became one of the most popular calibers for civilian, law enforcement, sporting, and collectible firearms.
</p>

<p>
  Numerous designs from different manufacturers appeared.
</p>

<p>The best-known manufacturers include:</p>

<ul
  style={{
    listStyleType: "disc",
    paddingLeft: "28px",
    marginTop: "16px",
    marginBottom: "28px",
    fontSize: "20px",
  }}
>
  <li><strong>Colt</strong></li>
  <li><strong>Smith &amp; Wesson</strong></li>
  <li><strong>Springfield Armory</strong></li>
  <li><strong>Ruger</strong></li>
  <li><strong>Para Ordnance</strong></li>
  <li><strong>STI</strong></li>
  <li><strong>Glock</strong></li>
  <li><strong>Heckler &amp; Koch</strong></li>
  <li><strong>SIG Sauer</strong></li>
</ul>

<p>
  The variety of M1911-derived pistols is particularly extensive.
</p>
<h2>.45 ACP vs. 9×19 mm</h2>

<p>
  During the second half of the 20th century, the .45 ACP gradually began to lose its role as the primary American military pistol cartridge.
</p>

<p>
  The main reasons were related to the ammunition's size and weight, the lower capacity of its magazines, and the drive for standardization within NATO.
</p>

<p>
  During the 1980s, the United States transitioned to <strong>9×19 mm</strong>.
</p>

<p>
  In the competition for a new service pistol, the <strong>Beretta 92</strong> was selected as the basis for the future M9. The U.S. Army identified NATO compatibility and the higher capacity of the 9 mm pistol as important characteristics.
</p>

<p>
  The official replacement of the M1911A1 with the 9 mm Beretta began in 1985, and the M9 officially entered U.S. Army service in 1990.
</p>

<p>
  This did not, however, mean the end of the .45 ACP.
</p>

<p>
  On the contrary, the cartridge remains extremely popular among civilian shooters, law enforcement agencies, specialized military units, and pistol manufacturers.
</p>
<h2>Colt M1911 and TT-30/TT-33 — The American Predecessor and the Soviet Interpretation</h2>

<p>
  The TT-30 and TT-33 are often called the "Russian Colt" because of their similarities to the American Colt M1911. This description has some basis, but it does not fully explain the history of the Soviet pistol.
</p>

<p>
  Developed by Soviet designer <strong>Fedor Tokarev</strong>, the TT incorporates principles from the designs of <strong>John Moses Browning</strong>, including the short-recoil system with a locked barrel and slide.
</p>

<p>
  In the Colt M1911, the barrel tilts through the use of a movable link, whereas in the TT-33 the locking lugs were redesigned to simplify manufacturing. The TT-30 and TT-33 also differ from each other in several design details.
</p>

<p>
  Tokarev retained the basic operating principle but modified the mechanisms and overall design to meet Soviet requirements. The TT thus became a distinct model rather than simply a copy of the M1911.
</p>

<p>
  The two pistols were designed for different cartridges: the American pistol uses <strong>.45 ACP</strong>, while the Soviet pistol uses <strong>7.62×25 mm Tokarev</strong>.
</p>

<p>
  Their similarities provide a telling example of the influence of Browning's design concepts on the development of self-loading pistols during the 20th century.
</p>
<h2>The .45 ACP Today</h2>

<p>
  Today, the .45 ACP remains one of the most recognizable pistol cartridges in the world.
</p>

<p>
  It is manufactured by numerous companies and is available with a wide variety of bullets, ranging from classic <strong>Full Metal Jacket (FMJ)</strong> designs to various modern bullet constructions.
</p>

<p>
  The cartridge remains particularly popular in the United States, where the history of the M1911 and American military firearms has created a strong tradition surrounding the .45 ACP.
</p>

<p>
  Although 9×19 mm is more widespread as a modern military and law enforcement cartridge, the .45 ACP remains one of the most important pistol calibers in history.
</p>

<h2>Interesting Fact</h2>

<p>
  <strong>The .45 ACP is one of the few pistol cartridges to have remained relevant for more than a century after its introduction.</strong>
</p>

<p>
  The cartridge was officially adopted in <strong>1911</strong>, was used in the M1911 during both World Wars and subsequent American conflicts, and continues to be manufactured and used in a vast number of civilian and service pistols today.
</p>

<p>
  Its history is inseparably linked to <strong>John Browning, the Colt M1911, and American firearms of the 20th century</strong>.
</p>
<h2>Technical Specifications</h2>

<TechnicalData
  language="en"
  title=".45 ACP"
  data={[
    ["Parameter", "Value"],
    ["Designation", ".45 ACP"],
    ["Full designation", ".45 Automatic Colt Pistol"],
    ["Metric designation", "11.43×23 mm"],
    ["Other designations", ".45 Auto, .45 Automatic"],
    ["Type", "Pistol cartridge"],
    ["Origin", "United States"],
    ["Developer", "John Moses Browning / Colt"],
    ["Year adopted", "1911"],
    ["Case length", "approximately 22.8 mm"],
    ["Overall cartridge length", "approximately 32.4 mm"],
    ["Bullet diameter", "11.43 mm"],
    ["Case type", "Rimless, cylindrical, slightly tapered"],
    ["Primer type", "Centerfire"],
    ["Bullet weight", "approximately 11–15 g*"],
    ["Muzzle velocity", "approximately 250–370 m/s*"],
    ["Muzzle energy", "approximately 450–700 J*"],
    ["Main historical firearms", "Colt M1911, M1911A1, Thompson, M3"],
    ["Modern firearms", "Numerous models from Colt, Glock, SIG Sauer, Heckler & Koch, Smith & Wesson, Springfield, and others"],
  ]}
/>

<p>
  * Ballistic performance depends on the specific ammunition, bullet weight and design, and barrel length. The stated range covers different factory loads and does not represent the performance of a single specific standard cartridge. The dimensions and technical specifications of the .45 ACP are standardized by SAAMI.
</p>
</Section>
<Section
  id="12-7x33-50-action-express"
  title="12.7×33 mm .50 Action Express (.50 AE)"
>
  <img
    src="/images/calibers/cartridges/12.7×33 _ .50 AE.png"
    alt="12.7×33 mm .50 Action Express (.50 AE)"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
<p>
  <em>
    One of the most powerful commercially produced handgun cartridges in the world and the ammunition that turned the Desert Eagle into a symbol of immense firepower.
  </em>
</p>
<p>
  <strong>.50 Action Express (.50 AE)</strong> is an American handgun cartridge developed in <strong>1988 by Evan Whildin</strong> of <strong>Action Arms</strong>. It was designed for use in powerful semiautomatic pistols and is now most closely associated with the <strong>Desert Eagle</strong>.
</p>

<p>
  The cartridge uses a bullet with a nominal diameter of <strong>.50 inch (12.7 mm)</strong> and is among the most powerful mass-produced cartridges designed for semiautomatic pistols. Depending on the specific load, its muzzle energy can exceed <strong>1,500 J</strong>, with some loads reaching approximately 2,000 J.
</p>
<h2>Development History</h2>

<p>
  During the 1980s, interest grew in developing extremely powerful semiautomatic pistols capable of using ammunition that had previously been associated primarily with revolvers.
</p>

<p>
  One of the best-known firearms of this type is the <strong>Desert Eagle</strong>, a design developed by Magnum Research and initially manufactured in Israel by <strong>Israel Military Industries (IMI)</strong>.
</p>

<p>
  In <strong>1988, Evan Whildin</strong> developed the new .50 Action Express. The main objective was to create an extremely powerful handgun cartridge with a .50-caliber bullet while ensuring that its design was compatible with the existing Desert Eagle platform.
</p>

<p>
  This brings us to one of the most interesting features of the .50 AE.
</p>
<h2>The Desert Eagle</h2>

<img
  src="/images/calibers/cartridges/Desert eagle.png"
  alt="Desert Eagle"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto",
  }}
/>
<h2>The Connection with .44 Magnum</h2>

<p>
  When developing the .50 AE, Whildin took into account the dimensions of the <strong>.44 Remington Magnum</strong>, which was already used in the Desert Eagle.
</p>

<p>
  The .50 AE features a <strong>rebated rim—a case head with a smaller diameter than the main body of the case</strong>. Its rim diameter is approximately the same as that of the .44 Magnum.
</p>

<p>
  This allows the .50 AE to use the same bolt face as the .44 Magnum in the corresponding Desert Eagle variants. On <strong>Mark XIX</strong> models, switching between .44 Magnum and .50 AE can be accomplished by changing the barrel and magazine without replacing the bolt assembly.
</p>

<p>
  This is an exceptionally practical engineering solution.
</p>

<p>
  Rather than designing an entirely new pistol for the new cartridge, the existing platform could be adapted to accommodate it.
</p>
<h2>The Desert Eagle and .50 AE</h2>

<p>
  The .50 AE cartridge has become inseparably associated with the <strong>Desert Eagle</strong>.
</p>

<p>
  The Desert Eagle was initially offered in <strong>.357 Magnum</strong> and later in <strong>.44 Magnum</strong>. Following the introduction of the .50 AE, an even more powerful variant became available.
</p>

<p>
  The combination of the Desert Eagle's imposing silhouette and the .50 AE cartridge turned the platform into one of the most recognizable firearm-and-ammunition pairings in the world.
</p>

<p>
  The modern <strong>Desert Eagle Mark XIX</strong> is available in several powerful calibers, including .357 Magnum, .44 Magnum, and .50 AE.
</p>
<h2>Design and Characteristics</h2>

<p>
  The .50 AE is a <strong>rimless cartridge with a rebated rim, a cylindrical case, and centerfire ignition</strong>.
</p>

<p>
  The case is approximately <strong>32.6 mm</strong> long, while the overall cartridge length is approximately <strong>40.9 mm</strong>.
</p>

<p>
  The bullet has a nominal diameter of <strong>.500 inch</strong>, or approximately <strong>12.7 mm</strong>.
</p>

<p>
  Interestingly, despite its “.50” designation, the bullet diameter should not be confused with that of certain other .50-caliber cartridges. For example, the .50 AE uses a bullet measuring approximately <strong>.500 inch</strong>, whereas some other powerful .50-caliber cartridges use bullets with diameters of around <strong>.510–.512 inch</strong>.
</p>

<h2>Ballistic Characteristics</h2>

<p>
  The .50 AE was designed to deliver high muzzle energy.
</p>

<p>
  Depending on the specific load, bullet weights typically range from approximately <strong>19–21 g</strong>, while muzzle velocities are generally around <strong>420–470 m/s</strong>.
</p>

<p>
  For example, a bullet weighing <strong>19.4 g</strong> traveling at <strong>430 m/s</strong> has a kinetic energy of approximately <strong>1,795 J</strong>.
</p>

<p>
  Some factory loads are listed with even higher figures. This places the .50 AE among the most powerful commercially produced cartridges used in semiautomatic pistols.
</p>

<h2>.50 AE vs. .44 Magnum</h2>

<p>
  A comparison between the .50 AE and .44 Magnum is inevitable, as the two cartridges are connected both historically and mechanically through the Desert Eagle platform.
</p>

<p>
  Both can achieve very high muzzle energy, although their actual performance depends on bullet weight, the specific load, and barrel length.
</p>

<p>
  The .50 AE uses a larger-diameter bullet and typically delivers very high energy with a relatively heavy projectile.
</p>

<p>
  However, it is important not to claim that the .50 AE is <strong>always</strong> twice as powerful as the .44 Magnum. Actual performance depends on the specific factory loads and barrels involved.
</p>

<h2>Other Firearms</h2>

<p>
  Although the Desert Eagle is the best-known firearm chambered for the .50 AE, the cartridge is not limited to this platform.
</p>

<p>
  Other firearms chambered for the .50 AE include the <strong>AMT Automag V</strong>, and the cartridge has also been used in some large-frame revolvers.
</p>

<p>
  Another notable example is the <strong>L.A.R. Grizzly</strong>, which is based on the 1911 design and adapted for powerful ammunition.
</p>

<p>
  The .50 AE has also been used in revolvers such as the <strong>Freedom Arms Model 83</strong> and the <strong>Magnum Research BFR</strong>, demonstrating that the cartridge is not mechanically limited to semiautomatic pistols.
</p>
<h2>Recoil and Practical Use</h2>

<p>
  The immense power of the .50 AE comes at a cost: <strong>substantial recoil</strong>.
</p>

<p>
  In the Desert Eagle, recoil is particularly noticeable because of the bullet's high mass and the cartridge's considerable muzzle energy. However, the firearm itself is heavy and uses a gas-operated action, which helps manage part of the recoil impulse through the movement of the mechanism.
</p>

<p>
  Nevertheless, the .50 AE is not a typical service-pistol cartridge.
</p>

<p>
  Its large dimensions, the weight of the firearm, the high cost of ammunition, and substantial recoil make it primarily a specialized caliber for sport shooting, handgun hunting, and collectible firearms.
</p>

<h2>Why Is the .50 AE So Famous?</h2>

<p>
  The popularity of the .50 AE is not based on its ballistic performance alone.
</p>

<p>
  The cartridge emerged at a time when the Desert Eagle was becoming a symbol of the “Magnum” semiautomatic pistol. The firearm's enormous size and the impressive dimensions of the cartridge made it particularly appealing to popular culture.
</p>

<p>
  The Desert Eagle and .50 AE have appeared repeatedly in films, television productions, and video games.
</p>

<p>
  As a result, the .50 AE has become one of the most recognizable handgun cartridges, even among people who have never been interested in its technical characteristics.
</p>

<h2>The Cartridge Today</h2>

<p>
  The .50 Action Express continues to be manufactured today.
</p>

<p>
  Its primary applications remain large sporting and hunting pistols, as well as collectible firearms.
</p>

<p>
  Its best-known platform remains the <strong>Desert Eagle</strong>, which continues to be manufactured by Magnum Research. The company still lists the Desert Eagle among its principal products.
</p>

<p>
  The .50 AE remains a niche cartridge, but it occupies a unique place in the history of handgun ammunition: <strong>one of the most powerful commercially produced cartridges specifically designed for a semiautomatic pistol</strong>.
</p>

<h2>Interesting Fact</h2>

<p>
  The development of the .50 AE involved a particularly clever engineering solution.
</p>

<p>
  <strong>The rim diameter was designed to match that of the .44 Magnum</strong>, even though the main body of the case is significantly larger.
</p>

<p>
  This allows the .50 AE to be integrated into the Desert Eagle platform without requiring an entirely new bolt mechanism. On the corresponding Mark XIX variants, switching between .44 Magnum and .50 AE involves changing the barrel and magazine.
</p>

<p>
  This feature is one of the reasons the .50 AE became such a successful partner for the Desert Eagle.
</p>
<h2>Technical Specifications</h2>

<TechnicalData
  title=".50 Action Express"
  language="en"
  data={[
    ["Specification", "Value"],
    ["Designation", ".50 Action Express"],
    ["Metric designation", "12.7×33 mm"],
    ["Other designation", ".50 AE"],
    ["Type", "Handgun cartridge"],
    ["Country of origin", "United States"],
    ["Developer", "Evan Whildin / Action Arms"],
    ["Year developed", "1988"],
    ["Case type", "Rimless, rebated rim"],
    ["Case length", "Approximately 32.6 mm"],
    ["Overall cartridge length", "Approximately 40.9 mm"],
    ["Bullet diameter", "Approximately 12.7 mm"],
    ["Ignition", "Centerfire"],
    ["Bullet weight", "Approximately 19–21 g*"],
    ["Muzzle velocity", "Approximately 420–470 m/s*"],
    ["Muzzle energy", "Approximately 1,600–2,000 J*"],
    ["Primary firearm", "Desert Eagle"],
    ["Other firearms", "AMT Automag V, L.A.R. Grizzly, Freedom Arms Model 83, Magnum Research BFR"],
  ]}
/>

<p>
  * Ballistic characteristics depend on the specific cartridge, bullet weight and design, and barrel length. Significant differences in velocity and muzzle energy can occur between factory loads. For example, a bullet weighing approximately 19.4 g and traveling at 430 m/s produces about 1.8 kJ of energy.
</p>
</Section>
<Section
  id="2-7x9-kolibri"
  title="2.7×9 mm Kolibri"
>
  <img
    src="/images/calibers/cartridges/2.7x9 kolibri.png"
    alt="2.7×9 mm Kolibri"
    style={{
      width: "41%",
      height: "auto",
      display: "block",
      margin: "0 auto 30px auto",
    }}
  />
<p>
  <em>
    The tiny cartridge that proves human ingenuity has very little sense of proportion.
  </em>
</p>
<p>
  <strong>2.7×9 mm Kolibri</strong>, also known as the <strong>2 mm Kolibri</strong>, is one of the most unusual handgun cartridges in history. It is the smallest commercially produced <strong>centerfire cartridge</strong> and was designed specifically for the miniature <strong>Kolibri</strong> pistol, developed by Austrian watchmaker and inventor <strong>Franz Pfannl</strong>.
</p>

<p>
  This is not a cartridge with any significant military or practical importance. On the contrary, the 2.7 mm Kolibri is primarily a testament to just how far the pursuit of miniaturization can go.
</p>

<p>
  And while with most cartridges featured on GunsAtlas we usually ask <strong>“How powerful is it?”</strong>, with the Kolibri the question is more likely to be <strong>“Why would anyone make this in the first place?”</strong>
</p>

<p>
  The answer is simple: in the early 20th century, there was interest in making the smallest possible firearms for personal carry. Franz Pfannl decided to take things one step further—and created a pistol so small that it almost resembles a watchmaker's tool.
</p>

<h2>Development History</h2>

<p>
  Franz Pfannl was an Austrian watchmaker and inventor known for creating a series of miniature firearms.
</p>

<p>
  The <strong>2.7 mm Kolibri</strong> cartridge was patented in <strong>1910</strong>, and the pistol and its ammunition were introduced to the market in <strong>1914</strong>. Pfannl received financial support from <strong>Georg Grabner</strong>.
</p>

<p>
  The cartridge was developed specifically for the miniature Kolibri pistol, which was marketed for <strong>self-defense and concealed carry</strong>.
</p>

<p>
  The name <strong>Kolibri</strong> comes from the German word for <strong>hummingbird</strong>, one of the smallest birds in the world. The name was clearly chosen deliberately: the size of the firearm and its cartridge really does justify the comparison.
</p>
<h2>The Smallest Production Cartridge</h2>

<p>
  The 2.7×9 mm Kolibri occupies a special place in the history of ammunition.
</p>

<p>
  It is considered the <strong>smallest commercially produced centerfire cartridge</strong>. Its bullet diameter is only about <strong>2.7 mm</strong>, and the entire cartridge measures approximately <strong>11 mm</strong> in length.
</p>

<p>
  For comparison, the overall length of the cartridge is shorter than the case length of many modern handgun cartridges.
</p>

<p>
  This is one of those cases where the technical specifications look almost like a typographical error.
</p>
<h2>The Kolibri Pistol</h2>

<img
  src="/images/calibers/cartridges/Kolibri Pistol.png"
  alt="Kolibri pistol"
  style={{
    width: "45%",
    height: "auto",
    display: "block",
    margin: "30px auto",
  }}
/>
<p>
  <em>
    For a size comparison, the larger cartridge in the image is the .50 Action Express (.50 AE).
  </em>
</p>
<p>
  The pistol is exceptionally small and lightweight. It was designed for maximum compactness and concealed carry.
</p>

<p>
  Both <strong>semiautomatic versions</strong> and single-shot variants were produced. The semiautomatic model uses a simple <strong>blowback action</strong>, and its barrel is fixed.
</p>

<p>
  At such a small caliber, conventional engineering solutions become a serious challenge. The components are so tiny that even handling the cartridges is rather inconvenient.
</p>

<p>
  The pistol was manufactured until approximately <strong>1938</strong>, with total production estimated at around <strong>1,000 units</strong>.
</p>
<h2>Design and Characteristics</h2>

<p>
  The 2.7×9 mm Kolibri is a <strong>rimless cartridge with a cylindrical case and centerfire ignition</strong>.
</p>

<p>
  The case is approximately <strong>9.4 mm</strong> long, while the overall cartridge length is about <strong>11 mm</strong>. The bullet diameter is approximately <strong>2.7 mm</strong>.
</p>

<p>
  The bullet is exceptionally small, weighing around <strong>0.2 g</strong>, or approximately 3 gr.
</p>

<p>
  At such a miniature caliber, manufacturing precise components presents a significant technical challenge. Loading and handling the ammunition are also inconvenient because of its extremely small dimensions.
</p>

<h2>Ballistic Characteristics</h2>

<p>
  This is where the Kolibri becomes even more unusual.
</p>

<p>
  With a bullet weighing approximately <strong>0.2 g</strong>, the reported muzzle velocity is around <strong>200 m/s</strong>. This corresponds to a muzzle energy of approximately <strong>4 J</strong>.
</p>

<p>
  Some reference sources list slightly different figures, such as approximately <strong>213 m/s</strong> and around <strong>3 J</strong>. These differences are related to the particular source and measurement conditions.
</p>

<p>
  In every case, the conclusion is the same: <strong>the 2.7 mm Kolibri is an exceptionally weak handgun cartridge</strong>.
</p>

<p>
  Its muzzle energy is many times lower than that of even the weakest standard modern handgun cartridges.
</p>

<h2>What About Accuracy?</h2>

<p>
  The designers faced another problem here.
</p>

<p>
  With such a small diameter, manufacturing conventional rifling inside the barrel is extremely difficult. As a result, Kolibri barrels are found <strong>without rifling</strong>, meaning the bullet does not receive stabilization through rotation around its longitudinal axis.
</p>

<p>
  Consequently, accuracy is limited.
</p>

<p>
  The result is a miniature firearm that is impressive as a feat of engineering but difficult to regard as particularly effective for practical self-defense.
</p>
<h2>How Powerful Is the Kolibri, Really?</h2>

<p>
  This is the point at which we return to the original question.
</p>

<p>
  A muzzle energy of approximately <strong>4 J</strong> is extremely low for a firearm.
</p>

<p>
  Historical sources indicate that the bullet could penetrate relatively thin wooden materials, but its practical effectiveness against a person was severely limited.
</p>

<p>
  Claims that the cartridge could not penetrate a leather jacket or thick clothing should therefore be treated with caution. This is not a universal characteristic that can be established for every type of clothing or under all conditions.
</p>

<p>
  It is more accurate to say that <strong>the cartridge was extremely weak even by the standards of its own time</strong>.
</p>

<p>
  Nevertheless, this does not mean it was safe. As a firearm, it could still cause injury.
</p>

<h2>Why Was It Created in the First Place?</h2>

<p>
  The answer lies in the period's fascination with miniature firearms.
</p>

<p>
  In the late 19th and early 20th centuries, there was a market for exceptionally small pistols intended for discreet carry.
</p>

<p>
  With the Kolibri, this concept was taken to the extreme.
</p>

<p>
  Rather than seeking a balance between size, power, and practicality, Pfannl placed <strong>miniaturization</strong> above all else.
</p>

<p>
  In that respect, he certainly succeeded.
</p>

<p>
  The result was a genuine engineering marvel: a functioning semiautomatic centerfire pistol so small that it looks almost like a toy.
</p>

<p>
  Except that it isn't.
</p>
<h2>The End of Production</h2>

<p>
  The Kolibri never became a widely adopted firearm.
</p>

<p>
  Its combination of extremely small dimensions, difficult cartridge handling, low power, and limited practical effectiveness prevented the system from gaining widespread acceptance.
</p>

<p>
  Production of the pistol and Pfannl's related miniature firearms ended around <strong>1938</strong>.
</p>

<p>
  Today, original pistols and cartridges are valued primarily as <strong>collectibles</strong>.
</p>

<h2>Interesting Fact</h2>

<p>
  If GunsAtlas were to rank cartridges by bullet diameter, the Kolibri would be one of those entries that might make someone look at the table and assume a digit had been left out.
</p>

<p>
  <strong>2.7 mm.</strong>
</p>

<p>
  That's it.
</p>

<p>
  The bullet is approximately <strong>one-quarter the diameter of a 9 mm bullet</strong>, and the entire system was developed in an era when miniaturizing mechanical devices presented an impressive technical challenge.
</p>

<p>
  Perhaps the most accurate description of the Kolibri is:
</p>

<p>
  <strong>“A cartridge that was never meant to be powerful—it was meant to be small.”</strong>
</p>

<p>
  And in that respect, the objective was achieved brilliantly.
</p>

<h2>The Cartridge Today</h2>

<p>
  The 2.7×9 mm Kolibri has not been used as practical ammunition for many decades.
</p>

<p>
  Original cartridges are rare, and the firearms designed for them are sought after by collectors.
</p>

<p>
  The historical significance of the Kolibri is not related to military use or ballistic performance. It lies in the fact that, more than a century ago, a designer managed to create a <strong>functioning centerfire firearm with dimensions that seem almost unbelievable today</strong>.
</p>

<p>
  That is why the Kolibri deserves a place on GunsAtlas—not as a serious cartridge, but as a <strong>small, fascinating, and rather amusing chapter in the history of firearms engineering</strong>.
</p>
<h2>Technical Specifications</h2>

<TechnicalData
  title="2.7×9 mm Kolibri"
  language="en"
  data={[
    ["Specification", "Value"],
    ["Designation", "2.7×9 mm Kolibri"],
    ["Other designations", "2 mm Kolibri, 2.7 mm Kolibri Car Pistol"],
    ["Type", "Handgun cartridge"],
    ["Country of origin", "Austria-Hungary"],
    ["Developer", "Franz Pfannl"],
    ["Patent year", "1910"],
    ["Introduced to the market", "1914"],
    ["Case type", "Rimless, cylindrical"],
    ["Case length", "Approximately 9.4 mm"],
    ["Overall cartridge length", "Approximately 11 mm"],
    ["Bullet diameter", "Approximately 2.7 mm"],
    ["Ignition", "Centerfire"],
    ["Bullet weight", "Approximately 0.2 g"],
    ["Muzzle velocity", "Approximately 200–213 m/s*"],
    ["Muzzle energy", "Approximately 3–4 J*"],
    ["Primary firearm", "Kolibri"],
    ["System production period", "Approximately 1914–1938"],
    ["Estimated number of pistols produced", "Approximately 1,000"],
  ]}
/>

<p>
  * Ballistic figures vary depending on the historical source and measurement conditions. The reported velocity of approximately <strong>200 m/s with a 0.2 g bullet</strong> corresponds to a muzzle energy of approximately <strong>4 J</strong>.
</p>
</Section>
  <Divider />


        </div>
      </main>
    </>
  );
}
