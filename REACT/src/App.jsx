import React,{useState} from 'react'
import './App.css'

function App() {
  const [isCompleteScreen,setCompleteScreen] = useState(false);
  

  return (
    <>
     <div className="App">
      <h1>To Do List</h1>
      <div className = "todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
          <label> Title:</label>
          <input type="text" placeholder="What's the title" />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input type="text" placeholder='Describe your task' />
          </div>
          <div className="todo-input-item">
            <button type = "button" className="add">Add</button>
          </div> 
        </div>

        <div className = "btn-area">
          <button className={`isCompleteScreen ${isCompleteScreen=== false  && 'active'}`} onClick = {() => setCompleteScreen(true)}>ToDo</button>
          <button  className={`isCompleteScreen ${isCompleteScreen=== true  && 'active'}`} onClick = {() => setCompleteScreen(false)}>Completed</button>
        </div>

        {/* <div className = "todo-list">
          <div className="todo-lists-items">
            <h3>Task 1</h3>
            <p>Description</p>
            </div> 
        </div> */}

      </div>


     </div>
       
    </>
  )
}

export default App
