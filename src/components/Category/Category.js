import React, { Component } from 'react'
import {Tshirt, Jacket, Pants, Short, Shoes} from '../../assets'
import { Link } from 'react-router-dom';
import './category.css'

export default class Category extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="title-category">
                            <h3>Category</h3>
                            <p className="lead text-muted">What are you currently looking for</p>
                        <div className="row row-col-5 ml-auto d-flex justify-content-around">
                                <div className="col col-md-auto rounded box brand-tshirt mb-5">
                                    <Link to=''>
                                        <img src={Tshirt} alt="" className="fluid mx-auto d-block w-100"/>
                                    </Link>
                                    <h3 >T-Shirt</h3>
                                </div>
                                <div className="col col-md-auto  rounded box brand-category-1 mb-5">
                                    <Link >
                                        <img src={Short} alt="" className="fluid mx-auto d-block w-100"/>
                                    </Link>
                                    <h3>Shorts</h3>
                                </div>
                                <div className="col col-md-auto rounded box brand-category-2 mb-5">
                                    <Link to=''>
                                        <img src={Jacket} alt="" className="fluid mx-auto d-block w-100"/>
                                    </Link>
                                    <h3>Jacket</h3>
                                </div>
                                <div className="col col-md-auto rounded box brand-category-3 mb-5">
                                    <Link to=''>
                                        <img src={Pants} alt="" className="fluid mx-auto d-block w-100"/>
                                    </Link>
                                    <h3>Pants</h3>
                                </div>
                                <div className="col col-md-auto rounded box brand-category-4 mb-5">
                                    <Link to=''>
                                        <img src={Shoes} alt="" className="fluid mx-auto d-block w-100"/>
                                    </Link>
                                    <h3>Shoes</h3>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
