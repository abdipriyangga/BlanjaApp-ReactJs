import React, { Component, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Modal, Button} from 'react-bootstrap';
import {Logo} from '../../assets'
import './navbar.css'

// function NavbarModal() {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbar navbar-expand-lg navbar-light bg-light" id="cus-nav" >
                    <div className="col-xs-12" id="brand-box">
                        <button className="navbar-brand bg-light nav-btn" type="button">
                            <img src={Logo} alt="Logo Blanja" />
                            <span className="text-brand p-2">Blanja</span>
                        </button>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col-lg-8" >
                            <form className="form-inline my-2 my-lg-0" id="form-search">
                                <input className="form-control mr-sm-2" id="input" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn mr-sm-3 my-sm-0 btn-search" type="submit">
                                    <i className="fas fa-search bg-dadada"></i>
                                </button>
                                <button className="btn mr-sm-2 my-sm-2 mt-sm-2 btn-filter" id="btn-filter" type="button">
                                    <i className="fas fa-filter bg-dadada"></i>
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <ul className="navbar-nav" id="ul-btn">
                                <li className="nav-item active">
                                    <button className="btn mr-sm-0 my-sm-2 mx-sm-2" href="#" type="button">
                                        <i className="fas fa-shopping-cart bg-dadada btn-cart"></i>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-login my-sm-2 mr-sm-3" href="#" type="button">Login</button>
                                    <button className="btn btn-signup my-sm-2" href="#" type="button">Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <NavbarModal /> */}
                </div>
            </>
        );
    }
}
