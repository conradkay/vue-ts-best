export type TTodo = {
  id: string;
  title: string;
  completed: boolean;
}

export type TTodos = {
  [id: string]: TTodo
}