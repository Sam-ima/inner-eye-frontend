// import React from 'react';
import React,{useState,useEffect} from 'react';
import {Box,Typography,Button, CircularProgress} from '@mui/material';
import OrangeDivider from 'src/componenets/ui/divider';        
import { useSelector,useDispatch } from 'react-redux';

import ServiceList from './service_list';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { fetchServiceList } from 'src/redux/api/home_slice_api';

import RegistrationFromPopup from './registration_from_popup';
import FreeEBookFormPopup from './free_ebook_form_popup';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SecondSectionLanding() {

  const dispatch=useDispatch();
  const isServiceListLoading=useSelector((state)=>state.home?.isServiceListLoading);
  const serviceList=useSelector((state)=>state.home?.serviceList);
  console.log("service list state",isServiceListLoading,serviceList);
  const [openRegistrationDialog,setOpenRegistrationDialog]=useState(false);
  const [openFreeBookDialog,setOpenFreeBookDialog]=useState(false);

  useEffect(()=>{
    dispatch(fetchServiceList());
  },[dispatch])     //dependency array

  return (  
    <Box>
     
       {/* First Box */}
        <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        {/* <h1>My value:{value}</h1> */}
        {/* <h2>My age:{age}</h2> */}
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
          {
            isServiceListLoading ?(
              <Box sx={{display:"flex",justifyContent:"center"}}>
              <CircularProgress sx={{color:"purple"}}/>
              </Box>):(
              <ServiceList serviceList={serviceList}/>
              )
          }          
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

export default SecondSectionLanding;
