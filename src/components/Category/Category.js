import React, { Component } from 'react'
import {Tshirt, Jacket, Pants, Short, Shoes, Watch} from '../../assets'
import { Link } from 'react-router-dom';
import './category.css'
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Category extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            lazyload: "progressive",
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
            <div>
                <div className="container">
                    <div className="title-category">
                            <h3>Category</h3>
                            <p className="lead text-muted">What are you currently looking for</p>
                    </div>
                    <div>
                        <Slider {...settings}>
                                <div className="brand-tshirt mb-5">
                                    <Link to=''>
                                        <img src={Tshirt} alt="" />
                                    </Link>
                                    <h3 className="txt-tshirt">T-Shirt</h3>
                                </div>
                                <div className="brand-short mb-5">
                                    <Link >
                                        <img src={Short} alt="" />
                                    </Link>
                                    <h3 className="txt-short">Shorts</h3>
                                </div>
                                <div className="brand-jacket mb-5">
                                    <Link to=''>
                                        <img src={Jacket} alt="" />
                                    </Link>
                                    <h3 className="txt-jacket">Jacket</h3>
                                </div>
                                <div className="brand-pants mb-5">
                                    <Link to=''>
                                        <img src={Pants} alt=""/>
                                    </Link>
                                    <h3 className="txt-pants">Pants</h3>
                                </div>
                                <div className="brand-shoes mb-5">
                                    <Link to=''>
                                        <img src={Shoes} alt=""/>
                                    </Link>
                                    <h3 className="txt-shoes">Shoes</h3>
                                </div>
                                <div className="brand-watch mb-5">
                                    <Link to=''>
                                        <img src={Watch} alt=""/>
                                    </Link>
                                    <h3>MisWatch</h3>
                                </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
