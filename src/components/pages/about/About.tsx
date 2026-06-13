import AboutBanner from "@/components/widgets/aboutBanner/AboutBanner";
import scss from "./about.module.scss";
import Text from "@/components/widgets/text/Text";

const About = () => {
  return (
    <div className={scss.container}>
      <AboutBanner />
      <div className="container">
        <div className={scss.mainContainer}>
          <Text />
          <div className={scss.offer}>
            <h1>We Offer</h1>
            <div className={scss.icons}>
              <div>
                <img src="./download 24.png" alt="" />
                <h3>Premium Hotels</h3>
              </div>
              <div>
                <img src="./about.png" alt="" />
                <h3>Good Rest</h3>
              </div>
              <div>
                <img src="./Group.png" alt="" />
                <h3>Limitless Journey</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
