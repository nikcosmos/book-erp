import { UserRole } from '@/shared/consts/user'
import { useAuthStore } from '@/shared/store/auth'

const useUserPerms = () => {
  const authStore = useAuthStore()

  function isCanEdit(role: UserRole) {
    if (authStore.userInfo?.role === UserRole.ADMIN && role !== UserRole.ADMIN) return true
  }

  function isCanDelete(role: UserRole) {
    if (authStore.userInfo?.role === UserRole.ADMIN && role !== UserRole.ADMIN) return true
  }
  return { isCanEdit, isCanDelete }
}

export default useUserPerms
