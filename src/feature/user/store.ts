import {
  userAddService,
  userDeleteService,
  userListService,
  userUpdateService
} from '@/shared/services/user/api'
import type { UserItem, UserItemAdd } from '@/shared/services/user/model'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

interface UserStore {
  userList: Ref<UserItem[]>
  getList: () => void
  addUser: (payload: UserItemAdd, cb: () => void) => Promise<void>
  deleteUser: (id: number) => void
  editUser: (payload: UserItem, cb: () => void) => Promise<void>
}

export const useUserStore = defineStore('user', (): UserStore => {
  const userList = ref<UserItem[]>([])

  async function getList() {
    try {
      const res = await userListService()
      userList.value = res
    } catch (error) {
      console.log('Get User List Error')
    }
  }

  async function addUser(payload: UserItemAdd, cb: () => void) {
    try {
      const newBook = await userAddService(payload)
      userList.value = [newBook, ...userList.value]
      cb()
    } catch (error) {
      console.log('Add User Error')
    }
  }

  async function deleteUser(id: number) {
    try {
      await userDeleteService(id)
      userList.value = userList.value.filter((user) => user.id !== id)
    } catch (error) {
      console.log('Delete User Error')
    }
  }

  async function editUser(payload: UserItem, cb: () => void) {
    try {
      const updateUser = await userUpdateService(payload)
      userList.value = userList.value.map((user) => (user.id === updateUser.id ? updateUser : user))
      cb()
    } catch (error) {
      console.log('Edit User Error')
    }
  }
  return { userList, getList, addUser, deleteUser, editUser }
})
