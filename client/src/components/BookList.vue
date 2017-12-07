<template>
  <table class="book-list">
    <thead>
      <td>Title</td>
      <td>Pages</td>
      <td>Author</td>
      <td></td>
    </thead>
    <tbody>
      <book v-bind="{book, removeBook}" :key="book.id" v-for="book in books"></book>
    </tbody>
  </table>
</template>
<script>
  import Book from './Book.vue'

  export default {
    name: 'book-list',
    props: ['books', 'removeBook'],
    components: {
      book: Book
    }
  }
</script>

<style scoped>
  .book-list {
    clear:both;
    min-width: 1000px
  }
</style>
