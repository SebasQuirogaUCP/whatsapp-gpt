import { Err } from "../utils/Err";

type Props = {
  uri: string | undefined;
  headers: [string, string][];
};

export const HttpGet = async <T>({ uri, headers }: Props) => {
  if (!uri) {
    return Err("URI is required");
  }

  const response = await fetch(uri, {
    method: "GET",
    headers: headers,
  });

  try {
    const responseTypes = await response.json();
    return <T>responseTypes;
  } catch (e) {
    return Err(`Error fetching data from ${uri}`);
  }
};
