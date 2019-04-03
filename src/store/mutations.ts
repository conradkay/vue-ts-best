import { TState } from './../types/state'
import uuid from 'uuid'

import Vue from 'vue'

import { TTodo, TFilter } from '@/types/state'

export const addTodo = (state: TState, name: string) => {
  const newId = uuid()

  Vue.set(state.todos, newId, {
    id: newId,
    title: name,
    completed: false
  })
}
export const deleteTodo = (state: TState, id: string) => {
  Vue.delete(state.todos, id)
}
export const editTodo = (state: TState, newTodo: TTodo) => {
  state.todos[newTodo.id] = newTodo
}
export const editFilter = (state: TState, newFilter: TFilter) => {
  state.filter = newFilter
}
