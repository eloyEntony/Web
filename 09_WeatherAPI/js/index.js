let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let today = new Date();

document.querySelector('#day').innerHTML = days[ today.getDay() ];
document.querySelector('#date').innerHTML = today.getDate()+' '+ 
months[today.getMonth()] +' '+ today.getFullYear();

const BASE_API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Rivne&APPID=c2b35e290d66e3e9b6ce03f98c3fc1dc'
const API = 'c2b35e290d66e3e9b6ce03f98c3fc1dc'
let city;     


const Request = (URL) => {      
    const data = fetch(URL).then(res => {
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
    document.querySelector('#locationValue').innerHTML = data.name;
    document.querySelector('#weatherValue').innerHTML = data.weather[0].main;

}
