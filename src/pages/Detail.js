import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { Omdb } from "../Utils";
import { Box, Stack, Typography, Chip } from "@mui/material";
import axios from "axios";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import useLocalStorage from "use-local-storage";



const Detail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [flag, setFlag] = useState("");
  const [favorites, setFavourites] = useLocalStorage("favorites", "[]");
  const[isFavorite, setFavourite] =useState(true);
  

  useEffect(() => {
    (async _ => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=af582b76e7e78b455fb9e5958398d519&language=en-US`)
      const data = await response.json(); 
      setDetails(data);
      console.log(data)
    
    })();
  },[id]);

 
    return(
     <>
      <Box p={4} style={{backgroundColor:"black",height:"100vh"}} h="100vh" >
        <Stack  >
        
         <Stack direction="row" spacing={2} >
          <img src={details?.poster_path === "N/A" ?
           ("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png")
            : (`https://image.tmdb.org/t/p/w185${details?.poster_path}`) }
            alt="movie poster"
            style={{width:"20rem"}}
            /> 
          <Box className="detail-innercard">
            <Typography variant="h3">
              {details?.title}
            </Typography>
                        
            <Typography variant="h5">Overview</Typography>
            <Typography >
              {details?.overview}
            </Typography>
            <Chip  label={details?.tagline} color="primary" />
            <Typography variant="h6">
            Release_date : {details?.release_date}
            </Typography>
            <Stack direction="row" gap={2}  >
            <Typography variant="h5" mr={2}>Production </Typography>
              {details.production_companies && details?.production_companies.map((elem, idx) => {
               return(
                <Chip  label={elem.name} color="primary" key={idx}/>
               )
               })}
               
            </Stack>
               <Stack direction="column" gap={2} mt={2} >
                  <Stack direction="row" gap={2} >
                  <Typography variant="h5" mr={2}>Genre </Typography>
                  {details.genres && details?.genres.map((e,i) => {
                  return( 
                    <Chip label={e.name} color="primary" variant="outlined" key={i} />)
                  })}
                
                </Stack>

                 <Stack direction="row" gap={2}>
                   <Typography variant="h5">Rating : {Math.floor(details?.vote_average)}</Typography>
                 </Stack>
               </Stack>
               
          </Box>
         </Stack>
            <Typography style={{textAlign:"justify",textJustify:"interWord"}} mt={3}>
              {details.Plot}
            </Typography>

        </Stack>
      </Box>
     </>
    );
}

export default Detail