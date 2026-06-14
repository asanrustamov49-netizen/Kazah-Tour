"use client";
import { useRouter } from "next/navigation";
import scss from "./BookTour.module.scss";
import { ITourCard } from "@/types/Types";
import { useState } from "react";
import { useOrders } from "@/utils/useOrders";

interface IBouk {
  tour: ITourCard;
}

const BookTour = ({ tour }: IBouk) => {
  const [message, setMessage] = useState("");
  const { push } = useRouter();
  const { orders } = useOrders();

  const exists = orders.some((item) => item._id === tour._id);

  const handleBook = () => {
    if (exists) {
      setMessage("This tour is already ordered!");

      setTimeout(() => {
        setMessage("");
      }, 3000);

      return;
    }

    push(`/payPage/${tour._id}`);
  };
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.pay}>
          <h1>
            Unforgettable Astana tour! <br /> Grab your spot now for only
            <span> ${tour.price} </span>
            per person.
          </h1>
          <button onClick={() => handleBook()}>BOOK A TOUR</button>
          {message && (
            <div className={scss.notification}>
              <div className={scss.icon}>⚠️</div>
              <div>
                <h4>Booking Error</h4>
                <p>{message}</p>
              </div>
              <button onClick={() => setMessage("")}>✕</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookTour;
