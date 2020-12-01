import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import './products.css'

export default class Products extends Component {
    state = {
        productsNews: [],
    };
    
    getAllNewProducts = () => {
        const base_url = "http://localhost:4000/products"
        axios.get(base_url + "created_time DESC")
        .then((result) => {
            // const productsNews = res.data.data;
            // this.setState({productsNews});
            console.log(result);
        })
        .catch((err) => err);
    };

    componentDidMount() {
        this.getAllNewProducts();
    }
    render() {
        return (
            <>
              <div className="tittle">
          <h2 style={{ fontSize: "34px" }}> New </h2>
          <div className="d-flex justify-content-between">
            <p style={{ fontSize: "12px", color: "gray" }}>
              You've never seen it before
            </p>
            <p style={{ fontSize: "14px", color: "gray" }}>
              <strong>SEE ALL </strong>
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </div>
        </div>

        <div className="row-catalog">
          {this.state.productsNews.map((productNew, id, ) => {
            return (
              <div key={id} className="card card-catalog">
                <Link to={`/detail/${productNew.id}`}>
                  <img
                    src={productNew.images}
                    alt=""
                    className="card-img-top img-news"
                    width="238"
                    height="136"
                  />
                  <div className="card-body">
                    <p className="card-catalog-title">
                      {productNew.product_name}
                    </p>
                    <p className="card-catalog-price">
                      {productNew.product_price}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>  
            </>
        )
    }
}
