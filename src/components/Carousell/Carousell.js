import React, { Component } from 'react'
//import Carousel from 'react-bootstrap/Carousel'
import {Img1, Img2, Img3, Img4} from '../../assets'
import './carousell.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Carousell extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            lazyload: "ondemand",
            responsive: [
                {
                  breakpoint: 1023.98,
                  settings: {
                    centerMode: true,
                    centerPadding: "220px",
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                  },
                },
                {
                  breakpoint: 991.98,
                  settings: {
                    centerMode: true,
                    centerPadding: "100px",
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                  },
                },
                {
                  breakpoint: 767.98,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "20px",
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                  },
                },
                {
                  breakpoint: 575.98,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "-30px",
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                  },
                },
            ],

    }
        return (
            <>
            <div className="container p-5">
                <Slider {...settings}>
                <div>
                    <img src={Img1} alt="Credit to Joshua Earle on Unsplash"/>
                    <h3>Women Edition</h3>
                </div>
                <div>
                    <img src={Img2} alt="Credit to Alisa Anton on Unsplash"/>
                    <h3> Trends in 2020</h3>
                </div>
                <div>
                    <img src={Img3} alt="Credit to Igor Ovsyannykov on Unsplash"/>
                    <h3> Black Edition</h3>    
                </div>
                <div><img src={Img4} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
                </Slider>
            </div>
            </>
        )
    }
}
