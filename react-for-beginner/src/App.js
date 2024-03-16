import { useEffect, useState } from "react";


function App() {
 const [toDo,setTodo] = useState("");
 const [toDos,setTodos] = useState([]);
 const onChange = (event) => setTodo(event.target.value);
 const onSubmit = (event) => {
  event.preventDefault();
  if (toDo ===""){
    return;
  }
  setTodos(currentArray => [...currentArray,toDo]);
  setTodo("");
};
console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="wirte"/>
        <button>Add to Do</button>
      </form>
      <hr />
      {toDos.map((item,index) => 
      <li key={index}>{item}</li>)}
    </div> 
  );
}

export default App;
