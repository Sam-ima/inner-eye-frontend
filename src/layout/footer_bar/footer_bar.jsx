import { Typography } from '@mui/material';
import React from 'react';
import {Box} from "@mui/material";

function FooterBar() {
  return (
    <Box sx={{backgroundColor:"white",display:"flex",justifyContent:"space-between",height:"100px",alignItems:"center"}}>
        <Typography className='responsive_fontSize16'>  Terms and Conditions </Typography>
        <Typography className='responsive_fontSize16'>copyright@ {new Date().getFullYear()}</Typography>
        <Typography className='responsive_fontSize16'>Developed By@BM</Typography>
    </Box>
         
  )
}

export default FooterBar;
