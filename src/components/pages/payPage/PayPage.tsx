"use client";
import scss from "./payPage.module.scss";
import { useForm } from "react-hook-form";
import { useGetCards } from "@/utils/useGetCards";
import { ITourCard } from "@/types/Types";
import Payment from "@/components/widgets/payment/Payment";
import { useParams } from "next/navigation";
import { useDetail } from "@/utils/useDetail";

const PayPage = () => {
  const { id } = useParams();
  const { data: tour, isLoading } = useDetail(id);
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <Payment tour={tour} />
        </div>
      </div>
    </div>
  );
};

export default PayPage;
