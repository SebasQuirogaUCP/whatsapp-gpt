import { Err } from "../utils/Err";

type Props = {
  uri: string | undefined;
  body: any;
  headers?: [string, string][];
};

export const HttpPost = async <T>({ uri, headers, body }: Props) => {
  if (!uri) {
    return Err("URI is required");
  }

  const response = await fetch(uri, {
    method: "POST",
    headers: headers?.length === 0 ? [] : headers,
    body: JSON.stringify(body),
  });

  console.log("response: ", response);

  try {
    const responseTypes = await response.json();
    return <T>responseTypes;
  } catch (e) {
    return Err(`Error fetching data from ${uri}`);
  }
};
