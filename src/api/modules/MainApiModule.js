import AbstractApiModule from '@/api/AbstractApiModule'
import ExampleModule from '@/api/modules/ExampleModule'

const urlFactory = {
  example: (apiURL = '') => `${apiURL}/example`,
  exampleUrlId: (id = 0) => `/example/url/${id}`,
}

export default class MainApiModule extends AbstractApiModule {
  constructor(options) {
    super(options)
    this.modules = {
      example: new ExampleModule({
        apiClient: this.client,
        apiURL: urlFactory.example(this.apiURL),
      }),
    }
  }

  getToken() {
    return localStorage.getItem('user')
  }

  // Методы, для которых возможно избыточно создавать отдельный модуль
  // ...
  getExample(id = 0) {
    return this.get(urlFactory.exampleUrlId(id))
  }
}
