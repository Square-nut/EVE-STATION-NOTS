<template>
  <div class="home">
    <search-bar></search-bar>
    <img alt="Vue logo">
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
import searchBar from "@/components/search-bar";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    searchBar,
  },
  setup(props) {
    function getMedian(arr1, arr2) {
      const tmpArr = Array.concat.apply([], arr1, arr2);
      console.log(tmpArr);
    }
    let ar1 = [1, 3],
      ar2 = [2, 4, 5];
    getMedian(ar1, ar2);
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
