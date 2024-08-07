import {
  addBookService,
  bookListService,
  deleteBookService,
  updateBookService
} from '@/shared/services/book/api'
import { BookItem, BookItemAdd } from '@/shared/services/book/model'
import { defineStore } from 'pinia'
import { Ref, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface BookStore {
  bookList: Ref<BookItem[]>
  getList: () => void
  addBook: (payload: BookItemAdd, cb: () => void) => Promise<void>
  deleteBook: (id: number) => void
  editBook: (payload: BookItem, cb: () => void) => Promise<void>
}

export const useBookStore = defineStore('book', (): BookStore => {
  const route = useRoute()
  const bookList = ref<BookItem[]>([])

  async function getList() {
    const query = {
      search: route.query.search ? String(route.query.search) : undefined,
      sort: route.query.sort ? String(route.query.sort) : undefined
    }
    try {
      const res = await bookListService(query)
      bookList.value = res
    } catch (error) {
      console.log('Get Book List Error')
    }
  }

  async function addBook(payload: BookItemAdd, cb: () => void) {
    try {
      const newBook = await addBookService(payload)
      bookList.value = [newBook, ...bookList.value]
      cb()
    } catch (error) {
      console.log('Add Book Error')
    }
  }

  async function deleteBook(id: number) {
    try {
      await deleteBookService(id)
      bookList.value = bookList.value.filter((item) => item.id !== id)
    } catch (error) {
      console.log('Add Book Error')
    }
  }

  async function editBook(payload: BookItem, cb: () => void) {
    try {
      const updateBook = await updateBookService(payload)
      bookList.value = bookList.value.map((book) => (book.id === updateBook.id ? updateBook : book))
      cb()
    } catch (error) {
      console.log('Edit Book Error')
    }
  }

  watch(() => [route.query.search, route.query.sort], getList)

  return { bookList, getList, addBook, deleteBook, editBook }
})
