// console.log("hello")


// var age = 20;
// console.log("Age = ", age);
// console.log(typeof age);


// age = "Bill";
// console.log("Age = ", age);
// console.log(typeof age);

// Розробити програму, що переводить значення температури в градусах по Цельсію в 
// температуру по Фаренгейту та навпаки. Співвідношення між температурами визначається формулою: 
// TF = TC *1.8 +32. Діалог с користувачем реалізувати через систему меню.

//  let tc = prompt("Enter TC :");
//  let tf = prompt("Enter TF :");

//  let tc_res = (tf - 32) / 1.8;
//  console.log("TF to TC > " + tc_res);

//  let tf_res = tc * 1.8 + 32;
//  console.log("TC to TF > " + tf_res);


// Дано символ. Визначити чи символ є цифрою.

//  let a = prompt("Entre somesing : ");
//  if(parseInt(a)){
//      console.log(typeof parseInt(a));
//  }
//  else{
//      console.log(typeof a);
//  }

// SWITCH
// Написати програму яка пропонує ввести три оцінки з клавіатури (від 2 до 5) підраховує середній бал. 
// Якщо середній бал рівний 2, тоді виводиться BAD, 3 - SO-SO, 4 - GOOD, 5 - EXCELLENT. 
// Примітка! Значення оцінок являються перелічуваними константами.

// const first = parseInt(prompt("Enter first (2 to 5):"));
// const second = parseInt(prompt("Enter second (2 to 5):"));
// const last = parseInt(prompt("Enter last (2 to 5):"));

// let res = parseInt((first + second + last)/3);

// switch(res){
//     case 2:
//         console.log("BAD");
//         break;
//     case 3:
//         console.log("SO-SO");
//         break;
//     case 4:
//         console.log("GOOD");
//         break;
//     case 5:
//         console.log("EXCELLENT");
//         break;
// }


//Написати повноцінний калькулятор. 
// Введення цифр та вибір математичної операції виконати в діалоговому стилі (запитати у користувача, вивести меню). 
// У програмі передбачити уникнення помилок (ділення на нуль і т.д.). Фантазія та «дизайн» меню – ціниться та вітається!!!


// let firstD = Number(prompt("Enter first digit :"));
// let operant = prompt ("Enter operand :");
// let secondD = Number(prompt("Enter second digit :"));


// console.log(firstD);
// console.log(typeof firstD);

// console.log(operant);
// console.log(typeof operant);

// console.log(secondD);
// console.log(typeof secondD);

// switch(operant){
//     case "+":
//         console.log("RES = ", firstD + secondD);
//         break;
//     case "-":
//         console.log("RES = ", firstD - secondD);
//          break;
//     case "*":
//         console.log("RES = ", firstD * secondD);
//         break;
//     case "/":
//         console.log("RES = ", firstD / secondD);
//         break;

// }


// Написати „банківську” програму, яка за отриманими даними (початковий капітал, процентна ставка і строк вкладу)
//виводить на екран суму, яка буде на рахунку за введений строк. 

 let capit = parseInt(prompt("Enter start capital :"));
 let proz = parseInt(prompt("Enter % : "));
 let strok = parseInt(prompt("Enter strok (year): "));

 alert(capit + ((capit * proz / 100) * strok));
 console.log(capit + ((capit * proz / 100) * strok));


// Написати програму, яка виводить на екран прості числа в діапазоні від 2 до 1000. (Число називається простими,
//якщо воно ділиться лише на 1 і на саме себе без остачі; причому числа 1 і 2 простими не являються). 

function natural(){
    nextPrime:
    for (var i = 2; i <= 1000; i++) {

        for (var j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}

natural();


