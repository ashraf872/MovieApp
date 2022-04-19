import React from 'react';
import MovieCard from './MovieCard';
import {useNavigate,Link} from 'react-router-dom';
import "./MovieList.css";


const MovieList = ({films,handelDelete,handelDone}) => {
    let navigate = useNavigate();
    return (

        <div className='movie-list'>
            {films.map((el,i) => (
             <Link className="newLink" to={"/"+el.id} onClick={()=>navigate(`/${el.id}`)}>
               <MovieCard key={i} feelm={el}  handelDelete ={handelDelete} handelDone={handelDone}/>
               </Link>
            ))}
 
        </div>
  
    )
}

export default MovieList