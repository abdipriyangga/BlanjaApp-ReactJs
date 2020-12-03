import React from 'react'
import {Link} from 'react-router-dom'
import {Logo} from '../assets'
import './Login/login.css'

export default function ConfirmPass() {
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
                            <input type="password" placeholder="enter your new password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="confirm your password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <Link to="/login" type="submit" className="btn login">Confirm Reset</Link>
                    </form>
                </div>
            </div>
        </div>    
    </>
    )
}
