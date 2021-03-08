/**
 * reduce.js:9 (2) [0, 95]
 */
const scores = [90, 30, 20, 75, 85, 95, 0, 55, 60, 40];



let minMax = scores.reduce((prev, current) =>
[Math.min(prev[0], current),
Math.max(prev[1], current)], [100, 0])
console.log(minMax)

/**
 *
 特定のユーザーのすべての情報をすぐに取得できる
 */
const students = [
    {
        user_id: 'ken',
        name: 'Ken',
        passFail: true
    },
    {
        user_id: 'HH',
        name: 'Debbie',
        passFail: true
    },
    {
        user_id: 'NN',
        name: 'Max',
        passFail: false
    }
]

let studentObj = students.reduce((prev, current) => {
    return {...prev, [current.user_id]:current}
}, {})

console.log(studentObj)

console.log(studentObj.ken)

/**
 *
 */

 const person = [
     {
         id: "1",
         name: "Ken",
         age: 40
     },
     {
         id: "2",
         name: "Henna",
         age: 20
     },
     {
         id: "3",
         name: "Nancy",
         age: 47
     },
 ]
let result;
 // count
result = person.reduce((prev, current) => prev + 1, 0)

 // sum ages
result = person.reduce((prev, current) => prev + current.age, 0)
console.log(result)

 // array of names (map)
result = person.reduce((prev, current) => [...prev, current.name], [])
console.log(result)

 // convert to id => person lookup (dict)
 result = person.reduce((prev, current) => {
     return {...prev, [current.id]:current}
 }, {})
 console.log(result[2])

 // max age
 // 47
 result = person.reduce((prev, current) => {
     if (prev === null || current.age > prev) {
         return current.age
     }
     return prev;
 }, null)
 console.log(result)

 // find by name
 // reduce.js:103 {id: "2", name: "Henna", age: 20}
 result = person.reduce((prev, current) => {
    if (prev !== null) {
        return prev

    }
    if (current.name === 'Henna'){
        return current
    }
    return null
 }, null)

 console.log(result)

 // all over 18
 // true

 result = person.reduce((prev, current) => {
     if (!prev) return false;
     return current.age > 19
 }, true)
 console.log(result)

 // any over 18
 // true

 result = person.reduce((prev, current) =>{
     if (prev) return true;
     return current.age > 46
 }, false)
 console.log(result)

 // count occurrences
 // reduce.js:141 {pending: 2, cancelled: 1, shipped: 1}

 const orders = [
     {
         id: '1', status: 'pending'
     },
     {
         id: '2', status: 'pending'
     },
     {
         id: '3', status: 'cancelled'
     },
     {
         id: '4', status: 'shipped'
     },
 ]

 result = orders.reduce((prev, current) => {
     return {...prev, [current.status]: (prev[current.status] || 0) + 1}
 }, {})
 console.log(result)

// flatten
// Arrayかどうかを判断する: Array.isArray
// これは意味わからん
const folders = [
    'index.js',
    ['flatten.js', 'map.js'],
    ['any.js', ['all.js', 'count.js']]
];

function flatten(acc, item) {
    console.log(acc,item)
if (Array.isArray(item)) {
    return[...acc, ...item.reduce(flatten, [])]
}
return [...acc, item]
}

result = folders.reduce(flatten, [])
console.log(result)

// 別の方法
function flatten(acc, item) {
if (Array.isArray(item)) {
    return item.reduce(flatten, acc)
}
return [...acc, item]
}

result = folders.reduce(flatten, [])
console.log(result)

// create reduce ourselves
// 意味わからん

function reduce(array, callback, initial) {
    let acc = initial;
    for (let i=0; i < array.length; i++) {
        acc = callback(acc, array[i], i, array);
    }
    return acc;
}

result = reduce([1,2,3], (acc, num) => acc + num, 0)
console.log(result)

// push number to array only
let studentData = ['John Doe', 'some school', 6,7,8, 'some rule'];

let numbers = studentData.reduce((prev, current) => {
    if (typeof current === 'number') prev.push(current);
    return prev
}, [])


console.log(numbers)

/**
 * 文字列の連結
 */

let transScript = ['hello', 'there,', 'how', 'is', 'it', 'going?'];

let finalScript = transScript.reduce((prev, current) => {
    return prev + ' ' + current
})

console.log(finalScript)

// 平均

let realEstate = [
    {
        id: '1',
        name: 'KEN',
        price: 1000
    },
    {
        id: '2',
        name: 'YEN',
        price: 2000
    },
    {
        id: '3',
        name: 'JIN',
        price: 3000
    }
]

let newValue = realEstate.reduce((prev, current) => prev + current.price, 0)

let avg = newValue / realEstate.length
console.log(avg)

// total
const store = [
    {product: 'AA', value: 1000, count: 3},//3000
    {product: 'BB', value: 2000, count: 4},// 8000
    {product: 'CC', value: 5000, count: 3},// 15000
];

let total = store.reduce((prev, current) => prev + current.value*current.count, 0)
console.log(total)