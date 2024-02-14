import React from 'react';
import { Box } from '@mui/material';

function OrangeDivider({children}) {
  return( 
    <Box sx={{display:"flex",alignItems:"center",gap:"12px"}}>
        <Box  
         sx={{width:"50px",
         backgroundColor:"accent.main",
         height:"1px"
         }}/>   
        
       {children}
        <Box 
         sx={{width:"50px",
            backgroundColor:"accent.main",
            height:"1px"
            }}>
        
        </Box>
    </Box>
 )
}

export default OrangeDivider
