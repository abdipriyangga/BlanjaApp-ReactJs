import React, { Component, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import {Modal, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import {Logo} from '../../assets'
import './navbar.css'
import { Link } from 'react-router-dom';

function NavbarModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <button className="btn mr-sm-2 my-sm-2 mt-sm-2 btn-filter" onClick={handleShow}>
            <i className="fas fa-filter bg-dadada"></i>
        </button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="d-flex flex-row-reverse">
          <Modal.Title><span className="text-head">Filter</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >
              <h3>Color</h3>
              <div className="d-flex" style={{height: '10%'}}>
                  <Button className="btn-filter-color" style={{backgroundColor: "#020202", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
                  <Button className="btn-filter-color" style={{backgroundColor: "#FFFFFF", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
                  <Button className="btn-filter-color" style={{backgroundColor: "#B82222", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
                  <Button className="btn-filter-color" style={{backgroundColor: "#BEA9A9", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
                  <Button className="btn-filter-color" style={{backgroundColor: "#E2BB8D", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
                  <Button className="btn-filter-color" style={{backgroundColor: "#151867", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
              </div>
          </div>
        </Modal.Body>
        <Modal.Body>
        <div>
          <h3>Sizes</h3>
              <div className="d-flex">
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>XS</Button>
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>S</Button>
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>M</Button>
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>L</Button>
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>XL</Button>
                
              </div>
          </div>
        </Modal.Body>
        <Modal.Body>
        <div>
          <h3>Category</h3>
              <div className="d-flex">
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>All</Button>
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>Women</Button>
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>Men</Button>
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>Boys</Button>
                  <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>Girls</Button>
                
              </div>
          </div>
        </Modal.Body>
        <Modal.Body>
        <div>
          <h3>Brand Name</h3>
            <DropdownButton id="dropdown-basic-button" title="Brand Name">
                <Dropdown.Item href="#/action-1">Zalora</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tokopedia</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Shoope</Dropdown.Item>
            </DropdownButton>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
                <Button variant="secondary" onClick={handleClose} style={{borderRadius: "25px", backgroundColor: 'white', color: 'black'}}>Discard</Button>
          <Button variant="primary"style={{borderRadius: "25px", color:'black', backgroundColor: 'white'}}>Apply</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbar navbar-expand-lg navbar-light bg-light" id="cus-nav" >
                    <div className="col-xs-12 " id="brand-box">
                        <Link to="/" className="navbar-brand bg-light nav-btn">
                            <img src={Logo} alt="Logo Blanja" />
                            
                        </Link>
                        <span style={{fontSize: 32, fontWeight:1000, fontFamily: 'metropolis', color: '#000000'}}>Blanja</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col-lg-6" >
                            <form className="form-inline my-2 my-lg-0" id="form-search">
                                <input className="form-control mr-sm-2" id="input" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn mr-sm-3 my-sm-0 btn-search" type="submit">
                                    <i className="fas fa-search bg-dadada"></i>
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-2">
                            <NavbarModal />
                        </div>
                        <div className="col-lg-4">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="btn mr-sm-0 my-sm-2 mx-sm-2" type="button">
                                        <i className="fas fa-shopping-cart bg-dadada btn-cart"></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-login my-sm-2 " type="button">
                                        Login
                                    </Link>
                                    <Link to="/signup" className="btn btn-signup my-sm-2" type="button">
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }
}
