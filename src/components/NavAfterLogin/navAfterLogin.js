// import React, { Component, useState  } from 'react'
// import { Link } from 'react-router-dom'
// import {Logo} from '../../assets'
// import { Image, Button, Modal, DropdownButton, Dropdown } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import "./navAfterLogin.css";

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


// export default class navAfterLogin extends Component {

//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg navbar-light shadow rounded">
//                     <div className="container">
//                         <a className='navbar-brand mr-auto' href='http://localhost:3000/'>
//                             <Image src={Logo} className='mb-3 mr-2' />Blanja</a>

//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
//                             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>

//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <div className="mx-auto">
//                                 <div className="row">
//                                     <div className="col col-sm-12 col-md-auto">
//                                         <div className="input-group mt-1">
//                                             <input type="text" className="form-control border-right-0" placeholder="Search" />
//                                             <span className="input-group-append">
//                                                 <div className="input-group-text bg-transparent">
//                                                     <FontAwesomeIcon className="icon-search" icon={faSearch} />
//                                                 </div>
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="col col-sm-6 col-md-auto mt-1">
//                                         {/* <button className="btn btn-outline btn-filter" data-toggle="modal" data-target="#FilterModal">
//                                             <FontAwesomeIcon className="icon-filter" icon={faFilter} />
//                                         </button> */}
//                                         <div className="col-lg-2">
//                                             <NavbarModal />
//                                         </div>
//                                     </div>
//                                     <div className="col col-lg-auto mt-1 ml-5 pl-5">
//                                         <a className="cart" href="#">
//                                             <FontAwesomeIcon className="icon-cart" icon={faShoppingCart} />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="row mr-auto">
//                                 <div className="rounded-circle">
//                                     <img src='https://i.imgur.com/MAKDFWb.png' style={{borderRadius: "50%"}}></img>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </nav>
//       </>
//     );
//   }
// }

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Logo} from '../../assets'
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "./navSec.css";

const base_url = process.env.REACT_APP_BASE_URL;
class navAfterLogin extends Component {

  render() {
    return (
      <>
        <header className="header">
          <Navbar className="navbar navbar-expand-lg sticky-top navbar-light bg-light" fixed="top" bg="white" style={{marginLeft: "10%"}}>
            <div className="brand d-lg-none">
              <Navbar.Brand href={{base_url}}>
                <img
                  src={Logo}
                  width="30"
                  height="44"
                  className="d-inline-block align-top nav-logo"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </div>
            <div className="brand2">
              <Navbar.Brand href="#home">
                <img
                  src={Logo}
                  width="30"
                  height="44"
                  className="d-inline-block align-top nav-logo"
                  alt="React Bootstrap logo"
                />
                <Navbar.Text className="textNavbar ">Blanja</Navbar.Text>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <FontAwesomeIcon style={{ margin: "0 20px", color: "#eaeaea" }} icon={faBell} />
              <FontAwesomeIcon style={{ margin: "0 20px", color: "#eaeaea" }} icon={faEnvelope} />
              <div className="dp-profil-nav">
                <img className="img-profil-nav" alt="" />
              </div>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </>
    );
  }
}
export default navAfterLogin