import React, {useContext, useState} from 'react'
import { MovieContext } from '../App'



const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const {fetchMovies} = useContext(MovieContext);
  const [watchMovies, setWatchMovies] = useState([]);

  const handleAddFavorite = (movie) => {
        const updateFavorites = [...favorites, movie]
            setFavorites(updateFavorites)
    
    
  };

  const handleRemoveFavorite = (movie) => {
    const removeFavorites = favorites.filter((fav) => fav.id !== movie.id);
    setFavorites(removeFavorites);
  };

  const handleToggleView = (movieId) => {
    if(watchMovies.includes(movieId)){
        setWatchMovies(watchMovies.filter(id => id !== movieId));
    }else {
        setWatchMovies([...watchMovies, movieId])
    }
  }
 
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {fetchMovies.data.map((movie) => (
          <li key={movie.id}>
            {movie.title}
              <button onClick={() => handleAddFavorite(movie)}>
                Add to Favorites
              </button>
          </li>

        ))}
      </ul>       
        
      <h2>Favorites</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>
            {movie.title}{' '}
            <button onClick={() => handleRemoveFavorite(movie)}>
              Remove from Favorites
            </button> 
            <button onClick={() => handleToggleView(movie.id)}>
                {watchMovies.includes(movie.id) ? 'Watched' : 'Not Watched'}
              </button>
          </li>
        ))}
      </ul>
    </div>
  )};

 export default Favorite;