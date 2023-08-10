import { defaultsDeep, mapValues } from 'lodash'
import { defineAsyncComponent } from 'vue'
import VLoading from '@/components/common/VLoading/VLoading.vue'
import VError from '@/components/common/VError/VError.vue'
import widgets from "@/components/widget/widgets";

export interface IWidgetConfig<WidgetData> {
  name?: string
  type: string
  id: string
  position: {
    x: 0
    y: 0
  }
  size: {
    w: 1
    h: 1
    minH: number
    minW: number
    maxW: number
    maxH: number
  }
  data: WidgetData
}

export interface IWidgetComponent<WidgetData> {
  name: string
  component: any
  size: {
    minH: number
    minW: number
    maxH: number
    maxW: number
  },
  padding: number
  color: string
  data: WidgetData
}

const defaultWidgetComponent: IWidgetComponent<any> = {
  name: 'empty widget',
  component: VError,
  size: {
    minH: 1,
    minW: 1,
    maxH: Infinity,
    maxW: Infinity,
  },
  padding: 4,
  color: 'rgb(228,28,88)',
  data: null,
}

export const asyncComponentWrapper = (loader: any) => defineAsyncComponent({
  loader,
  loadingComponent: VLoading,
  errorComponent: VError,
})

export const widgetComponents: { [key: string]: IWidgetComponent<any> } = mapValues(widgets, (w: IWidgetComponent<any>) => defaultsDeep(w, defaultWidgetComponent))

export const widgetComponentFactory = (widgetName: string): IWidgetComponent<any> => {
  if (widgetName && widgetComponents[widgetName as keyof typeof widgetComponents]) {
    return widgetComponents[widgetName as keyof typeof widgetComponents]
  }
  return defaultWidgetComponent
}
