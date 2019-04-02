<script>
export const filters = {
  all: todos => Object.values(todos),
  completed: todos => Object.values(todos).filter(todo => todo.completed),
  ongoing: todos => Object.values(todos).filter(todo => !todo.completed)
}

//   @Prop() private msg!: string;
export default {
  name: 'TodoFilters',
  props: ['filter'],
  data: () => {
    return {
      filters
    }
  },
  methods: {
    changeFilter(newFilter) {
      this.$emit('changeFilter', newFilter)
    }
  }
}
</script>

<template>
  <div class="filter-container">
    <div
      v-for="(currFilter, index) in Object.keys(filters)"
      v-on:click="changeFilter(currFilter)"
      :key="index"
      v-bind:class="{ 'selected-button': currFilter === filter }"
    >{{ currFilter.toUpperCase() }}</div>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 8px 0px;
  padding: 8px;
}

.filter-container div {
  flex-grow: 1;
  cursor: pointer;
  color: #8e8e8e;
  padding: 5px;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  display: flex;
  border-radius: 5px;
}

.selected-button {
  color: #426ef4 !important;
}
</style>
