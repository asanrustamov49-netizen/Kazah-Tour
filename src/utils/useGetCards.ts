import { useQuery } from "@tanstack/react-query";

export const useGetCards = () => useQuery({
    queryKey: ['tour'], 
    queryFn: async () => {
        const response = await 
    }
})