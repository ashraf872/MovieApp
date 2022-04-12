import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({feelm}) => {
    console.log(feelm)
    return (
        <div className="movie-card">
           <p>{feelm.name}</p> 
           <StarRating rating={feelm.rating}/>
           <img src={feelm.image} alt=''/>
           <p>{feelm.date}</p> 
          
        </div>
    )
}
      

export default MovieCard

