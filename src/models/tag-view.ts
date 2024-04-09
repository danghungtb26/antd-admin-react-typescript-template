import { model } from '@decorators/model'
import { Base } from './base'
import { field } from '@decorators/field'
import { generateRandomId } from '@commons/id'

@model()
export class TagViewModel extends Base {
  @field()
  title?: string

  @field('title_key')
  titleKey?: string

  @field()
  path?: string

  @field()
  params?: any

  //   constructor(json) {
  //     super(json)
  //     console.log('🚀 ~ TagViewModel ~ constructor ~ json:', json)
  //   }

  @field()
  deletable: boolean = true

  static override fromJson(json: {
    title?: string
    title_key?: string
    path: string
    params?: any
    deletable?: boolean
  }): TagViewModel {
    return new TagViewModel({ ...json, id: generateRandomId() })
  }

  static _dashboard: TagViewModel

  static get dashboard() {
    if (!this._dashboard) {
      const tagView = TagViewModel.fromJson({
        title: 'Dashboard',
        path: '/dashboard',
        deletable: false,
      })
      console.log('🚀 ~ TagViewModel ~ getdashboard ~ tagView:', tagView)
      this._dashboard = tagView
    }
    return this._dashboard
  }
}
