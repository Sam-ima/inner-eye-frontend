import React from 'react';
import { CardContent,Typography,Card,Button} from '@mui/material';

function ServiceCard() {
 
    return (
        <Card sx={{ maxWidth: 275 ,backgroundColor:"secondary.main",maxHeight:280,padding:"24px"}}>
          <CardContent >
            <Typography  className='responsive_fontSize18' sx={{fontWeight:"600",color:"#ffffff"}} color="text.secondary" gutterBottom>
            Sound Healing
            </Typography>
            
            <Typography className='responsive_fontSize14' sx={{color:"#ffffff",fontWeight:"300"}} color="text.secondary">
                 Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
            </Typography>
            
          </CardContent>
          
        </Card>
      );
    }
  
export default ServiceCard;
