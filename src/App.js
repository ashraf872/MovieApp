import React,{ useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import{moviesData} from './Data';
import Description from './compents/Description';
import ErrorPage from './compents/ErrorPage';
import Home from './compents/Home';

function App() {

const [movies, setMovies] = useState(moviesData)




  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />
           
         }/>
         <Route path="/:id" element={<Description movies={movies}/>}/>  
         <Route path="*" element={<ErrorPage/>}/>  
      </Routes>
    </Router>
   
  );
}

export default App;
