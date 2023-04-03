import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

const [fetchMovies, setFetchMovies] = useState([])
useEffect(() => { 
  const getData = async() => {
    const data = await axios.get('http://localhost:3001/');
    setFetchMovies(data)
   }
   getData();
}, [])




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Movie list
         </p>
       <div>{fetchMovies.data.map(element => <h2>title: {element.title}</h2>)}</div> 
      

        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
        <div> </div>
      </header>
    </div>
  );
}

export default App;
