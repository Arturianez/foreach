// function someFn() {
//     console.log('here is my text')
// }

// function callbackFn(callback) {
//     callback()
// }
// callbackFn(someFn)

// function someDelayedFn() {
//     console.log('terminated')
// }

// setTimeout(someDelayedFn, 300)

// console.log('1st')
// console.log('3rd')

// const beautifulArra = [1,2,'hello','world','this is']

// for (let i = 0; i <beautifulArra.length; i++) {
//     console.log(beautifulArra[i])
// }

// beautifulArra.forEach(function(item,index,array) {
//     console.log(item,index,array) // каждый из элементов, индекс, сам массив
// })

//map создаёт новый массив
// const result = beautifulArra.map(function(item){ 
//     if(item === String(item)) {
//         return item;
//     }
// })
// console.log(result)
//проверка строка или нет(ture or false выведет)
// const result = beautifulArra.map(function(item){ 
//     return typeof item === "string"
// })
// console.log(result)


// const result = beautifulArra.map(function(item){ 
//     if(typeof item !== 'string') {
//         return Math.pow(item,2)
//     } else {
//         return item;
//     }
// })
// console.log(result)

// const result2 = beautifulArra.map(item => (
//     typeof item !== 'string' ? Math.pow(item, 2) : item
// ) )

// console.log(result2)

// const filtredResult = beautifulArra.filter(function(item){
//     return typeof item === 'string'
// })

// console.log(filtredResult)

//проверка строки и ее вывод
// const filtredResult = beautifulArra.filter(function(item){
//     return typeof item === 'string'
// })
// console.log(filtredResu


