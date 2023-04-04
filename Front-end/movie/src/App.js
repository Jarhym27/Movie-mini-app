import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState} from "react";
import axios from "axios";
import SearchBar from './component/SearchBar';
import Favorites from './component/Favorites';

export const MovieContext = React.createContext();

function App(props) {

const [fetchMovies, setFetchMovies] = useState({data:[]});
// const [getApiMovies, setApiMovies] = useState({data:[]})

// useEffect(() => { 
//   const getNewData = async() => {
//     const data = await axios.get('https://www.themoviedb.org/documentation/api');
//     setApiMovies(data.data) 
//    }
//    getNewData();
// }, [])
// console.log("data:", getApiMovies)

useEffect(() => { 
  const getData = async() => {
    const data = await axios.get('http://localhost:3001');
    setFetchMovies(data) 
   }
   getData();
}, [])

// console.log("data :",fetchMovies.data)

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
      <header className="App-header">
      < Favorites/>
      
        <div> </div>
      </header>
    </div>
    </MovieContext.Provider>
  );
}

export default App;
