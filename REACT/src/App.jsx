import React,{useState,useEffect} from 'react'
import './App.css'
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function App() {
  const [isCompleteScreen,setCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const [completedTodos,setCompletedTodos] = useState([]);


  const handleAddTodo = () => {
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    }

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todollist',JSON.stringify(updatedTodoArr))
  }

  const handleDeleteTodo = (index) =>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todolist',JSON.stringify(reducedTodo));
    setTodos(reducedTodo);

  }
  const handleCompleteTodos = (index)=>{
    let now = new Date ();
    // console.log(now);
    let dd = now.getDate();
    let mm = now.getMonth();
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completeOn = dd + '-' + mm + '-' + yyyy + 'at' + h + ':' + m + ':' + s;

    let filteredItem = {
      ...allTodos[index],
      completeOn:completeOn
    }

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);

  }

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
     }
  },[])
  

  return (
    <>
     <div className="App">
      <h1>To Do List</h1>
      <div className = "todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
          <label> Title:</label>
          <input type="text" value = {newTitle} onChange={(e) =>setNewTitle(e.target.value)} placeholder="What's the title" />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input type="text" value = {newDescription} onChange = {(e) => setNewDescription(e.target.value)}  placeholder='Describe your task' />
          </div>
          <div className="todo-input-item">
            <button type = "button" onClick={handleAddTodo}  className="add">Add</button>
          </div> 
        </div>

        <div className = "btn-area">
          <button className={`isCompleteScreen ${isCompleteScreen=== false  && 'active'}`} onClick = {() => setCompleteScreen(true)}>ToDo</button>
          <button  className={`isCompleteScreen ${isCompleteScreen=== true  && 'active'}`} onClick = {() => setCompleteScreen(false)}>Completed</button>
        </div>

        <div className = "todo-list">

          {isCompleteScreen === false && allTodos.map((item,index) =>{
            return(
          <div className="todo-lists-items" key = {index}>
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>

            <div>
              <MdDelete className="icon" onClick={()=>handleDeleteTodo(index)} title="Delete?"/>
              {/* <FaCheck className = "check-icon"  onClick ={()=>handleCompleteTodos(index)} title="Complete?" /> */}
            </div>

            </div> 
            )
          })}


          {/* {isCompleteScreen === true && completedTodos.map((item,index) =>{
            return(
          <div className="todo-lists-items" key = {index}>
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><small>Completed on : {item.completeOn}</small></p>
            </div>

            <div>
              <MdDelete className="icon" onClick={()=>handleDeleteTodo(index)} title="Delete?"/>
              <FaCheck className = "check-icon"  onClick ={()=>handleCompleteTodos(index)} title="Complete?" />
            </div>

            </div> 
            )
          })} */}


        </div>

      </div>

     </div>
       
    </>
  )
}

export default App
