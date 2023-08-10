<template>
  <slot
    v-if="isLoading"
    name="loader"
    :is-loading="isLoading"
  >
    <v-loading />
  </slot>
  <slot
    v-else-if="error"
    name="error"
    :error="error"
  >
    <v-error-filler :error="error" :refresh-function="refreshFunction" />
  </slot>
  <div v-else-if="!$slots.default() && init">
    <slot>
      Данные отсутствуют
      <v-btn
        v-if="refreshFunction"
        @click="refreshFunction"
      >
        Перезагрузить данные
      </v-btn>
    </slot>
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VErrorFiller from "@/components/common/VErrorFiller/VErrorFiller.vue";
import VLoading from "@/components/common/VLoading/VLoading.vue";

export default defineComponent({
  name: 'VLoadContent',

  components: {
    VLoading,
    VErrorFiller,
  },

  props: {
    promise: {
      type: [Promise, Array, null],
    },

    refreshFunction: {
      type: Function,
    },
  },

  data() {
    return {
      isLoading: false,
      init: false,
      error: null,
    }
  },

  methods: {
    execute(value) {
      if (!value) return
      this.error = null
      this.isLoading = true
      let promise = Promise.resolve()

      if (Array.isArray(value) && value.every((el) => el instanceof Promise)) {
        promise = Promise.allSettled(value)
          .then(r => {
            r.forEach((request) => {
              if (request.status === 'rejected') throw new Error(request.reason)
            })
            return r.map(({ value }) => value)
          })
      } else if (value instanceof Promise) {
        promise = value
      }

      promise
        .catch((err) => {
          this.error = err
          console.error(err)
        })
        .finally(() => {
          const type = Array.isArray(this.promise) ? [] : null
          this.$emit('update:promise', type)
          this.init = true
          this.isLoading = false
        })
    },
  },

  watch: {
    promise: {
      deep: true,
      immediate: true,
      handler(value) {
        if (Array.isArray(value) && !value.length) return
        this.execute(value)
      },
    },
  },
})
</script>
