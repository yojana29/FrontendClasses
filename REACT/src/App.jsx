import React,{useState,useEffect} from 'react'
import './App.css'
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function App() {
  const [isCompleteScreen,setCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");


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

          {allTodos.map((item,index) =>{
            return(
          <div className="todo-lists-items" key = {index}>
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>

            <div>
              <MdDelete className="icon" title="Delete?"/>
              <FaCheck className = "check-icon" title="Complete?" />
            </div>

            </div> 
            )
          })}


        </div>

      </div>

     </div>
       
    </>
  )
}

export default App
