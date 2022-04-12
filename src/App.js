import { useState } from 'react';
import './App.css';
import AddMovie from './compents/AddMovie';
import MovieList from './compents/MovieList';
import Search from './compents/Search';
import{moviesData} from './Data'

function App() {
const [movies, setMovies] = useState(moviesData)
const handelAdd=(newMovie)=>setMovies([...movies, newMovie])
const [search, setSearch] = useState('')
const handelSearch=(e)=> setSearch (e.target.value)
const [serachRating, setserachRating] = useState(1)
const handelRating=(rating)=> setserachRating(rating)
  return (
    <div className="App" >
      <Search search={search} handelSearch={handelSearch} serachRating={serachRating} handelRating={handelRating} />
      {/* <MovieList  films={movies.filter(el=>el.name.toLowerCase().includes(search.toLowerCase())
          // && movies.rating>search
        )}/> */}
             <MovieList
        films={movies.filter(
          (el) =>
            el.name
              .toLowerCase()
              .includes(search.toLocaleLowerCase().trim()) &&
            el.rating >= serachRating
        )}
      />
      <AddMovie handelAdd={handelAdd}/>
          
    </div>
  );
}

export default App;
