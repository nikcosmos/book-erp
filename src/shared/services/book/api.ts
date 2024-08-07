import $api from '@/shared/api'
import type { BookItem, BookItemAdd, BookList } from './model'

export const bookListService = (): Promise<BookList> => {
  return $api('/books')
}

export const addBookService = ({
  title,
  author,
  description,
  data,
  creator
}: BookItemAdd): Promise<BookList> => {
  return $api('/books', {
    method: 'POST',
    body: {
      title,
      author,
      description,
      data,
      creator
    }
  })
}

export const deleteBookService = (id: number): Promise<BookList> => {
  return $api(`/books/${id}`, {
    method: 'DELETE'
  })
}

export const updateBookService = ({
  id,
  title,
  author,
  description,
  data,
  creator
}: BookItem): Promise<BookList> => {
  return $api(`/books/${id}`, {
    method: 'PUT',
    body: {
      title,
      author,
      description,
      data,
      creator
    }
  })
}
