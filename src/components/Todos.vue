<template>
  <div class="todo-app">
    <div
      v-if="Object.values(filteredTodos).length === 0"
      class="no-todo-text"
    >You Have no Todos, Make Some!</div>
    <TodoItem v-bind:todo="todo" v-for="todo in filteredTodos" :key="todo.id" @editTodo="editTodo"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

import TodoItem from './TodoItem.vue'
import { TTodo, TTodos } from '@/types/state'
@Component({
  components: {
    TodoItem
  },
  computed: {
    filteredTodos() {
      return this.$store.getters.filterTodos
    }
  }
})
class Todos extends Vue {
  @Prop() todos!: TTodos

  editTodo(id: string, newTodo: TTodo) {
    this.$store.commit('editTodo', newTodo)
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

.no-todo-text {
  text-align: center;
  font-size: 22px;
  margin: auto;
}
</style>
