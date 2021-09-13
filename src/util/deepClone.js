function deepClone(obj, hash = new WeakMap()) {
	const isComplex = (obj) => {
		(typeof obj === 'object' || typeof obj === 'function') && obj !== null
	}
	if (Array.isArray(obj)) {
		return obj.map((ele) => deepClone(ele))
	}
	if (hash.has(obj)) return hash.get(obj)
	if(isComplex){
		let arr = {}
		if(Object.prototype.toString.call(obj) === '[object Object]'){
			Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)).forEach(ele=>{
				hash.set(obj[ele])
				arr[ele] = obj[ele]
			})
			return arr
		}else {
			return obj
		}
	}
	return obj
}
