import $api from '@/shared/api'
import type { BookItem, BookItemAdd, bookQueryType } from './model'

export const bookListService = (query: bookQueryType): Promise<BookItem[]> => {
  return $api('/books', {
    query: {
      q: query.search,
      _sort: query.sort
    }
  })
}

export const addBookService = ({
  title,
  author,
  description,
  data,
  creator
}: BookItemAdd): Promise<BookItem> => {
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

export const deleteBookService = (id: number): Promise<void> => {
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
}: BookItem): Promise<BookItem> => {
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
