const quot = document.getElementById("quote");
const title = document.querySelector("#id");
const auth= document.querySelector("#author");


function quote() {
  fetch("https://api.quotable.io/random")
  
    .then((response =>  response.json()))
    
    .then (data =>{
      // console.log(data)
quot.textContent = '"' + data.content + '"';
title.textContent = "advice#" + data.length ;
auth.textContent= "author:    "  + data.author;
// console.log(data)
    })
  
    .catch(function (err) {
      console.log(err);
    })
}
//  Repeat QuoteGenerate() every 10 seconds
setInterval(quote(), 10000)
