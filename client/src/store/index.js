import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authors: [],
    books: []
  },
  mutations: {
    addBook (state, payload) {
      state.books.push(payload.book)
    },
    addAuthor (state, payload) {
      console.log('adding author...')
      state.authors.push(payload.author)
    },
    removeBook (state, payload) {
      state.books = state.books.filter(b => b.id !== payload.id)
    },
    removeAuthor (state, payload) {
      state.books = state.authors.filter(b => b.id !== payload.id)
    },
    setBooks (state, payload) {
      state.books = payload.books
    },
    setAuthors (state, payload) {
      state.authors = payload.authors
    }
  }
})

export default store
