/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import Api from './apiConfig'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';



console.log(new Api(), 'api')
const app = createApp(App)
	.use(store)
	.use(router)
	.use(ElementPlus)
	.mount('#app')
// app.prototype.$api = new Api()
