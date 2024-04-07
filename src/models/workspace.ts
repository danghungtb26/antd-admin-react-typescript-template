import { field } from '@decorators/field'
import { model } from '@decorators/model'
import clone from 'lodash/clone'
import { Base } from './base'

@model()
export class Workspace extends Base {
  @field()
  name?: string

  @field()
  level?: number

  @field('sub_workspace', () => [Workspace])
  subWorkspace?: Workspace[]

  @field('parent_workspace_id')
  parentWorkspaceId?: string

  @field()
  email?: string

  @field()
  phone?: string

  @field()
  description?: string

  @field()
  status?: number
  public toAddJson() {
    return {
      ...this.toJson(),
    }
  }
  static override fromJson(json?: any) {
    return new Workspace(json)
  }

  static get default() {
    return this.fromJson({})
  }

  static clone(workspace?: Workspace) {
    return workspace ? clone(workspace) : new Workspace({})
  }
}
