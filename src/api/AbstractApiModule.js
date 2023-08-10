import ApiClient from '@/api/ApiClient'

export default class AbstractApiModule {
  constructor(options = {}) {
    this.baseURL = options.baseURL || '/'
    this.apiURL = options.apiURL || ''
    this.client = options.apiClient || new ApiClient({
      baseURL: this.baseURL,
      ...options.clientOptions || {},
    })
    this.clientInstanse = this.client.axios
  }

  setToken(token) {
    this.clientInstanse.defaults.headers.common['Authorization-Token'] = token
  }

  get(url = '', config = {}) {
    return this.clientInstanse.get(this.apiURL + url, config)
  }

  post(url = '', data, config = {}) {
    return this.clientInstanse.post(this.apiURL + url, data, config)
  }

  put(url = '', data, config = {}) {
    return this.clientInstanse.put(this.apiURL + url, data, config)
  }
}
