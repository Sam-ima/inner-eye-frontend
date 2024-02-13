import React from 'react';
import {Box} from '@mui/material';

import firstLogo from "../../../assets/images/arrowFirst.png";
import secondLogo from "../../../assets/images/arrowSecond.png";
import thirdLogo from "../../../assets/images/arrowThird.png";
import fourthLogo from "../../../assets/images/arrowFourth.png";


function SecondSectionLanding() {
  return (
    <div>

      {/* START OF MAIN BOX  */}
      <Box sx={{paddingTop:"50px"}}>

        {/* START OF TOPIC PARTS */}
        <Box sx={{textAlign:"center"}}>
          <h2 style={{color:"#6A1067",fontSize:"13px",fontWeight:"400",letterSpacing:"4px",paddingBottom:"15px",fontFamily:"Arial"}}>BEST SERVICES</h2>
          <h3 style={{color:"#480765",fontSize:"32px",fontWeight:"700",paddingBottom:"45px",fontFamily:"Times New Roman"}}>Services</h3>
        </Box>
        {/* END OF TOPIC PARTS */}

        {/*START OF SERVICE PARTS */}
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
 
       {/* FIRST SERVICE */}
        <Box sx={{height:"293px",width:"272px",backgroundColor:"#743D72",color:"#ffffff",fontFamily:"Roboto Serif",padding:"28px",display:"flex",flexDirection:"column",fontSize:"14px",marginRight:"15px"}}>
          <h1 style={{fontSize:"18px",fontWeight:"600",marginBottom:"20px"}}>Sound Healing</h1>

          Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
          <Box sx={{display:"flex",marginTop:"45px"}}> 
            <img src={firstLogo} alt="This is first arrow image" style={{height:"35px",width:"35px",marginRight:"10px"}}/>
            <img src={thirdLogo} alt="This is third arrow image" style={{height:"35px",width:"35px"}}/>
          </Box>
        </Box>

        {/* SECOND SERVICE */}
        <Box sx={{height:"293px",width:"272px",fontFamily:"Roboto Serif",backgroundColor:"#F3ECF6",display:"flex",flexDirection:"column",padding:"28px",fontSize:"14px",marginRight:"15px"}}>
          <h1 style={{fontSize:"18px",fontWeight:"600",marginBottom:"20px"}}>Meditation</h1>

          Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
          <Box sx={{display:"flex",marginTop:"45px"}}>
            <img src={secondLogo} alt="This is second arrow image" style={{height:"35px",width:"35px",marginRight:"10px"}}/>
            <img src={fourthLogo} alt="This is fourth arrow image" style={{height:"35px",width:"35px"}}/>
          </Box>
        </Box>

        {/* THIRD SERVICE */}
        <Box sx={{height:"293px",width:"272px",backgroundColor:"#743D72",color:"#ffffff",fontFamily:"Roboto Serif",display:"flex",flexDirection:"column",padding:"28px",fontSize:"14px",marginRight:"15px"}}>
          <h1 style={{fontSize:"18px",fontWeight:"600",marginBottom:"20px"}}>Yoga Session</h1>

          Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa
          <Box sx={{display:"flex",marginTop:"45px"}}>
            <img src={firstLogo} alt="This is first arrow image" style={{height:"35px",width:"35px",marginRight:"10px"}}/>
            <img src={thirdLogo} alt="This is third arrow image" style={{height:"35px",width:"35px"}}/>
          </Box>
        </Box>

        {/* FOURTH SERVICE */}
        <Box sx={{height:"293px",width:"272px",fontFamily:"Roboto Serif",backgroundColor:"#F3ECF6",display:"flex",flexDirection:"column",padding:"28px",fontSize:"14px"}}>
          <h1 style={{fontSize:"18px",fontWeight:"600",marginBottom:"20px"}}>Training</h1>

          Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
          <Box sx={{display:"flex",marginTop:"45px"}} >
            <img src={secondLogo} alt="This is second arrow image" style={{height:"35px",width:"35px",marginRight:"10px"}}/>  
            <img src={fourthLogo} alt="This is fourth arrow image" style={{height:"35px",width:"35px"}}/>
          </Box>
        </Box>

      </Box>
      {/* END OF SERVICE PARTS */}

      <Box>

      </Box>

      </Box>
       {/* END OF MAIN BOX  */}
    </div>
  )
}

export default SecondSectionLanding
