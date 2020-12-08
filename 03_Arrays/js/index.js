//const numbers = [4,5,6,9,1,3,51,13,98,1,0];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// numbers.map(item=>{
//     console.log(item);
// });

// function For(){
//     for(item in numbers){
//         console.log(item, " ", numbers[item]);
//     }
// }

// For();

// console.log("==================================");
// const a = 10;
// numbers.push(11);
// For();

// console.log("==================================");
// numbers.pop();
// For();

// console.log("==================================");
// numbers.shift();
// For();

// console.log("==================================");
// numbers.sort();
// For();

// console.log("==================================");
// numbers.sort((a, b) => a - b);
// For();

// console.log("==================================");
// const names= ["Bob", "Mack", "Anton", "Nikita"];

// names.sort();
// names.map(item=>{console.log(item);});



//1. Оголосити одновимірний масив з 10 елементів типу number. 
// Заповнити випадковими значеннями, вивести на екран 
// та підрахувати добуток елементів масиву

// let num = [];

// for(let i=0; i<10; i++){
//     num.push(Math.floor(Math.random() * (10 - 1) + 1))
// }
// console.log(num);

// 2. Дано одновимірний масив.
// Знайти суму елементів з непарними індексами.
// let sum=[];
// for(let i =0; i<num.length; i++){
//     if(i%2)
//     {
//         sum.push(num[i]);
//     }
// }
// console.log(sum.reduce(function(a, b) {return a + b; }));

// 3. Дано масив А. 
// Скопіювати елементи масиву А у масив В. 
// ВБУДОВАНА ФУНКЦІЯ

// let a =[1,2,3,4,5];
// let b =[];
// b = a.slice();
// console.log(b);


// 4 .Дано масив А. Утворити реверс масиву А у масиві В

// let c = [];
// c = a.slice().reverse();
// console.log(c);



/////////////////////function constructor

// function Person (name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;

//     this.ShowPerson = function(){
//         console.log(`Name: ${this.name} Surname: ${this.surname} Age: ${this.age}`);
//     }
// }

// let bob = new Person("Bob", "Trava", 23);
// bob.ShowPerson();


// Написати калькулятор, робота якого буде основана на функціях. 
// Введення цифр та вибір математичної операції виконати в діалоговому стилі 
// (запитати у користувача, вивести меню). У програмі передбачити уникнення
//  помилок (ділення на нуль і т.д.). 


 let firstD = Number(prompt("Enter first digit :"));
 let operant = prompt ("Enter operand :");
 let secondD = Number(prompt("Enter second digit :"));

 let Dec = new Function('a', 'b', 'return a-b');


 console.log(firstD);
 console.log(typeof firstD);

 console.log(operant);
 console.log(typeof operant);

 console.log(secondD);
 console.log(typeof secondD);

 switch(operant){
     case "+":
         console.log("RES = ", Sum(firstD, secondD));
         break;
     case "-":
         console.log("RES = ", Dec(firstD, secondD));
          break;
     case "*":
         console.log("RES = ", Multiplication(firstD, secondD));
         break;
     case "/":
         if(secondD === 0){
             console.log("Error /0")
             break;
         }        
         console.log("RES = ", Division(firstD, secondD));
         break;

}

function Sum(a, b){
    return a+b;
}

function Multiplication(a, b){
    return a*b;
}

function Division(a, b){
    return a/b;
}
