import { defineAsyncComponent, markRaw, Ref, ref } from 'vue'
import { defaultsDeep } from 'lodash'

export const dialogs: Ref<Array<IDialog>> = ref([])

export interface IDialog {
  name: string,
  component: any,
  allowClose: boolean,
  dialogClassList: string,
  props: {
    [key: string]: any
  },
}

export const defaultDialog: IDialog = {
  name: '',
  component: null,
  allowClose: true,
  dialogClassList: '',
  props: {},
}

export const pushDialog = (dialog: IDialog) => {
  const dialogObject: IDialog = defaultsDeep(dialog, defaultDialog)
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

export const getDialog = (name: string) => {
  return dialogs.value?.find(el => el.name === name)
}

export const closeDialog = (name: string) => {
  if (!name) { return }
  dialogs.value = dialogs.value?.filter(el => el.name !== name)
}
