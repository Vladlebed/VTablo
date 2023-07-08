<template>
  <div class="d-flex flex-column fill-height">
    <div class="d-flex flex-grow-1 flex-wrap align-content-start">
      <div v-for="link in links" class="mr-4 mt-2">
        <a :href="link.href" :target="blank ? '__blank' : '_self'" class="d-flex align-center text-decoration-none justify-center">
          <img class="icon" :src="`${link.href}/favicon.ico`" alt="">
          <span class="ml-2 text-white">{{ link.text }}</span>
        </a>
      </div>
    </div>
    <form @submit.prevent="addLink">
      <v-row>
        <v-col>
          <v-text-field v-model="link" label="Ссылка" density="comfortable" hide-details/>
        </v-col>
        <v-col>
          <v-text-field v-model="name" label="Название ссылки" density="comfortable" hide-details/>
        </v-col>
        <v-col>
          <v-btn :disabled="!link" type="submit">Добавить ссылку</v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "QuickLinksWidget",

  props: {
    blank: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      link: '',
      name: '',
      links: [
        {
          href: 'https://vk.com',
          text: 'vk.com'
        }
      ]
    }
  },

  methods: {
    addLink() {
      this.links.push({
        href: this.link,
        text: this.name || this.link
      })
      this.name = ''
      this.link = ''
    }
  }
})
</script>


<style lang="scss" scoped>
.icon {
  max-width: 30px;
  max-height: 30px;
}
</style>
