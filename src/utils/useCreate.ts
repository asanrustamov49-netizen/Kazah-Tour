import { useMutation } from "@tanstack/react-query";
import { TourApi } from "./Api/TourApi";

export const useCreate = () => useMutation({
    mutationKey: ['create'],
    mutationFn: async () => {
        const response = await TourApi.create("/")
        
    }
})