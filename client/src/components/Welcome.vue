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
        books: []
      }
    },
    methods: {
      toggleLinks: function () {
        this.$data.showLinks = !this.$data.showLinks
      }
    },
    created: function () {
      this.$http.get(`${this.$data.serverURL}/book`).then(response => {
        this.$data.books = response.body
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
