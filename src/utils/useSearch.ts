import { useQuery } from "@tanstack/react-query";
import { TourApi } from "./Api/TourApi";

export const useSearch = (searchValue: string) => {
  return useQuery({
    queryKey: ["search", searchValue],
    queryFn: async () => {
      console.log("API CALL:", searchValue);
      const { data } = await TourApi.get("/search", {
        params: { searchValue },
      });

      return data.data;
    },
    enabled: !!searchValue.trim(),
  });
};
