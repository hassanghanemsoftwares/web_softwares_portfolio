import { useQuery } from "@tanstack/react-query";
import { getHome } from "@/lib/services/home-service";
import { HomeResponse } from "@/types/response.interfaces";

export const useHome = () => {
  return useQuery<HomeResponse>({
    queryKey: ["home", "all"],
    queryFn: getHome,
    staleTime: 1000 * 60 * 0.5,
    refetchOnWindowFocus: true,
  });
};
