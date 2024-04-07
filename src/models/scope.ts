import { isNull, isUndefined } from 'lodash'

export class Scope {
  include?: boolean

  app?: string

  model?: string

  action?: string

  object?: string

  subject?: string
}

export type ScopeType = {
  include?: boolean

  app?: string

  model?: string

  action?: string

  object?: string

  subject?: string
}

export const flattenScope: (scope: string) => ScopeType = scope => {
  let include: ScopeType['include'] = true
  if (scope.startsWith('-')) {
    include = false
  }
  const split = scope.replace(/^-/, '').split(':')
  return {
    include,
    action: split[0]?.toLowerCase(),
    object: split[1]?.toLowerCase(),
    subject: split[2]?.toLowerCase(),
  }
}

export const computeScope: (scope: ScopeType) => string = scope => {
  return `${!scope.include && !(isUndefined(scope.include) || isNull(scope.include)) ? '-' : ''}${
    scope.action ?? ''
  }:${scope.object ?? ''}:${scope.subject ?? '*'}`
}
