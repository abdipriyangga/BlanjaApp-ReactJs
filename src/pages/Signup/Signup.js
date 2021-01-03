import React, { Component } from 'react';
import './signup.css';
import {Link} from 'react-router-dom';
import {Logo} from '../../assets';
import axios from "axios";
import swal from "sweetalert";

const base_url = process.env.REACT_APP_BASE_URL
console.log(base_url)

class Signup extends Component {
    state = {
        isRegis : false
    }
    handleSubmit = (e) => {
        const data = {
            name: this.name,
            email: this.email,
            phone_number: this.phone_number,
            store_name: this.store_name,
            password: this.password
        };
        e.preventDefault()

        this.setState({
            isRegis: true,
        })
        axios
            .post(base_url + 'auth/register-seller', data)
            .then((res) => {
                console.log(res)
                swal("Register Berhasil")
            })
            .catch((err) => {
                console.log(err);
            });

        console.log(data);
    };
    render() {
        return (
            <>
               <div className="container col-xs-12 col-sm-12 col-md-12">
                <div className="row col col-xs-12 col-sm-12 col-md-12">
                    <div className="col col-xs-12 my-5 mt-5 box-logo">
                        <img src={Logo} style={{marginLeft: "45%"}} className="d-block" width="40" height="50" alt="logo" />
                        <h3 className="text-brand" >Blanja</h3>
                    </div>
                    <div className="col col-xs-12 col-sm-12 col-md-12">
                        <p className="" style={{marginLeft: "42%"}}>Please Signup your account</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="box-btn">
                            <Link  to="#" className="btn customer"> 
                                Customer
                            </Link>
                            <Link to="#" className="btn seller" > Seller</Link>
                        </div>
                    </div>
                    <div className="col col-xs-12 col-sm-12 col-md-12 mt-5">
                        <form className="mx-auto d-block" style={{width:'50%'}} onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" onChange={(e) => (this.name = e.target.value)} placeholder="Name"  aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" onChange={(e) => (this.email = e.target.value)} placeholder="enter your email"  aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" name="phone_number" onChange={(e) => (this.phone_number = e.target.value)} placeholder="PhoneNumber"  aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="store_name" onChange={(e) => (this.store_name = e.target.value)} placeholder="Store Name"  aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="enter your password" name="password" onChange={(e) => (this.password = e.target.value)}  className="form-control" />
                            </div>
                                <button className="btn login" onSubmit={this.handleSubmit}>SignUp</button>
                            <div className="mt-5">
                                <p className="text-center" style={{color: '#000000'}}>Already have a Tokopedia account? 
                                    <Link to="/login" style={{color: '#DB3022'}}> 
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>     
            </>
        )
    }
}

export default Signup

