import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import * as React from 'react';
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Nav from "../components/NavBar";
import MovieCard from "../components/movieCard";

const Search = () => {
    const[trendinList, setTrendingList] = useState([]);
    const[list, setList] = useState([]);
    const [input,setInput] = useState("");
    const [searchList,setSearchList] = useState([]);
    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
      (async _ => {
        const response = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=af582b76e7e78b455fb9e5958398d519");
        const data = await response.json();
        setList(data?.results.slice(1,6));
          console.log(data.results);
        setTrendingList(data.results.slice(10,15));
        console.log(trendinList)
      })();
       },[]);
       
     useEffect(() => {
       (async _ => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=af582b76e7e78b455fb9e5958398d519&language=en-US&page=1&include_adult=false`);
        const data = await response.json();
        setSearchList(data?.results);
        console.log(data);
        console.log(input, "in useEffect")
      })();
     },[input])
     const updateInput = (value) => {
          setInput(value)
     }
     const onClickHandler = (id) => {

      navigate(`/detail/${id}`)
}

    return(
        <main style={{display:"flex",flexDirection:"column",backgroundColor:"black"}}>
          <div >
            <Nav updateInput={updateInput} />
          </div>
          <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
               <Button>All Movies</Button>
               <Button>Action</Button>
               <Button>Comedy</Button>
               <Button>Drama</Button>
            </div>
             {searchList.length >0 ? (
                    <Box p={3} >
                      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"6rem",width:"80vw"}}>
                          {searchList.map((singleElem,idx) => {
                            return(
                             <Box key={idx}>
                              <MovieCard src={singleElem.poster_path} title={singleElem.title} rating={singleElem.vote_average} id={singleElem.id} onClickHandler={onClickHandler}/>
                             </Box>
          
                            )
                          })}
                      </div>
                   </Box>
             ) : ( <div>
            <Box p={3} >
          <Stack 
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 4, sm: 2, md: 15 }}
          >
                {list.map((singleElem,idx) => {
                  return(
                   <Box key={idx}>
                    <MovieCard src={singleElem.poster_path} title={singleElem.title} rating={singleElem.vote_average} id={singleElem.id} onClickHandler={onClickHandler}/>
                   </Box>

                  )
                })}
            </Stack>
         </Box>
         <Box p={3}>
         <Stack 
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 4, sm: 2, md: 15 }}
          >
                {trendinList.map((singleElem,idx) => {
                  return(
                   <Box key={idx}>
                    <MovieCard src={singleElem.poster_path} title={singleElem.title} rating={singleElem.vote_average} id={singleElem.id} onClickHandler={onClickHandler}/>
                   </Box>

                  )
                })}
            </Stack>
         </Box>
            </div>)}
           
          </div>

        </main>
     

    );
}





export default Search

