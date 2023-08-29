import { NextApiResponse } from "next";
import { HttpErrorWithCode } from "./HttpErrorWithCode";

export const HTTPError = (res: NextApiResponse, error: string) => {
  return HttpErrorWithCode(res, error);
};
