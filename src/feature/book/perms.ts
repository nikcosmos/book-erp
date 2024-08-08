import { UserRole } from '@/shared/consts/user'
import { useAuthStore } from '@/shared/store/auth'

const useBookPerms = () => {
  const authStore = useAuthStore()

  function isCanEdit(bookCreator: UserRole) {
    if (authStore.userInfo?.role === UserRole.MENTOR && bookCreator === UserRole.USER) return true
    if (authStore.userInfo?.role === UserRole.ADMIN) return true
  }

  function isCanDelete(bookCreator: UserRole) {
    if (authStore.userInfo?.role === UserRole.MENTOR && bookCreator === UserRole.USER) return true
    if (authStore.userInfo?.role === UserRole.ADMIN) return true
  }
  return { isCanEdit, isCanDelete }
}

export default useBookPerms
