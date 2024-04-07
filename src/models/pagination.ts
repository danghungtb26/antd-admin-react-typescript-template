import { field } from '@decorators/field'
import { model } from '@decorators/model'

@model()
export class Pagination {
  @field('current_page')
  current: number = 0

  @field('total_page')
  max: number = 10

  @field()
  count: number = 0

  @field()
  total: number = 0

  @field()
  limit: number = 10

  // @ts-ignore
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(json?: any) {}

  afterMounted() {}

  static fromJson(json?: any) {
    return new this(json)
  }

  static get default() {
    return this.fromJson({
      current_page: 0,
      total_page: 10,
      count: 0,
      total: 0,
      limit: 10,
    })
  }
}
