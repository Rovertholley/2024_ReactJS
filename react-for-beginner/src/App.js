import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState("");
  const onClick = () => setValue((prev)=>prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() =>{
    console.log("CALL THE API");

  },[]);
  useEffect(() =>{
    console.log("Search For ",keyword);

  },[keyword]);
  return (
    <div>
      <input 
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>sex</button>
    </div> 
  );
}

export default App;
