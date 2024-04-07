export const getFieldType = (fieldType: any) => {
  if (typeof fieldType === 'function') {
    try {
      return fieldType()
    } catch (error) {
      return fieldType
    }
  }

  return fieldType
}
