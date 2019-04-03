import { filterTodos } from './getters'
import { addTodo, editTodo, editFilter, deleteTodo } from './mutations'
import { TState, TTodos } from './../types/state'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store<TState>({
  state: {
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
  },
  mutations: {
    addTodo,
    editTodo,
    deleteTodo,
    editFilter
  },
  getters: {
    filterTodos
  }
})
