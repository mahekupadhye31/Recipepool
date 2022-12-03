import React from 'react'
import {Grid,CardActions,Typography,Card,CardContent,CardMedia,Box,Button} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useState } from 'react'
import axios from 'axios'
import Home from './Home'

const Gridcomp = () => {
    const[type,setType]=useState('');
    const [like,setLike]=useState(false)
    const [mydata,setMydata]=useState([]) // usestate to set the data 

    var data = JSON.stringify({
        "meal": [
           "breakfast"
        ]
      });
      
      var config = {
        method: 'post',
        url: 'https://therecipepool.pythonanywhere.com/api/filter-meal/',
        headers: { 
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5ODkxOTIwLCJpYXQiOjE2Njk2MzI3MjAsImp0aSI6IjgxMzczODFmMDBhOTRmZDY4NDg5NjE3NTcxODgxNzc4IiwidXNlcl9pZCI6MzN9.161KPVJKnw2ZIGg6XStZ4j8dpEwmOu-FQJaSYU9YzD8', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {

         var my_data=JSON.stringify(response.data);
       
         console.log(my_data); //logs the data in the console
         setMydata(response.data);    //sets it
    
      })
      .catch(function (error) {
        console.log(error);
      });
      

 
  return (
   
        <>
         
        <div className='container'>

        <Grid container spacing={3} sx={{marginTop:"100px",marginLeft:"auto",marginRight:10}}> 

           {
              
            

              mydata.map((values)=>{         //using the data
              let imageUrl= `https://therecipepool.pythonanywhere.com/${values.image}`
            
                    return                    <>
                            
                            <Grid item xs={6} md={3}>
                            <Card sx={{ maxWidth: 340, height:620}}>
                            <CardMedia
                                component="img"
                                sx={{height:"180",width:"100"}}
                                src= {imageUrl}
                                alt="food_picture"
                            />
                           <CardContent key={values.id}>
   
                                <Grid container justifyContent="flex-end">
                                <Typography gutterBottom variant="h6" component="div"sx={{fontFamily:"calibri",fontSize:25}}>
                                   {values.label}
                                </Typography>

                                <Grid item sm={6}>
                                <Box display="flex" justifyContent="flex-end">
                                
                                <CardActions >
                                    <IconButton aria-label="add to favorites">
                                    <FavoriteIcon  justifyContent="flex-end" sx={{
                                        marginLeft:"auto",
                                    ":hover":{ color:"pink"},
                                    
                                    }} 
                                    onChange={()=>setLike(true)}
                                    
                                    />
                                    </IconButton>
                                    </CardActions>

                                </Box>
                                </Grid>
                                </Grid>



                                <Typography sx={{fontSize:18}} variant="body2" color="text.secondary">
                                    Cuisine:
                                 {values.cuisine.cuisine_name}
                                 </Typography>
                                    
                                 <Typography sx={{ fontSize:18}} variant="body2" color="text.secondary">  
                                   Calories:   
                                  {values.calories}  <WhatshotIcon sx={{height:17, width:17,color:"orange"}}/>   
                                  </Typography>
                                
                                
                                </CardContent>
                                <CardActions>
                                    <Button sx={{color:"#CC5500"}}justify="flex-bottom" size="small" href={values.url} target="_blank">Full Recipe<ArrowOutwardIcon/></Button>
                                </CardActions>
                            </Card>
                            </Grid>
                            </>




                                })
                                
           }
            </Grid>



            
 
      </div>  
        </>
      
   
  )
}

export default Gridcomp
