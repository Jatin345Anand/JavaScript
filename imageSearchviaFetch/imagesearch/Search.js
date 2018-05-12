window.addEventListener("load",init);
function init(){
    document.querySelector("#search").addEventListener("change",FindImage);
    
}
function FindImage(){
    alert("wait...");
    var Imageurl = document.querySelector("#search").value;
    var url = "http://api.giphy.com/v1/gifs/search?q="+Imageurl+"&api_key=dc6zaTOxFJmzC&limit=20" ; //"api" + mysearchvalue + "key".....
    fetch(url).then(printResponse).then(printError); 

}
function printResponse(response){
    response.json().then(printData);
}
function printData(data){
    document.getElementById("result").innerHTML="";
    console.log("Data is ",data);
    console.log("Data length",data.data.length);
    data =data.data;
    for(let i=0;i<data.length;i++ ){
       var img = document.createElement("img");
       img.src = data[i].images.original.url;
       img.class = "icon";
       document.getElementById("result").appendChild(img);
    }
}
function printError(error){
    console.log("Error is",error);
 }