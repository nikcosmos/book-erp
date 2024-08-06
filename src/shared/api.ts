import { ofetch } from 'ofetch'
import { API_URL } from './consts/api'

const $api = ofetch.create({
  baseURL: API_URL,
  onRequest({ options }) {
    const access = localStorage.getItem('access')
    if (!access) return
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${access}`
    }
  },
  async onResponseError({ response }) {
    if (response.status == 401) {
      console.log('Auth Error')
    }
  }
})

export default $api
