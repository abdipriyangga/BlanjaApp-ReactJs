import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Detail from '../components/Detail/Detail';
import Home from './Home';
import Login from './Login/Login'

export default function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/detail/:id" exact component={Detail} />
        </BrowserRouter>
    );
}
