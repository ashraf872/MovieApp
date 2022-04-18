import React from 'react';
import MovieCard from './MovieCard';
import {useNavigate,Link,useParams} from 'react-router-dom';
import "./MovieList.css";


const MovieList = ({films,handelDelete,handelDone,handelFind}) => {
    let {name} = useParams();
    let navigate = useNavigate();
    return (

        <div className='movie-list'>
            {films.map((el,i) => (
             <Link className="newLink" to={"/"+i} onClick={()=>navigate(`/${name}`)}>
               <MovieCard key={i} feelm={el}  handelDelete ={handelDelete} handelDone={handelDone} handelFind={handelFind} />
               </Link>
            ))}
 
        </div>
  
    )
}

export default MovieList
