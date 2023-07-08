<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TheWidget",

  props: {
    widgetConfig: {
      type: Object,
      default: () => ({}),
    },

    editMode: {
      type: Boolean,
      default: false,
    },

    widget: {
      type: Object,
      default: () => ({})
    }
  },

  emits: ['move-widget', 'remove-widget'],

  methods: {
    removeWidget() {
      this.$emit('remove-widget')
    },
  },
})
</script>

<template>
  <div class="pa-4 h-100 position-relative">
    <div class="widget-areal" />
    <div class="widget h-100">
      <div class="widget__wrapper h-100 pa-4">
        <component :is="widget.widgetWrapper.main.component" :widget-config="widget.widgetConfig" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.widget {
  background: rgba(255, 255, 255, 0.20);
  border-radius: 30px;
  border: 2px solid #741CE4;
  &-areal {
    width: 50%;
    height: 100%;
    border-radius: 400px;
    background: rgba(28, 132, 228, 0.67);
    filter: blur(150px);
    position: absolute;
    z-index: -1;
  }
  &__wrapper {
    z-index: -1;
    border-radius: 30px;
    box-shadow: 0px 0px 0.9686436653137207px 0px #5189D2, 0px 0px 1.9372873306274414px 0px #5189D2, 0px 0px 6.780505657196045px 0px #5189D2, 0px 0px 13.56101131439209px 0px #5189D2, 0px 0px 23.247447967529297px 0px #5189D2, 0px 0px 40.68303680419922px 0px #5189D2;
  }
}
.widget:hover {
  //.widget-areal {
  //  background: rgba(162, 89, 255, 0.55);
  //}
  .widget {
    border: 2px solid #741CE4;
  }
  //.widget__wrapper {
  //  background-color: #741CE4;
  //}
}
</style>
