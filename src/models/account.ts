import { field } from '@decorators/field'
import { model } from '@decorators/model'
import clone from 'lodash/clone'
import { AccountRole } from './account-role'
import { Base } from './base'
import { Workspace } from './workspace'

@model()
export class Account extends Base {
  @field()
  delete?: boolean

  @field()
  email?: string

  @field()
  status?: number

  @field('sub_workspace', Workspace)
  subWorkspace?: Workspace

  @field('user_id')
  userId?: string

  @field('username')
  username?: string

  @field('workspace', Workspace)
  workspace?: Workspace

  password?: string

  avatar?: string = ''

  name?: string = ''

  phone?: string = ''

  birthday?: string = ''

  gender?: string = ''

  note?: string = ''

  @field('confirm_password')
  confirmPassword?: string = ''

  facebook?: string = ''

  @field('account_role', AccountRole)
  accountRole?: AccountRole

  @field()
  user?: {
    name?: string

    birthday?: string

    phone?: string

    gender?: number

    avatar?: string
  }

  public toAddJson() {
    return {
      ...this.toJson(),
    }
  }
  static override fromJson(json?: any) {
    return new Account(json ?? {})
  }

  static get default() {
    return this.fromJson({})
  }

  static clone(d?: Account) {
    return d ? clone(d) : new Account({})
  }
}
