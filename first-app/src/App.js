// import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  let array = ["Apple", "Mango" , "Grapes" , "Orange"];

  let myComponent = (
    <div>
      <div>The friuts are</div>
    </div>
  )
  return(
  <div className = "container">

    <div className = "box">
      <Header />
      {myComponent}
      
    {array.map((i) => {
      return (
        <div>{i}</div>
      )
    })}
    <Footer />
    </div>


  </div>
  
  
  )
}




export default App;
