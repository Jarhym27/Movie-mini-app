import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState} from "react";
import axios from "axios";
import SearchBar from './component/SearchBar';
import Favorites from './component/Favorites';

export const MovieContext = React.createContext();

function App() {

const [fetchMovies, setFetchMovies] = useState({data:[]});

useEffect(() => { 
  const getData = async() => {
    const data = await axios.get('http://localhost:3001');
    setFetchMovies(data) 
   }
   getData();
}, [])

console.log("data :",fetchMovies.data)

  // const movies = [
  //   {title: 'Mean Girls'},
  //   {title: 'Hackers'},
  //   {title: 'The Grey'},
  //   {title: 'Sunshine'},
  //   {title: 'Ex Machina'},
  // ];
  
  // }

  // const response = await fetch('http://localhost:3001/',{ 
  
  // method: 'GET',
  // headers: {
  //   'Content-Type': 'application/json'
  // },
  // body: JSON.stringify(response)});

  // async function fetchMovies() {
  //   const response = await fetch('/');
  //   // waits until the request completes...
  //   console.log(response);
  // }


  return (
    <MovieContext.Provider value={{fetchMovies, setFetchMovies}}>
    <div className="App">
      < SearchBar/>
      < Favorites/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Movie list
       {/* <p><div>{movies.map(element => <div>{element.title}</div>)}</div></p> */}
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
    </MovieContext.Provider>
  );
}

export default App;
