<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "TheWidgetLayout",

  emits: ['submit'],

  methods: {
    submit(e) {
      this.$emit('submit', e)
    },
  },
})
</script>

<template>
  <div class="d-flex flex-column fill-height">
    <div class="flex-grow-1 overflow-hidden position-relative">
      <div class="position-absolute layout">
        <slot />
      </div>
    </div>
    <form class="d-flex gap-4 pt-4" @submit.prevent="submit">
      <slot name="controls" />
    </form>
  </div>
</template>

<style scoped>
.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
}
</style>
