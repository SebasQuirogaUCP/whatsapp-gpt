import { HttpPost } from "../http/HttpPost";

export const OpenAISendMessage = async (message: string) => {
  console.info(`${process.env.OPENAI_SECRET}`)
  
  const headers: [string, string][] = [
    [`Authorization`, `Bearer ${process.env.OPENAI_SECRET}`],
    [`Content-Type`, `application/json`],
    [`OpenAI-Organization`, `Personal`],
  ];

  const openApiResponse = await HttpPost({
    uri: "https://api.openai.com/v1/chat/completions",
    headers,
    body: {
      model: `gpt-3.5-turbo`,
      messages: [{ role: "user", content: `${message}` }],
      temperature: 0.7,
    },
  });

  console.info("Auth response", openApiResponse);

  return "";
};
