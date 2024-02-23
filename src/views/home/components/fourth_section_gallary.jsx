import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import OrangeDivider from 'src/componenets/ui/divider'; 
import GalleryList from "./gallery_list";

import { useSelector, useDispatch } from "react-redux";
import { fetchGallaryList } from "../../../redux/api/home_slice_api";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function FourthSectionGallery() {
    const dispatch=useDispatch();
    const isGallaryListLoading=useSelector(
        (state)=>state.home.isGallaryListLoading
    );
    const gallaryList=useSelector((state)=>state.home.gallaryList);
    useEffect(()=>{
        dispatch(fetchGallaryList());
    },[dispatch]);

  const isGalleryListLoading = useSelector(
    (state) => state.home?.isGalleryListLoading
  );
  return (
    <Box sx={{ gap: "140px" }}>
      {/* first box */}

      <Box
        sx={{
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "68px",
        }}
      >
        <OrangeDivider>
          <Typography
            sx={{
              fontSize: "13px",
              letterSpacing: "3px",
              color: "secondary.secondary_600",
              //   fontFamily: "arial",
              lineHeight: "18px",
            }}
          >
            WE CAPTURE SOME GLIMPSE OF YOU
          </Typography>
        </OrangeDivider>
        <Typography
          variant="h3"
          className="responsive_fontSize32"
          sx={{
            color: "secondary.secondary_400",
            fontWeight: "bold",
            fontSize:'32px',
            letterSpacing: "0.25px",
            lineHeight: "43px",
            fontFamily: "Times New Roman",
            mb: "11px",
          }}
        >
          Gallery
        </Typography>
      </Box>
      {/* second Box */}
      <Box sx={{mt:"47px",mb:"47px"}}>
        <GalleryList gallaryList={gallaryList}/>
      </Box>
    </Box>
  );
}

export default FourthSectionGallery;