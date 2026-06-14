"use client";
import { ITourCard } from "@/types/Types";
import "./cardList.scss";
import TourCards from "@/components/ui/tourCards/TourCards";

interface ICardList {
  title: string;
  tour: ITourCard[];
}

const CardList = ({ title, tour }: ICardList) => {
  return (
    <section id="tour-list">
      <div className="container">
        <div className="tour-list">
          <h1>{title}</h1>
          <div className="tour-cards">
            {tour?.map((el) => (
              <TourCards tour={el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardList;
