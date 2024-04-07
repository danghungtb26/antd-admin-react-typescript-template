import { model } from '@decorators/model'
import { clone } from 'lodash'
import { Base } from './base'
import { Permission } from './permission'
import { field } from '@decorators/field'
import { Role } from './role'

@model()
export class AccountRole extends Base {
  @field('account_id')
  accountId?: string

  @field('role_id')
  roleId?: string

  @field('role', Role)
  role?: Role

  @field()
  scopes?: string[]

  @field('permissions', [Permission])
  permissions?: Permission[]

  // role: Role

  fullPermissions: Permission[]

  constructor(json: any) {
    super(json)
    // this.role = Role.fromJson(json.role_info ?? {})
    this.fullPermissions = (Array.isArray(json.permission_info) ? json.permission_info : []).map(
      Permission.fromJson,
    )
  }

  // toJson() {
  //   return {
  //     ...super.toJson(),
  //     // role_info: this.role?.toJson(),
  //     permission_info: this.fullPermissions.map(i => i.toJson()),
  //   }
  // }

  static override fromJson(json?: any) {
    return new AccountRole(json)
  }

  static get default() {
    return this.fromJson({})
  }

  static clone(member?: AccountRole) {
    return member ? clone(member) : new AccountRole({})
  }
}
