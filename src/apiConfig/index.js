/* eslint-disable */
import axios from 'axios'
import Loader from './loader'
class Api {
	constructor(options) {
		this.options = options || {}
		this.axios = axios.create()
	}
	_axios = axios
	request(key, params = {}) {
		// 解析key参数，返回请求地址和options
		const apiOption= new Loader(key).load()
	
		// 合并options
		const options = { ...this.options, ...apiOption,...params }
		console.log(opitons,123123123);
		return new Promise(function(resolve, reject) {
			_axios
				.request(options)
				.then(function(response) {
					resolve(response.data)
				})
				.catch(function(err) {
					reject(err)
				})
		})
	}
}
export default Api
