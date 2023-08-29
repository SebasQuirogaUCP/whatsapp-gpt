import { NextApiResponse } from "next";

export const HttpErrorWithCode = (
  res: NextApiResponse,
  error: string,
  statusCode?: number
) => {
  return res.status(statusCode ?? 500).json(error);
};
