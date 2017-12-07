<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <book-create-form :authors="authors" v-bind="{saveBook}"></book-create-form>
    <br/>
    <br/>
    <hr/>
    <book-list :books="books" v-bind="{deleteBook}"></book-list>

    <br/>
    <hr/>

    <author-create-form v-bind="{saveAuthor}"></author-create-form>
    <br/>
    <br/>
    <hr/>
    <author-list v-bind="{authors, deleteAuthor}"></author-list>

    <br/>

  </div>
</template>

<script>
  import BookList from './BookList'
  import AuthorList from './AuthorList'
  import BookCreateForm from './BookCreateForm'
  import AuthorCreateForm from './AuthorCreateForm'
  import { mapMutations } from 'vuex'

  export default {
    name: 'Welcome',
    data () {
      return {
        msg: 'Welcome to the Library',
        serverURL: process.env.SERVER_URL
      }
    },
    computed: {
      // ...mapState([
      //   'books', 'authors'
      // ])

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
      ...mapMutations([
        'addBook',
        'addAuthor',
        'removeBook',
        'removeAuthor'
      ]),
      saveBook: function (book) { // TODO: Don't use arrow => functions here
        this.$resource(`${this.serverURL}/book`)
          .save(book)
          .then(response => {
            this.addBook({book: response.body})
          })
      },
      saveAuthor: function (author) { // TODO: Don't use arrow => functions here
        this.$resource(`${this.serverURL}/author`)
          .save(author)
          .then(response => {
            this.addAuthor({author: response.body})
          })
      },
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
      this.$resource(`${this.serverURL}/book`)
        .get()
        .then(response => {
          this.books = response.body
        })

      this.$resource(`${this.serverURL}/author`)
        .get()
        .then(response => {
          this.authors = response.body
        })
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
