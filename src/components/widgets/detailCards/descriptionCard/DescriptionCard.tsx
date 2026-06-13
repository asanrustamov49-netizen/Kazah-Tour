import scss from "./DescriptionCard.module.scss";

const DescriptionCard = () => {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <h1>DESCRIPTION</h1>
        <div className={scss.line}></div>
        <p>
          Dive into the futuristic fairytale of Central Asia with our exclusive
          tour to Astana! You will witness the legendary Baiterek Monument,
          explore the breathtaking views from the Nur Alem pavilion, and admire
          the majestic Hazret Sultan Mosque. Enjoy unforgettable shopping under
          the giant tent of Khan Shatyr and stroll along the scenic Water-Green
          Boulevard. Discover the cosmic architecture and incredible hospitality
          of the capital of the future! Don't wait to experience the magic! Your
          dream holiday is just one click away. Book today and explore the
          wonders of tomorrow!
        </p>
      </div>
    </div>
  );
};

export default DescriptionCard;
