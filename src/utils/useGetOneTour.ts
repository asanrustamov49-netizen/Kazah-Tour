import { useQuery } from "@tanstack/react-query";
import { TourApi } from "./Api/TourApi";
import { IGetResponse } from "@/types/Types";

export const useGetOneTour = (id: string) =>
  useQuery({
    queryKey: ["tour", id],
    queryFn: async () => {
      const res = await TourApi.get<IGetResponse>(`/tours/${id}`);
      return res.data.data;
    },
    enabled: !!id,
  });
