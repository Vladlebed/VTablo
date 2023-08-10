import axios from 'axios'

export default class ApiClient {
  constructor(options = {}) {
    this.axios = axios.create({
      ...options,
    })
  }
}
