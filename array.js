// // 配列に使用する

// let a = [10,20,30]
// console.log(a.length) //3

// // shift
// let sh = [10,20,30,40]
// console.log(sh.shift()) // 10
// console.log(sh) // 20 30 40 => 10は失われた
// let sha = []
// console.log(sha.shift()) // undefined

// // unshift
// let unsh =  [10,20,30,40]
// console.log(unsh.unshift()) // 4
// console.log(unsh.unshift(66, 25))
// console.log(unsh)// [66,25,10,20,30,40] =>前に追加

// // pop
// let p = [10,20,30]

// console.log(p.pop()) //30
// console.log(p)// [10, 20] =>後ろ削除

// // push
// let pu = [10,20,30,40,50]

// console.log(pu.push(70)) //6
// console.log(pu) // [10,20,30,40,50,60,70] =>後ろに追加

// // indexOf
// let i = [10,30,40]

// console.log(i.indexOf(30)) // 1 =>検索して最初にヒットしたindexを返す
// console.log(i.indexOf(100)) // -1 false
// console.log(i.indexOf(40)) // 2

// let personName = ['nancy','cas','gas']


// const post = personName.indexOf('gas')
// console.log('post',post)
// // console.log('person',personName.indexOf('cas')) // -1




// // lastIndexOf

// let li = [10,20,30,40]

// console.log(li.lastIndexOf(30)) // 2 =>前から検索, 最後のindexをかえす
// console.log(li.lastIndexOf(50)) // -1 => 未発見

// // include

// let inc = [10,20,30,40]

// console.log(inc.includes(30)) // true
// console.log(inc.includes(50)) // false

// // join

// let jo = [10,20,30,40,50,60]

// console.log(jo.join('-')) // array.js:66 10-20-30-40-50-60
// console.log(jo.join('')) // array.js:67 102030405060 =>文字列

// let re = [10,20,30,40,50,60]

// console.log(re.reverse()) // array.js:71 (6) [60, 50, 40, 30, 20, 10]

// // concat

// let arr = [10,20,30]
// console.log(arr.concat(40,50))// array.js:76 (5) [10, 20, 30, 40, 50]
// console.log(arr) // [10,20,30]
// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = array1.concat(array2)
// console.log(array3) // array.js:81 (6) [1, 2, 3, 4, 5, 6]

// // forEach

// let forE = ['red','green','pink']

// forE.forEach(f => {
//     console.log(f) // red, green, pink
// })

// let forEa = [
//     {
//         name: 'gas',
//         age: 30
//     },
//     {
//         name: 'hna',
//         age: 19
//     }
// ];

// forEa.forEach(f => {
//     console.log(f) //  {name: "gas", age: 30}, {name: "hna", age: 19}
// })

// forEa.forEach((f, index) => {
//     console.log(f,index)   // 0 {name: "gas", age: 30}, 1 {name: "hna", age: 19}
// })

// // every testを実行するかんすう

// const isBelowThreshold = currentValue => currentValue < 39

// // const arrayevery = [1,30,39, 29, 10,13]

// // console.log(arrayevery.every(isBelowThreshold)) // 40


// // some true or false 一つでもあればオーケー
// let someValue = [10,20,30]
// let what = someValue.some((value, index) => {
//     return value > 10
// })
// console.log(what) // true

// const packing = ['2028', '2021', '2019']

// const even = element => element % 2 === 0

// console.log('even',packing.some(even)) // true

// // filter

// let basket = [
//     {
//         fruit:'Orange',
//         color: 'orange'
//     },
//     {
//         fruit:'Pine',
//         color: 'yellow'
//     },
//     {
//         fruit: 'Grape',
//         color: 'blue'
//     }
// ]


// // const fruitCollection = basket.filter((value) => {
// //     return value.fruit == 'Grape'
// // })


// // console.log(fruitCollection) // {fruit: 'Grape', color:'blue'}


// const colorArray = value => value.color === 'yellow'

// console.log(basket.filter(colorArray))


// // slice indexがstart ~ endまでの浅いこーぴー

// let slp = [10,20,30,40]

// console.log(slp.slice(1,3)) // 20,30
// console.log(slp) //10,20,30,40

// // splice :splice(start, deleteCount, '要素') => deleteに0を指定すると削除しない

// const months = ['10月', '11月', '9月'] //  ["10月", "5月", "11月", "9月"]
// months.splice(1,0, '5月')
// console.log(months)


// // map

// let m = [1,2,3]

// let areas = []

// let are;

// for(let i=0; i<m.length; i++) {
//     are = m[i] * 5
//     areas.push(are)
// }

// console.log(areas) // 5,10,15

// let mm = [1,2,3]

// const mapping = mm.map(l => {
//     return l * 5
// })

// console.log(mapping) // 5,10,15

