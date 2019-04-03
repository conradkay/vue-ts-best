<script lang="ts">
import Vue from 'vue'
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import uuid from 'uuid'
import { default as TodoFilters } from './components/TodoFilters.vue'
import { Component } from 'vue-property-decorator'
import { TFilter, TTodo } from './types/state'
import { TTodos } from './types/state'
import { State, Action, Getter } from 'vuex-class'

@Component({
  components: { AddTodo, Todos, TodoFilters }
})
class App extends Vue {
  @State('filter')
  filter!: TFilter
}

export default App
</script>

<template>
  <div id="app">
    <AddTodo/>
    <Todos v-bind:todos="this.$store.state.todos"/>
    <TodoFilters v-bind:filter="filter"/>
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
