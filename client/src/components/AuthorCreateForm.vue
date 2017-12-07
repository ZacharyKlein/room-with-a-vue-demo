<template>
  <div class="form">
    <div class="title cell">
      <label>Name</label>
      <input ref="authorName" v-model="author.name" type="text"/>
    </div>

    <div class="save cell">
      <button @click="submitNewAuthor()">Add Author</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'author-create-form',
    props: ['saveAuthor'],
    data () {
      return {
        author: {
          name: ''
        }
      }
    },
    methods: {
      submitNewAuthor: function () {
        this.saveAuthor(this.author)
        this.author = {name: ''}
        this.$refs.authorName.focus()
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
