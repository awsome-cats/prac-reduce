let person = {
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

/**
 * arrayを展開するperson[val]
 * だがobjectを展開できないので再度for文を使用
 * その際nullを含む場合を省く理由からisObjectを作成
 *
 */
const isObject = function(val) {
    if (val === null) {
        return false;
    }
    return (typeof val === 'object');
}

for (let val in person) {
    if (isObject(person[val])) {
        for (let val2 in person[val]) {
            console.log(val2, person[val][val2])
        }
    }else {
        console.log(val, person[val])
    }
}

/**
 * さらに深いネストのオブジェクトを作成
 * 再帰的にくりかえす
 */

let person2 = {
    'students': {
        'firstName': 'Steven',
        'lastName': 'Hancock'
    },
    address: {
        street: {
            street1: '100 N. Main',
            street2: 'Apt. 5'
        },
        city: 'N.Y',
        zip: 1001
    },
    'attempts': ['1/15/2020', '2/28/2020', '3/2/2020'],
    "quiz_1": 90,
    "quiz_2": 90,
    "quiz_3": 90,
    "quiz_4": 90,
    "quiz_5": 90,
    "quiz_10": 90,
}

const isObject2 = function(val) {
    if (val === null) {
        return false;
    }
    return (typeof val === 'object');
}

const objProps = function(obj) {
    for (let val in obj) {
        if (isObject2(obj[val])) {
            objProps(obj[val]);
        }else {
            console.log(val, obj[val])
        }
    }
}

objProps(person2)


