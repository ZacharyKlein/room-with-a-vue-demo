<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <book-list :books="books"></book-list>

  </div>
</template>

<script>
  import BookList from './BookList.vue'

  export default {
    name: 'Welcome',
    data () {
      return {
        msg: 'Welcome to the Library',
        serverInfo: null,
        showLinks: false,
        serverURL: process.env.SERVER_URL,
        books: [
          {id: 1, title: 'Book 1', pages: 100, author: 'Author 1'},
          {id: 2, title: 'Book 2', pages: 300, author: 'Author 2'},
          {id: 3, title: 'Book 3', pages: 200, author: 'Author 3'}
        ]
      }
    },
    methods: {
      toggleLinks: function () {
        this.$data.showLinks = !this.$data.showLinks
      }
    },
    created: function () {
      this.$http.get(`${this.$data.serverURL}/application`).then(response => {
        this.$data.serverInfo = response.body
      })
    },
    components: {
      'book-list': BookList
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
