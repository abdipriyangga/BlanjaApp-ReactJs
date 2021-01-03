import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card} from "react-bootstrap"
import { Jas } from "../../../assets"
import Rating from "../../Rating/Rating"
import axios from 'axios'
import './newdataP.css'

class NewdataP extends Component {
    state = {
        products: [],
    };

    getAllProducts = () => {
        const base_url = "http://localhost:4000/search/new";
        axios.get(base_url).then(({data}) => {
            this.setState({
                products: data
            });
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getAllProducts();
    };

    render() {
        const {products} = this.state;
        return (
            <>
                {products.map(({id, product_name, product_price, category_name, description, product_rating}) => {
                    return (
                        <Card className="card-style" style={{width: "18rem"}}>
                            <Link to={{
                                            pathname:`/product/${id}`,
                                            state: this.state
                                        }}>
                            <img src={Jas} className="card-img-top" alt="..."/>
                            </Link>

                            <div className="card-body">
                                <h2 className="text-product-name">{product_name}</h2>
                                <p className="card-text price">${product_price}</p>
                                <p className="text-product-category">{category_name}</p>
                                <p className="text-product-description">{description}</p>
                                <Rating product_rating={product_rating} style={{marginLeft: "18"}} />
                            </div>
                        </Card>
                    
                        );
                    })}
        
            </>
        )
    }
}
export default NewdataP