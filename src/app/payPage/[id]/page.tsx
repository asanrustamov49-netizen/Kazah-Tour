"use client"
import PayPage from "@/components/pages/payPage/PayPage";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams()
  return <PayPage />;
};

export default page;
