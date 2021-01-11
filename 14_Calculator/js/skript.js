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
    default:
      break;
  }
   
  document.querySelector(".screen").innerHTML += '=' + res

}