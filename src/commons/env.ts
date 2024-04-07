export const isDebug = () => {
  return process && import.meta.env.NODE_ENV === 'development'
}
