import { HttpPost } from "../http/HttpPost";

export const SendMessage = async (message: string) => {
  // TODO: Type objects
  const apiResponse = await HttpPost<{ response: string }>({
    uri: "/api/openai/send-message",
    body: {
      message,
    },
  });
};
