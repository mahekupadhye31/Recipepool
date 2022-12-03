import React from 'react'
import {AppBar, Typography,Toolbar,Tabs,Tab,Button,useMediaQuery,useTheme, TabPanel,Box,} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DrawerComp from './DrawerComp'
import { useState } from 'react'
import Gridcomp from './Gridcomp';

const Home = () => {
    const theme=useTheme();
    const[type,setType]=useState();
    console.log(theme);
    const isMatch=useMediaQuery(theme.breakpoints.down("md"));
    const [value, setValue] = React.useState('one');
   
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const breakfast=()=>{
        setType('breakfast');
    }     
    const lunch=()=>{
        setType('lunch');
    } 
    const dinner=()=>{
        setType('dinner');
    }  
   

      


  return (
    <div>
      <React.Fragment>
        <AppBar sx={{background:"#F4F6F7"}}>
            <Toolbar>
           <RestaurantIcon sx={{color:"#196F3D", height:"40px",width:"40px"}}/>
           <Typography sx={{fontSize:"35px",fontFamily:"italic",color:"#196F3D",marginLeft:"10px"}}>allRecipes.</Typography>
           {
            isMatch?(
                <>
                <DrawerComp/>
                </>

            ):(

                <>
                <Tabs sx={{marginLeft:"auto",}}
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                    >

                   <Button sx={{color:"green"}}>Home</Button>
                   <Button sx={{color:"green"}} onClick={breakfast}>Breakfast</Button>
                   <Button sx={{color:"green"}} onClick={lunch}>Lunch</Button>
                   <Button sx={{color:"green"}} onClick={dinner}>Dinner</Button>
                   <Button sx={{color:"green"}}>Review</Button>
                    

                    </Tabs>
                            
                    <Button variant="outlined" sx={{marginLeft:"auto",backgroundColor:"#196F3D" , color:"white", ":hover":{ color:"black"} }}><AccountCircleIcon sx={{marginRight:"10px"}}/>Login</Button>

                </>    



            )
           }

            </Toolbar> 
          
        </AppBar>
      </React.Fragment>
      <Gridcomp/>
    </div>
  )
}

export default Home
