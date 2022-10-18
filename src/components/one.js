const user1 = { //#135
    name: "Bob",
    age: 25,
    isStudent: true
}

const address = {
    country: "Italy",
    city: "Rome"
}

const user2 = user1 //#135

let num1 = 10
let num2 = num1
num2 = 'hey!'
console.log(num1)
console.log(num2)

user2.name = 'Anne'
console.log(user1)

// делаем копию = вносим изменения в копию = используем копию с изменениями

const userCopy = {}
userCopy.name = 'Bob'
userCopy.age = user1.age
userCopy.isStudent = user1.isStudent
console.log(user2)
console.log(userCopy)

const country = "Spain"

const userCopy2 = {...user1, isMarried: undefined} // добавление нового свойства
console.log(userCopy2)
const userCopy3 = {...userCopy2, isMarried: false} // изменение существующего свойства
console.log(userCopy3)
const userCopy4 = {...userCopy3, ...address} // слияние двух объектов
console.log(userCopy4)
const userCopy5 = {...userCopy4, country} // имя свойства совпадает с именем переменной
console.log(userCopy5)

// deep copy
const user = {
    name: "Bob",
    age: 25,
    isStudent: true,
    address: {
        country: "Italy",
        city: "Rome" // => "Kiev"
    }
}

const deepCopyUser = {...user, address: {...user.address, city: "Kiev"}}
console.log(deepCopyUser)
console.log(user.address === deepCopyUser.address)

