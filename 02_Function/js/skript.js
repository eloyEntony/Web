// console.log("Works!");

// // Написаим функцію яка виводить на екран наступну інформацію:

// (function(){

// //  - браузер

//  let brows = document.getElementById("brows");
//  brows.innerHTML = navigator.appCodeName;

// //  - розширення екрану

// let mon = document.getElementById("monitor");
// mon.innerHTML = screen.height + " x " + screen.width;

// //  - Мову оs

// let lang = document.getElementById("lang");
// lang.innerHTML = navigator.language;

// //  - операційну систму
// let os = document.getElementById("os");

// if(navigator.userAgent.indexOf("NT 10.0") !== -1){
//   os.innerHTML = "Windows 10";
// }
// })();


// Зверстати html форму з логін і пороль:
// Написати перевірку правильності введеня даних.

function getData(e){

  let login = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if(login === "Anton" && pass ==="qwerty"){
    alert("Login correct");
  }
  else{
    alert("Login faild");
  }

  console.log(login , " ", pass);
}



