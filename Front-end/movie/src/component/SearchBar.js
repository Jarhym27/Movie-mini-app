import React,{ useState, useContext } from "react";
import { MovieContext } from "../App";
import {useNavigate} from "react-router"



const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const {fetchMovies} = useContext(MovieContext)
  const onChange = (event) =>{
   event.preventDefault()
   const results = fetchMovies.data.filter(movie => movie.title.includes(inputValue))

  }
  // const inputChange = async (event) => {
  //   if (event.target.name === 'username') {
  //     setUserLogin({ username: event.target.value });
  //     console.log(userLogin)

    const onSearchTerm = (input) =>{
      input.preventDefault()
      setInputValue(input.target.value);
      console.log("search", input)

    }

return(
    <div class="input-group">
  <input type="search" value={inputValue} onChange={onSearchTerm} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
   
  <button type="button" onSubmit={onSearchTerm} class="btn btn-outline-primary">search</button>

{/* <div class="dropdown"> 
  {fetchMovies.data.filter(movie => { const searchTerm = inputValue.toLowerCase()
  const movieTitle = movie.title.toLowerCase()
return searchTerm &&  */}
{/* //movieTitle.startWith(searchTerm)}).map((movie) => (<div>{movie.title}</div>) */}

{/* 
  )}  */}


</div>
// </div>
)}

export default SearchBar;