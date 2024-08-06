import type { UserRole } from '@/shared/consts/user'

export interface LoginResponse {
  access: string
}

export interface UserInfo {
  id: number
  login: string
  role: UserRole
}
