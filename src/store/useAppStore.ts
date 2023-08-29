import { create } from "zustand";
import { FakeUsersState, FakeUsersStore } from "./FakeUsersStore";

type AppStoreState = FakeUsersState;

export const useAppStore = create<AppStoreState>()((...p) => ({
  ...FakeUsersStore(...p),
}));

export const SetStoreState = <T>(
  callback: (
    state: AppStoreState,
    setState: (state: Partial<AppStoreState>) => void
  ) => T
) => {
  return callback(useAppStore.getState(), useAppStore.setState);
};
