<template>
  <input v-model="message" placeholder="Add Todo" class="input" @keyup.enter="addTodo">
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
class AddTodo extends Vue {
  message = ''

  @Emit('createTodo')
  createTodo() {
    return this.message.trim()
  }
}

export default AddTodo
</script>

<style scoped>
.input {
  margin-top: 16px;
  font-size: 18px;
  width: 100%;
  padding: 14px 20px;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  cursor: pointer;
}
</style>
