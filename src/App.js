import React,{ useState} from 'react';
import './App.css';
import AddMovie from './compents/AddMovie';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MovieList from './compents/MovieList';
import Search from './compents/Search';
import{moviesData} from './Data';
import Description from './compents/Description';
import ErrorPage from './compents/ErrorPage';

function App() {

const [movies, setMovies] = useState(moviesData)

const handelAdd=(newMovie)=>setMovies([...movies, newMovie])
const handelDelete = (ID) =>{
  setMovies( movies.filter((el) => el.id !== ID))}

  const handelDone = (ID) => {
    setMovies(
      movies.map((el) => (el.id === ID ? { ...el, isDone: !el.isDone  } : el))
    );
  };

  // const handelFind = (name) => {
  //   movies.find((el) => el.name === name)
  // }
// const [movie,DeleteMovie] = useState({moviesData});
// const handelDelete = (newMovie) =>DeleteMovie([...movie, newMovie])

const [search, setSearch] = useState('')
const handelSearch=(e)=> setSearch (e.target.value)
const [serachRating, setserachRating] = useState(1)
const handelRating=(rating)=> setserachRating(rating)

// const [movie,updateMovie] = useState(moviesData);
// const handelDelete = (ID) => {
//   updateMovie(movie.filter((item)=>item.id !== ID))


// const [movie,deleteMovie] = useState(moviesData);

  return (
    <Router>
      <Routes>
         <Route path="/" element={
            <div className="App" >
            <Search search={search} handelSearch={handelSearch} serachRating={serachRating} handelRating={handelRating} />
                   <MovieList 
              films={movies.filter(
                (el) =>
                  el.name
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase().trim()) &&
                  el.rating >= serachRating 
              )}
              handelDelete={handelDelete}
              handelDone ={handelDone}

            />
            <AddMovie handelAdd={handelAdd}/>
      
          </div>
         }/>
         <Route path="/:id" element={<Description movies={movies}/>}/>  
         <Route path="*" element={<ErrorPage/>}/>  
      </Routes>
    </Router>
   
  );
}

export default App;
