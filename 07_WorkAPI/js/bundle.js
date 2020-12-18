const BASE_API_URL = "https://swapi.dev/api/"; //?page=2
let DATA;

window.addEventListener("load", () => {

    if(location.pathname.includes("persons.html")){         
        Request(`${BASE_API_URL}people/`).then(data => {
            console.log(data);
            DATA = data;
            
            let key = `?page=1`;
            localStorage.setItem(key, JSON.stringify(data));

            ChackButtons(data);
            RenderPersons(data.results);
        })        
    }

    if(location.pathname.includes("planets.html")){
        Request(`${BASE_API_URL}planets/`).then(data => {
            console.log(data);
            DATA = data;
            ChackButtons(data);
            RenderPlanets(data.results);
        })
    }
})

window.addEventListener("load", function() {
    localStorage.clear();
  });

const Request = (URL) => {      
    const data = fetch(URL).then(res => {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("#main_table").style.display = "block";
        return res.json();        
    }).then(res => {
        return res;
    }).catch(error => {
        return error.response;
    })           
    return data;
}

const RenderPersons = (persons) => {
    console.log("RenderPersons ", persons);
    let person_table = document.querySelector("#person_table");

    persons.map(person => {
        let tr = document.createElement("tr");
       
       for(let i in person){
           if(i == "homeworld") break;
           let td = document.createElement("td");
           td.innerHTML = person[i];
           tr.appendChild(td);
       }
       person_table.appendChild(tr);
    })

    document.querySelector(".loader").style.display = "none";
    document.querySelector("#main_table").style.display = "block";
}

const RenderPlanets = (planets) => {
    console.log("RenderPlanet ", planets);
    let planet_table = document.querySelector("#planet_table");

    planets.map(planet => {
        let tr = document.createElement("tr");
       
        for(let i in planet){
            if(i == "homeworld") break;
            let td = document.createElement("td");
            td.innerHTML = planet[i];
            tr.appendChild(td);
        }
        planet_table.appendChild(tr);
    })
}


let btn_previous = document.querySelector("#btn_previous");
btn_previous.addEventListener("click", ()=>{
    if(DATA.previous == null){
        document.querySelector("#btn_previous").style.display = 'none';
    }
    else{
        document.querySelector(".loader").style.display = "block";
        document.querySelector("#main_table").style.display = "none";
        document.querySelector("#person_table").innerHTML = "";
        
        if(location.pathname.includes("persons.html")){           
            
            let flag = false;
            console.log(DATA.previous)
            let p = DATA.previous.split(`/`).pop();
            console.log(p)
            for(let item in localStorage){
                if(item == p) flag = true;
            }

            if(!flag){
                Request(DATA.previous).then(data => {
                    console.log(data); 
                    FillLocalStorage(data);
                    ChackButtons(data);
                    DATA = data;
                    RenderPersons(data.results);                
                })
            }
            else{ 
                document.querySelector("#btn_next").style.display = 'inline-block';
                let currentData = JSON.parse(localStorage.getItem(p))              
                console.log(`DATA from STORAGE`,(JSON.parse(localStorage.getItem(p))).results);
                RenderPersons(currentData.results);
                DATA = currentData;
            }
            
            // Request(DATA.previous).then(data => {
            //     console.log(data);
            //     ChackButtons(data);
            //     DATA = data;
            //     RenderPersons(data.results);
                
            // })
        }
    }
})




let btn_netx = document.querySelector("#btn_next");
btn_netx.addEventListener("click", ()=>{
    if(DATA.next != null){
        document.querySelector(".loader").style.display = "block";
        document.querySelector("#main_table").style.display = "none";
        document.querySelector("#person_table").innerHTML = "";  

        if(location.pathname.includes("persons.html")){

            let flag = false;
            console.log(DATA.next)
            let p = DATA.next.split(`/`).pop();
            console.log(p)
            for(let item in localStorage){
                if(item == p) flag = true;
            }

            if(!flag){
                Request(DATA.next).then(data => {
                    console.log(data); 
                    FillLocalStorage(data);
                    ChackButtons(data);
                    DATA = data;
                    RenderPersons(data.results);                
                })
            }
            else{ 
                document.querySelector("#btn_previous").style.display = 'inline-block';
                let currentData = JSON.parse(localStorage.getItem(p))              
                console.log(`DATA from STORAGE`,(JSON.parse(localStorage.getItem(p))).results);
                RenderPersons(currentData.results);
                DATA = currentData;
            }
        }
    }
})

let page = 1;
let all_lenght=0;
let StorageCount;
function FillLocalStorage(data){
    if(page == 1) StorageCount = Math.ceil(data.count/data.results.length);    
    if(localStorage.length < StorageCount){
        if(all_lenght < data.count){  
            all_lenght += data.results.length;
            page++;    
            let key;  
            if(data.next != null) key = data.next.split(`/`).pop().slice(0, -1) + page;            
            else key = data.previous.split(`/`).pop().slice(0, -1) + page;
            localStorage.setItem(key, JSON.stringify(data));
        }               
    }
}


function ChackButtons(data){
    if(data.previous == null)document.querySelector("#btn_previous").style.display = 'none';
    else document.querySelector("#btn_previous").style.display = 'inline-block';    
    
    if(data.next == null)document.querySelector("#btn_next").style.display = 'none';    
    else document.querySelector("#btn_next").style.display = 'inline-block';
}