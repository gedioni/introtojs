// Q1

var oper1 = 20 + 4
var oper2 = 30 - 6
var oper3 = 12 * 2
var oper4 = 144/6

console.log(oper1, oper2, oper3, oper4)

// Q2

var op1 = 6%3
var op2 = 10%2
var op3 = 5%2

console.log(op2 > op1)
console.log(op2 === op1)

// Q3

var line1 = "Test Grade as follows: \n \t Student1: 96 \n \t"
var line2 = "Comment: \"None\""

console.log(line1 + line2)

// ARRAYS

var day = [3, 4, 7, 9, 5, 2, 6, 8,3,]
console.log(`The third Value is ${day[2]} and  the fifth value is ${day[4]}`)


// OBJECT

var ge = {
    name: "Gedion Edem",
    age: 31,
    height: '5"6',
    Nationality: "Nigerian",

}

console.log(`Hi I am ${ge.name} and I am ${ge.age}. I am ${ge.height} in height...`)


// LOOPS

//  Q6


var num = 1

while(num < 10){
    if( num % 2 === 0){
        console.log(num)
    }
    num++
}

// FOR LOOPS

// Q7



for(var num=1; num<10; num++){
    if( num % 2 !== 0){
        console.log(num)
    }
}