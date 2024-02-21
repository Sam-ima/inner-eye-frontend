import React from 'react';
import Yoga from '../../../assets/images/yoga.png';
import { Typography,Box,Button } from '@mui/material';
import OrangeDivider from 'src/componenets/ui/divider'; 
// import { useSelector,useDispatch } from 'react-redux';
// import {increment,
//   decrement,
//   incrementByAmount,incrementByAge,decrementByAge,decrementByAmount} from "src/redux/api/home_slice_api";

function FirstSectionLanding() {
  //Getting state value from home slice

  // const dispatch=useDispatch();
  // function handleIncrement(){
  //   dispatch(increment());
  // }
  // function handleDecrement(){
  //   dispatch(decrement());
  // }
  // function handleIncrementByAmount(){
  //   dispatch(incrementByAmount(20));
  // }
  // function handleDecrementByAmount(){
  //   dispatch(decrementByAmount(20));
  // }
  // function handleIncrementByAge(){
  //   dispatch(incrementByAge());
  // }
  // function handleDecrementByAge(){
  //   dispatch(decrementByAge());
  // }


  // const value=useSelector((state)=>state.home?.value);
  // const age=useSelector((state)=>state.home?.age);

  return (
    <div>
        <Box sx={{display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F3ECF6",
        flexDirection:{xs:"column-reverse",md:"row",marginBottom:"20px"}}}>
          {/* <h1>My value:{value}</h1> */}
          {/* <h2>My age:{age}</h2> */}
         
           {/* START OF LEFT CONTENT */}
          <Box sx={{maxWidth:"40rem",
          width:"100%",
          display:"flex",
          justifyContent:"center",
          flexDirection:"column",
          alignItems:"center",
          gap:"1.5rem"}}>

          <OrangeDivider>
            <Typography varient="h1" className="responsive_fontSize30" 
            sx={{fontWeight:"600",
            textAlign:"center",
            fontSize:"26px",
            fontFamily:"Roboto Serif",
            color:"secondary.secondary_400",
            lineHeight:"35.13px"}}>
               INNER EYE
            </Typography>
          </OrangeDivider>

           <p className="responsive_fontSize20"
            sx={{fontFamily:"Roboto Serif",
            fontWeight:"200",
            fontSize:"20px",
            lineHeight:"23.42px",
            textAlign:"justified",
            color:"#000000"}}>
                Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a retreat; it's a sanctuary for the mind, body, and spirit. Our personalized packages cater to your unique needs, offering a blend of yoga, meditation, sound healing, breath work, naval treatment, psychosocial counseling, spiritual counseling, and past life regression.
                At Inner Eye, our commitment goes beyond providing a retreat experience. We empower you to integrate wellness into your everyday life. Join us on this transformative journey, and let the Inner Eye guide you to a life of balance, clarity, and inner harmony.
          </p>

            
            <Button className="responsive_fontSize22" variant="contained"
             sx={{backgroundColor:"secondary.secondary_600",
             color:"white",
             opacity:"0.8",
             fontSize:"20px",
             borderColor:"green",
             fontFamily:"Roboto Serif",
             fontWeight:"300",
             lineHeight:"25.76px",
            "&:hover":{
                backgroundColor:"secondary.main",
                opacity:"1"
            }
         }}>About Us</Button>
         {/* <Button onClick={handleIncrement} sx={{color:"black"}}>Increment me</Button>
         <Button onClick={handleDecrement} sx={{color:"black"}}>Decrement me</Button>

         <Button onClick={handleIncrementByAmount} sx={{color:"black"}}>Increment by amount</Button>
         <Button onClick={handleDecrementByAmount} sx={{color:"black"}}>Decrement by amount</Button>
         
         <Button onClick={handleIncrementByAge} sx={{color:"black"}}>Increment by age</Button>

         <Button onClick={handleDecrementByAge} sx={{color:"black"}}>Decrement by age</Button> */}
        </Box>
        {/* END OF LEFT CONTENT */}

        {/* START OF RIGHT IMAGE  */}
        <Box>
           <img src={Yoga} alt="It's a yoga image" style={{maxHeight:"550px",maxWidth:"100%",height:"auto"}}/>

           <Typography varient="h2" className="responsive_fontSize32"
            sx={{fontWeight:"700",
            fontSize:"26px",
            fontFamily:"Roboto Serif",
            fontStyle:"italic",
            color:"secondary.secondary_400",
            lineHeight:"37.47px"}}>
              “Nestled in the lap of the Himalayas in Nepal”
            </Typography>
        </Box>
        {/* END OF RIGHT IMAGE */}


        {/* <Box sx={{display:{xs:"none",md:"flex"}}}> */}
            
        {/* </Box> */}
        
      </Box>
    </div>  
  )
}

export default FirstSectionLanding;