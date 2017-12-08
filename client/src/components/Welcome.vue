<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <book-create-form></book-create-form>
    <br/>
    <br/>
    <hr/>
    <book-list></book-list>

    <br/>
    <hr/>

    <author-create-form></author-create-form>
    <br/>
    <br/>
    <hr/>
    <author-list></author-list>-

    <br/>

  </div>
</template>

<script>
  import BookList from './BookList'
  import AuthorList from './AuthorList'
  import BookCreateForm from './BookCreateForm'
  import AuthorCreateForm from './AuthorCreateForm'
  import { mapActions } from 'vuex'

  export default {
    name: 'Welcome',
    data () {
      return {
        msg: 'Welcome to the Library'
      }
    },
    methods: {
      ...mapActions([
        'loadAuthors',
        'loadBooks'
      ])
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
