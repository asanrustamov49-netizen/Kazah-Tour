"use client";
import scss from "./payPage.module.scss";
import { useForm } from "react-hook-form";
import { useGetCards } from "@/utils/useGetCards";
import { ITourCard } from "@/types/Types";
import Payment from "@/components/widgets/payment/Payment";

const PayPage = () => {
  const { data: tours } = useGetCards();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
            <Payment tour={tours?.[0]}/>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
