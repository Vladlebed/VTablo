import AbstractModel from '@/api/models/AbstractModel'

export default class ExampleModel extends AbstractModel {
  constructor(options = {}) {
    super(options)
    this.id = +options.id || 0
    this.name = options.name?.toString() || ''
    this.items = options.items?.map(item => ({
      id: +item.id || 0,
      name: item.name?.toString() || '',
    })) || []
  }
}
