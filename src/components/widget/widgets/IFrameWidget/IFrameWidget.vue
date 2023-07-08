<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "IFrameWidget",

  props: {
    widgetConfig: {
      type: Object,
      default: () => ({}),
    },
  }
})
</script>

<template>
  <iframe class="w-100 h-100" :src="widgetConfig.data.src">

  </iframe>
</template>

<style scoped>

</style>
