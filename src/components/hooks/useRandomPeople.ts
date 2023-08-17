import { RandomUserType } from "@/data/RandomUserType";
import { Fetcher } from "@/services/utils/fetcher";
import useSWR from "swr";

export const useRandomPeople = (numOfPeople: number) => {
  // TODO: Instead of reaching directly to ramdonUser it should direct to our backend
  const { data, error, isLoading, mutate } = useSWR<RandomUserType>(
    `https://randomuser.me/api/?results=${numOfPeople}`,
    Fetcher
  );

  if (error) return { data: null, error, isLoading, mutate };

  return { data: data?.results, error, isLoading, mutate };
};
