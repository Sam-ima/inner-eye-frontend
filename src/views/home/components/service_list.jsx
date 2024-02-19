import React from 'react';
import Slider from "react-slick";
import ServiceCard from './service_card';
function ServiceList(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlay:true,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return(
        <div className="center__carousel " style={{marginTop:"2rem",marginBottom:"2rem"}}>
            <Slider {...settings}>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </Slider>
                      
        </div>
    )
}
export default ServiceList;