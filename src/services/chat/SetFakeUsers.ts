import { RandomUser } from "@/data/RandomUserType";
import { SetStoreState } from "@/store/useAppStore";

export const SetFakeUsers = (fakeUsers: RandomUser[]) => {
  SetStoreState((state, setState) => {
    setState({ fakeUsers });
  });
};
