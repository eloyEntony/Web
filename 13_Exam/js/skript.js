
window.addEventListener('load', function(){
    let id = getRandomArbitrary(100000, 999999);   
    console.log(id)
    document.querySelector('.id').value = id
})

let ClientList = [];

function GetData() {
  let name = document.querySelector(".name").value;
  let surname = document.querySelector(".surname").value;
  let amount = parseInt(document.querySelector(".amount").value);
  let period = parseInt(document.querySelector(".period").value);
  let id = parseInt(document.querySelector(".id").value);
  let bob = Validate();
  bob(name, surname, amount, period, id);
}

let name_surname_Valid = ['не може бути менше 3 символів', 'не може містити спец символи або цифри']
let alterMassage = document.querySelector('#alterMassage');

document.querySelector('.name').addEventListener('input', function(){
  document.querySelector('.name').style.borderColor = ''
})
document.querySelector('.surname').addEventListener('input', function(){
  document.querySelector('.surname').style.borderColor = ''
})
document.querySelector('.amount').addEventListener('input', function(){
  document.querySelector('.amount').style.borderColor = ''
})
document.querySelector('.period').addEventListener('input', function(){
  document.querySelector('.period').style.borderColor = ''
})



function Validate() {

  return function (name, surname, amount, period, id) {
    
    document.getElementById("alert").style.display = "block"
    let inputs =[];

    inputs.push(document.querySelector(".name").style.borderColor = ChackString(name))    
    inputs.push(document.querySelector(".surname").style.borderColor = ChackString(surname));    
    inputs.push(document.querySelector(".amount").style.borderColor = ChackAmount(amount));  
    inputs.push(document.querySelector(".period").style.borderColor = ChackPeriod(period));
    inputs.push(console.log(inputs))


    if(inputs.includes("red")){
      console.log("Bad data")
    }
    else {
      alterMassage.innerHTML = "Success!"
      document.getElementById("alert").style.backgroundColor = 'green'
      Clearinputs()
      AddData(name, surname, amount, period, id);

      document.querySelector('.id').value = getRandomArbitrary(100000, 999999);
    }
  }; 
}

function ChackString(tmp){
  let style;
  if (tmp.length < 3 || tmp.length > 16) {
    alterMassage.innerHTML = name_surname_Valid[0] + '<br/>'   
    style = "red" 
  } 

  let symvol = tmp.split("");
    console.log(symvol)
  for(let i=0; i< tmp.length; i++){
    let t = tmp.charCodeAt(i)
    if((t>33 && t<64) || (t>91 && t<96) || (t>123 && t<126)) {
      alterMassage.innerHTML += name_surname_Valid[1] + '<br/>'
      style = "red";
      break;
    }
  }

  return style;
}
function ChackAmount(tmp){
  let style;
  if (!tmp || tmp< 100 || tmp > 5000) {
    alterMassage.innerHTML += "діапазон 100 - 5000" + '<br/>'
    style = "red"
  } 
  return style
}
function ChackPeriod(period){
  let style;
  if (!period || period > 24 || period < 6) {
    alterMassage.innerHTML += "period must be from 6 to 24" + '<br/>'
    style = "red"
  }
  return style
}
function Clearinputs(){
  document.querySelector(".name").value = '';
  document.querySelector(".surname").value = '';
  document.querySelector(".amount").value = '';
  document.querySelector(".period").value = '';
  document.querySelector(".id").value = '';
}
function SaveData(name, surname, amount, period, rate) {
  this.name = name;
  this.surname = surname;
  this.amount = amount;
  this.period = period;
  this.rate = rate;
}

function ShowPersonInfo (){
  GetDataFromBase()
  setTimeout(show, 1000)
  setTimeout(FillTable, 1000)

}
function show(){
  console.log(ClientList)
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min) 
}

//! work withs database

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkZWfFU9npq0DZBsWi8gFh1lkGwybt6_Q",
    authDomain: "creditdb-162f8.firebaseapp.com",
    projectId: "creditdb-162f8",
    storageBucket: "creditdb-162f8.appspot.com",
    messagingSenderId: "750111145326",
    appId: "1:750111145326:web:3cdd81d0c97edd86ab157f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//! Add data
  function AddData(name, surname, amount, period, id){
      firebase.database().ref('creditDB/'+ id).set({
        id: id, 
        name: name,
        surname: surname,
        amount: amount,
        period: period
      })
      console.log('Data save')
  }
 //! Get data

  async function GetDataFromBase(){
    //ClientList
    let ref = firebase.database().ref().child('creditDB');
    ref.once('value',function(snap) {
      ClientList = []
      snap.forEach(function(item) {
          var itemVal = item.val();
          ClientList.push(itemVal);
      });
    });
  }



function FillTable(){
  ClearTable()
  let table = document.querySelector('#tableBody')

  for(let i = 0; i< ClientList.length; i++){
    let tr = document.createElement('tr')
     let th = document.createElement('th')
     th.setAttribute('scope', 'row')

     th.innerHTML = ClientList[i].id;
     tr.appendChild(th)

     let td_name = document.createElement('td')
     td_name.innerHTML = ClientList[i].name
     tr.appendChild(td_name)

     let td_surname = document.createElement('td')
     td_surname.innerHTML = ClientList[i].surname
      tr.appendChild(td_surname)

      let td_amount = document.createElement('td')
      td_amount.innerHTML = ClientList[i].amount
      tr.appendChild(td_amount)

      let td_period = document.createElement('td')
      td_period.innerHTML = ClientList[i].period
      tr.appendChild(td_period)

    table.appendChild(tr)


  }
}

function ClearTable(){
  document.querySelector('#tableBody').innerHTML = ''
}