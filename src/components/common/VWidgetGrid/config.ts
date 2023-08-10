import { IWidgetComponent, IWidgetConfig } from "@/components/widget/config";

export interface IFormattedGridWidget<WidgetData> {
  i: string
  x: number
  y: number
  h: number
  w: number
  minH: number
  minW: number
  maxW: number
  maxH: number
  static: boolean
  widgetConfig: IWidgetConfig<WidgetData>
  widgetWrapper: IWidgetComponent<WidgetData>
}
