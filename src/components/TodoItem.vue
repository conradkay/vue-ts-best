<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  data: function() {
    return {
      editing: false
    }
  },
  directives: {
    'todo-focus': function(el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  },
  methods: {
    todoClick() {
      this.$emit('editTodo', this.todo.id, {
        ...this.todo,
        completed: !this.todo.completed
      })
    },
    todoDelete() {
      this.$emit('editTodo', this.todo.id, undefined)
    },
    editTodo: function(bool) {
      this.editing = bool
    }
  }
}
</script>

<template>
  <div class="todo-item" v-bind:class="{
      'complete-todo': todo.completed
    }">
    <div
      v-on:click="todoClick(todo.id)"
      class="icon"
      v-bind:class="{
        complete: todo.completed
      }"
    />

    <div class="view" v-bind:class="{
        disabled: editing
      }">
      <label v-on:dblclick="editTodo(true)">{{ todo.title }}</label>
    </div>
    <input
      v-bind:class="{
        disabled: !editing
      }"
      class="edit"
      type="text"
      v-model="todo.title"
      v-todo-focus="todo == editedTodo"
      @keyup.enter="editTodo(false)"
      @keyup.esc="editTodo(false)"
    >

    <img
      v-on:click="todoDelete(todo.id)"
      src="https://image.flaticon.com/icons/svg/458/458594.svg"
      class="close-button"
    >
  </div>
</template>

<style scoped>
.todo-item {
  cursor: pointer !important;
  display: flex;
  position: relative;
  font-size: 24px;
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 8px;
  margin-top: 12px;
}

.icon {
  background-repeat: no-repeat;
  background-size: cover;
  height: 32px;
  width: 32px;
  margin-right: 8px;
  cursor: pointer;
  align-self: center;
  user-select: none;
  background-position: center left;
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
}

.complete-todo {
  text-decoration: line-through;
}

.disabled {
  display: none;
}

.edit {
  flex-grow: 1;
  margin-right: 8px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-left: 16px;
}

.complete {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E') !important;
}

.close-button {
  margin-left: auto;
  height: 32px;
  width: 32px;
  cursor: pointer;
  align-self: center;
  user-select: none; /* dont highlight */
}
</style>
