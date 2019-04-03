import { TState } from './../types/state';
export const defaultState: TState = {
  filter: 'all',
  todos: {
    'todo-1': {
      id: 'todo-1',
      title: 'Do Groceries (1)',
      completed: false
    },
    'todo-2': {
      id: 'todo-2',
      title: 'Believe in Myself (2)',
      completed: true
    },
    'todo-3': {
      id: 'todo-3',
      title: 'Probably Tonight (3)',
      completed: false
    }
  }
}