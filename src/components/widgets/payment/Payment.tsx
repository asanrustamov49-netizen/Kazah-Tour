import { ITourCard } from "@/types/Types";
import scss from "./payment.module.scss";
import { useForm } from "react-hook-form";
import { FaCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useOrders } from "@/utils/useOrders";

interface IForm {
  name: string;
  date: string;
  guests: string;
  payment: string;
}

interface IPay {
  tour?: ITourCard;
}

const Payment = ({ tour }: IPay) => {
  const { createOrders } = useOrders();
  const { push } = useRouter();
  const [guests, setGuests] = useState(1);
  const { register, reset, handleSubmit } = useForm<IForm>();
  const [succes, setSucces] = useState<boolean>(false);
  const handleData = (data: IForm) => {
    const guestsCount = Number(data.guests.split(" ")[0]);
    createOrders({
      tour: tour!,
      guests: guestsCount,
      date: data.date,
      payment: data.payment,
      totalPrice: tour!.price * guestsCount,
    });
    setSucces(true);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleData)} className={scss.pay}>
      <div className={scss.name}>
        <h2>NAME OF TOUR</h2>
        <input
          {...register("name")}
          type="text"
          defaultValue={tour?.name}
          placeholder="Enter Name of tour"
        />
      </div>
      <div className={scss.dates}>
        <h2>DATES</h2>
        <input {...register("date")} type="text" placeholder="Enter Date" />
        <span className={scss.date}>
          <MdOutlineDateRange />
        </span>
      </div>
      <div className={scss.guests}>
        <h2>GUESTS</h2>
        <select
          {...register("guests")}
          onChange={(e) => setGuests(Number(e.target.value))}
        >
          <option value="1">1 Adult</option>
          <option value="2">2 Adults</option>
          <option value="3">3 Adults</option>
        </select>
      </div>
      <div className={scss.payment}>
        <h2>PAYMENT</h2>
        <select {...register("payment")} defaultValue="cash">
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>
      </div>
      <div className={scss.images}>
        <p>______________</p>
        <span>
          <FaCircle />
        </span>
        <span className={scss.center}>
          <FaCircle />
        </span>
        <span>
          <FaCircle />
        </span>
        <p>______________</p>
      </div>
      <div className={scss.price}>
        <h1>TOTAL:</h1>
        <h4>${tour?.price! * guests}</h4>
      </div>
      <button type="submit">TO ISSUE</button>
      <div className={scss.icons}>
        <span onClick={() => push("/kazahtour")}>
          <RiTelegram2Line />
        </span>
      </div>
      {succes ? (
        <div className={scss.succes}>
          <button type="button" onClick={() => setSucces(false)}>
            <IoMdClose />
          </button>
          <span>✅</span>
          <h3>The Order Is Done Succesful!</h3>
          <button type="button" onClick={() => push("/order")}>
            Go To Orders
          </button>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default Payment;
