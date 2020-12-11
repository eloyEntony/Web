
// let USA_travel = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{
//         console.log("Process started ...")
//         resolve();
//     }, 2000);
//     //reject("Bed idea!");

// }).then(start=>{
//     return new Promise((resolve, reject)=>{        
//         setTimeout(()=>{
//             let travel ={
//                 Money: true
//             }
//             if(travel.Money){
//                 console.log("Money : ", travel.Money);
//                 resolve(travel);
//             }else{
//                 reject("Not enough money");//go to catch
//             }
//         },2000);
//     })
//     .then(travel=>{
//         return new Promise((resolve, reject)=>{
//            setTimeout(()=>{
//                 travel = {
//                     Money: true,
//                     Passport: true
//                 }
//                 if(travel.Passport){
//                     console.log("Passport : ", travel.Passport);
//                     resolve(travel);
//                 }else{
//                     reject("No passport");
//                 }                
//            }, 2000);            
//         })
//     })
//     .then(travel=>{
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 travel = {
//                     Money: true,
//                     Passport: true,
//                     Visa:true
//                 }
//                 if(travel.Visa){
//                     console.log("Visa : ", travel.Visa);
//                 resolve(travel);
//                 }else{
//                     reject("No visa");
//                 } 
//              }, 2000);            
//         })
//     })
//     .then(travel=>{
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 travel = {
//                     Money: true,
//                     Passport: true,
//                     Visa:true,
//                     Ticket: true
//                 }
//                 if(travel.Ticket){
//                     console.log("Ticket : ", travel.Ticket);
//                     resolve(travel);
//                 }else{
//                     reject("No ticket");
//                 }
//              }, 2000);            
//         })
//     })
//     .then(travel=>{
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 travel = {
//                     Money: true,
//                     Passport: true,
//                     Visa:true,
//                     Ticket: true,
//                     PrisonCheck: false
//                 }
//                 if(travel.PrisonCheck){
//                     console.log("PrisonCheck : ", travel.PrisonCheck);
//                     resolve(travel);
//                 }else{
//                     reject("TERORIST");
//                 }
//              }, 2000);            
//         })
//     })
//     .then(travel=>{
//         console.log("Congrats...", travel);
//     })

// }).catch(err=>console.log(err));

//!.......................................................................

const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"

fetch(URL)
    .then(data=>{
        return data.json();
        })
        .then(currency=>{
            console.log(currency);
        })
.catch(error=>console.log(error.responce));
