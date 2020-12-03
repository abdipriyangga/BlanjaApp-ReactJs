import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import {Logo} from '../../assets'
export default function Signup() {
    return (
        <>
            <div className="container col-xs-12 col-sm-12 col-md-12">
                <div className="row col col-xs-12 col-sm-12 col-md-12">
                    <div className="col col-xs-12 my-5 mt-5 box-logo">
                        <img src={Logo} class="mx-auto d-block" width="40" height="50" alt="logo" />
                        <h3 className="text-brand">Blanja</h3>
                    </div>
                    <div class="col col-xs-12 col-sm-12 col-md-12">
                        <p class="text-center">Please Signup your account</p>
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
                                <input type="text" className="form-control" placeholder="Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="PhoneNumber" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Store Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="enter your password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <Link to="/login" type="submit" className="btn login">Signup</Link>
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
