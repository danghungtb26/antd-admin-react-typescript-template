export const formatMoney = (value?: number, x?: number) => {
  if (!value) return ''
  const re = `\\d(?=(\\d{${x || 3}})+$)`
  return value.toFixed(0).replace(new RegExp(re, 'g'), '$&,')
}
