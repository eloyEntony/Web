/*function GetData() {
var url = "test.json";
console.log(url);
return url;
}
//===================
var SaveData = function(){
    var url = "blog.json";
    console.log(url);
}
SaveData();
//=========================
var func = GetData();
console.log(func);*/

//==============

window.addEventListener('load', function(){
    let id = getRandomArbitrary(100000, 999999);   
    console.log(id)
    document.querySelector('.id').value = id

})

var ClientDB = [];

function GetData() {
  let name = document.querySelector(".name").value;
  let surname = document.querySelector(".surname").value;
  let amount = parseInt(document.querySelector(".amount").value);
  let period = parseInt(document.querySelector(".period").value);
  let id = parseInt(document.querySelector(".id").value);
  let bob = Validate();
  bob(name, surname, amount, period, id);
}

function Validate() {

  var rate = 12;

  let alterMassage = document.querySelector('#alterMassage');

  return function (name, surname, amount, period, id) {
    
    document.getElementById("alert").style.display = "block"

    if (name.length < 3 || name.length > 16) {
      alterMassage.textContent = "Incorrect input name."
    } else if (surname.length < 3 || surname.length > 16) {      
      alterMassage.textContent = "Incorrect input surname."
    } else if (amount< 100 ||amount > 5000) {
      alterMassage.textContent = "To match."
    } else if (period == null || (period > 24 || period < 6)) {
      alterMassage.textContent = "To Few!"
    }
    else {
      alterMassage.textContent = "Success!"
      document.getElementById("alert").style.backgroundColor = 'green'
      
      console.log("Success!");
      var newClinet = new SaveData(name, surname, amount, period, rate);
      ClientDB.push(newClinet);
    }
  };
 
}


function SaveData(name, surname, amount, period, rate) {
  this.name = name;
  this.surname = surname;
  this.amount = amount;
  this.period = period;
  this.rate = rate;
}


function ShowPersonInfo (){
  ClientDB.forEach(function(item, key){
    console.log(item, " ", key);
  })
  console.log("ClinetDB length", ClientDB.length);
  console.log("==============================>>>>>");
  console.log("New Client Added");
}


function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min) 
}

