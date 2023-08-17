interface IError {
  error: string;
}

export const Err = (error: string) => {
  console.error(error);

  return { error: error } as IError;
};
