<script lang="ts">
import { defineComponent } from 'vue'
import { pushDialog } from '@/utils/dialog.js'

export default defineComponent({
  name: "TheSidebar",

  data() {
    return {
      drawer: true,
      rail: true,
      check: false,
    }
  },

  methods: {
    openSettings() {
      pushDialog({
        name: 'MainSettings',
        component: () => import('@/components/dialogs/MainSettingsDialog.vue'),
        allowClose: true,
        dialogClassList: '',
        props: {},
      })
    },
  },
})
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    color="black"
    :rail="rail"
  >
    <div class="d-flex flex-column justify-space-between fill-height">
      <div>
        <v-list-item @click="openSettings">
          <span v-if="rail">V</span>
          <span v-else>VTABLO</span>
        </v-list-item>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-pen"
            title="Edit mode"
            :active="editMode"
            active-color="primary"
            @click="editMode = !editMode"
          />
          <v-list-item
            prepend-icon="mdi-check"
            title="Check"
            :active="check"
            active-color="primary"
            @click="check = !check"
          />
        </v-list>

        <v-spacer />

        <v-list-item
          :prepend-icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
          title="Hidden"
          :active="!rail"
          active-color="secondary"
          @click="rail = !rail"
        />
      </div>
      <div class="overflow-hidden d-flex flex-column gap-4 justify-center pa-4">
        <v-tooltip text="Загрузка завершена">
          <template #activator="{ props }">
            <transition name="fade" mode="out-in">
              <v-avatar
                v-if="check"
                v-bind="props"
                size="24"
                color="green"
              >
                <v-icon size="16">mdi-check</v-icon>
              </v-avatar>
              <v-progress-circular
                v-else
                v-bind="props"
                color="primary"
                size="24"
                indeterminate
              />
            </transition>
          </template>
        </v-tooltip>
        <v-tooltip text="Загрузка завершена">
          <template #activator="{ props }">
            <transition name="fade" mode="out-in">
              <v-avatar
                v-if="check"
                v-bind="props"
                size="24"
                color="green"
              >
                <v-icon size="16">mdi-check</v-icon>
              </v-avatar>
              <v-progress-circular
                v-else
                v-bind="props"
                color="primary"
                size="24"
                indeterminate
              />
            </transition>
          </template>
        </v-tooltip>
      </div>
    </div>
  </v-navigation-drawer>
</template>
