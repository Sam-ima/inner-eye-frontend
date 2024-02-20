// import React from 'react';
import React,{useState} from 'react';
import {Box,Typography,Button} from '@mui/material';
import OrangeDivider from 'src/componenets/ui/divider';        
import { useSelector,useDispatch } from 'react-redux';
import ServiceList from './service_list';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

import RegistrationFromPopup from './registration_from_popup';
import FreeEBookFormPopup from './free_ebook_form_popup';
import {increment,
  decrement,
  incrementByAmount,incrementByAge,decrementByAge,decrementByAmount} from "src/redux/api/home_slice_api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SecondSectionLanding() {
  const [openRegistrationDialog,setOpenRegistrationDialog]=useState(false);
  const [openFreeBookDialog,setOpenFreeBookDialog]=useState(false);

  const dispatch=useDispatch();
  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement());
  }
  function handleIncrementByAmount(){
    dispatch(incrementByAmount(20));
  }
  function handleDecrementByAmount(){
    dispatch(decrementByAmount(20));
  }

  function handleIncrementByAge(){
    dispatch(incrementByAge());
  }
  function handleDecrementByAge(){
    dispatch(decrementByAge());
  }


  const value=useSelector((state)=>state.home?.value);
  const age=useSelector((state)=>state.home?.age);

  return (
    
    <Box>
     
       {/* First Box */}
        <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <h1>My value:{value}</h1>
        <h2>My age:{age}</h2>
        <OrangeDivider >
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

        {/* SECOND BOX WHICH IS LIST OF SERVICES*/}
        <Box>
          <ServiceList/>
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
              
            }} } onClick={()=>setOpenRegistrationDialog(true)}>
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
           }} onClick={()=>setOpenFreeBookDialog(true)}>
          Free Ebook
         </Button>
         <Button onClick={handleIncrement} sx={{color:"black"}}>Increment me</Button>
         <Button onClick={handleDecrement} sx={{color:"black"}}>Decrement me</Button>

         <Button onClick={handleIncrementByAmount} sx={{color:"black"}}>Increment by amount</Button>
         <Button onClick={handleDecrementByAmount} sx={{color:"black"}}>Decrement by amount</Button>
         
         <Button onClick={handleIncrementByAge} sx={{color:"black"}}>Increment by age</Button>

         <Button onClick={handleDecrementByAge} sx={{color:"black"}}>Decrement by age</Button>
        </Box>


          {/* Registration dialog  from material ui*/}
        <Dialog
        open={openRegistrationDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>setOpenRegistrationDialog(false)}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth

      >
        <DialogContent>
          <RegistrationFromPopup/>
        </DialogContent>
        
      </Dialog>

           {/* FreeBook Registration Dialog */}
      <Dialog
        open={openFreeBookDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>setOpenFreeBookDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <FreeEBookFormPopup/>
        </DialogContent>
        
      </Dialog>
    </Box>
  )
}

export default SecondSectionLanding
