import { useEffect, useState } from "react";

function Hello() {

}


function App() {
 const [toDo,setTodo] = useState("");
 const [toDos,setTodos] = useState([]);
 const onChange = (event) => setTodo(event.target.value);
 const onSubmit = (event) => {
  event.preventDefault();
  if (toDo ===""){
    return;
  }
  setTodos(currentArray => [toDo,...currentArray]);
  setTodo("");
};
console.log(toDos);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="wirte"/>
        <button>Add to Do</button>
      </form>
    </div> 
  );
}

export default App;
