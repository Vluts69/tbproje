const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&x_cg_demo_api_key=CG-8HcHiQvHAsjmq29FgruU8vwD";
const sbtn = document.querySelector("#sellBtn");
const bbtn = document.querySelector("#buyBtn");
const price = document.querySelector("#price");
const long = document.querySelector("#tradel");
const select = document.getElementById("number");
const database = "https://tinkr.tech/sdb/Vidrik%20Luts/database";



new TradingView.widget({
    "autosize": true,
    "symbol": "BINANCE:BTCUSDT",
    "interval": "5",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "container_id": "trchart",
    "hide_side_toolbar": false,
    "details": "true",
    "hide_top_toolbar": false,
    "hide_legend": false,
    "hide_volume": false
});


bbtn.addEventListener("click", () => {

function addElement() {
  const newDiv = document.createElement("div");

const newContent = document.createTextNode(" LONG: ");
  newDiv.appendChild(newContent);


  let amount = select.value;  //votab kasti pandud numbri
  let amount1 = document.createTextNode("Contracts: " + amount + "   ");
newDiv.appendChild(amount1);


 //PRICE JA SELLE ARVUTUS
 const getinfo =async()=>{
  let response = await fetch(url);

  let data1= await response.json();

    let rtp= data1[0].current_price;
    //LIVE HIND
    let price1 = document.createTextNode("Hind LIVE: " + rtp + "$ ");
  newDiv.appendChild(price1);

 let size = rtp * amount;
 let size1= document.createTextNode(" Pos Size: " + size + "$ ");
newDiv.appendChild(size1);



   // let price1 = price.textContent + ("Hind: " + rtp + "$");
   // price.textContent = price1;
    //console.log(price1);

  //let position = document.createTextNode("Position start: " + freezed);
  //newDiv.appendChild(pricefreeze);







//all info trade save
const response6 = await fetch(database, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({amount, rtp, size })
});
const data = await response6.json();
console.log(data); 
newDiv.appendChild(response6);



// GET info from database to show trade

	const response5 = await fetch(database);
	const trades = await response5.json();

	console.log(documents); 

 }
getinfo();
  const klass = document.querySelector("#tradel");
  klass.appendChild(newDiv);
}


addElement();
} );






// SELL
sbtn.addEventListener("click", () => {

function lisaElement() {
  const teineDiv = document.createElement("div");

const sellContent = document.createTextNode("SHORT: ");
  teineDiv.appendChild(sellContent);
  
  const kklass = document.querySelector("#trades");
  kklass.appendChild(teineDiv);
 }
 lisaElement();

});


