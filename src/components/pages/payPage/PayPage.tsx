"use client"
import scss from "./payPage.module.scss";
import { FaCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { useForm } from "react-hook-form";

interface IForm{
    name: string
    date: string
    guests: string
    payment: string
}

const PayPage = () => {
    const {register, reset, handleSubmit} = useForm<IForm>()
    const handleData = (data: IForm) => {
        reset()
    }
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <form onSubmit={handleSubmit(handleData)} className={scss.pay}>
            <div className={scss.name}>
              <h2>NAME OF TOUR</h2>
              <input {...register("name")} type="text" value="KAZAKHSTAN  ASTANA  (1997)" />
            </div>
            <div className={scss.dates}>
              <h2>DATES</h2>
              <input
              {...register("date")}
                type="text"
                placeholder="Enter Date"
                defaultValue="Jun 10-18"
              />
              <span className={scss.date}>
                <MdOutlineDateRange />
              </span>
            </div>
            <div className={scss.guests}>
              <h2>GUESTS</h2>
              <select {...register("guests")}>
                <option value="" defaultValue="2 Adults">
                  1 adult
                </option>
              </select>
            </div>
            <div className={scss.payment}>
              <h2>PAYMENT</h2>
              <select {...register("payment")} defaultValue="cash">
                <option value="">Cash</option>
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
              <h4>$3,199</h4>
            </div>
            <button type="submit">TO ISSUE</button>
            <div className={scss.icons}>
              <span>
                <FaWhatsapp />
              </span>
              <span>
                <RiTelegram2Line />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
