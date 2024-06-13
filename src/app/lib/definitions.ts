export type Account = {
  name: string;
  password: string;
  borrowing: number;
};

export type Book= {
  name: string,
  author: string,
  time: string,
  cata: string,
  description: string,
};

export type Comment = {
  id: number,
  content: string,
};

export type History = {
  id: number,
  person: string,
};
