<template>
  <div class="todo-app">
    <TodoItem v-bind:todo="todo" v-for="todo in todos" :key="todo.id" @editTodo="editTodo"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

import TodoItem from './TodoItem.vue'
import { TTodos, TTodo } from '../types/todo'
@Component({
  components: {
    TodoItem
  }
})
class Todos extends Vue {
  @Prop() todos!: TTodo[]

  editTodo(id: string, newTodo: TTodo) {
    this.$emit('editTodoItem', id, newTodo)
  }
}

export default Todos
</script>

<style scoped>
.todo-app {
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  background: #fff;
  margin: 20px auto 40px auto;
  position: relative;
  border: 1px solid #c6c6c6;
  list-style: none;
}
</style>
