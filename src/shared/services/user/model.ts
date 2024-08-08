import type { UserRole } from '@/shared/consts/user'

export interface UserItem {
  id: number
  login: string
  role: UserRole
}

export interface UserItemAdd {
  login: string
  password: string
  role: UserRole
}
