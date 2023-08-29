import { HttpSuccess } from "@/services/http/HttpSuccess";
import { OpenAISendMessage } from "@/services/openai/OpenAISendMessage";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const message = req.body.message;
  console.info("req.body", req.body);
  console.log("message: ", message);

//   if (!message) return HTTPError(res, "Please write a message");

  const openApiResponse = await OpenAISendMessage("message");

  return HttpSuccess(res, "");
}
