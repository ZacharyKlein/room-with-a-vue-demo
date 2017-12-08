<template>
  <table class="book-list">
    <thead>
    <td>Title</td>
    <td>Pages</td>
    <td>Author</td>
    <td></td>
    </thead>
    <tbody>
    <book v-if="book" v-bind="{book, deleteBook}"  :key="book.id" v-for="book in books"></book>
    </tbody>
  </table>
</template>
<script>
  import {mapActions} from 'vuex'
  import Book from './Book.vue'

  export default {
    name: 'book-list',
    components: {Book},
    computed: {
      books: {
        get () { return this.$store.state.books },
        set (books) { this.$store.commit('setBooks', {books}) }
      }
    },
    methods: {
      ...mapActions([
        'deleteBook'
      ])
    }
  }
</script>

<style scoped>
  .book-list {
    clear: both;
    min-width: 1000px
  }
</style>
