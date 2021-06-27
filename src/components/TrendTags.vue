<template>
  <div class="trend-tag">
    <div class="tag"
      v-for="(tag, idx) in tags"
      :key="idx"
      @click="changeTag"
    >
    {{ tag.name }}</div>
  </div>
</template>

<script>
export default {
  name: "TrendTags",
  methods: {
    changeTag(e) {
      let selected = document.querySelector('.selected');
      if(selected) {
        selected.classList.remove('selected');
      }
      e.target.classList.add('selected');
      this.$store.dispatch('getQuestions', e.target.innerHTML);
      this.$store.commit('setTarget', e.target.innerHTML)
    }
  },
  computed: {
    tags(){
      return this.$store.getters.showAllTag;
    }
  },
}
</script>

<style lang="scss">
.trend-tag {
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;

  .tag {
    border: solid 1px;
    border-radius: 5px;
    padding: 5px 8px;
    cursor: pointer;
  }

  .selected {
    background-color: green;
    color: #f7f7f7;
  }
}

</style>