import { model } from '@decorators/model'
import { clone } from 'lodash'
import { Base } from './base'
import { field } from '@decorators/field'

@model()
export class Permission extends Base {
  @field()
  declare id?: string

  @field()
  name?: string

  @field()
  scope?: string

  @field()
  description?: string

  @field()
  scopes?: string[]

  static override fromJson(json?: any) {
    return new Permission(json)
  }

  static get default() {
    return this.fromJson({})
  }

  static clone(p?: Permission) {
    return p ? clone(p) : new this({})
  }
}

export const getScopesOfPermissions = (permissions: Permission[]) => {
  return permissions.reduce<string[]>((a, b) => {
    return a.concat(b.scopes ?? [])
  }, [])
}
