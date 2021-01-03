import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import ConfirmPass from './ConfirmPass';
import Detail from './Detail';
import Home from './Home';
import Login from './Login/Login'
import PostProduct from './PostProduct';
import ResetPass from './ResetPass';
import Signup from './Signup/Signup'
import {Provider} from 'react-redux';
import store from "../redux/store";
import myProfile from './MyProfile/myProfile';
import MyProduct from './MyProduct/MyProduct';
import Mybag from './MyBag/MyBag';

export default function Router() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/reset-pass" component={ResetPass} />
                <Route path="/confirm-pass" component={ConfirmPass} />
                <Route path="/signup" component={Signup} />
                <Route path="/product/:id" component={Detail} />
                <Route path="/product-post" component={PostProduct} />
                <Route path="/my-profile-store" component={myProfile} />
                <Route path="/my-product" component={MyProduct} />
                <Route path="/myBag" component={Mybag} />
            </BrowserRouter>
        </Provider>
        
    );
}
