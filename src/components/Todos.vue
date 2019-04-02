<template>
  <div class="todo-app">
    <TodoItem v-bind:todo="todo" v-for="todo in todos" :key="todo.id" @editTodo="editTodo"/>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'Todos',
  components: {
    TodoItem
  },
  props: ['todos'],
  methods: {
    editTodo(id, newTodo) {
      this.$emit('editTodoItem', id, newTodo)
    }
  }
}
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
