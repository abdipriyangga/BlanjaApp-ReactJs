import React, { Component } from "react";
import Navbar from "../../components/NavAfterLogin/navAfterLogin";
import MyProfiles from '../../components/MyProfile/myProfile'


export default class myProfile extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MyProfiles />
            </>
        );
    }
}
