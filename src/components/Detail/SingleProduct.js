import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar"
import Detail from "../Detail/Detail"
import Products from '../Products/Products';
const url = "http://localhost:4000/product/";

class SingleProduct extends Component {
    state = {
        product : []
    }

    getSingleProduct = () => {
        const { match } = this.props;
        console.log(match)
        axios
        .get(url , match.params.id)
        .then(({data}) => {
            this.setState({
                product: data
            })
        })
        .catch((err) => {
            const errMsg = {
                msg: "Data Not Found",
                err
            }
            console.log(errMsg)
            
        })
    }

    componentDidMount = () => {
        this.getSingleProduct();
    } 
    render() {
        const {product} = this.state
        return (
            <>
               <Navbar /> 
               <div className="container">
                    <div className="d-flex">
                        <Link className="card-btn" to={"/"}>
                            <p className="mr-2">Home</p>
                        </Link>
                            <p className="mr-2"> {">"} </p>
                        <Link className="card-btn">
                            <p className="mr-2">Detail</p>
                        </Link>
                    </div>
                    {product.data && product.data.map(({product_name, description, product_condition,product_rating , product_price, qty, product_size, product_brand}, id) => {
                            return <Detail 
                            product_name={product_name}
                            product_desc={description}
                            product_price={product_price}
                            product_qty={qty}
                            product_size={product_size}
                            product_brand={product_brand}
                            product_condition={product_condition}
                            product_rating={product_rating}
                            key={id}
                            />
                        })}
               </div>
               <Products title='Popular' url='popular' />
            </>
        )
    }
}
export default SingleProduct