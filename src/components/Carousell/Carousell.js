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
                  breakpoint: 1028,
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
                  breakpoint: 990,
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
                  breakpoint: 768,
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
                  breakpoint: 576,
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
            <div className="container p-5" style={{marginTop: "150px"}}>
                <Slider {...settings}>
                <div>
                    <img src={Img1} className="img1" alt="Credit to Joshua Earle on Unsplash"/>
                    <h3 className="txt-women">Women Edition</h3>
                </div>
                <div>
                    <img src={Img2} className="img2" alt="Credit to Alisa Anton on Unsplash"/>
                    <h3 className="txt2"> Trends in 2020</h3>
                </div>
                <div>
                    <img src={Img3} className="img3" alt="Credit to Igor Ovsyannykov on Unsplash"/>
                    <h3 className="txt3"> Black Edition</h3>    
                </div>
                <div><img src={Img4} className="img4" alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
                </Slider>
            </div>
            </>
        )
    }
}
