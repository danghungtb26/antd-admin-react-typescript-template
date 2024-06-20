import get from 'lodash/get'
import forEach from 'lodash/forEach'
import 'reflect-metadata'
import isUndefined from 'lodash/isUndefined'
import { isNull } from 'lodash'
import { fieldsKey } from './constants'
import { getFieldType } from './utils'

export const model = () => {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    // @ts-ignore
    return class extends constructor {
      base_name = constructor.name

      constructor(json: any) {
        super(json)
        const keys = getAllKeys(this)
        forEach(keys, key => {
          if (!isUndefined(key) && !isNull(key)) {
            const { propertyKey, fieldName, fieldType } = key
            const FieldType = getFieldType(fieldType)
            const value = get(json, fieldName)
            if (!isUndefined(value) && !isNull(value)) {
              if (FieldType) {
                if (Array.isArray(FieldType) && FieldType.length === 1) {
                  if (Array.isArray(value)) {
                    // @ts-ignore
                    this[propertyKey] = value.map(i => new FieldType[0](i))
                    return
                  }
                  // @ts-ignore
                  throw new Error(
                    `Không thể convert dữ liệu JSON sang dạng mảng được. PropertyKey: ${propertyKey}, Constructor: ${this.base_name}`,
                  )
                  // this[propertyKey] = new FieldType[0](value)
                }
                // @ts-ignore
                this[propertyKey] = new FieldType(value)
                return
              }

              // @ts-ignore
              this[propertyKey] = value
            }
          }
        })
        // @ts-ignore
        this.afterMounted?.(json)
      }
    }
  }
}

export const getField = (target: any, key: string) => {
  const fields =
    Reflect.getMetadata(fieldsKey, target, target.base_name || target.constructor.name) || []

  const fieldData = fields.find((field: any) => field.propertyKey === key)
  return fieldData?.fieldName
}

export const getAllKeys = (target: any) => {
  return Reflect.getMetadata(fieldsKey, target, target.base_name)
}
