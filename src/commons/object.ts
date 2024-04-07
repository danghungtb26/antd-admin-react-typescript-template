import { isEqual, isNull, isUndefined, reduce } from 'lodash'

export const isExist = (value: any) => {
  return !isNull(value) && !isUndefined(value) && value !== 'null' && value !== 'undefined'
}
export const findDifferent = (a: any, b: any) => {
  return reduce(
    a,
    (result, value, key) => {
      return isEqual(value, b[key]) ? result : result.concat(key)
    },
    [] as string[],
  )
}

export const removeIfNotExist: <T extends Record<string, any>>(value: T) => T = value => {
  Object.keys(value).forEach(key => (!isExist(value[key]) ? delete value[key] : {}))
  return value
}
