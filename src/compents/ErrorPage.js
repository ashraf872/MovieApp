import React from 'react';
import {useNavigate} from 'react-router-dom';
const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>ERROR!</h1>
      <button className="btn btnow" onClick={()=>navigate('/')}>Back</button>
    </div>
    
  )
}

export default ErrorPage;