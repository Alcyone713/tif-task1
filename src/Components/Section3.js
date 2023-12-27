import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleCard from "./ArticleCard";
import './Section3.scss'
import img1 from '../Assets/section3 images/img1.png';
import img2 from '../Assets/section3 images/img2.png';
import img3 from '../Assets/section3 images/img3.png';
import img4 from '../Assets/section3 images/img4.png';
import img5 from '../Assets/section3 images/img5.png';
import img6 from '../Assets/section3 images/img6.png';

export default function Section3() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 3,
                slidesPerRow: 1
              }
            }
        ],
        beforeChange: (current, next) => setCurrentSlide(next),
    };


    return (
        <div className="section3">
            <h1> Latest Articles </h1>
            <div className="slider">
                <Slider {...settings} ref={sliderRef}>
                    <ArticleCard img={img1} heading='Grilled Tomatoes at Home' />
                    <ArticleCard img={img2} heading='Snacks for Travel' />
                    <ArticleCard img={img3} heading='Post-workout Recipes' />
                    <ArticleCard img={img4} heading='How to Grill Corn' />
                    <ArticleCard img={img5} heading='Crunchwrap Supreme' />
                    <ArticleCard img={img6} heading='Broccoli Cheese Soup' />
                </Slider>
                <div className="slider-controls">
                <button onClick={() => sliderRef?.current?.slickPrev()}>{'<'}</button>
                    <span className="paging-info">
                       {currentSlide===0? '1/2' : '2/2'}
                    </span>
                    <button onClick={() => sliderRef?.current?.slickNext()}>{'>'}</button>
                </div>
            </div>
        </div>
    );
}