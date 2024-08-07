import $api from '@/shared/api'
import type { BookList } from './model'

export const bookListService = (): Promise<BookList> => {
  return $api('/books')
}
