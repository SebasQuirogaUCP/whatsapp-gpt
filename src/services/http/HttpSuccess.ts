import { NextApiResponse } from "next";
import { IError, IsError } from "../utils/IsError";
import { HTTPError } from "./HttpError";

export const HttpSuccess = <T>(
  res: NextApiResponse,
  data: T | undefined | IError
) => {
  if (IsError(data)) return HTTPError(res, data.error);

  return data ? res.status(200).json(data) : res.status(200).end();
};
