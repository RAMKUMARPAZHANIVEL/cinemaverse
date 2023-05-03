
import { Box } from "@mui/system";
import useLocalStorage from "use-local-storage";
import FavouriteMovieCard from "../components/favouriteMovieCard";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useState } from "react";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  
  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

const Home = () => {
  const [loginDetails,setLoginDetails] = useState({
    email: "",
    password: ""
  })
  const onchangeHandler = (e) => {
    setLoginDetails(curDetail => {
      return {...curDetail,[e.target.name]:e.target.value};
    })
  }
  const onSubmitHandler = () => {
    localStorage.setItem("loginDetail", loginDetails);
    navigate("/search")
  }
  
  const navigate =useNavigate();
    return(
     <main style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",backgroundColor:"#161624"}}>
       <div style={{display:"flex",width:"60vw",height:"70vh",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <div style={{width:"50%",height:"100%",borderRadius:"10px"}}> 
           <img  src="https://images.pexels.com/photos/9807584/pexels-photo-9807584.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
        </div>
        <div style={{width:"50%",height:"100%"}}>
        <CssVarsProvider style={{width:"50%",height:"100%"}}>
      <main style={{width:"50%",height:"100%"}}>
        {/* <ModeToggle /> */}
        <Sheet
          sx={{
            width: 450,
            height:450,
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange={onchangeHandler}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange={onchangeHandler}
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }} onClick={() => onSubmitHandler() }>Log in</Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
        </div>
      </div>
     </main>
    );
}

export default Home