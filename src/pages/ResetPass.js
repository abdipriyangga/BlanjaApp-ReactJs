import React from 'react'
import './Login/login.css'
import {Link} from 'react-router-dom'
import {Logo} from '../assets'

export default function ResetPass() {
    return (
        <>
        <div className="container col-xs-12 col-sm-12 col-md-12">
            <div className="row col col-xs-12 col-sm-12 col-md-12">
                <div className="col col-xs-12 my-5 mt-5 box-logo">
                    <img src={Logo} class="mx-auto d-block" width="40" height="50" alt="logo" />
                    <h3 className="text-brand">Blanja</h3>
                </div>
                <div class="col col-xs-12 col-sm-12 col-md-12">
                    <p class="text-center">Reset Password</p>
                </div>
                <div class="col col-xs-12 col-sm-12 col-md-12 mt-5">
                    <form className="mx-auto d-block" style={{width:'50%'}} >
                        <div className="form-group">
                            <input type="email" placeholder="enter your email" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <Link to="/confirm-pass" type="submit" className="btn login">Reset</Link>
                    </form>
                </div>
            </div>
        </div>    
    </>
    )
}
