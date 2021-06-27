<template>
  <div class="search-bar">
    <input v-model="search" @keyup.enter="searchTag" type="text" name="" id="">
  </div>  
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: '',
    }
  },
  methods: {
    searchTag() {
      this.$store.dispatch('getQuestions', this.search);
      this.search = '';
    }
  },
}
</script>

<style scoped lang="scss">
.search-bar {
  margin-bottom: 2em;

  input {
    border: solid 1px #333;
    border-radius: 5px;
    font-size: 1.6em;
  }
    
}

</style>