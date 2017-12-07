<template>
  <div class="form">
    <div class="title cell">
      <label>Name</label>
      <input v-model="author.name" type="text"/>
    </div>

    <div class="save cell">
      <button @click="submitNewAuthor()">Add Author</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'author-create-form',
    props: ['addAuthor'],
    data () {
      return {
        author: {
          name: ''
        }
      }
    },
    methods: {
      submitNewAuthor: function () {
        this.addAuthor(this.author)
        this.author = {name: ''}
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
