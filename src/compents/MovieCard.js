import React  from 'react';
import StarRating from './StarRating';

const MovieCard = ({feelm,handelDelete,handelDone,changeColor}) => {


    return (
        
        <div className="movie-card">
           <p>{feelm.name}</p> 
           <StarRating rating={feelm.rating}/>
           <img src={feelm.image} alt=''/>
           <p>{feelm.date}</p> 
           <button className="btn" onClick={()=>handelDelete(feelm.id) && changeColor()}>Delete</button>
           <button className="btn" onClick={()=>handelDone(feelm.id)}>{" "}
           {feelm.isDone ? "Done" : "Not Done"}{" "}</button>  
        </div>

    )
}
      

export default MovieCard

