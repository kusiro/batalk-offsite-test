<template>
  <div id="app">
    <search-bar></search-bar>
    <trend-tags></trend-tags>
    <question-list></question-list>
  </div>
</template>

<script>
import TrendTags from './components/TrendTags.vue';
import SearchBar from './components/SearchBar.vue';
import QuestionList from './components/QuestionList.vue';

export default {
  name: 'App',
  data() {
    return {
      isLoading: false,
    }
  },
  mounted() {
    this.$store.dispatch('getTags');
    this.$store.dispatch('getQuestions', this.target);
  },
  computed: {
    tags() {
      return this.$store.getters.showAllTag;
    },
    target() {
      return this.$store.state.target;
    },
  },
  created () {
    window.addEventListener("scroll", this.addQuestion);
  },
  components: {
    SearchBar,
    TrendTags,
    QuestionList,
  },
  methods: {
    addQuestion() {
      if (window.scrollY + window.screen.height > document.body.scrollHeight && !this.isLoading) {
        this.isLoading = true;
        this.$store.commit('nextPage');
        this.$store.dispatch('addQuestions', this.$store.state.target, this.$store.state.page);
        this.isLoading = false;
      } 
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
