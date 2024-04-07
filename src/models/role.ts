import { model } from '@decorators/model'
import { field } from '@decorators/field'
import { clone } from 'lodash'
import { Base } from './base'
import { Permission } from './permission'

@model()
export class Role extends Base {
  @field()
  name?: string

  @field()
  description?: string

  @field()
  scopes?: string[]

  @field('permissions', [Permission])
  permissions?: Permission[]

  fullPermissions: Permission[]

  constructor(json: any) {
    super(json)
    this.fullPermissions = (Array.isArray(json.permissions) ? json.permissions : []).map(
      Permission.fromJson,
    )
  }

  toAddJson() {
    return {
      ...super.toJson(),
      permission_id: this.permissions,
    }
  }

  static override fromJson(json?: any) {
    return new Role(json)
  }

  static get default() {
    return this.fromJson({})
  }

  static clone(member?: Role) {
    return member ? clone(member) : new Role({})
  }
}
