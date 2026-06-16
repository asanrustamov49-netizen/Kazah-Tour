"use client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { TourApi } from "./Api/TourApi";
import { IGetResponse } from "@/types/Types";

interface IParam {
  sort_by: string;
}

export const useGetCards = ( sort_by : IParam) =>
  useQuery({
    queryKey: ["tour",sort_by],
    queryFn: async () => {
      const response = await TourApi.get<IGetResponse>("/", {
        params: {
          sort_by: sort_by,
        },
      });
      return response.data.data;
    },
    
  });
