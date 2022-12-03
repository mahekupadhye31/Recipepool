import React from 'react'
import { useState } from 'react'
import {Drawer,List, ListItemText, ListItemButton, ListItemIcon, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = () => {
  const [opendrawer,setOpendrawer]=useState(false)
  const Page=["Home","Breakfast","Lunch","Dinner","Review","Login","Logout"]
  return (
<React.Fragment>
   <Drawer open={opendrawer}
   onClose={()=>{setOpendrawer(false)}}>
        <List>
          {
              Page.map((page,index)=>(
                <ListItemButton onClick={()=>setOpendrawer(false)} key={index}>
                <ListItemIcon>
                    <ListItemText>{page}</ListItemText>  
                </ListItemIcon>
                </ListItemButton> 
              ))
          }
          
        </List>
   </Drawer>
   <IconButton onClick={()=>{setOpendrawer(!opendrawer)}} sx={{color:"#196F3D",marginLeft:"auto"}}>
      <MenuIcon/>
   </IconButton>
</React.Fragment>
  

)
}
export default DrawerComp
