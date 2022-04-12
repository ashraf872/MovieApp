import { useState } from 'react';
import './App.css';
import AddMovie from './compents/AddMovie';
import MovieList from './compents/MovieList';
import Search from './compents/Search';
import{moviesData} from './Data'

function App() {
const [movies, setMovies] = useState(moviesData)
const handelAdd=(newMovie)=>setMovies([...movies, newMovie])
const [search, setSerach] = useState('')
const handelSearch=(e)=> setSerach (e.target.value)
const [serachRating, setserachRating] = useState(1)
const handelRating=(rating)=> setserachRating(rating)
  return (
    <div className="App" >
      <Search search={search} handelSearch={handelSearch} serachRating={serachRating} handelRating={handelRating} />
      <MovieList  films={movies.filter(el=>el.name.toLowerCase().includes(search.toLowerCase())
        // && el.rating>search
        )}/>
      <AddMovie handelAdd={handelAdd}/>
          
    </div>
  );
}

export default App;
