// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <div className="App">
      <h1>To Do List</h1>
      <div className = "todo-wrapper">
        <div className="todo-input">
          <div className="title">
          <label> Title</label>
          <input type="text" placeholder="what's the title" />
          </div>
          <div className="description">
            <label>Description</label>
            <input type="text" placeholder='describe your task' />
          </div>
          <div className="button">
            <button className="add">Add</button>
          </div>
          
        </div>

      </div>


     </div>
       
    </>
  )
}

export default App
