import React, { Component } from "react";
import Navbar from "../../components/NavAfterLogin/navAfterLogin";
import MyProducts from "../../components/MyProduct/MyProduct";


export default class MyProduct extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MyProducts />
            </>
        );
    }
}