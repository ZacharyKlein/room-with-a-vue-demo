<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <book-create-form></book-create-form>
    <br/>
    <br/>
    <hr/>
    <book-list :books="books" v-bind="{deleteBook}"></book-list>

    <br/>
    <hr/>

    <author-create-form></author-create-form>
    <br/>
    <br/>
    <hr/>
    <author-list :authors="authors" v-bind="{deleteAuthor}"></author-list>-

    <br/>

  </div>
</template>

<script>
  import BookList from './BookList'
  import AuthorList from './AuthorList'
  import BookCreateForm from './BookCreateForm'
  import AuthorCreateForm from './AuthorCreateForm'
  import { mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Welcome',
    data () {
      return {
        msg: 'Welcome to the Library',
        serverURL: process.env.SERVER_URL
      }
    },
    computed: {
      books: {
        get () { return this.$store.state.books },
        set (books) { this.$store.commit('setBooks', {books}) }
      },
      authors: {
        get () { return this.$store.state.authors },
        set (authors) { this.$store.commit('setAuthors', {authors}) }
      }
    },
    methods: {
      ...mapActions([
        'loadAuthors',
        'loadBooks'
      ]),
      ...mapMutations([
        'addAuthor',
        'removeBook',
        'removeAuthor'
      ]),
      deleteBook: function (id) {
        this.$resource(`${this.serverURL}/book/${id}`)
          .delete()
          .then(response => {
            if (response.status === 204) {
              this.removeBook({id})
            }
          })
      },
      deleteAuthor: function (id) {
        this.$resource(`${this.serverURL}/author/${id}`)
          .delete()
          .then(response => {
            if (response.status === 204) {
              this.authors = this.authors.filter(b => b.id !== id)
              this.books = this.books.filter(b => b.author.id !== id)
            }
          })
      }
    },
    created: function () {
      this.loadAuthors()
      this.loadBooks()
    },
    components: {
      BookList, BookCreateForm, AuthorList, AuthorCreateForm
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 1000px;
    margin: 0 auto;
  }

  h1, h2 {
    font-weight: normal;
    margin-bottom: 25px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
