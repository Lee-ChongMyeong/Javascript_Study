// alert('Im Working. Im Js. Im Beautiful. Im worth it')

// [const , let] 
// let a = 221;
// let b = a-5;
// a - 4;
// console.log(b, a);

/*
const what = "Nicolas";
*/

/*
Boolean
const wat = true;
*/

/*
Number
const wat = 666;
*/

// Float 
//const wat = 55.1;

//// [array, Object]
// const mon = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";

// console.log(mon, tue, wed, thu, fri);

// const daysOfWeek = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ];
// console.log(daysOfWeek)
// console.log(daysOfWeek[2])

// const ObjectList = ["Nicolas", "55", true, "Seoul"];
// console.log(ObjectList);


// const nicoInfo = {
//     name : "Nicolas",
//     age : 33,
//     gender : "Male",
//     isHandsome : true,
//     favMovies : ["Along the gods", "LOTR", "Oldboy" ],
//     favFood : [
//         {   name : "Kimchi",
//             fatty : false
//         },
//         {   name : "Cheese  burger",
//             fatty : true
//         }
//     ]
// }

// console.log(nicoInfo.gender)
// nicoInfo.gender = "Female"
// console.log(nicoInfo.favFood);

//// [function]
// console.log("Hello Nicolas")
// console.log("Hello Jun")
// console.log("Hellos Liyn")
// console.log("Hello Dal")

// function sayHello(potato){
//     console.log('Hello!', potato);
// }

// sayHello("Nicolas");
// console.log("Hi!")

// function sayHello2(name, age){
//     console.log('Hello!', name, 'you have ', age, " years of age")
// }

// sayHello2("Nicolas", 15);

// function sayHello3(name,age){
//     return `hello ${name} you are ${age} years old`
// }

// const greetNicolas = sayHello3("nicolas", 14)
// console.log(greetNicolas)

// const calculator = {
//     plus : function(a,b){
//         return a + b;
//     },
//     minus : function(a,b){
//         return a - b;
//     },
//     multiply : function(a,b){
//         return a * b;
//     },
//     divide : function(a,b){
//         return a / b;
//     },
//     remainder : function(a,b){
//         return a % b;
//     }
// }
// console.log(calculator);

// const plus = calculator.plus(5, 5);
// const minus = calculator.minus(10,5);
// const multiply = calculator.multiply(10,5);
// const divide = calculator.divide(10,5);
// const remainder = calculator.remainder(10,5);

// console.log(plus);
// console.log(minus);
// console.log(multiply);
// console.group(divide);
// console.log(remainder);


//// js & DOM 
// const title = document.getElementById("title");
// const title2 = document.querySelector("#title");
// title.innerHTML = "Hi! From JS";
// title.style.color = "green";
// console.log(title)
// console.dir(title)
// console.log(document);
// // console.error("Fuck");
// console.log(title2)

// document.title = 'i own you now';

//// EventLister
// function handleResize(){
//     console.log("I have been resized");
// }

// window.addEventListener("resize", handleResize);

// function handleClick(){
//     console.log(title.style.color);
// }

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     console.log(currentColor)
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){ //초기화 시킴
//     title.style.color = BASE_COLOR;
//     // title.addEventListener("click", handleClick);
//     title.addEventListener("mouseenter", handleClick);
// }
// init();

// function handleOffline(){
//     console.log("Good Bye")
// }

// function handleOnline(){
//     console.log("Welcome back")
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);


//// [If example]
// const age = prompt("How old are u ?");
// console.log(age)
// if (age >= 18 && age <= 21){
//     console.log('you can drink but you should not')
// }else if(age > 21){
//     console.log('go ahead')
// }else{
//     console.log('Too young')
// }


const title = document.querySelector('#title');
console.log('title', title)
console.log('titke.className', title.className)
const CLICKED_CLASS = "clicked";

/*function handleClick(){
const currentClass = title.className;
if (currentClass !== CLICKED_CLASS){
title.className = CLICKED_CLASS;
} else {
title.className ="";
}
}
*/

// function handleClick(){
// const hasClass = title.classList.contains(CLICKED_CLASS);
// if (!hasClass){
// title.classList.add(CLICKED_CLASS);
// } else {
// title.classList.remove(CLICKED_CLASS);
// }
// }

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}


function init(){
    title.addEventListener("click", handleClick);
}
init();