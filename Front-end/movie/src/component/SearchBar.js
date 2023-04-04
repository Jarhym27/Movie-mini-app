import React,{ useState, useContext } from "react";
import { MovieContext } from "../App";
import {useNavigate} from "react-router"



const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [match, setMatch] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [watchMovies, setWatchMovies] = useState([]);
  const {fetchMovies} = useContext(MovieContext)

  const onSearchTerm = (event) => {
    event.preventDefault();
    if(inputValue === ''){
      setMatch([]);
    }else{
    const regrex = new RegExp(inputValue, 'i')
    const filterMovies = fetchMovies.data.filter(movie => regrex.test(movie.title))
    setMatch(filterMovies);
  }
} 

const movieClick = (movie) =>{
  setSelectedMovie(movie)
}

const handleToggleView = (movieId) => {
  if(watchMovies.includes(movieId)){
      setWatchMovies(watchMovies.filter(id => id !== movieId));
  }else {
      setWatchMovies([...watchMovies, movieId])
  }
}

// const handleToggleView = (movie) => {
//   const updatedProperty = fetchMovies.data.map(prop => {
//     if(prop.id === movie.id){
//       return {...prop.id, watched: !prop.watched}
//     } else {
//       return prop
//     }
//   })
//   setFetchMovies(updatedProperty);
// }
  

return(

  <div>
    <form onSubmit={onSearchTerm}>
      <input
        type='text'
        value={inputValue}
        onChange= {(event) => setInputValue(event.target.value)} />
        <button type="submit">Search</button>
    </form>
     {match.length > 0 ? 
     (match.map(movie => (<div key={movie.id}>
      <p onClick ={() => movieClick(movie)}>{movie.title}</p>
      {selectedMovie && selectedMovie.id === movie.id &&(
        <div>
          <p>{movie.title}</p>
          <p>{movie.year}</p>
          <p>{movie.actors}</p>
          <p>{movie.description}</p>
          <button onClick={() => handleToggleView(movie.id)}>
          {watchMovies.includes(movie.id) ? 'Watched' : 'Not Watched'}
          </button> 
        </div>
      )}
      </div>  
     )) 
    ): (
      <p> Movie not found</p>
    )}    
    </div>
)
}

export default SearchBar;