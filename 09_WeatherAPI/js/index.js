let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let imagesCode = ['01', '02', '03', '04', '09', '10','11', '13', '50'];
let today = new Date();

document.querySelector('#day').innerHTML = days[ today.getDay() ];
document.querySelector('#date').innerHTML = today.getDate()+' '+ 
months[today.getMonth()] +' '+ today.getFullYear();

const URL = 'http://api.openweathermap.org/data/2.5/weather?q='
const BASE_API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Rivne&APPID=c2b35e290d66e3e9b6ce03f98c3fc1dc'
const API = '&APPID=c2b35e290d66e3e9b6ce03f98c3fc1dc'
let CITY;     


const Request = (url) => {      
    const data = fetch(url).then(res => {
        return res.json();        
    }).then(res => {
        return res;
    }).catch(error => {
        return error.response;
    })           
    return data;
}

// Request(BASE_API_URL).then(data => {
//     console.log(data);
//     FillData(data)
// })  

function FillData(data){
    document.querySelector('#locationValue').innerHTML = data.name + ', ' + data.sys.country;
    document.querySelector('#weatherValue').innerHTML = data.weather[0].main;
    document.querySelector('#tempValue').innerHTML = Math.round(data.main.temp - 273.15) + ' °C';
    document.querySelector('#windValue').innerHTML = data.wind.speed + ' m/s';
    document.querySelector('#humidityValue').innerHTML = data.main.humidity + '%';
    SetImage(data.weather[0].icon);
}



let btnSearch = document.querySelector('#btnSearch');
btnSearch.addEventListener('click', ()=>{
    let city = document.querySelector('#city').value;
    console.log(city)
    CITY = city;
    let RES_URL = URL + CITY + API;
    console.log(RES_URL)
    Request(RES_URL).then(data => {
             console.log(data);
             FillData(data)
         })  
})

function SetImage(icon){

    let tmp;
    switch(icon){
        case '01d':
        case '01n':
            tmp = "img/sun.svg"
            break;
        case '02d':
        case '02n':
            tmp = "img/few_clouds.svg"
            break;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            tmp = "img/cloud.svg"
            break;
        case '09d':
        case '09n':
        case '10d':
        case '10n':
        case '11d':
        case '11n':
            tmp = "img/rain.svg"
            break;
        case '13d':
        case '13n':
            tmp = "img/snow.svg"
            break;
        case '50d':
        case '50n':
            tmp= "img/mist.svg"
            break;
    }

    document.querySelector('#image').src = tmp;
}
