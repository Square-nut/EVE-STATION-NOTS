<template>
  <div class='console-box'>
    <div>
      <el-input
        v-model="rea.dog.name"
        placeholder="请输入内容"
      >
        <template #append>
          <el-button icon="el-icon-search" @click="newUpload"></el-button>
        </template>
      </el-input>
      {{rea.dog.name}}
      <div id="output"></div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { ref, reactive } from 'vue'
export default {
  props: [],
  setup(){
    let rea = reactive({dog:{name:'wangwangwang'}})
    function search(){
      console.log(123);


    }
    function _new(fn,arg){
      let obj = Object.create(fn.prototype)
      let ret = fn.call(obj,arg)
      ret instanceof Object ? ret: obj
    }
    function a(num){
      this.a1 = 1
      this.a2 = 2
      this.a3 = 3
      this.num = num+1
      this.show = ()=>{
        return this.a1+this.a2+this.a3+this.num
      }
    }
    let a1 = new a(0)
    console.log(a1.show())
    function b(){

    }
    console.log('b没有a2:',b.a2)
    a.call(b)
    console.log('b有了a2:',b.a2)
    async function newUpload(){
      // 打开文件
      const arrFileHandle = await window.showOpenFilePicker({
        types: [{
            description: 'Images',
            accept: {
              'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.webp']
            }
      }],
        multiple: true
      });
      
      // 遍历选择的文件
      for (const fileHandle of arrFileHandle) {
          // 获取文件内容
          const fileData = await fileHandle.getFile();
          console.log(fileData,'fileData');
          // 读文件数据
          const buffer = await fileData.arrayBuffer();
          console.log(buffer,'buffer');
          // 转成Blod url地址
          let src = URL.createObjectURL(new Blob([buffer]));
          console.log(src,'src');
          // 在页面中显示
          output.insertAdjacentHTML('beforeend', `<img src="${src}">`);
      }
    }
    function logStr(num) {
      let str = ''
      let arr = []
      if(typeof num === 'number'){
        str = num.toString()
        arr = str.split('')
      }else{
        arr = num
      }
      if(arr.length){
        return `${arr.pop()}${logStr(arr)}`
      }else {
        return ''
      }
    }
    console.log(`输入：12345,输出：${logStr(12345)}`)
    return {
      search,
      rea,
      newUpload
    }
  },

  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>
<style lang='scss'>
</style>