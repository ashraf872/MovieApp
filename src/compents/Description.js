import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import MovieCard from './MovieCard';

const Description = ({movies}) => {
  let params = useParams();
  let navigate = useNavigate();
//   return (
//     <div>
//     <video width="1280" height="720" controls>
//     <source className="class"src={movies.source} type="video/mp4"/>
//     </video>
//     <h1>
//         This is the {name} video:
//         {movies.name} is released on {movies.date} and has rated as {movies.rating}.
//     </h1>
//     <button className="btn" onClick={()=>navigate('/')}>Back</button>
//     </div>
//   )
// }
return (
  <div> 
      {/* {  ( isNaN(params.id) || movies.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
      
      <> */}
      <>
      <MovieCard ele={movies[params.id]} /> 
      <iframe width="560" height="315" src={movies[movies.id].source}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      <button className="btn" onClick={()=>navigate('/')}>Back</button>

      </>
      {/* } */}
  </div>
)
}
export default Description;