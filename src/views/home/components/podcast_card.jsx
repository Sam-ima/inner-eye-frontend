import React from 'react';
import { CardContent,Typography,Card } from '@mui/material';

function PodcastCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        
        <Typography className='responsive_fontSize14' sx={{fontWeight:"700",lineHeight:"18.74px",font:"Roboto Serif"}}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography className='responsive_fontSize14' sx={{font:"Roboto Serif",fontWeight:"400",letterSpacing:"0.25px"}}>
          Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
        </Typography>
      </CardContent>
  </Card>
  )
}
export default PodcastCard;
