<script lang="ts">
import Vue from 'vue'
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import uuid from 'uuid'
import { filters, default as TodoFilters } from './components/TodoFilters.vue'
import { TTodos, TTodo } from './types/todo'
import { Component } from 'vue-property-decorator'

export type TFilter = 'all' | 'completed' | 'ongoing'

@Component({
  components: { AddTodo, Todos, TodoFilters }
})
class App extends Vue {
  filters = filters
  filter: TFilter = 'all'
  todos: TTodos = {
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

  createTodo(name: string) {
    const newId = uuid()

    Vue.set(this.todos, newId, {
      id: newId,
      completed: false,
      title: name
    })
  }

  editTodoItem(id: string, newTodo: TTodo) {
    if (!newTodo) {
      Vue.delete(this.todos, id)
    } else {
      Vue.set(this.todos, id, newTodo)
      this.todos[id] = newTodo
    }
  }

  editFilter(newFilter: TFilter) {
    console.log(newFilter)
    this.filter = newFilter
  }
}
export default App
</script>

<template>
  <div id="app">
    <AddTodo @createTodo="createTodo"/>
    <Todos v-bind:todos="filters[filter](todos)" @editTodoItem="editTodoItem"/>
    <TodoFilters @changeFilter="editFilter" v-bind:filter="filter"/>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 800px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
