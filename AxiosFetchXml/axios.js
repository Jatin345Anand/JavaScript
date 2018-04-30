window.addEventListener("load",init);
function init(){
   document.querySelector("#doaxios").addEventListener("click",doAXIOS); 
   document.querySelector("#dofetch").addEventListener("click",doFETCH);
}
var url="http://localhost:4444/mobiles";
function doAXIOS(){


    axios.get("http://localhost:4444/mobiles")
  .then(function (response) {
    console.log(response.data);
    printdata(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function doFETCH2(){

var pr = new Promise();
    fetch("http://localhost:4444/mobiles")
  .then(success,fail);
  function success(data){
  console.log(`data = ${data}`);
  console.log(`data.data = ${data.data}`);
  pr.resolve(data);
  }
  function fail(err){
      console.log(`error= ${err}`);
      pr.reject(err);
  }
  return pr.promise;
  console.log(`Promise.pr = ${pr.promise}`);
  pr.then(getdata,geterror);
  function getdata(data){
    console.log(`data = ${data}`);
    console.log(`data.data = ${data.data}`);
  }           
  function geterror(err){
    console.log(`error= ${err}`);
  }
}
function doFETCH(){
    fetch("http://localhost:5000/mobiles").then(success,fail);
    function success(response){
      //  printdata(response);
        response.json().then(s,f);
        function s(s){
  //          console.log(`data = ${s}`);
            printdata(s);
    //        console.log(`data.data = ${s.data}`);
        }
        function f(e){
            console.log(`error in success = ${e}`);
             
        }
     }
        function fail(err){
            console.log(`error= ${err}`);
             
        }
}
function printdata(data) {
// var json =JSON.parse(data);
// console.log(`${json}`);
//console.log(`${data}`);
// for(let i in data){
  
// }
for(var i=0;i<data.data.length;i++){
    console.log(`d =  ${data.data[i].name}`);
}
}