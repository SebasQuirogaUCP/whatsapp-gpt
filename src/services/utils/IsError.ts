export type IError = {
  error: string;
};

export const IsError = (entity: any): entity is IError =>
  entity?.error !== undefined;
