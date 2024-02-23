import React from 'react';
import {Box, Typography} from "@mui/material";

function AchievementCard() {
  return (
    <Box sx={{maxWidth:"145px",
    width:"100%",
    backgroundColor:"#ffffff",
    height:"170px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    boxShadow: "1px 4px 4px 0px #00000040",
    borderRadius:"2px"}}>
    <Box>
      <Typography className='responsive_fontSize20'
      sx={{letterSpacing:"3px",
      fontWeight:"600"}}>
        200+
      </Typography>
      <Typography className='responsive_fontSize20'
      sx={{letterSpacing:"3px",
      fontWeight:"600"}}>
        Clients
      </Typography>
    </Box>
    
    {/* <Box>
      <Typography className='responsive_fontSize20'
      sx={{letterSpacing:"3px",
      fontWeight:"600"}}>
        20+
      </Typography>
      <Typography className='responsive_fontSize20'
      sx={{letterSpacing:"3px",
      fontWeight:"600"}}>
        Training
      </Typography>
    </Box>
    <Box>
      <Typography className='responsive_fontSize20'
      sx={{letterSpacing:"3px",
      fontWeight:"600"}}>
        20
      </Typography>
      <Typography className='responsive_fontSize20'
      sx={{letterSpacing:"3px",
      fontWeight:"600"}}>
        Country
      </Typography> */}
    {/* </Box> */}
    </Box>
  )
}

export default AchievementCard;
