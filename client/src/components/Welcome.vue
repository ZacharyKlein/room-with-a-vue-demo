<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <book-create-form v-bind="{authors, addBook}"></book-create-form>
    <br/>
    <br/>
    <hr/>
    <book-list v-bind="{books, removeBook}"></book-list>

    <br/>
    <hr/>

    <author-create-form v-bind="{addAuthor}"></author-create-form>
    <br/>
    <br/>
    <hr/>
    <author-list v-bind="{authors, removeAuthor}"></author-list>

    <br/>

  </div>
</template>

<script>
  import BookList from './BookList'
  import AuthorList from './AuthorList'
  import BookCreateForm from './BookCreateForm'
  import AuthorCreateForm from './AuthorCreateForm'

  export default {
    name: 'Welcome',
    data () {
      return {
        msg: 'Welcome to the Library',
        serverInfo: null,
        showLinks: false,
        serverURL: process.env.SERVER_URL,
        books: [],
        authors: []
      }
    },
    methods: {
      addBook: function (book) { // TODO: Don't use arrow => functions here
        this.$resource(`${this.serverURL}/book`)
          .save(book)
          .then(response => {
            this.books.push(response.body)
          })
      },
      addAuthor: function (author) { // TODO: Don't use arrow => functions here
        this.$resource(`${this.serverURL}/author`)
          .save(author)
          .then(response => {
            this.authors.push(response.body)
          })
      },
      removeBook: function (id) {
        this.$resource(`${this.serverURL}/book/${id}`)
          .delete()
          .then(response => {
            if (response.status === 204) {
              this.books = this.books.filter(b => b.id !== id)
            }
          })
      },
      removeAuthor: function (id) {
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
          console.log(response.body)
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
