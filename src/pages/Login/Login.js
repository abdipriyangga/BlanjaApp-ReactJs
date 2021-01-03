import React, { Component } from 'react'
import './login.css'
import {Link, Redirect} from 'react-router-dom'
import {Logo} from '../../assets'
import {connect} from "react-redux"
import axios from "axios"
import {setLogin} from "../../redux/actionCreator/Auth"
import swal from 'sweetalert';

const base_url = process.env.REACT_APP_BASE_URL
console.log(base_url)

class Login extends Component {
    state = {
        isLogin : false
    }
    handleSubmit = (e) => {
        const {dispatch, auth} = this.props;
        const data = {
            email: this.email,
            password: this.password
        }
        e.preventDefault()
        axios.post(base_url + 'auth/login-seller', data)
            .then((res) => {
                this.setState({
                    isLogin: true
                })
                localStorage.setItem("token", res.data.data.loginToken);
                res.headers["x-access-token"] = res.data.data.loginToken;
                localStorage.setItem("email", res.data.data.email);
                dispatch(setLogin());
                swal("Login Berhasil");
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        console.log(localStorage)
        const { auth } = this.props;
        console.log(auth.newState)
        return (
            <>
              <div className="container col-xs-12 col-sm-12 col-md-12">
                {auth.isLogin && <Redirect to="my-profile-store" />}
                <div className="row col col-xs-12 col-sm-12 col-md-12">
                    <div className="col col-xs-6 my-5 mt-5 box-logo">
                        <img src={Logo} style={{marginLeft: "45%"}} className=" d-block" width="40" height="50" alt="logo" />
                        <h3 className="" style={{marginLeft: "47.5%", position: "absolute",
                        marginTop: "-30px", fontWeight: "600", marginRight:"auto"}}>Blanja</h3>
                    </div>
                    <div className="col col-xs-12 col-sm-12 col-md-12">
                        <p className="" style={{marginLeft: "42%"}}>Please Login with your account</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="" style={{marginLeft: "43%", fontWeight: "600"}}>
                            <Link  to="#" className="btn customer"> 
                                Customer
                            </Link>
                            <Link to="#" className="btn seller" > Seller</Link>
                        </div>
                    </div>
                    <div className="col col-xs-12 col-sm-12 col-md-12 mt-5">
                        <form className="mx-auto d-block" style={{width:'50%'}} >
                            <div className="form-group">
                                <input type="email" name="email" required onChange={(e) => (this.email = e.target.value)} className="form-control" placeholder="enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "100%"}}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" required onChange={(e) => (this.password = e.target.value)} placeholder="enter your password" className="form-control" id="exampleInputPassword1" style={{width: "100%"}} />
                            </div>
                            <div>
                                <Link to="/reset-pass">
                                    <p className="text-right" style={{color: '#DB3022'}}>Forgot Password?</p>
                                </Link>
                            </div>
                            <button type="submit" className="btn login" onClick={this.handleSubmit}>Login</button>
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
}
const mapStateToProps = ({ auth, newState }) => {
    return {
        auth,
        newState
    };
};

export default connect(mapStateToProps)(Login);