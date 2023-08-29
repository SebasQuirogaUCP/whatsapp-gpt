import { RandomUserType } from "@/data/RandomUserType";
import { CustomFetcher } from "@/services/utils/CustomFetcher";

import useSWR from "swr";

export const useRandomPeople = () => {
  const { data, error, isLoading, mutate } = useSWR<RandomUserType>(
    `/api/chat/fake-users`,
    CustomFetcher
  );

  if (error) return { data: null, error, isLoading, mutate };


  return { data: data?.results, error, isLoading, mutate };
};
