
// 配列に変換
let scores = {
    "quiz_1": 90,
    "quiz_2": 90,
    "quiz_3": 90,
    "quiz_4": 90,
    "quiz_5": 90,
    "quiz_10": 90,
}

let arr

arr = Object.entries(scores);
console.log(arr)

let students = {
    'students': {
        'firstName': 'Steven',
        'lastName': 'Hancock'
    },
    'attempts': ['1/15/2020', '2/28/2020', '3/2/2020'],
    "quiz_1": 90,
    "quiz_2": 90,
    "quiz_3": 90,
    "quiz_4": 90,
    "quiz_5": 90,
    "quiz_10": 90,
}
// 配列に変換
arr2 = Object.entries(students)
console.log(arr2)

// オブジェクトに変換(配列に変換したのをもとにもどす)

arr3 = Object.fromEntries(arr2)
console.log(arr3)