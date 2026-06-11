import scss from "./text.module.scss";
const Text = () => {
  return (
    <div>
      <div className={scss.kz}>
        <h1>Kazakhstan is...</h1>
        <div>
          <h2>1: Adventurous & Majestic</h2>
          <p>
            Cross the boundaries of the ordinary and discover majestic{" "}
            <span>Kazakhstan</span>! <br /> This is a land where every contrast
            takes your breath away. Feel like a pioneer standing on the edge of
            the <br />
            grand <span>Charyn Canyon</span>, whose ancient crimson rocks echo
            the footsteps of nomads. <br /> Dive into the mystical silence of{" "}
            <span>Lake Kaindy</span>, where sunken pine trees rise from
            turquoise waters. Watch the <br /> sunset over the endless{" "}
            <span>Ustyurt Plateau</span>, resembling alien landscapes of distant
            planets. Kazakhstan is a living <br />
            legend and the call of the wild. Book your tour now and touch the
            magic of endless steppes!
          </p>
        </div>
        <div>
          <h2 className={scss.right}>2: Inspiring & Poetic</h2>
          <p>
            Seeking a destination to redefine your idea of beauty? <br />{" "}
            Welcome to Kazakhstan—the land where legends are born! Immerse
            yourself in the emerald luxury of <br /> <span>Borovoye</span>, the
            "Switzerland of Kazakhstan”. <br /> Feel the crisp air of pristine{" "}
            <span>Kolsay Lakes</span>, cradled by the <span>Tian Shan</span>{" "}
            mountains. Here, the ultra-modern <br />
            architecture of <span>Astana</span> harmonizes with the raw majesty
            of untamed nature. <br /> The air is filled with the spirit of
            freedom, hospitality, and ancient traditions. Every moment becomes a{" "}
            <br />
            masterpiece of memories. Trust us with your vacation. Step toward
            the unknown, breathe deeply, and open <br /> your heart to the great
            steppe today!
          </p>
        </div>
        <div>
          <h2>3: Dynamic & Modern</h2>
          <p>
            Forget boring itineraries and cliché vacations! <br />{" "}
            <span>Kazakhstan</span> awaits those craving vibrant emotions and
            real discoveries. <br />
            Imagine sipping coffee on the futuristic streets of{" "}
            <span>Almaty</span>, and an hour later, carving fresh snow at the{" "}
            <br /> legendary
            <span>Shymbulak resort</span>. Cosmic landscapes of{" "}
            <span>Aktolagay</span>, the dazzling
            <span>Caspian Sea</span>, <br /> and the golden sands of the{" "}
            <span>Singing Barkhan</span>
            await you. <br /> We have designed perfect tours blending absolute
            comfort with modern nomad romance. Stop putting life on <br /> hold.
            Send us a direct message, choose your destination, and embark on an
            unforgettable adventure through <br /> Central Asia’s most
            photogenic spots!
          </p>
        </div>
      </div>
      <div className={scss.about}>
        <h1>About Us</h1>
        <div className={scss.us}>
          <p>
            <span>Tengri Tours</span> – is a premier travel agency in
            Kazakhstan, specializing in high-quality urban and regional <br />{" "}
            excursions tailored for discerning international travelers.{" "}
          </p>
          <p>
            <span>We provide</span> a seamless integration of professional
            vehicle transportation and expertly guided walking tours <br />{" "}
            across the country's major cultural and historical centers.
          </p>
          <p>
            <span>Our carefully structured itineraries</span> offer
            comprehensive insights into both modern architectural <br />{" "}
            developments and ancient heritage sites, ensuring an educational and
            enriching experience.
          </p>
          <p>
            Guided by <span>certified local experts</span>, each tour guarantees
            exceptional operational efficiency, safety, and deep <br /> cultural
            immersion.
          </p>
          <p>
            From managing complex travel logistics to creating exclusive
            sightseeing routes, our company maintains the <br /> highest
            standards of <span>corporate hospitality and customer service</span>
            .{" "}
          </p>
          <p>
            <span>Partner</span> with Tengri Tours to experience the ultimate
            standard of professional travel management in <br /> Kazakhstan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text;
