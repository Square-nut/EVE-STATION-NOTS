<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
//定义一个修饰器
let readonly = function (target, name, descriptor) {
  console.log(arguments, "arg");
  descriptor.writable = false;
  return descriptor;
};

class Text {
  //修改行为
  @readonly
  time1() {
    return "2017-03-111";
  }
  time() {
    return "2017-03-11";
  }
}

let test = new Text();
//无法重新设置属性
test.time = function () {
  console.log("reset time"); //不生效
};
test.time1 = function(){
  console.log('reset time1')
}

console.log(test.time()); //2017-03-11

export default {};
</script>
