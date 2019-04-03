export type TTodo = {
  id: string
  title: string
  completed: boolean
}

export type TTodos = {
  [id: string]: TTodo
}

export type TFilter = 'all' | 'completed' | 'ongoing'

export type TState = {
  todos: TTodos
  filter: TFilter
}
