import React, { useState } from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
    const [slider, setSlider] = useState([
        { img: "https://images.unsplash.com/photo-1782199483843-49fb9416fa7d?w=600&auto=format&fit=crop&q=60" },
        { img: "https://images.unsplash.com/photo-1543832923-44667a44c804?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://img.magnific.com/free-photo/beautiful-scenery-sunset-sky-with-colorful-clouds-cityscape_181624-28639.jpg?semt=ais_hybrid&w=740&q=80" },
        { img: "https://img.magnific.com/free-photo/smiling-young-woman-holding-retro-camera_329181-142.jpg?semt=ais_hybrid&w=740&q=80" },
        { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHXcDRRbR7Vni_1dhDLlqgWOOqekivIE2YLDUByrejw&s=10"}
    ]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };
    const SlickSlider = Slider.default || Slider;

    return (
        <div className="slider-container" style={{ width: "90%", margin: "auto" , marginTop: "200px" }}>
            <SlickSlider {...settings}>
                {slider.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.img} alt={`slide-${index}`} style={{ height: "280px", width: "300px",margin:"auto" ,borderRadius:"10px",border:"3px solid yellow"}} />
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
}

export default AutoPlay;