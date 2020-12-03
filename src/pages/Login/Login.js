import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import {Logo} from '../../assets'
export default function Login() {
    return (
        <>
            <div className="container col-xs-12 col-sm-12 col-md-12">
                <div className="row col col-xs-12 col-sm-12 col-md-12">
                    <div className="col col-xs-12 my-5 mt-5 box-logo">
                        <img src={Logo} class="mx-auto d-block" width="40" height="50" alt="logo" />
                        <h3 className="text-brand">Blanja</h3>
                    </div>
                    <div class="col col-xs-12 col-sm-12 col-md-12">
                        <p class="text-center">Please Login with your account</p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="box-btn">
                            <Link  to="#" class="btn customer"> 
                                Customer
                            </Link>
                            <Link to="#" class="btn seller" > Seller</Link>
                        </div>
                    </div>
                    <div class="col col-xs-12 col-sm-12 col-md-12 mt-5">
                        <form className="mx-auto d-block" style={{width:'50%'}} >
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="enter your password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div>
                                <Link to="/reset-pass">
                                    <p className="text-right" style={{color: '#DB3022'}}>Forgot Password?</p>
                                </Link>
                            </div>
                            <Link to="/" type="submit" className="btn login">Login</Link>
                            <div className="mt-5">
                                <p className="text-center" style={{color: '#000000'}}>Don't have a Tokopedia account? 
                                    <Link to="/signup" style={{color: '#DB3022'}}> 
                                        Sign Up
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
