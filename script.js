const container = document.getElementById("fcschart");
const sbtn = document.querySelector("#sellBtn");
const bbtn = document.querySelector("#buyBtn");



const options = {
  container: container,     
  parentid: "chart",          
  accessKey: "g6XwS9oni5bEPFWnttZUCW", 
  symbol: "BTCUSD",           
  period: "5",                
  theme: "dark",             
  length: "200"               
};


const chart = new FCSAPIChart(options);




bbtn.addEventListener("click", () => {


});


// SELL
sbtn.addEventListener("click", () => {



});



