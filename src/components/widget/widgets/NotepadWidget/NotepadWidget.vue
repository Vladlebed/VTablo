<template>
  <div class="fill-height overflow-hidden">
    <v-textarea label="Заметки" auto-grow class="fill-height" hide-details />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NotepadWidget"
})
</script>

<style scoped>

</style>
