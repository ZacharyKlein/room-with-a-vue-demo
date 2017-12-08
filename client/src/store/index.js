import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const serverURL = process.env.SERVER_URL

const store = new Vuex.Store({
  state: {
    authors: [],
    books: [],
    serverURL
  },
  mutations: {
    addBook (state, {book}) {
      state.books.push(book)
    },
    addAuthor (state, {author}) {
      state.authors.push(author)
    },
    removeBook (state, {id}) {
      state.books = state.books.filter(b => b.id !== id)
    },
    removeAuthor (state, {id}) {
      state.books = state.authors.filter(b => b.id !== id)
    },
    setBooks (state, {books}) {
      state.books = books
    },
    setAuthors (state, {authors}) {
      state.authors = authors
    }
  },
  actions: {
    loadAuthors: function ({commit, state}) {
      fetch(`${state.serverURL}/author`)
        .then(r => r.json())
        .then(json => commit('setAuthors', {authors: json}))
        .catch(e => console.warn(e))
    },
    loadBooks: function ({commit, state}) {
      fetch(`${state.serverURL}/book`)
        .then(r => r.json())
        .then(json => commit('setBooks', {books: json}))
        .catch(e => console.warn(e))
    },
    saveBook: function ({commit, state}, {book}) {
      fetch(`${state.serverURL}/book`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(book)
        })
          .then(r => r.json())
          .then(json => commit('addBook', {book: json}))
          .catch(e => console.warn(e))
    },
    saveAuthor: function ({commit, state}, {author}) {
      fetch(`${state.serverURL}/author`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(author)
        })
          .then(r => r.json())
          .then(json => commit('addAuthor', {author: json}))
          .catch(e => console.warn(e))
    }
  }
})

export default store
