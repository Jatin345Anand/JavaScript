window.addEventListener("load",init);
function init(){
    document.querySelector("#host").addEventListener("change",changeFun);
}
function changeFun(){
    alert("wait...");
    var hostname= document.querySelector("#host").value;
    fetch("http://freegeoip.net/json/"+hostname).then(printResponse).catch(printError);
  
}
function printResponse(response){
    response.json().then(printData);
}
function printError(error){
   console.log("Error is",error);
}
function printData(data){
   document.querySelector("#output").innerHTML="IP is"+data.ip+"country is "+data.country_name +"latitude is "+data.latitude +"Logtitude is "+data.longitude;
   console.log("data is ",data);
myMap(data.latitude,data.logtitude);
}
function myMap(lat,lng){
    var mapProp={
       center: new google.maps.LatLng(lat,lng),
       zoom:100,
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    var latlon = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker(
        {
            position :latlon,
            map:map,
            title:"Your position " +lat +" "+lng
        }
    );

}