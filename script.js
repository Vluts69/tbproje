const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&x_cg_demo_api_key=CG-8HcHiQvHAsjmq29FgruU8vwD";
const sbtn = document.querySelector("#sellBtn");
const bbtn = document.querySelector("#buyBtn");
const price = document.querySelector("#price");
const long = document.querySelector("#tradel");
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

const getinfo =async()=>{

  let response = await fetch(url);
  console.log(response);

  let data1= await response.json();
  console.log(data1);

  //COIN PRICE: 
    let rtp= data1[0].current_price;


    let price1 = price.textContent + ("Hind: " + rtp + "$");
    price.textContent = price1;
    console.log(price1);
    
 }
getinfo();

bbtn.addEventListener("click", () => {

let long1 = long.textcontent + (" LONG: ");
long.textcontent = long1;

console.log(long1);
});


// SELL
sbtn.addEventListener("click", () => {



});



