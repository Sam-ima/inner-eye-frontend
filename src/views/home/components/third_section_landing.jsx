import React from 'react'
import {Box,Typography,Button} from '@mui/material';
import OrangeDivider from 'src/componenets/ui/divider'; 
import PodcastList from './podcast_list';
function ThirdSectionLanding() {
  return (
    <Box>
        {/* First Box */}
        <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",backgroundColor:"#F3ECF6",}}>
        <OrangeDivider >
          < Typography sx={{fontSize:"13px",
          color:"secondary.secondary_600",
          fontWeight:"regular",letterSpacing:"4px",
          fontFamily:"Arial"
          }}>
            Mental health, spirituality & holistic healing
          </Typography>
        </OrangeDivider> 
        <Typography varient="h3" className='responsive_fontSize32' sx={{
              fontSize:"32px",
              fontWeight:"bold",
              letterSpacing:"0.25px",
              color:"secondary.secondary_400",
              fontFamily:"Times New Roman"}}>
             Podcast
          </Typography>
        </Box>
    </Box>
  )
}

export default ThirdSectionLanding;
