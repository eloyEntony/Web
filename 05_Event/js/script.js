
const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
const URL2 = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
const all_transaction=[];

function Request(URL, callback){

    //let xhr = new XMLHttpRequest();

    // xhr.open("GET", URL, true);
    // xhr.send();
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState!=4) return;    
    //     if(xhr.status !=200){
    //         let errStatus = xhr.status;
    //         let errText = xhr.statusText;
    //         console.log(errStatus, " ", errText);
    //     }
    //     else{
    //         let data = JSON.parse(xhr.responseText);
    //         //console.log(data);
    //         callback(data);
    //     }
    // }

    fetch(URL)
        .then(data=>{
            return data.json();
        })
        .then(currency=>{
            //console.log(currency);
            callback(currency);
        })
    .catch(error=>console.log(error.responce));

}

function CashCurrency(data){
    
    let root = document.querySelector("#root");

    for(let i=0; i<data.length; i++){
        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.setAttribute("scope", "row");

        th.innerHTML= `${data[i].ccy} - ${data[i].base_ccy}`;
        tr.appendChild(th);

        let td_buy = document.createElement("td");
        td_buy.innerHTML = `${data[i].buy}`;
        tr.appendChild(td_buy);

        let td_sale = document.createElement("td");
        td_sale.innerHTML = `${data[i].sale}`;
        tr.appendChild(td_sale);

        root.appendChild(tr);
    }
}
let data;
function CardCurrency(currency){
    //console.log("CardCurrency : ", currency);
    console.log("===================================");
    data = currency;
    data.map(item=>{
        console.log(item);
    })
}

//Request(URL, CashCurrency);
Request(URL2, CardCurrency);
window.addEventListener("load", Request(URL, CashCurrency));

// const btn = document.querySelector(".get_currency");
// function Init(){
//     Request(URL, CashCurrency);
// }
 //btn.addEventListener("click", Init);
// btn.addEventListener("click", ()=>{Request(URL, CashCurrency)});

let sum;
let selectIndexGet; 
let selectIndexGive;
let res;

function updateValue(e) {
    console.log(e.target.value);
    sum = e.target.value;
  }
let input = document.querySelector("#main_input");
input.addEventListener('input', updateValue);

//! have gurrency
let usd = parseInt(document.querySelector("#usd").innerText);
console.log(usd);
let euro = parseInt(document.querySelector("#euro").innerText);
console.log(euro);
let rur = parseInt(document.querySelector("#rur").innerText);
console.log(rur);
let btc = parseFloat(document.querySelector("#btc").innerText);
console.log(btc);
let uah = parseInt(document.querySelector("#uah").innerText);
console.log(uah);
//!

let you_give = document.querySelector("#give_select") // select you give ...
you_give.addEventListener("change", ()=>{
    selectIndexGive = parseInt(you_give.options[you_give.selectedIndex].value);
    console.log("Give currency", selectIndexGive);
    switch(selectIndexGive){
        case 1:
            GetOtherCurrency();
            break;
        case 2:
            GetUAH();
            break;
        case 3: 
            GetUAH();
            break;
        case 4: 
            GetUAH();
            break;
        case 5: 
            GetUSD();
            break;
    }
    
})

let get_currency = document.querySelector("#get_currency"); // you get :...


let you_get = document.querySelector("#get_select");
you_get.addEventListener("change", ()=>{
    selectIndexGet = you_get.options[you_get.selectedIndex].value;
    get_currency.innerHTML = "";

    console.log("Select index", selectIndexGet);
    console.log("Buy price", data[selectIndexGet-1].buy);
    console.log("You get", data[selectIndexGet-1].ccy);

    //get_currency.innerHTML = data[selectIndexGet-1].ccy;

    //res = sum / data[selectIndexGet-1].sale;
    //console.log(res);
    //document.querySelector(".card-text").innerHTML = res;
})


let btn_convert =document.querySelector("#btn_convert");
btn_convert.addEventListener("click", ()=>{
   
    if(selectIndexGive == 1){
        res = sum / data[selectIndexGet-1].sale;
        console.log(res);
        switch(selectIndexGet-1){  
            case 0:
                if(res > usd) return;
                usd = usd - res;
                uah = uah + parseInt(input.value);
                get_currency.innerHTML = data[selectIndexGet-1].ccy;
                document.querySelector(".card-text").innerHTML = res;
                break;
            case 1:
                if(res > euro) return;
                euro = euro - res;
                uah = uah + parseInt(input.value);
                get_currency.innerHTML = data[selectIndexGet-1].ccy;
                document.querySelector(".card-text").innerHTML = res;
                break;
            case 2:
                if(res > rur) return;
                rur = rur - res;
                uah = uah + parseInt(input.value);
                get_currency.innerHTML = data[selectIndexGet-1].ccy;
                document.querySelector(".card-text").innerHTML = res;
                break;
        }
    }
    

})

let btn_get = document.querySelector("#get");
btn_get.addEventListener("click", ()=>{
    
    switch(selectIndexGet-1){  
        case 0:
            if(res > usd) return;
            document.querySelector("#usd").innerHTML = usd;
            document.querySelector("#uah").innerHTML = uah;
            clearAllAfterGet();
            break;
        case 1:
            if(res > euro) return;
            document.querySelector("#euro").innerHTML = euro;
            document.querySelector("#uah").innerHTML = uah;
            clearAllAfterGet();
            break;
        case 2:
            if(res > rur) return;
            document.querySelector("#rur").innerHTML = rur;
            document.querySelector("#uah").innerHTML = uah;
            clearAllAfterGet();
            break;
        case 3:           
            break;

    }

    addNewTranscount_toaction(data[selectIndexGet-1].base_ccy, data[selectIndexGet-1].ccy, sum, res);   
});

function addNewTranscount_toaction(from, to, count_from, count_to){
    let tmp_transaction ={
        From:from,
        To: to,
        Count_from: count_from,
        Count_to: count_to
    }
    all_transaction.push(tmp_transaction);

    console.log(tmp_transaction);
}

function GetUAH(){
    let select = document.querySelector("#get_select");
    clearSelect(select);    
    let tmpOption = document.createElement("option");
    tmpOption.setAttribute("value", "0");
    tmpOption.innerHTML = "UAH";
    select.appendChild(tmpOption);
    console.log(select);
}
function GetUSD(){
    let select = document.querySelector("#get_select");
    clearSelect(select);    
    let tmpOption = document.createElement("option");
    tmpOption.setAttribute("value", "0");
    tmpOption.innerHTML = "USD";
    select.appendChild(tmpOption);
    console.log(select);
}
function GetOtherCurrency(){
    let select = document.querySelector("#get_select");
    clearSelect(select);
    let defaulOption = document.createElement("option");
    defaulOption.setAttribute("value", "0");
    defaulOption.innerHTML = "To";
    select.appendChild(defaulOption);
    for(let i=0; i<data.length-1; i++){
        let tmpOption = document.createElement("option");
        tmpOption.setAttribute("value", [i+1])
        tmpOption.innerHTML = `${data[i].ccy}`;
        select.appendChild(tmpOption)
    }
}

// let radioBuy = document.querySelector("#buy");
// radioBuy.addEventListener("change", ()=>{

//     let select = document.querySelector("#get_select");

//     clearSelect(select);

//     let defaulOption = document.createElement("option");
//     defaulOption.setAttribute("value", "0");
//     defaulOption.innerHTML = "Change currency";
//     select.appendChild(defaulOption);

//     for(let i=0; i<data.length; i++){

//         let tmpOption = document.createElement("option");
//         tmpOption.setAttribute("value", [i+1])
//         tmpOption.innerHTML = `${data[i].base_ccy} - ${data[i].ccy}`;
//         select.appendChild(tmpOption)
//     }
// })

// let radioSale = document.querySelector("#sale");
// radioSale.addEventListener("change", ()=>{

//     let select = document.querySelector("#get_select");
    
//     clearSelect(select);

//     let defaulOption = document.createElement("option");
//     defaulOption.setAttribute("value", "0");
//     defaulOption.innerHTML = "Change currency";
//     select.appendChild(defaulOption);

//     for(let i=0; i<data.length; i++){

//         let tmpOption = document.createElement("option");
//         tmpOption.setAttribute("value", [i+1])
//         tmpOption.innerHTML = `${data[i].ccy} - ${data[i].base_ccy}`;
//         select.appendChild(tmpOption)
//     }
// })

function clearSelect(select){
    for (i = select.length-1; i >= 0; i--) {
        select.options[i] = null;
    }
}


function clearAllAfterGet(){
    input.value = null;
    document.querySelector(".card-text").innerHTML = "";
    get_currency.innerHTML = "";
}