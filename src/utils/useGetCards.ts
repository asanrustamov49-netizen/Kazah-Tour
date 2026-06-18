"use client";
import { useQuery } from "@tanstack/react-query";
import { TourApi } from "./Api/TourApi";
import { IGetResponse, ITourCard } from "@/types/Types";

interface IParam {
  sort_by?: string;
}

export const useGetCards = ({ sort_by }: IParam = {}) =>
  useQuery({
    queryKey: ["tour", sort_by],
    queryFn: async () => {
      const response = await TourApi.get<IGetResponse>("/");
      const data = response.data.data;
      if (sort_by === "price ascending")
        return [...data].sort((a, b) => a.price - b.price);
      if (sort_by === "price descending")
        return [...data].sort((a, b) => b.price - a.price);
      if (sort_by === "letter ascending")
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      if (sort_by === "letter descending")
        return [...data].sort((a, b) => b.name.localeCompare(a.name));
      if (sort_by === "letter a-z")
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      if (sort_by === "letter z-a")
        return [...data].sort((a, b) => b.name.localeCompare(a.name));
      return data;
    },
  });
// export const useGetCards = ( sort_by : IParam) =>
//   useQuery({
//     queryKey: ["tour",sort_by],
//     queryFn: async () => {
//       const response = await TourApi.get<IGetResponse>("/", {
//         params: {
//           sort_by: sort_by,
//         },
//       });
//       return response.data.data;
//     },

//   });
