export type User = {
  name: string;
};

export const isUser = (user: unknown): user is User => user !== false;
