"use client"
import DetailCard from "@/components/pages/detailCard/DetailCard";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams()
  
  return <DetailCard />;
};

export default page;
