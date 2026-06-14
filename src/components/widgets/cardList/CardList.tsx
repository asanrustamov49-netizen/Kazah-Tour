"use client"
import "./cardList.scss";
import TourCards from "@/components/ui/tourCards/TourCards";
import { ITourCard } from "@/types/Types";
import { useGetCards } from "@/utils/useGetCards";

const CardList = () => {
  const { data: tours } = useGetCards();
  return (
    <section id="tour-list">
      <div className="container">
        <div className="tour-list">
          <h1>Kazah Tours</h1>
          <div className="tour-cards">
            {tours?.map((el: ITourCard) => (
              <TourCards tour={el} key={el._id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardList;
