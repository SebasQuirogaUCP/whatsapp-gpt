import { RandomUser } from "@/data/RandomUserType";
import { HTTPError } from "@/services/http/HttpError";
import { HttpGet } from "@/services/http/HttpGet";
import { HttpSuccess } from "@/services/http/HttpSuccess";
import { IsError } from "@/services/utils/IsError";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await HttpGet<RandomUser>({
    uri: `https://randomuser.me/api/?results=5`,
  });

  if (IsError(response)) {
    return HTTPError(res, response.error);
  }

  return HttpSuccess<RandomUser>(res, response);
}
