const URL ="http://api.openweathermap.org/data/2.5/weather?q="
const tmp = "Rivne"
const key = "&appid=d663677633bd6cb690bbdea66fe5a981"
let DATA;

const Request = (URL)=>{
    const data = fetch(URL).then(res=>{
        return res.json();
    }).then(res=>{
        return res;
    }).catch(error =>{
        return error.response;
    })
    return data;
}


let main_btn = document.querySelector("#main_btn");
main_btn.addEventListener("click", ()=>{
    let imput = document.querySelector("#main_input").value;
    console.log(imput)
    Request(URL + imput + key).then(data=>{
         console.log(data);
         DATA = data;
     })
     FillBox(DATA);
})

function FillBox(DATA){
    let h = document.createElement("h3");

    //h.innerHTML = 
    console.log( DATA.name);

    document.querySelector("#box1").appendChild(h);


}