import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';

const Description = ({movies}) => {
  let params = useParams();
  let navigate = useNavigate();


  const movie = movies.find(element => element.id == params.id);

return (
  <>
  <div id="container"> 
 
   
      
      {/* <MovieCard feelm={movies[params.id]} />  */}
     
      <ReactPlayer url={movie.source} />



 
  
  </div>
      <button className="btn btnow" onClick={()=>navigate('/')}>Back</button>
      </>

)
}
export default Description;