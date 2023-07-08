<template>
  <v-app class="app bg-transparent">
    <v-layout>
      <v-navigation-drawer color="black" v-model="drawer" :rail="rail" permanent>
        <v-list-item>
          <span v-if="rail">V</span>
          <span v-else>VTABLO</span>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-pen" title="Edit mode" :active="editMode" active-color="primary" @click="editMode = !editMode" />
        </v-list>

        <v-spacer />

        <v-list-item :prepend-icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'" title="Hidden" :active="!rail" active-color="secondary" @click="rail = !rail" />
      </v-navigation-drawer>
      <v-main>
        <v-widget-grid
          :widgets="widgets"
          :edit-mode="editMode"
          @update:widgets="updateWidgets"
        />
      </v-main>
    </v-layout>
    <v-dialog
      v-for="(dialog, i) in dialogs"
      :key="i"
      :name="dialog.name"
      :allow-close="dialog.allowClose"
      :class="dialog.dialogClassList"
    >
      <component :is="dialog.component" v-bind="dialog.props" />
    </v-dialog>
  </v-app>
</template>

<script>
import { reactive } from 'vue'
import VWidgetGrid from '@/components/common/VWidgetGrid/VWidgetGrid.vue'
import {dialogs, pushDialog} from "@/utils/dialog";

const widgets = reactive([
  {
    name: 'search',
    widget: 'search',
    id: 0,
    position: {
      x: 4,
      y: 3,
    },

    size: {
      w: 4,
      h: 1,
    },

    static: false,
    data: {},
  },
  {
    name: 'search',
    widget: 'todo',
    id: 1,
    position: {
      x: 0,
      y: 0,
    },

    size: {
      w: 4,
      h: 4,
      minH: 1,
      minW: 1,
      maxH: Infinity,
      maxW: Infinity,
    },

    static: false,
    data: {},
  },
  // {
  //   name: 'search',
  //   widget: 'todo',
  //   id: 2,
  //   position: {
  //     x: 0,
  //     y: 4,
  //   },
  //
  //   size: {
  //     w: 4,
  //     h: 4,
  //     minH: 1,
  //     minW: 1,
  //     maxH: Infinity,
  //     maxW: Infinity,
  //   },
  //
  //   static: false,
  //   data: {},
  // },
  // {
  //   name: 'search',
  //   widget: 'todo',
  //   id: 3,
  //   position: {
  //     x: 0,
  //     y: 8,
  //   },
  //
  //   size: {
  //     w: 4,
  //     h: 2,
  //     minH: 1,
  //     minW: 1,
  //     maxH: Infinity,
  //     maxW: Infinity,
  //   },
  //
  //   static: false,
  //   data: {},
  // },
  // {
  //   name: 'search',
  //   widget: 'todo',
  //   id: 4,
  //   position: {
  //     x: 4,
  //     y: 8,
  //   },
  //
  //   size: {
  //     w: 4,
  //     h: 4,
  //     minH: 1,
  //     minW: 1,
  //     maxH: Infinity,
  //     maxW: Infinity,
  //   },
  //
  //   static: false,
  //   data: {},
  // },
  // {
  //   name: 'search',
  //   widget: 'todo',
  //   id: 5,
  //   position: {
  //     x: 8,
  //     y: 8,
  //   },
  //
  //   size: {
  //     w: 4,
  //     h: 4,
  //     minH: 1,
  //     minW: 1,
  //     maxH: Infinity,
  //     maxW: Infinity,
  //   },
  //
  //   static: false,
  //   data: {},
  // },
  // {
  //   name: 'search',
  //   widget: 'todo',
  //   id: 6,
  //   position: {
  //     x: 4,
  //     y: 0,
  //   },
  //
  //   size: {
  //     w: 4,
  //     h: 4,
  //     minH: 1,
  //     minW: 1,
  //     maxH: Infinity,
  //     maxW: Infinity,
  //   },
  //
  //   static: false,
  //   data: {},
  // },
  // {
  //   name: 'search',
  //   widget: 'iframe',
  //   id: 7,
  //   position: {
  //     x: 8,
  //     y: 0,
  //   },
  //
  //   size: {
  //     w: 4,
  //     h: 4,
  //     minH: 1,
  //     minW: 1,
  //     maxH: Infinity,
  //     maxW: Infinity,
  //   },
  //
  //   static: false,
  //   data: {
  //     src: 'https://web.telegram.org/a/#1409851850'
  //   },
  // },
  // {
  //   name: 'search',
  //   widget: 'iframe',
  //   id: 8,
  //   position: {
  //     x: 8,
  //     y: 4,
  //   },
  //
  //   size: {
  //     w: 4,
  //     h: 4,
  //     minH: 1,
  //     minW: 1,
  //     maxH: Infinity,
  //     maxW: Infinity,
  //   },
  //
  //   static: false,
  //   data: {
  //     src: 'https://fincalculator.ru/kalendar'
  //   },
  // },
  // {
  //   name: 'search',
  //   widget: 'todo',
  //   id: 10,
  //   position: {
  //     x: 4,
  //     y: 4,
  //   },
  //
  //   size: {
  //     w: 4,
  //     h: 2,
  //     minH: 1,
  //     minW: 1,
  //     maxH: Infinity,
  //     maxW: Infinity,
  //   },
  //
  //   static: false,
  //   data: {},
  // },
])

export default {
  components: {
    VWidgetGrid,
  },

  setup() {
    return {
      dialogs
    }
  },

  data() {
    return {
      widgets: widgets,
      editMode: false,
      drawer: true,
      rail: true
    }
  },

  methods: {
    updateWidgets(w) {
      // this.layout.lg = w
      this.widgets = w
    },
    openSettings() {
      pushDialog({
        name: 'MainSettings',
        component: () => import('@/components/dialogs/MainSettingsDialog.vue'),
        allowClose: true,
        dialogClassList: '',
        props: {},
      })
    }
  },
}
</script>

<style lang="scss">
@use 'vuetify/settings';

body, html {
  overflow: hidden !important;
  background: #181818;
}
</style>
