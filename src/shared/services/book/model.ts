import type { UserRole } from '@/shared/consts/user'
import { LocationQueryValue } from 'vue-router'

export interface BookItem {
  id: number
  title: string
  author: string
  description: string
  data: string
  creator: UserRole
}

export type BookItemAdd = Omit<BookItem, 'id'>

export interface bookQueryType {
  search: LocationQueryValue | undefined
  sort: LocationQueryValue | undefined
}
