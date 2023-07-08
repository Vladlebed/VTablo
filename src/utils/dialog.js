import { defineAsyncComponent, markRaw, ref } from 'vue'
import { defaultsDeep } from 'lodash'

export const dialogs = ref([])
export const defaultDialog = {
  name: '',
  component: null,
  allowClose: true,
  dialogClassList: '',
  props: {},
}

export const pushDialog = (dialog) => {
  const dialogObject = defaultsDeep(dialog, defaultDialog)
  const component = defineAsyncComponent({
    loader: dialogObject.component,
  })
  dialogObject.component = markRaw(component)
  dialogObject.props.name = dialogObject.name
  dialogs.value.push(dialogObject)
}

export const clearDialogs = () => {
  dialogs.value = []
}

export const getDialog = (name) => {
  return dialogs.value?.find(el => el.name === name)
}

export const closeDialog = (id) => {
  if (!id) { return }
  dialogs.value = dialogs.value?.filter(el => el.name !== id)
}
