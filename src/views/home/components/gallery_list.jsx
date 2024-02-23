import React from "react";
// import ServiceCard from "./service_card";
import Slider from "react-slick";
// import { Box } from "@mui/material";
import GalleryCard from "./gallery_card";

function GalleryList({gallaryList}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log("gallary List",gallaryList);
  return (
    <div className="center__carousel">
      <Slider {...settings}>
      {
          gallaryList?.map((item)=>{
          return <GalleryCard key={item?._id} item={item}/>
          })
     }
      </Slider>
    </div>
  );
}

export default GalleryList;