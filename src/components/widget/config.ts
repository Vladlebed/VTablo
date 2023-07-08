// TODO протипизировать

import { defaultsDeep, mapValues } from 'lodash'
import { defineAsyncComponent } from 'vue'
import VLoading from '@/components/common/VLoading/VLoading.vue'
import VError from '@/components/common/VError/VError.vue'

export interface IDataSource<Params> {
  url: string
  params: Params
}
export interface IWidgetConfig<WidgetData, Params> {
  name?: string
  widget: string
  id: number | string
  position: {
    x: 0
    y: 0
    container: boolean
  }
  size: {
    w: 1
    h: 1
    minH: number
    minW: number
    maxW: number
    maxH: number
  }
  async: boolean
  static: boolean
  source?: IDataSource<Params>
  data: WidgetData
}

export interface IWidgetLayouts {
  [key: string]: Array<IWidgetConfig<any, any>>
}

/* #region WidgetComponent */
const defaultWidgetComponent = {
  main: {
    component: 'div',
    properties: {
      size: {
        minH: 1,
        minW: 1,
        maxH: Infinity,
        maxW: Infinity,
      }
    }
  },
  info: { allow: true, title: 'Информация', component: 'div' },
  settings: { allow: true, title: 'Настройки', component: 'div' },
}

const asyncComponentWrapper = (loader: any) => defineAsyncComponent({
  loader,
  loadingComponent: VLoading,
  errorComponent: VError,
})

/** List of possible widgets */
export const widgetComponents = mapValues({
  search: {
    main: { component: asyncComponentWrapper(() => import('@/components/widget/widgets/SearchWidget/SearchWidget.vue')) },
    info: { allow: true, title: 'Test info', component: 'div' },
    settings: { allow: true, title: 'Test settings', component: 'div' },
  },
  quickLinks: {
    main: { component: asyncComponentWrapper(() => import('@/components/widget/widgets/QuickLinksWidget/QuickLinksWidget.vue')) },
    info: { allow: true, title: 'Test info', component: 'div' },
    settings: { allow: true, title: 'Test settings', component: 'div' },
  },
  notepad: {
    main: {
      component: asyncComponentWrapper(() => import('@/components/widget/widgets/NotepadWidget/NotepadWidget.vue')),
      properties: {
        size: {
          minH: 1,
          minW: 1,
          maxH: Infinity,
          maxW: Infinity,
        }
      }
    },
    info: { allow: true, title: 'Test info', component: 'div' },
    settings: { allow: true, title: 'Test settings', component: 'div' },
  },
  todo: {
    main: {
      component: asyncComponentWrapper(() => import('@/components/widget/widgets/TodoWidget/TodoWidget.vue')),
      properties: {
        size: {
          minH: 3,
          minW: 2,
          maxH: Infinity,
          maxW: Infinity,
        }
      }
    },
    info: { allow: true, title: 'Test info', component: 'div' },
    settings: { allow: true, title: 'Test settings', component: 'div' },
  },
  iframe: {
    main: {
      component: asyncComponentWrapper(() => import('@/components/widget/widgets/IFrameWidget/IFrameWidget.vue')),
      properties: {
        size: {
          minH: 1,
          minW: 1,
          maxH: Infinity,
          maxW: Infinity,
        }
      }
    },
    info: { allow: true, title: 'Test info', component: 'div' },
    settings: { allow: true, title: 'Test settings', component: 'div' },
  },
}, w => defaultsDeep(w, defaultWidgetComponent))

const errorWidgetComponent = defaultsDeep({
  main: { component: asyncComponentWrapper(() => import('@/components/widget/widgets/ErrorWidget.vue')) },
  info: { allow: false },
  settings: { allow: false },
}, defaultWidgetComponent)

/** Component factory */
export const widgetComponentFactory = (widgetName: string) => {
  if (widgetName && widgetComponents[widgetName as keyof typeof widgetComponents]) {
    return widgetComponents[widgetName as keyof typeof widgetComponents]
  }
  return errorWidgetComponent
}
/* #endregion WidgetComponent */

export const defaultGridLayout = {
  breakpoint: 'xl',
  grid: { cols: 4, rows: 3 },
  gap: {
    value: 1,
    units: 'rem',
  },
}
/* #endregion Layout */

export const defaultWidgetTemplateObj = {
  show: false,
  initiator: '',
  widget: null,
  msDownOffset: { x: 0, y: 0 },
}
