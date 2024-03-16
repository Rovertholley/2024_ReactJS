import { useEffect, useState } from "react";


function App() {
const [loading,setLoading] = useState(true);
const [coins,setCoins] = useState([]);
//setLoading((prev) => {prev = !prev});
useEffect(() => {
  fetch("https://api.coinpaprika.com/v1/tickers")
  .then((response)=>response.json())
  .then((json)=>{
    setCoins(json);
    setLoading(false);
  });
}, []);
  

console.log(loading);
  return <div>
    <h1>The coins! ({coins.length})</h1>
    {loading ? <strong>"loading,,,"</strong> : null }
    <select>
      {coins.map((coin)=>(
      (<option>
        {coin.name} {coin.symbol}: ${coin.quotes.USD.price} USD 
      </option>) ))}
      </select>
      </div>
     };
    


export default App;
