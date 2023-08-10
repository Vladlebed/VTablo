<template>
  <div>
    <p class="text-error">Ошибка: {{ error }}</p>
    <v-btn
      v-if="refreshFunction"
      @click="refreshFunction"
    >
      Перезагрузить данные
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'VErrorFiller',

  props: {
    error: {
      type: [String, Object, null],
      default: 'Неизвестная',
    },

    refreshFunction: {
      type: Function,
    },
  },
}
</script>
