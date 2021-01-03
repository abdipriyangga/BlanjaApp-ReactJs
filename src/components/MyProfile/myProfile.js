import React, { Component } from "react";
import { Jumbotron, Form, Row, Col } from "react-bootstrap";
import Sidebar from "../Sidebar/sidebar";
import './myProfile.css'
import { connect } from "react-redux";

class MyProfile extends Component {
    render() {
        return (
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div className="container-selling">
                    <Jumbotron className="container-content" style={{marginTop: "-40px"}}>
                        <h3>My profile store</h3>
                        <p className="font-p-title">Manage your profile information</p>
                        <hr></hr>

                        <div className="row">
                            <div className="col-md-8">
                                <Form>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={3} className="mt-3">
                                            Store Name
                                        </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control type="text" value="Johanes Mikael" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={3} className="mt-3">
                                            Email
                                        </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control type="email" value="johanes@gmail.com" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={3} className="mt-3">
                                            Phone Number
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="text" value="081271408776" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={3} className="mt-n1">
                                            Store description
                                        </Form.Label>
                                        <Col sm={9}>
                                            <textarea>
                                            </textarea>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Form.Label column sm={3} className="mt-n5">
                                        </Form.Label>
                                        <Col sm={9}>
                                            <div className="btn-login-nav">Save</div>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                            
                        </div>
                        
                    </Jumbotron>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ auth }) => {
    return {
      auth,
    };
  };
  
export default connect(mapStateToProps)(MyProfile);
  