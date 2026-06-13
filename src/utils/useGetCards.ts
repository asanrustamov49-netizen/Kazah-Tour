"use client"
import { useQuery } from "@tanstack/react-query";
import { TourApi } from "./Api/TourApi";
import { IGetResponse } from "@/types/Types";

export const useGetCards = () => useQuery({
    queryKey: ['tour'], 
    queryFn: async () => {
        const response = await TourApi.get<IGetResponse>("/")
        return response.data.data
    }
})