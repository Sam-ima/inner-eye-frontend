import React from 'react';
import {Box, Divider,Typography,Button} from '@mui/material';
import OrangeDivider from 'src/componenets/ui/divider';        
// import firstLogo from "../../../assets/images/arrowFirst.png";
// import secondLogo from "../../../assets/images/arrowSecond.png";
// import thirdLogo from "../../../assets/images/arrowThird.png";
// import fourthLogo from "../../../assets/images/arrowFourth.png";
import ServiceCard from './service_card';



function SecondSectionLanding() {
  return (
    // <div>

    //   {/* START OF MAIN BOX  */}
    //   <Box sx={{paddingTop:"50px"}}>

    //     {/* START OF TOPIC PARTS */}
    //     <Box sx={{textAlign:"center"}}>
    //       <h2 style={{color:"#6A1067",fontSize:"13px",fontWeight:"400",letterSpacing:"4px",paddingBottom:"15px",fontFamily:"Arial"}}>BEST SERVICES</h2>
    //       <h3 style={{color:"#480765",fontSize:"32px",fontWeight:"700",paddingBottom:"45px",fontFamily:"Times New Roman"}}>Services</h3>
    //     </Box>
    //     {/* END OF TOPIC PARTS */}

    //     {/*START OF SERVICE PARTS */}
    //   <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
 
    //    {/* FIRST SERVICE */}
    //     <Box sx={{height:"293px",width:"272px",backgroundColor:"#743D72",color:"#ffffff",fontFamily:"Roboto Serif",padding:"28px",display:"flex",flexDirection:"column",fontSize:"14px",marginRight:"15px"}}>
    //       <h1 style={{fontSize:"18px",fontWeight:"600",marginBottom:"20px"}}>Sound Healing</h1>

    //       Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
    //       <Box sx={{display:"flex",marginTop:"45px"}}> 
    //         <img src={firstLogo} alt="This is first arrow image" style={{height:"35px",width:"35px",marginRight:"10px"}}/>
    //         <img src={thirdLogo} alt="This is third arrow image" style={{height:"35px",width:"35px"}}/>
    //       </Box>
    //     </Box>

    //     {/* SECOND SERVICE */}
    //     <Box sx={{height:"293px",width:"272px",fontFamily:"Roboto Serif",backgroundColor:"#F3ECF6",display:"flex",flexDirection:"column",padding:"28px",fontSize:"14px",marginRight:"15px"}}>
    //       <h1 style={{fontSize:"18px",fontWeight:"600",marginBottom:"20px"}}>Meditation</h1>

    //       Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
    //       <Box sx={{display:"flex",marginTop:"45px"}}>
    //         <img src={secondLogo} alt="This is second arrow image" style={{height:"35px",width:"35px",marginRight:"10px"}}/>
    //         <img src={fourthLogo} alt="This is fourth arrow image" style={{height:"35px",width:"35px"}}/>
    //       </Box>
    //     </Box>

    //     {/* THIRD SERVICE */}
    //     <Box sx={{height:"293px",width:"272px",backgroundColor:"#743D72",color:"#ffffff",fontFamily:"Roboto Serif",display:"flex",flexDirection:"column",padding:"28px",fontSize:"14px",marginRight:"15px"}}>
    //       <h1 style={{fontSize:"18px",fontWeight:"600",marginBottom:"20px"}}>Yoga Session</h1>

    //       Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa
    //       <Box sx={{display:"flex",marginTop:"45px"}}>
    //         <img src={firstLogo} alt="This is first arrow image" style={{height:"35px",width:"35px",marginRight:"10px"}}/>
    //         <img src={thirdLogo} alt="This is third arrow image" style={{height:"35px",width:"35px"}}/>
    //       </Box>
    //     </Box>

    //     {/* FOURTH SERVICE */}
    //     <Box sx={{height:"293px",width:"272px",fontFamily:"Roboto Serif",backgroundColor:"#F3ECF6",display:"flex",flexDirection:"column",padding:"28px",fontSize:"14px"}}>
    //       <h1 style={{fontSize:"18px",fontWeight:"600",marginBottom:"20px"}}>Training</h1>

    //       Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa 
    //       <Box sx={{display:"flex",marginTop:"45px"}} >
    //         <img src={secondLogo} alt="This is second arrow image" style={{height:"35px",width:"35px",marginRight:"10px"}}/>  
    //         <img src={fourthLogo} alt="This is fourth arrow image" style={{height:"35px",width:"35px"}}/>
    //       </Box>
    //     </Box>

    //   </Box>
    //   {/* END OF SERVICE PARTS */}

    //   <Box>

    //   </Box>

    //   </Box>
    //    {/* END OF MAIN BOX  */}
    // </div>


    <Box sx={{backgroundColor:"lightBlue"}}>
     
      

      

       {/* First Box */}
        <Box sx={{backgroundColor:"pink",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>



      
        <OrangeDivider>
          < Typography sx={{fontSize:"13px",
          color:"secondary.secondary_600",
          fontWeight:"regular",letterSpacing:"4px",
          fontFamily:"Arial"
          }}>
            Best Services
          </Typography>
        </OrangeDivider>

          <Typography varient="h3" className='responsive_fontSize32' sx={{
          fontSize:"32px",
          fontWeight:"bold",
          letterSpacing:"0.25px",
          color:"secondary.secondary_400",
          fontFamily:"Times New Roman"}}>
            Services
          </Typography>
        </Box>

        {/* SECOND BOX */}
        <Box>
          <ServiceCard/>
        </Box>

        {/* THIRD BOX */}
        <Box sx={{display:"flex",justifyContent:"center",gap:"31px"}}>
          <Button  className="responsive_fontSize18" variant="outlined" sx={{borderColor:"secondary.main",
            textTransform:"capitalize",
            color:"#000000",
            fontWeight:"300",
            lineHeight:"21px",
            letterSpacing:"0.25px",
            borderRadius:"0",
            "&:hover":{
              borderColor:"secondary.main",
              
            }} }>
             Registration
          </Button>

          <Button  className="responsive_fontSize18" variant="outlined" sx={{borderColor:"secondary.main" ,
           textTransform:"capitalize",
           color:"#000000",
           fontWeight:"300",
           lineHeight:"21px",
           letterSpacing:"0.25px",
           borderRadius:"0",
           "&:hover":{
            borderColor:"secondary.main",  
          } 
           }} >
          Free Ebook
         </Button>
        </Box>
    </Box>
  )
}

export default SecondSectionLanding
