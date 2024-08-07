import type { UserRole } from '@/shared/consts/user'

export interface BookItem {
  id: number
  title: string
  author: string
  description: string
  data: string
  creator: UserRole
}

export type BookItemAdd = Omit<BookItem, 'id'>
