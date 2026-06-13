import { useMutation } from "@tanstack/react-query";
import { TourApi } from "./Api/TourApi";

export const useCreate = () =>
  useMutation({
    mutationFn: async function (body: {
      //   _id: number;
      name: string;
      url: string;
      shortOverview: string;
      overview: string;
      city: string;
      //   createdAt: string;
      //   updatedAt: string;
      price: number;
    }) {
      const response = await TourApi.post("/", body);
      return response.data;
    },
  });
