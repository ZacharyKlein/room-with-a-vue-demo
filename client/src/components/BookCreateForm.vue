<template>
  <div class="form">
    <div class="title cell">
      <label>Title</label>
      <input ref="bookTitle" v-model="book.title" type="text"/>
    </div>
    <div class="pages cell">
      <label>Pages</label>
      <input v-model="book.pages" type="text"/>
    </div>
    <div class="author cell">
      <label>Author</label>

      <select v-model="book.author">
        <option disabled selected value="">Choose Author</option>
        <option v-if="author !== null" v-bind:value="{ id: author.id }" v-for="author in authors">{{author.name}}</option>

      </select>
    </div>
    <div class="save cell">
      <button @click="submitNewBook()" >Add Book</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'book-create-form',
    data () {
      return {
        book: {
          title: '',
          pages: null,
          author: {}
        }
      }
    },
    computed: {
      authors: {
        get () { return this.$store.state.authors },
        set (authors) { this.$store.commit('setAuthors', {authors}) }
      }
    },
    methods: {
      ...mapActions([
        'saveBook'
      ]),
      submitNewBook: function () {
        this.saveBook({book: this.book})
        this.book = {title: '', pages: null, author: {}}
        this.$refs.bookTitle.focus()
      }
    }
  }
</script>

<style scoped>

  .cell {
    width: 250px;
    float: left
  }

  .save {

  }

</style>
