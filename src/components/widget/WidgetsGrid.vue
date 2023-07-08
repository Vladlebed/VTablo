<template>
  <grid-layout
    :layout="widgets"
      :responsive-layouts="presetLayouts"
     :col-num="12"
     :row-height="rowsHeight"
     :is-draggable="editMode"
     :is-resizable="editMode"
     :vertical-compact="false"
     :use-css-transforms="true"
      :max-rows="12"
      responsive
     @update:widgets="$emit('update:widgets', $event)"
  >
    <grid-item
      v-for="widget in widgets"
     :key="widget.id"
     :static="widget.static"
     :x="widget.x"
     :y="widget.y"
     :w="widget.w"
     :h="widget.h"
     :i="widget.i"
      :min-w="widget.minW"
      :max-w="widget.maxW"
    >
      <div class="fill-height rounded-xl pa-4 bg-blue-accent-2">
        <component :is="getWidget(widget)"/>
      </div>
    </grid-item>
  </grid-layout>
</template>

<script>
import {defineComponent} from "vue";
import { GridLayout, GridItem } from 'grid-layout-plus'
import {widgetComponentFactory} from "@/components/widget/config";
export default defineComponent({
  name: 'WidgetsGrid',

  components: {
    GridLayout,
    GridItem
  },

  props: {
    widgets: {
      type: Array,
      default: () => []
    },
    presetLayouts: {
      type: Object,
      default: () => ({})
    },
    editMode: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      draggable: true,
      resizable: true,
      index: 0,
      rowsHeight: (window.innerHeight / 12) - 11
    }
  },

  methods: {
    itemTitle(item) {
      let result = item.i;
      if (item.static) {
        result += " - Static";
      }
      return result;
    },

    getWidget(widget) {
      const w = widgetComponentFactory(widget.name)

      console.log('w', w)
      return w.main.component
    }
  }
})
</script>

<style scoped>
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
