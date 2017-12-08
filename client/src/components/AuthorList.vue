<template>
  <table class="author-list">
    <thead>
    <td>Name</td>
    <td>Books</td>
    <td></td>
    </thead>
    <tbody>
    <author v-if="author" v-bind="{author, deleteAuthor}" :key="author.id" v-for="author in authors"></author>
    </tbody>
  </table>
</template>
<script>
  import Author from './Author.vue'
  import {mapActions} from 'vuex'

  export default {
    name: 'author-list',
    components: {Author},
    computed: {
      authors: {
        get () { return this.$store.state.authors },
        set (authors) { this.$store.commit('setAuthors', {authors}) }
      }
    },
    methods: {
      ...mapActions([
        'deleteAuthor'
      ])
    }
  }
</script>

<style scoped>
  .author-list {
    clear: both;
    min-width: 1000px
  }
</style>
