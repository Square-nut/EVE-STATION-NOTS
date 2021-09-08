<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <slot></slot>
    <slot name="test1"></slot>
    <slot name="test2"></slot>
    <slot name="test3"></slot>
    <table>
      <tr is="vue:blog-post-row"></tr>
    </table>

    <component :is="blog-post-row"></component>
  </div>
</template>

<script>
import bpr from "./blog-post-row";
/* eslint-disable */
export default {
  name: "HelloWorld",
  components: { "blog-post-row": bpr },
  props: {
    msg: String,
  },
  setup(props, context) {
    
  },
  created() {
    console.log(this.$scopeSlot,this.$slots,'slot');
  },
  methods:{
    
  }
};
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
