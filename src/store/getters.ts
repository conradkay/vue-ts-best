import { TState, TTodos, TTodo } from '@/types/state'

export const filters = {
  all: (todo: TTodo) => true,
  completed: (todo: TTodo) => todo.completed,
  ongoing: (todo: TTodo) => !todo.completed
}

export const filterTodos = (state: TState): TTodos => {
  const result: TTodos = {}

  Object.values(state.todos).map(todo => {
    if (filters[state.filter](todo)) {
      result[todo.id] = todo
    }
  })

  return result
}
