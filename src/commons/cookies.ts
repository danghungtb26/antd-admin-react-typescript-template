import { AUTHEN_TOKEN_KEY } from '@constants/key'
import Cookies from 'js-cookie'

export const getAuthenToken = () => {
  return Cookies.get(AUTHEN_TOKEN_KEY)
}

export const setAuthenToken = (value: any) => {
  return Cookies.set(AUTHEN_TOKEN_KEY, value)
}
