const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&x_cg_demo_api_key=CG-8HcHiQvHAsjmq29FgruU8vwD";
const sbtn = document.querySelector("#sellBtn");
const bbtn = document.querySelector("#buyBtn");
const price = document.querySelector("#price");
const long = document.querySelector("#tradel");
const short = document.querySelector("#trades");
const select = document.getElementById("number");
const database = "https://tinkr.tech/sdb/Vidrik%20Luts/database";
const percent = document.getElementById("percent");
const percentrange = document.getElementById("percentrange");



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

//MENU







setInterval(async function() {
  const response = await fetch(database);
  const data = await response.json();

  let response3 = await fetch(url);
let data1= await response3.json();
let rtp= data1[0].current_price;

  document.getElementById('tradel').innerHTML = '';
  document.getElementById('trades').innerHTML = '';

let tradelong = data;
for (let player of tradelong) {
  const div = document.createElement('div');
let long3 = player.long1
div.append(long3);
let short6 = player.short1;
div.append(short6);


//rtp

let rtp2 = document.createTextNode("Market Price " + rtp + " ");
div.appendChild(rtp2);
//size
let longs8 = player.size;
let amount1 = document.createTextNode("Size:  " + longs8 + " " );
div.appendChild(amount1);
//amount
let amnt = player.amount;
let amount2 = document.createTextNode("Contracts: " + amnt + " " );
div.appendChild(amount2);
//rtp
let longs2 = player.rtp;
let amount3 = document.createTextNode("Open price:  " + longs2 + " ");
div.appendChild(amount3);

let pnll = longs8 * (rtp - longs2);
let pnls = longs8 * (longs2 - rtp);
let pnl2 = document.createTextNode("Unrealised Pnl: " + pnll + "$");
let pnl3 = document.createTextNode("Unrealised Pnl: " + pnls + "$");
//document.getElementById("tradel").appendChild(pnl2);



if (player.id1 === 1) {
      document.getElementById('tradel').appendChild(div); 
      document.getElementById("tradel").appendChild(pnl2);

    } 
    else if (player.id2 === 2) {
      document.getElementById('trades').appendChild(div);
      document.getElementById("trades").appendChild(pnl3);
}
}
}, 10);

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

//all info trade save
const long1 = "Long Position: "
const response6 = await fetch(database, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({id1: 1, amount, rtp, size,  long1 })
});


}
getinfo();
  const klass = document.querySelector("#tradel");
  klass.appendChild(newDiv);
}
addElement();
} );

// SELL
sbtn.addEventListener("click", () => {


function addElement() {
  const newDiv = document.createElement("div");

const newContent = document.createTextNode("SHORT: ");
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

//all info trade save
const short1 = "Short Position: "
const response6 = await fetch(database, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({id2: 2, amount, rtp, size, short1 })
});


}
getinfo();
  const klass = document.querySelector("#trades");
  klass.appendChild(newDiv);
}
addElement();
} );