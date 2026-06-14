"use client"
import Banner from "@/components/widgets/banner/Banner";
import CardList from "@/components/widgets/cardList/CardList";
import ClientReviews from "@/components/widgets/clientReviews/ClientReviews";
import { useAddComment } from "@/utils/useAddComment";

const Home = () => {
  const { comments } = useAddComment();

  return (
    <>
      <Banner />
      <CardList />
      <CardList />
      <CardList />
      <ClientReviews reviews={comments} />
    </>
  );
};

export default Home;
