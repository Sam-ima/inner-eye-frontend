import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import {BASE_URL} from 'src/config/base_url';
// import gallery from "../../../assets/images/gallery.avif";

function GalleryCard({item}) {
  return (
    <Card
      sx={{
        maxWidth: "287px",
        // backgroundColor: "white",
        maxHeight: "334px",
        mb: "95px", 
        padding: 0,
        margin : 0
      }} elevation={0}
    >
        <CardContent sx={{padding:"0" ,}}>           
                <img src={`${BASE_URL}/${item?.image}`} alt="gallery" style={{width:"100%", height:"100%" , objectFit:"cover" }} />
        </CardContent>
    </Card>
  );
}

export default GalleryCard;