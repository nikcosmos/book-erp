import type { UserRole } from '@/shared/consts/user'

export type BookList = BookItem[]

export interface BookItem {
  id: number
  title: string
  author: string
  description: string
  data: string
  creator: UserRole
}
