
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Mybags from "../../components/MyBag/MyBag"

export default class MyBag extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Mybags />
            </>
        );
    }
}