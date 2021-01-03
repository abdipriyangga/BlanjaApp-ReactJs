// import React, { Component, useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"

// import {Modal, Button, DropdownButton, Dropdown} from 'react-bootstrap';
// import {Logo} from '../../assets'
// import './navbar.css'
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import {connect} from 'react-redux';

// const token = 'x ' + localStorage.getItem("token")
// const config = {
//     headers: {
//         'x-access-token': token
//     }
// }
// const base_url = process.env.REACT_APP_API_BASE_URL

// function NavbarModal() {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//       <>
//         <button className="btn mr-sm-2 my-sm-2 mt-sm-2 btn-filter" onClick={handleShow}>
//             <i className="fas fa-filter bg-dadada"></i>
//         </button>
//         <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton className="d-flex flex-row-reverse">
//           <Modal.Title><span className="text-head">Filter</span></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div >
//               <h3>Color</h3>
//               <div className="d-flex" style={{height: '10%'}}>
//                   <Button className="btn-filter-color" style={{backgroundColor: "#020202", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
//                   <Button className="btn-filter-color" style={{backgroundColor: "#FFFFFF", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
//                   <Button className="btn-filter-color" style={{backgroundColor: "#B82222", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
//                   <Button className="btn-filter-color" style={{backgroundColor: "#BEA9A9", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
//                   <Button className="btn-filter-color" style={{backgroundColor: "#E2BB8D", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
//                   <Button className="btn-filter-color" style={{backgroundColor: "#151867", borderRadius: '50%', margin: '0 7px', padding: '15px'}}></Button>
//               </div>
//           </div>
//         </Modal.Body>
//         <Modal.Body>
//         <div>
//           <h3>Sizes</h3>
//               <div className="d-flex">
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>XS</Button>
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>S</Button>
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>M</Button>
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>L</Button>
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', width: "30px", fontSize: "13px"}}>XL</Button>
                
//               </div>
//           </div>
//         </Modal.Body>
//         <Modal.Body>
//         <div>
//           <h3>Category</h3>
//               <div className="d-flex">
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>All</Button>
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>Women</Button>
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>Men</Button>
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>Boys</Button>
//                   <Button className="btn-filter-size" style={{backgroundColor: "#FFFFFF", color: 'black', borderRadius: '4px', margin: '0 7px', padding: '5px', fontSize: "13px", width: "70px"}}>Girls</Button>
                
//               </div>
//           </div>
//         </Modal.Body>
//         <Modal.Body>
//         <div>
//           <h3>Brand Name</h3>
//             <DropdownButton id="dropdown-basic-button" title="Brand Name">
//                 <Dropdown.Item href="#/action-1">Zalora</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Tokopedia</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Shoope</Dropdown.Item>
//             </DropdownButton>
//           </div>
//         </Modal.Body>
//         <Modal.Footer className="d-flex justify-content-around">
//                 <Button variant="secondary" onClick={handleClose} style={{borderRadius: "25px", backgroundColor: 'white', color: 'black'}}>Discard</Button>
//           <Button variant="primary"style={{borderRadius: "25px", color:'black', backgroundColor: 'white'}}>Apply</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default class Navbar extends Component {
//     state = {
//         product_name: ``,
//         current_url: ``,
//         color: '',
//         size: '',
//         category: '',
//         fetchSize: [],
//         fetchColor: [],
//         isLogin: true
//     }
//     render() {
//         return (
//             <>
//                 <div className="navbar navbar-expand-lg sticky-top navbar-light bg-light" id="cus-nav" >
//                     <div className="col-xs-12 " id="brand-box">
//                         <Link to="/" className="navbar-brand bg-light nav-btn">
//                             <img src={Logo} alt="Logo Blanja" />
                            
//                         </Link>
//                         <span style={{fontSize: 32, fontWeight:1000, fontFamily: 'metropolis', color: '#000000'}}>Blanja</span>
//                     </div>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <div className="col-lg-6" >
//                             <form className="form-inline my-2 my-lg-0" id="form-search">
//                                 <input className="form-control mr-sm-2" id="input" type="search" placeholder="Search" aria-label="Search" />
//                                 <a className="mr-sm-3 my-sm-0 btn-search" type="submit">
//                                     <i className="fas fa-search bg-dadada" style={{marginLeft: "0px"}}></i>
//                                 </a>
//                             </form>
//                         </div>
//                         <div className="col-lg-2 ml-4">
//                             <NavbarModal />
//                         </div>
//                         <div className="col-lg-4">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <Link className="btn mr-sm-0 my-sm-2" type="button" >
//                                         <i className="fas fa-shopping-cart bg-dadada btn-cart" style={{marginLeft: "-50px"}}></i>
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item" style={{marginLeft: "-20px"}}>
//                                     <Link to="/login" className="btn  my-sm-2" id="btn-login" type="button">
//                                         Login
//                                     </Link>
//                                     <Link to="/signup" className="btn btn-signup ml-3 my-sm-2" type="button">
//                                         Sign Up
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
                    
//                 </div>
//             </>
//         );
//     }
// }
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  InputGroup,
  Navbar,
  FormControl,
  Modal,
  Button,
  DropdownButton, 
  Dropdown
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import "./navbar.css";

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
class Navbarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      showModal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
    // console.log(e.target.value);
  };

  handleShow = (id) => {
    this.setState(() => {
      return {
        showModal: true,
      };
    });
  };

  handleEnd = () => {
    this.setState(() => {
      return {
        showModal: false,
      };
    });
  };

  render() {
    return (
      <header className="header">
        <Navbar fixed="top" className="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft: "10%"}} bg="white">
          <Link to="/" className="brand">
            <div className="brand d-lg-none">
              <Navbar.Brand>
                <img
                  src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoKecil_ijoj9p.png"
                  width="30"
                  height="44"
                  className="d-inline-block align-top nav-logo"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </div>
            <div className="brand2">
              <Navbar.Brand>
                <img
                  src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoBesar_vobugk.png"
                  width="30"
                  height="44"
                  className="d-inline-block align-top nav-logo"
                  alt="React Bootstrap logo"
                />
                <Navbar.Text className="textNavbar ">Blanja</Navbar.Text>
              </Navbar.Brand>
            </div>
          </Link>
          <Navbar.Toggle />
          <div className="input-search input-search-field d-flex justify-content-end ml-5">
            <InputGroup className="mb-5">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append className="mr-2">
                <FontAwesomeIcon className="icon-search " icon={faSearch} />
              </InputGroup.Append>
            </InputGroup>
            
          </div>
          <div className="icon-filter">
              <NavbarModal />
          </div>
          <Navbar.Collapse className="justify-content-end">
            <Link to="/myBag" className="brand">
              <img
                src={
                  "https://res.cloudinary.com/devloops7/image/upload/v1606580439/newBlanja/cart_s7fhsn.png"
                }
                style={{ marginRight: "40px", marginLeft: "20px" }}
                alt=""
              />
            </Link>
            {
              this.props.auth.username == null ?
              <Link to="/login" className="btn-login-nav">
              <div>Login</div>
            </Link>

            :

            <Link to="/my-profile-store" className="btn-login-nav">
            <div>My Profile</div>
          </Link>

            }

            <Link to="/signup" className="btn-signup-nav">
            <div>Signup</div>
            </Link>
          </Navbar.Collapse>
        </Navbar>
        
      </header>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Navbarr);