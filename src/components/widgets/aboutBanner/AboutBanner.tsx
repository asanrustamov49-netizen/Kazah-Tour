import scss from './aboutBanner.module.scss'
const AboutBanner = () => {
  return (
    <div className={scss.banner}>
      <img
        src="https://sereneworld.in/uploads/blogs/1698478088_main.jpg"
        alt=""
      />
      <h4>
        <span>Kazakhstan</span> – <br /> Beyond Your Dreams
      </h4>
    </div>
  );
};

export default AboutBanner;
