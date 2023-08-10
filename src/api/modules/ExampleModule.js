import AbstractApiModule from '@/api/AbstractApiModule'

const urlFactory = {
  something: '/something',
}

export default class ExampleModule extends AbstractApiModule {
  constructor(options = {}) {
    super(options)
    this.apiURL = options.apiURL
  }

  getSomething() {
    return this.get(urlFactory.something)
  }

  putSomething(data) {
    return this.put(urlFactory.something, data)
  }

  postSomething(data) {
    return this.post(urlFactory.something, data)
  }

  deleteSomething(data) {
    return this.delete(urlFactory.something, data)
  }
}
