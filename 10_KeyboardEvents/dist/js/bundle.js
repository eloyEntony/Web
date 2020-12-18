let layoutOptionsCounter = 0;
let mapMouseOverCounter = 0;
let salesMouseOverCouner = 0;
let salesGraphMouseOutCouner=0;
window.addEventListener("load", () => {

    GetData();

    // Lount Option 
    document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter;
    document.getElementById("layoutOptions").addEventListener("click", layoutOptionsClickCount)

    // MAP
    document.getElementById("map").addEventListener("mouseover", mapMouseOver);
    document.getElementById("mapMouseOver").innerHTML = mapMouseOverCounter;

    //SALES
    document.getElementById("sales").addEventListener("mouseover", salesMouseOver)
    document.getElementById("salesMouseOver").innerHTML = salesMouseOverCouner;

    //sales graph
    document.getElementById("salesGraph").addEventListener("mouseout", salesGraphMouseOut);
    document.getElementById("salesGraphCouner").innerHTML = salesGraphMouseOutCouner;
})

const layoutOptionsClickCount = (event) => {    
    if (event.type === "click"){
        layoutOptionsCounter += 1;
        document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter;
    }    
}

const mapMouseOver = (event) => {
    if (event.type === "mouseover"){       
        mapMouseOverCounter += 1;
        document.getElementById("mapMouseOver").innerHTML = mapMouseOverCounter;
    }
}

const salesMouseOver = (event) => {
    if (event.type === "mouseover"){
        salesMouseOverCouner += 1;
        document.getElementById("salesMouseOver").innerHTML = salesMouseOverCouner;
    }
}

const salesGraphMouseOut = (event) => {
    if (event.type === "mouseout"){
        salesGraphMouseOutCouner += 1;
        document.getElementById("salesGraphCouner").innerHTML = salesGraphMouseOutCouner;
    }
}




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDtfIaWulpYsC7ffZqP8VtuCe00MVtgPTU",
    authDomain: "keyeventsmetrix.firebaseapp.com",
    databaseURL: "https://keyeventsmetrix-default-rtdb.firebaseio.com",
    projectId: "keyeventsmetrix",
    storageBucket: "keyeventsmetrix.appspot.com",
    messagingSenderId: "1026645676357",
    appId: "1:1026645676357:web:db614f987bbc88416c6e2c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //var database = firebase.database();

  document.getElementById("btnSendMetrix").onclick = function(){
    firebase.database().ref('metrix').set({
        layout: layoutOptionsCounter,
        map: mapMouseOverCounter,
        sales: salesMouseOverCouner,
        salesGraph: salesGraphMouseOutCouner
    })
    console.log("Data send")
  };      
     

  function CreateData(){
    firebase.database().ref('metrix').set({
        layout: layoutOptionsCounter,
        map: mapMouseOverCounter,
        sales: salesMouseOverCouner,
        salesGraph: salesGraphMouseOutCouner
    })
    console.log("Data send")
  }

  function GetData(){
      firebase.database().ref('metrix').on('value', function(snapshot){
        document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter = snapshot.val().layout;
        document.getElementById("mapMouseOver").innerHTML = mapMouseOverCounter = snapshot.val().map;
        document.getElementById("salesMouseOver").innerHTML = salesMouseOverCouner = snapshot.val().sales;
        document.getElementById("salesGraphCouner").innerHTML = salesGraphMouseOutCouner = snapshot.val().salesGraph;
      })
      console.log("Data get")
  }

  function UpdateData(){
    firebase.database().ref('metrix').update({
        layout: layoutOptionsCounter,
        map: mapMouseOverCounter,
        sales: salesMouseOverCouner,
        salesGraph: salesGraphMouseOutCouner
    })
  }

  function DeleteData(){
    firebase.database().ref('metrix').remove()    
  }