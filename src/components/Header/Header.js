import React from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';


import logo from '../../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class Header extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      mobileopen:false,
      modalIsOpen: false
    };
     
        this.navbartoggle = this.navbartoggle.bind(this);

        this.openModal = this.openModal.bind(this);
	    this.afterOpenModal = this.afterOpenModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
      }

      navbartoggle () {
      this.setState({mobileopen: !this.state.mobileopen})
      }


 openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
	render(){
		return(
				<React.Fragment>
			        <Modal
			          isOpen={this.state.modalIsOpen}
			          onAfterOpen={this.afterOpenModal}
			          onRequestClose={this.closeModal}
			          style={customStyles}
			          contentLabel="Example Modal"
			        >
			 
			          <h2 ref={subtitle => this.subtitle = subtitle}>Upcoming Content</h2>
			          <button onClick={this.closeModal}>close</button>
			          <div>Upcoming Content</div>
			         
			        </Modal>
					<header className="container-fluid header-bg">
						<div className="container relative-internal">
						<div className="topbar">
							<span>TOLL FREE- XXX-XX-XXXX</span>
							<button className="btn-color" onClick={this.openModal}>Get a Quote</button>
						</div>
							<Navbar light expand="md">
			                  <NavbarBrand href="/"><img src={logo} className="App-logo" alt="logo" /></NavbarBrand>

			                  <NavbarToggler onClick={this.navbartoggle} />
			                  <Collapse isOpen={this.state.mobileopen} navbar>
			                    <Nav className="ml-auto" navbar>
			                     <ul className="navbar-nav">
			                        <li className="nav-item">
			                          <Link to="/" className="nav-a navbar-brand">Home</Link>
			                        </li>
			                          <li className="nav-item">
			                          <Link to="/whoweare" className="nav-a navbar-brand">Who We Are</Link>
			                        </li>
			                        <li className="nav-item">
			                        <Link to="/whatwedo" className="nav-a navbar-brand">What We Do</Link>
			                        </li>
			                        <li className="nav-item">
			                          <Link to="/contactus" className="nav-a navbar-brand">Contact Us</Link>
			                        </li>
			                        <li className="nav-item">
			                          <Link to="/career" className="nav-a navbar-brand">Career</Link>
			                        </li>
			                        <li className="nav-item">
			                          <Link to="/services" className="nav-a navbar-brand">Services</Link>
			                        </li>
			                     </ul>
			                    </Nav>
			                  </Collapse>
			                </Navbar>
						</div>
					</header>
				</React.Fragment>
			)
	}
}

export default Header;