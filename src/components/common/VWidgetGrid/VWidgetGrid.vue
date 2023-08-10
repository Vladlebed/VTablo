<template>
  <grid-layout
    :layout="computedWidgets"
    :col-num="colNum"
    :row-height="rowsHeight"
    :is-draggable="editMode"
    :is-resizable="editMode"
    :vertical-compact="false"
    :use-css-transforms="true"
    :max-rows="maxRows"
    :margin="[0, 0]"
    :prevent-collision="false"
    responsive
  >
    <template #item="{ item }">
      <the-widget
        :widget="item"
        :edit-mode="editMode"
        @remove-widget="removeWidget(item)"
      />
    </template>
  </grid-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { IWidgetConfig } from '@/components/widget/config'
import TheWidget from '@/components/widget/TheWidget.vue'
import { GridLayout } from "grid-layout-plus";
import { widgetComponentFactory } from "@/components/widget/config";
import type { IFormattedGridWidget } from "@/components/common/VWidgetGrid/config";

export default defineComponent({
  name: 'VWidgetGrid',
  components: { GridLayout, TheWidget },
  emits: ['update:widgets'],

  props: {
    widgets: {
      type: Array<IWidgetConfig<any>>,
      default: () => [],
    },

    editMode: {
      type: Boolean,
      default: false,
    },

    colNum: {
      type: Number,
      default: 12,
    },

    rowsHeight: {
      type: Number,
      default: window.innerHeight / 12,
    },

    maxRows: {
      type: Number,
      default: Infinity,
    },
  },

  computed: {
    computedWidgets(): IFormattedGridWidget<any>[] {
      return this.formatWidgets(this.widgets)
    },
  },

  methods: {
    formatWidgets(widgetList: IWidgetConfig<any>[]): IFormattedGridWidget<any>[] {
      return widgetList.map(widgetConfig => {
        const widgetWrapper = widgetComponentFactory(widgetConfig.type)
        return {
          i: widgetConfig.id,
          x: widgetConfig.position.x,
          y: widgetConfig.position.y,
          h: widgetConfig.size.h,
          w: widgetConfig.size.w,
          minH: widgetWrapper.size.minH,
          minW: widgetWrapper.size.minW,
          maxW: widgetWrapper.size.maxW,
          maxH: widgetWrapper.size.maxH,
          static: false,
          widgetConfig,
          widgetWrapper,
        }
      })
    },

    removeWidget(widget): void {
      const index = this.widgets.findIndex(({ id }) => id === widget.i)
      const widgets = [...this.widgets]
      widgets.splice(index, 1)
      this.$emit('update:widgets', widgets)
    },
  },
})
</script>

<style scoped lang="scss">
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
