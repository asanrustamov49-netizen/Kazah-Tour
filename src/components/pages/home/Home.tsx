import Banner from "@/components/widgets/banner/Banner";
import CardList from "@/components/widgets/cardList/CardList";
import ClientReviews from "@/components/widgets/clientReviews/ClientReviews";
import { ITourCard } from "@/types/Types";

export const data: ITourCard[] = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQZaMnbrRWmdrZPp_p0I5N2jHelymM7sYTWGth4Q2pw&s=10",
    name: "KAZAKHSTAN ASTANA",
    _id: 1,
    overview:
      "Dive into the futuristic fairytale of Central Asia with our exclusive tour to Astana! You will witness the legendary Baiterek Monument, explore the breathtaking views from the Nur Alem pavilion, and admire the majestic Hazret Sultan Mosque. Enjoy unforgettable shopping under the giant tent of Khan Shatyr and stroll along the scenic Water-Green Boulevard. Discover the cosmic architecture and incredible hospitality of the capital of the future! Don't wait to experience the magic! Your dream holiday is just one click away. Book today and explore the wonders of tomorrow!",
    createdAt: 198289,
    updatedAt: 192992,
    price: 3.199,
    shortOverview: "Capital of KZ | Since 1997 | 1,5M peoples",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQZaMnbrRWmdrZPp_p0I5N2jHelymM7sYTWGth4Q2pw&s=10",
    name: "KAZAKHSTAN ASTANA",
    _id: 1,
    overview:
      "Dive into the futuristic fairytale of Central Asia with our exclusive tour to Astana! You will witness the legendary Baiterek Monument, explore the breathtaking views from the Nur Alem pavilion, and admire the majestic Hazret Sultan Mosque. Enjoy unforgettable shopping under the giant tent of Khan Shatyr and stroll along the scenic Water-Green Boulevard. Discover the cosmic architecture and incredible hospitality of the capital of the future! Don't wait to experience the magic! Your dream holiday is just one click away. Book today and explore the wonders of tomorrow!",
    createdAt: 198289,
    updatedAt: 192992,
    price: 3.199,
    shortOverview: "Capital of KZ | Since 1997 | 1,5M peoples",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQZaMnbrRWmdrZPp_p0I5N2jHelymM7sYTWGth4Q2pw&s=10",
    name: "KAZAKHSTAN ASTANA",
    _id: 1,
    overview:
      "Dive into the futuristic fairytale of Central Asia with our exclusive tour to Astana! You will witness the legendary Baiterek Monument, explore the breathtaking views from the Nur Alem pavilion, and admire the majestic Hazret Sultan Mosque. Enjoy unforgettable shopping under the giant tent of Khan Shatyr and stroll along the scenic Water-Green Boulevard. Discover the cosmic architecture and incredible hospitality of the capital of the future! Don't wait to experience the magic! Your dream holiday is just one click away. Book today and explore the wonders of tomorrow!",
    createdAt: 198289,
    updatedAt: 192992,
    price: 3.199,
    shortOverview: "Capital of KZ | Since 1997 | 1,5M peoples",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQZaMnbrRWmdrZPp_p0I5N2jHelymM7sYTWGth4Q2pw&s=10",
    name: "KAZAKHSTAN ASTANA",
    _id: 1,
    overview:
      "Dive into the futuristic fairytale of Central Asia with our exclusive tour to Astana! You will witness the legendary Baiterek Monument, explore the breathtaking views from the Nur Alem pavilion, and admire the majestic Hazret Sultan Mosque. Enjoy unforgettable shopping under the giant tent of Khan Shatyr and stroll along the scenic Water-Green Boulevard. Discover the cosmic architecture and incredible hospitality of the capital of the future! Don't wait to experience the magic! Your dream holiday is just one click away. Book today and explore the wonders of tomorrow!",
    createdAt: 198289,
    updatedAt: 192992,
    price: 3.199,
    shortOverview: "Capital of KZ | Since 1997 | 1,5M peoples",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQZaMnbrRWmdrZPp_p0I5N2jHelymM7sYTWGth4Q2pw&s=10",
    name: "KAZAKHSTAN ASTANA",
    _id: 1,
    overview:
      "Dive into the futuristic fairytale of Central Asia with our exclusive tour to Astana! You will witness the legendary Baiterek Monument, explore the breathtaking views from the Nur Alem pavilion, and admire the majestic Hazret Sultan Mosque. Enjoy unforgettable shopping under the giant tent of Khan Shatyr and stroll along the scenic Water-Green Boulevard. Discover the cosmic architecture and incredible hospitality of the capital of the future! Don't wait to experience the magic! Your dream holiday is just one click away. Book today and explore the wonders of tomorrow!",
    createdAt: 198289,
    updatedAt: 192992,
    price: 3.199,
    shortOverview: "Capital of KZ | Since 1997 | 1,5M peoples",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQZaMnbrRWmdrZPp_p0I5N2jHelymM7sYTWGth4Q2pw&s=10",
    name: "KAZAKHSTAN ASTANA",
    _id: 1,
    overview:
      "Dive into the futuristic fairytale of Central Asia with our exclusive tour to Astana! You will witness the legendary Baiterek Monument, explore the breathtaking views from the Nur Alem pavilion, and admire the majestic Hazret Sultan Mosque. Enjoy unforgettable shopping under the giant tent of Khan Shatyr and stroll along the scenic Water-Green Boulevard. Discover the cosmic architecture and incredible hospitality of the capital of the future! Don't wait to experience the magic! Your dream holiday is just one click away. Book today and explore the wonders of tomorrow!",
    createdAt: 198289,
    updatedAt: 192992,
    price: 3.199,
    shortOverview: "Capital of KZ | Since 1997 | 1,5M peoples",
  },
];

const Home = () => {
  return (
    <>
      <Banner />
      <CardList data={data} />
      <ClientReviews
        reviews={[
          { message: "asdcvfwdfcdes", name: "emily" },
          { message: "asdcvfwdfcdes", name: "emily" },
          { message: "asdcvfwdfcdes", name: "emily" },
          { message: "asdcvfwdfcdes", name: "emily" },
          { message: "asdcvfwdfcdes", name: "emily" },
        ]}
      />
    </>
  );
};

export default Home;
