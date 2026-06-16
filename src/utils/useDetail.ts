import { useQuery } from "@tanstack/react-query";
import { TourApi } from "./Api/TourApi";

export const useDetail = (id: string[] | undefined | number | string) =>
  useQuery({
    queryKey: ["tour", id],
    queryFn: async () => {
      const res = await TourApi.get(`/${id}`);
      return res.data.data;
    },
  });
