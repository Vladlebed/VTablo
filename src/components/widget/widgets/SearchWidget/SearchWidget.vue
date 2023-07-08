<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SearchWidget"
})
</script>

<template>
  <div>
    <v-autocomplete label="Поиск" :flat="true" density="compact" hide-details variant="outlined" />
  </div>
</template>

<style scoped>

</style>
