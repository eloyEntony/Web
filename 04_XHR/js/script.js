
const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
const URL2 = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"

function Request(URL, callback){

    let xhr = new XMLHttpRequest();

    xhr.open("GET", URL, true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState!=4) return;
    
        if(xhr.status !=200){
            let errStatus = xhr.status;
            let errText = xhr.statusText;
            console.log(errStatus, " ", errText);
        }
        else{
            let data = JSON.parse(xhr.responseText);
            //console.log(data);
            callback(data);
        }
    }
}

function CashCurrency(data){
    //console.log("CashCurrency : ", currency);
    // let data = currency;
    // data.map(item=>{
    //     console.log(`${item.ccy} => ${item.base_ccy} | BUY ${item.buy} | SALE ${item.sale}`);
    // })

    //let root = document.getElementById("root");
    let root = document.querySelector("#root");           //#-id  .-class
    //let sp = document.createElement("span");
    //sp.innerHTML = "SPAN";
    //sp.setAttribute("class", "col");
    //root.appendChild(sp);
    //console.log(root);

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

function CardCurrency(currency){
    //console.log("CardCurrency : ", currency);
    console.log("===================================");
    let data = currency;
    data.map(item=>{
        console.log(item);
    })
}

Request(URL, CashCurrency);
Request(URL2, CardCurrency);

