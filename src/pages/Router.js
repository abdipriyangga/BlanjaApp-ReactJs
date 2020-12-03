import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import ConfirmPass from './ConfirmPass';
import Detail from './Detail';
import Home from './Home';
import Login from './Login/Login'
import ResetPass from './ResetPass';
import Signup from './Signup/Signup'

export default function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/reset-pass" component={ResetPass} />
            <Route path="/confirm-pass" component={ConfirmPass} />
            <Route path="/signup" component={Signup} />
            <Route path="/product/:id" component={Detail} />
        </BrowserRouter>
    );
}
