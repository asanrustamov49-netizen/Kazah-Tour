import { useRouter } from "next/navigation";
import scss from "./BookTour.module.scss";
import { ITourCard } from "@/types/Types";

interface IBouk {
  tour: ITourCard
}

const BookTour = ({tour}: IBouk) => {
  const {push} = useRouter()
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.pay}>
          <h1>
            Unforgettable Astana tour! <br /> Grab your spot now for only
            <span>$3,199</span>
            per person.
          </h1>
          <button onClick={() => push(`/payPage/${tour._id}`)}>BOOK A TOUR</button>
        </div>
      </div>
    </div>
  );
};

export default BookTour;
