<template>
  <v-app class="app bg-transparent">
    <v-layout>
      <the-sidebar />
      <v-main>
        <v-widget-grid
          :widgets="widgets"
          :edit-mode="editMode"
          @update:widgets="updateWidgets"
        />
        <v-dialog
          v-for="(dialog, i) in dialogs"
          :key="i"
          :model-value="true"
          :name="dialog.name"
          :allow-close="dialog.allowClose"
          :class="dialog.dialogClassList"
          class="dialog"
        >
          <component :is="dialog.component" v-bind="dialog.props" />
        </v-dialog>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import { reactive } from 'vue'
import VWidgetGrid from '@/components/common/VWidgetGrid/VWidgetGrid.vue'
import { dialogs } from "@/utils/dialog.ts";
import TheSidebar from "@/components/single/TheSidebar/TheSidebar.vue";

const widgets = reactive([])

export default {
  components: {
    TheSidebar,
    VWidgetGrid,
  },

  setup() {
    return {
      dialogs,
    }
  },

  data() {
    return {
      widgets: widgets,
      editMode: false,
    }
  },

  methods: {
    updateWidgets(w) {
      this.widgets = w
    },
  },
}
</script>

<style lang="scss">
@use 'vuetify/settings';
@import "./assets/styles/transitions.scss";
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Rubik:wght@400;700&display=swap');
$body-font-family: 'Rubik';

body, html {
  overflow: hidden !important;
  background: #181818;
  font-family: $body-font-family, sans-serif !important;
}

.gap-4 {
  gap: 16px;
}

.dialog {
  z-index: 99999;
}
</style>
