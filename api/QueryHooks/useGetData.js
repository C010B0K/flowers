import { useQuery } from "@tanstack/react-query";
import FlowersService from "@/api/FlowersServise";

export function useGetDataFLowers() {
  return useQuery(
    ['getFlowers'],
    async () => { const response = await FlowersService.FlowersGetService({}); return response.data;
    }
  );
}
