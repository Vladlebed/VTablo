<template>
  <div class="pa-4 h-100 position-relative">
    <div class="widget-areal" />
    <div class="widget h-100 overflow-hidden">
      <component
        :is="widgetComponent"
        :widget-config="widgetConfig"
        :class="padding"
        class="widget__wrapper h-100"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VLoading from "@/components/common/VLoading/VLoading.vue";
import { IFormattedGridWidget } from "@/components/common/VWidgetGrid/config";

export default defineComponent({
  name: "TheWidget",
  components: { VLoading },

  emits: ['move-widget', 'remove-widget'],

  props: {
    widget: {
      type: Object as PropType<IFormattedGridWidget<any>>,
      default: () => ({}),
    },
  },

  computed: {
    padding() {
      return `pa-${this.widget.widgetWrapper?.padding ?? 4}`
    },

    widgetComponent() {
      return this.widget.widgetWrapper.component
    },

    widgetConfig() {
      return this.widget.widgetConfig
    },

    color() {
      return this.widget.widgetWrapper?.color
    },
  },

  methods: {
    removeWidget() {
      this.$emit('remove-widget')
    },
  },
})
</script>

<style lang="scss" scoped>
.widget {
  background: #181818;
  border-radius: 30px;
  border: 2px solid v-bind(color);
  &__wrapper {
    z-index: -1;
    border-radius: 30px;
    box-shadow: -1px 3px 10px 3px v-bind(color);
    :deep(> div) {
      border-radius: 15px;
      overflow: hidden;
    }
  }
}
</style>
