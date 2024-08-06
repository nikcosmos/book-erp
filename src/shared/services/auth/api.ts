import $api from '@/shared/api'
import type { LoginResponse, UserInfo } from './model'

export const loginService = (login: string, password: string): Promise<LoginResponse> => {
  return $api('/login', {
    method: 'POST',
    body: {
      login,
      password
    }
  })
}

export const userInfoService = (): Promise<UserInfo> => {
  return $api('/user/info')
}
