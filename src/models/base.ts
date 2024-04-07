import dateTime from '@commons/datetime'
import { HH_MM_SS_DD_MM_YYYY } from '@commons/datetime/format'
import { field } from '@decorators/field'
import { getAllKeys } from '@decorators/model'
import { isNull, isUndefined } from 'lodash'

// @model()
export class Base {
  @field('created_at')
  createdAt?: string

  @field('deleted_at')
  deletedAt?: string

  @field('updated_at')
  updatedAt?: string

  @field()
  id?: string

  @field()
  order?: number

  // @ts-ignore
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(json?: any) {}

  afterMounted() {}

  toJson() {
    const keys = getAllKeys(this)

    if (!Array.isArray(keys)) return {}

    const value = keys.reduce((a, key) => {
      if (!isUndefined(key) && !isNull(key)) {
        const { propertyKey, fieldName, fieldType: FieldType } = key

        // @ts-ignore
        let v = this[propertyKey]
        if (!isUndefined(v) && !isNull(v)) {
          if (Array.isArray(FieldType) && FieldType.length === 1) {
            if (Array.isArray(v)) {
              v = v.map(i => i.toJson())
              return { ...a, [fieldName]: v }
            }
          }

          if (FieldType) {
            v = v.toJson()

            return { ...a, [fieldName]: v }
          }
          return { ...a, [fieldName]: v }
        }
      }
      return a
    }, {})
    return value
  }

  createdAtFormatted = () => {
    if (!this.createdAt) return ''
    return dateTime(this.createdAt).format(HH_MM_SS_DD_MM_YYYY)
  }

  updatedAtFormatted = () => {
    if (!this.createdAt) return ''
    return dateTime(this.createdAt).format(HH_MM_SS_DD_MM_YYYY)
  }

  static fromJson(json?: any) {
    return new this(json)
  }
}
