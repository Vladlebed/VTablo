<template>
  <div class="d-flex flex-column fill-height">
    <div class="flex-grow-1">
      <div v-if="!todos.length" class="fill-height w-100 d-flex justify-center align-center secondary">
        Записей нет
      </div>
      <div
        v-for="todo in todos"
        class="pa-2"
        @input="todo = $event"
      >
        {{todo}}
        <v-divider class="mt-2"/>
      </div>
    </div>
    <form class="d-flex" @submit.prevent="addTodo">
      <v-btn class="mr-4" :disabled="!todo" color="primary" type="submit" >
        <v-icon icon="mdi-check" />
      </v-btn>
      <v-text-field v-model="todo" rows="1" hide-details density="compact"/>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TodoWidget",

  data() {
    return {
      todo: '',
      todos: []
    }
  },

  methods: {
    addTodo() {
      if (!this.todo) return
      this.todos.push(this.todo)
      this.todo = ''
    }
  }
})
</script>

<style scoped>

</style>
