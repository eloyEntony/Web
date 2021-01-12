window.addEventListener("load", Init);
let firtsNumber = [];
let secondNumber = [];
function Init(){
  document.querySelector(".one").addEventListener("click", getNumber);
    document.querySelector(".two").addEventListener("click", getNumber);
    document.querySelector(".three").addEventListener("click", getNumber);
    document.querySelector(".four").addEventListener("click", getNumber);
    document.querySelector(".five").addEventListener("click", getNumber);
    document.querySelector(".six").addEventListener("click", getNumber);
    document.querySelector(".seven").addEventListener("click", getNumber);
    document.querySelector(".eight").addEventListener("click", getNumber);
    document.querySelector(".nine").addEventListener("click", getNumber);
    document.querySelector(".zero").addEventListener("click", getNumber);
    document.querySelector(".clear").addEventListener("click", Clear);

    document.querySelector(".digrise").addEventListener("click", Digrise);
    document.querySelector(".plus").addEventListener("click", Plus);
    document.querySelector(".multiply").addEventListener("click", Multiply);
    document.querySelector(".divice").addEventListener("click", Divice);
    document.querySelector(".equal").addEventListener("click", Equal);

    document.querySelector(".present").addEventListener('click', Present);
    document.querySelector(".root").addEventListener('click', Sqrt);
    document.querySelector(".ce").addEventListener('click', Ce);
    document.querySelector(".clear").addEventListener('click', ClearAll);

}

let digitFirst;
let digitSecond;
let tmpScreen;
let tmpNum = "";



function Clear(){
  let screenVar = document.querySelector(".screen");
  screenVar.innerHTML = 0;
  firtsNumber = []
}



function getNumber(){

  let screenVar = document.querySelector(".screen");
  console.log(this.textContent);
 
  if(digitFirst==null){
    
    firtsNumber.push(this.textContent)
    screenVar.innerHTML = "";
    for(let i = 0 ; i < firtsNumber.length; i++){
        screenVar.innerHTML += firtsNumber[i];
    }
  }
  else{    
    firtsNumber.push(this.textContent)
    tmpNum = ""  
    for(let i = 0 ; i < firtsNumber.length; i++){
      tmpNum += firtsNumber[i];
    }
    screenVar.innerHTML = tmpScreen + tmpNum
  }
}

let doing = ''

function Association(){
  digitFirst = parseInt(firtsNumber.reduce((a, b) => a + b, 0))
  console.log(digitFirst)
  tmpScreen = document.querySelector(".screen").innerHTML;
  firtsNumber = []
}

function Digrise(){
  document.querySelector(".screen").innerHTML += '-'
  Association()
  doing = '-'
}

function Plus(){
  document.querySelector(".screen").innerHTML += '+'
  Association()
  doing = '+'  
}

function Multiply(){
  document.querySelector(".screen").innerHTML += '*'
  Association() 
  doing = '*'    
}

function Divice(){
  document.querySelector(".screen").innerHTML += '/'
  Association()
  doing = '/'    
}

function Equal(){
  digitSecond = parseInt(firtsNumber.reduce((a, b) => a + b, 0))
  console.log(digitFirst)
  console.log(digitSecond)
  let res;
  switch (doing) {
    case '-':
        res = digitFirst - digitSecond
      break;
    case '+':
        res = digitFirst + digitSecond
      break;
    case '/':
      if(digitSecond!=0)
        res = digitFirst / digitSecond
      break;
   case '*':
        res = digitFirst * digitSecond
      break;
    case '%':
        res = (digitFirst * digitSecond) / 100
      break;
    default:
      break;
  }
   
  document.querySelector(".screen").innerHTML += '=' + res

  Request(document.querySelector(".screen").innerHTML)
}

function Present(){
  document.querySelector(".screen").innerHTML += '%'
  Association();
  doing = '%'
}

function Sqrt(){
  if(firtsNumber!= null){

    digitFirst = parseInt(firtsNumber.reduce((a, b) => a + b, 0))
    console.log(digitFirst)
    console.log(this.textContent);

    document.querySelector(".screen").innerHTML = `&radic;(${digitFirst})=${Math.sqrt(digitFirst)}`  
    Request(document.querySelector(".screen").innerHTML)
  }
}

function Ce(){  
  digitSecond = parseInt(firtsNumber.reduce((a, b) => a + b, 0))
  console.log(digitSecond)
  if(digitSecond!= 0){
    digitSecond = 0;
    firtsNumber = [];
    console.log(digitSecond)
    document.querySelector(".screen").innerHTML = tmpScreen
  }
}

function ClearAll(){
  digitFirst = 0
  digitSecond = 0
  firtsNumber = []
  document.querySelector(".screen").innerHTML = '0'
}

//! work withs database
const DATABASE_URL  = "https://calcdb-default-rtdb.firebaseio.com/calc.json"

function Request(screen){

  fetch(DATABASE_URL,{
       method: 'POST',
       body: JSON.stringify(screen),
       headers:{
         'Content-Type': 'application/json'
       }
   })
}