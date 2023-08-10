import MainApiModule from '@/api/modules/MainApiModule'
import ProductionCalendarModule from "@/api/modules/widgets/ProductionCalendarModule";

export const mainApi = new MainApiModule({
  baseURL: '/',
  apiURL: '/api',
})

export const calendarApi = new ProductionCalendarModule({
  baseURL: '/calendar',
})

export default {
  mainApi,
  calendarApi,
}
