import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
//const url = "http://localhost:4000/products"

export default class PostProduct extends Component {
    state = {
        product_name: '',
        images: '',
        id_category: '',
        product_brand: '',
        product_rating: '',
        product_price: '',
        id_color: '',
        id_size: '',
        qty: '',
        id_condition: '',
        description: ''
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }
    handlerSubmit = async (event) => {
        event.preventDefault()
        await axios.post("http://localhost:4000/products", this.state)
        alert("Add Product succesfully")
        this.props.history.push('/')
    }
    render() {
        console.log(this.state)
        return (
            <>
            <Navbar />

            <div className="container">
                <h1 className="mt-5" style={{textAlign: 'center', fontWeight: 'bold'}}>Add New Product</h1>
                <hr></hr>
                <form className="col-lg-6 mx-auto mt-5 justify-content-center" onSubmit={this.handlerSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name product</Form.Label>
                        <Form.Control  type="text" name="product_name" placeholder="Name product" onChange={this.handlerChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Images</Form.Label>
                        <Form.Control type="file"  name="images" placeholder="New Image" onChange={this.handlerChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text"  name="id_category" placeholder="Category"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Brand</Form.Label>
                        <Form.Control type="text" name="product_brand" placeholder="Product Brand"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Rating</Form.Label>
                        <Form.Control type="number" name="product_rating" placeholder="Product Rating"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" name="product_price" placeholder="Product Price"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Color</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Black"
                            name="id_color"
                            id="1"
                            />
                        <Form.Check
                            type="radio"
                            label="Blue"
                            name="id_color"
                            id="3"
                            />
                        <Form.Check
                            type="radio"
                            label="Red"
                            name="id_color"
                            id="2"
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Size</Form.Label>
                        <Form.Check
                            type="radio"
                            label="S"
                            name="id_size"
                            id="1"
                            />
                        <Form.Check
                            type="radio"
                            label="M"
                            name="id_size"
                            id="2"
                            />
                        <Form.Check
                            type="radio"
                            label="L"
                            name="id_size"
                            id="3"
                            />
                        <Form.Check
                            type="radio"
                            label="XL"
                            name="id_size"
                            id="4"
                            />
                        <Form.Check
                            type="radio"
                            label="XXL"
                            name="id_size"
                            id="5"
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control type="number" name="product_qty" placeholder="Product Quantity"  onChange={this.handlerChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Condition</Form.Label>
                        <Form.Check
                            type="radio"
                            label="New"
                            name="id_condition"
                            id="1"
                            />
                        <Form.Check
                            type="radio"
                            label="Second"
                            name="id_condition"
                            id="2"
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="textarea" name="product_description" placeholder="Product Description"  onChange={this.handlerChange}  />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </>
        )
    }
}
