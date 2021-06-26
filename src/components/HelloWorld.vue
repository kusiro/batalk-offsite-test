<template>
  <div class="hello">
    <div>{{ tags }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    // count: 0,
  }),
  computed: {
    tags(){
      return this.$store.getters.getAllTag;
    }
  },
  // mounted() {
  //   this.count = this.$store.getters.getCount;
  // },
  props: {
    msg: String
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
