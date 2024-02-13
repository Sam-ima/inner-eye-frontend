import React from 'react';
import Yoga from '../../../assets/images/yoga.png';
import { Typography,Box,Button } from '@mui/material';

function FirstSectionLanding() {

  function MyComponent({ isMobile }) {
    const textStyle = {
        fontSize: isMobile ? '12px' : '20px',
    };
    return (
        <p style={textStyle}>Responsive text</p>
    );
}
  return (
    <div>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#F3ECF6"}}>

         {/* STARTING OF IMAGE AND CONTENT PART   */}
        <Box sx={{display:"flex"}}>
           {/* START OF LEFT CONTENT */}
          <Box sx={{maxWidth:"40rem",width:"100%",display:"flex",justifyContent:"center",               flexDirection:"column",alignItems:"center",gap:"1.5rem"}}>
            {MyComponent}

           <h1 style={{fontSize:"30px",fontWeight:"300px",textAlign:"center",fontFamily:"Roboto Serif",color:"#480765"}}> INNER EYE</h1>

          <Typography sx={{fontFamily:"Roboto Serif",fontSize:"20px"}}>
                Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a retreat; it's a sanctuary for the mind, body, and spirit. Our personalized packages cater to your unique needs, offering a blend of yoga, meditation, sound healing, breath work, naval treatment, psychosocial counseling, spiritual counseling, and past life regression.
                At Inner Eye, our commitment goes beyond providing a retreat experience. We empower you to integrate wellness into your everyday life. Join us on this transformative journey, and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.
          </Typography>

            <Button variant="contained" sx={{backgroundColor:"secondary.secondary_600",color:"white",opacity:"0.8",borderColor:"green",fontFamily:"Roboto Serif",
            "&:hover":{
                backgroundColor:"secondary.main",
                opacity:"1"
            }
         }}>About Us</Button>
        </Box>
        {/* END OF LEFT CONTENT */}

        {/* START OF RIGHT IMAGE  */}
        <Box>
           <img src={Yoga} alt="It's a yoga image" style={{maxHeight:"550px",maxWidth:"100%",height:"auto"}}/>
        </Box>
        {/* END OF RIGHT IMAGE */}

        </Box>
         {/* END OF IMAGE AND CONTENT PART */}

        <Box sx={{display:{xs:"none",md:"flex"}}}>
            <h2 style={{fontWeight:"700px",fontFamily:"Roboto Serif",fontStyle:"italic",            fontSize:"32px",color:"#510C4F",top:"563px",left:"554px"}}>
              “Nestled in the lap of the Himalayas in Nepal”
            </h2>
        </Box>
        
      </Box>
    </div>  
  )
}

export default FirstSectionLanding;
