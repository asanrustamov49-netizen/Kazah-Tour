import Banner from "@/components/widgets/banner/Banner";
import CardList from "@/components/widgets/cardList/CardList";
import ClientReviews from "@/components/widgets/clientReviews/ClientReviews";
import { useGetCards } from './../../../utils/useGetCards';
import { useAddComment } from "@/utils/useAddComment";


const Home = () => {

  const {data} = useGetCards()
  const {comments} = useAddComment()

  return (
    <>
      <Banner />
      <CardList data={data} name="FEATURED LUXURY TOURS" />
      <CardList data={data} name="POPULAR TOURS" />
      <CardList data={data} name="TOURS FOR FAMILY" />
      <ClientReviews reviews={comments}/>
    </>
  );
};

export default Home;
