<template>
  <div class="home">
    <search-bar></search-bar>
    <img
      alt="Vue logo"
    >
    <HelloWorld msg="Welcome to Your Vue.js App">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </HelloWorld>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import searchBar from "@/components/searchBar";
import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
    searchBar,
  },
  setup(props) {
    function getData() {}
    function _new(fn, arg) {
      let obj = Object.create(fn.prototype);
      console.log(fn.this);
      fn.call(obj, ...arg);

      console.log(fn.this);
      let result = fn();
      return Object.prototype.toString.call(result) === "[object Object]"
        ? result
        : obj;
    }
  },
  created() {},
};
</script>
