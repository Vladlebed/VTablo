import AbstractApiModule from "@/api/AbstractApiModule";

const urlFactory = {
  getRuPeriodJson: (period) => `/get/ru/${period}/json`,
}

export default class ProductionCalendarModule extends AbstractApiModule {
  constructor(options = {}) {
    super(options)
  }

  getCalendar(period = '', params = {}) {
    return this.get(urlFactory.getRuPeriodJson(period), { params })
  }
}
