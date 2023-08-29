import { RandomUser } from "@/data/RandomUserType";
import { StateCreator } from "zustand";

export type FakeUsersState = {
  fakeUsers: RandomUser[];
};

export const FakeUsersStore: StateCreator<FakeUsersState> = (set) => ({
  fakeUsers: [],
});
