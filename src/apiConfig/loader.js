/* eslint-disable */
export default class Loader {
	constructor(key) {
		this.key = key
	}
	parseKey () {
		try {
			if (this.key === undefined || this.key === null) {
				throw new Error('请填写key')
			}
			const arr = key.split('.')
			return { path: arr.pop(), name: arr.join('/') }
		} catch (e) {
			console.log(e)
		}
	}
	load() {
		console.log('-----------start in load---------')
		let {path, name} = parseKey(this.key)
		const module = require('@api' + '/' + path )
		
		return {
			key,
			module,
		}
	}
}
