import React from 'react';
import {Box, Typography,Button} from "@mui/material";
import OrangeDivider from 'src/componenets/ui/divider';
import about from '../../../assets/images/div.img.png';



function SeventhSectionAbout() {
  return (
    <div>
      <Box sx={{display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      flexDirection:{xs:"column",md:"row"}}}>
        {/* left container */}
        <Box sx={{maxWidth:{xs:"250px",md:"50%"},width:"100%"}} >
            <img src={about} alt="About Us"></img>
        </Box>

        {/* right container */}
        <Box sx={{maxWidth:{xs:"100%",md:"50%"},width:"100%"}}>
            <OrangeDivider>
            <p 
            varient="h3" 
            sx={{color:"secondary.main",
            fontWeight:"bold",
            fontFamily:"Times New Roman",
            lineHeight:"18px"}}
            className='responsive_fontSize32'>
              About Us
              </p>
            </OrangeDivider>

        <Box sx={{py:"1.5rem"}}>
        <Box>
            <p style={{color:"black",
            fontWeight:"bold",
            fontFamily:"Times New Roman"}}
             className="responsive_fontSize26"> 
             Ms .Swpana Sum
             </p>
            <p style={{color:"black",
            fontWeight:"bold",
            fontFamily:"Times New Roman"}}
             className="responsive_fontSize26">
              Founder  / CEO
              </p>
        </Box>
        <Box>
            <Typography className='responsive_fontSize16' sx={{fontWeifht:"400",lineHeight:"17px"}}>
            Dedicated to the art of holistic healing, Ms. Swapna Sum stands at the helm of Inner Eye as both a visionary leader and a compassionate healer. Certified as a meditation facilitator, yoga trainer, therapist, psycho-social counselor, hypnotherapist, and a certified Tibetan/Vedic sound healing therapist, Ms. Swapna's journey into holistic wellness is deeply personal.

            As a survivor of trauma, depression, and anxiety, Ms. Swapna found solace and transformation through holistic healing practices. Fueled by her own experiences, she embarked on a path of rigorous research, continuous learning, and professional development. Today, she seamlessly blends her expertise to offer seekers a comprehensive approach to wellness. .......
            </Typography>
        </Box>
            <Button variant="outlined"
             sx={{borderRadius:"0",
             color:"black",
             borderColor:"secondary.main",
             "&.hover":{
              borderColor:"secondary.main"
             }
             }}>
              Read More
             </Button>
        
        </Box>
        </Box>

      </Box>
    </div>
  )
}

export default SeventhSectionAbout;
