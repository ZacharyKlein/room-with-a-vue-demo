<template>
  <div>
    <author-create-form></author-create-form>
    <br/>
    <br/>
    <hr/>
    <author-list></author-list>
  </div>
</template>

<script>
  import AuthorList from './AuthorList'
  import AuthorCreateForm from './AuthorCreateForm'
  import {mapActions} from 'vuex'

  export default {
    name: 'author-view',
    components: {
      AuthorList, AuthorCreateForm
    },
    methods: {
      ...mapActions([
        'loadAuthors'
      ])
    },
    created: function () {
      this.loadAuthors()
    }
  }
</script>

<style scoped>
  div {
    width: 1000px;
    margin: 0 auto;
  }
</style>
