import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieCard = (props) => {
   const navigate = useNavigate();
   
  return (
    <div style={{width:"10rem"}} onClick={ () => props?.onClickHandler(props?.id)}>
        <img style={{width:"14rem"}} src={props?.src ?`https://image.tmdb.org/t/p/w185${props?.src}`: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}/>
        <p>{props?.title}</p>
        <div>
           <p>{Math.floor(props?.rating)} ⭐</p>
        </div>
     </div>
  )
}

export default MovieCard