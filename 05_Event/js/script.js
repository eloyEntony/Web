
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
let selectIndex; 
let res;

function updateValue(e) {
    console.log(e.target.value);
    sum = e.target.value;
  }
let input = document.querySelector("#main_input");
input.addEventListener('input', updateValue);

let usd = document.querySelector("#usd");
console.log(usd);

let choose = document.querySelector(".custom-select");
choose.addEventListener("change", ()=>{
    selectIndex = choose.options[choose.selectedIndex].value;

    console.log("Select index", selectIndex);
    console.log("Buy price", data[selectIndex-1].buy);

    res = sum / data[selectIndex-1].buy;
    console.log(res);
    document.querySelector(".card-text").innerHTML = res;
})


let btn_get = document.querySelector("#get");
btn_get.addEventListener("click", ()=>{
    addNewTranscount_toaction(data[selectIndex-1].base_ccy, data[selectIndex-1].ccy, sum, res);   
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

let radioBuy = document.querySelector("#buy");
radioBuy.addEventListener("change", ()=>{

    let select = document.querySelector(".custom-select");

    clearSelect(select);

    let defaulOption = document.createElement("option");
    defaulOption.setAttribute("value", "0");
    defaulOption.innerHTML = "Change currency";
    select.appendChild(defaulOption);

    for(let i=0; i<data.length; i++){

        let tmpOption = document.createElement("option");
        tmpOption.setAttribute("value", [i+1])
        tmpOption.innerHTML = `${data[i].base_ccy} - ${data[i].ccy}`;
        select.appendChild(tmpOption)
    }
})

let radioSale = document.querySelector("#sale");
radioSale.addEventListener("change", ()=>{

    let select = document.querySelector(".custom-select");
    
    clearSelect(select);

    let defaulOption = document.createElement("option");
    defaulOption.setAttribute("value", "0");
    defaulOption.innerHTML = "Change currency";
    select.appendChild(defaulOption);

    for(let i=0; i<data.length; i++){

        let tmpOption = document.createElement("option");
        tmpOption.setAttribute("value", [i+1])
        tmpOption.innerHTML = `${data[i].ccy} - ${data[i].base_ccy}`;
        select.appendChild(tmpOption)
    }
})

function clearSelect(select){
    for (i = select.length-1; i >= 0; i--) {
        select.options[i] = null;
    }
}
