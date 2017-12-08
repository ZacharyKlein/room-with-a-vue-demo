<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <br/>
    <hr/>

  </div>
</template>

<script>
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
