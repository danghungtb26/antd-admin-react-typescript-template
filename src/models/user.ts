import { field } from '@decorators/field'
import { model } from '@decorators/model'
import { Base } from './base'
import { clone } from 'lodash'
import { Address } from './address'

@model()
export class User extends Base {
  @field('address', Address)
  address?: Address

  @field()
  avatar?: string

  @field()
  birthday?: string

  @field()
  gender?: number

  @field()
  name?: string

  @field()
  phone?: string

  public toAddJson() {
    return {
      ...this.toJson(),
    }
  }

  static override fromJson(json?: any) {
    return new User(json ?? {})
  }

  static get default() {
    return this.fromJson({})
  }

  static clone(d?: User) {
    return d ? clone(d) : new User({})
  }
}
