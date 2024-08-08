import $api from '@/shared/api'
import type { UserItem, UserItemAdd } from './model'

export const userListService = (): Promise<UserItem[]> => {
  return $api('/users')
}

export const userAddService = ({ login, password, role }: UserItemAdd): Promise<UserItem> => {
  return $api('/users', {
    method: 'POST',
    body: {
      login,
      password,
      role
    }
  })
}

export const userDeleteService = (id: number): Promise<void> => {
  return $api(`/users/${id}`, {
    method: 'DELETE'
  })
}

export const userUpdateService = ({ id, login, role }: UserItem): Promise<UserItem> => {
  return $api(`/users/${id}`, {
    method: 'PATCH',
    body: {
      login,
      role
    }
  })
}
