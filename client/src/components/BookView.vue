<template>
  <div>

    <book-create-form></book-create-form>
    <br/>
    <br/>
    <hr/>
    <book-list></book-list>

  </div>

</template>

<script>
  import BookCreateForm from './BookCreateForm'
  import BookList from './BookList'

  export default {
    name: 'book-view',
    components: {
      BookList, BookCreateForm
    }
  }
</script>

<style scoped>
  div {
    width: 1000px;
    margin: 0 auto;
  }
</style>
