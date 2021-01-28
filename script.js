// const person = {
//     name: ['kenta', 'kohara'],
//     age: 32,
//     gender: 'male',
//     interest: {
//         sports: 'soccer',
//         music: 'rock'
//     },
//     getFullName: function() {
//         console.log(this.name[0] + this.name[1])
//     }
// }

// person.getFullName()
// person.age = 40
// console.log(person.age)

const array = [1,2,3,4,5]

// 添え字もわたる
for (let i=0; i < array.length; i++) {
    console.log(array[i])
}
// 添え字もわたる
for (let i in array) {
    console.log(array[i])
}
// 値がわたる//babel等でトランスパイルする
for (let v of array) {
    console.log('for of',v)
}

const todos = [
    {
        id: 1,
        title: 'thank you',
        completed: false
    },
    {
        id: 2,
        title: 'world',
        completed: true
    },
    {
        id: 3,
        title: 'Hello',
        completed: true
    }
]

for (let i = 0; i < todos.length; i++) {
    let todo = todos[i]
    if (todo.completed === true) {
        console.log('todo',i, todo.title)
    }
}

for (let i in todos) {
    let todo = todos[i]
    if (todo.completed === false) {
        console.log('for in', i, todo.title)
        
    }
}

for (let value of todos) {

    if (value.completed === true) {
        console.log('for v', value.title)
    }
}