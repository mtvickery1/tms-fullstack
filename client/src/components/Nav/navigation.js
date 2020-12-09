import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from 'react-bootstrap';

// CSS
import "./nav.css";

// Media
import tmslogo from "../../images/logos/tms.png";
// import tmslogo from "../../images/logos/tms-white.png";


class navigation extends Component {


  constructor(props) {
    super(props)
    this.state = {
      servicesIsOpen: false,
      companyIsOpen: false,
      resourcesIsOpen: false
    }
  }

  // Show dropdown items onMouseEnter
  handleOpen = (tab) => {
    if (tab === 'services') {
      this.setState({ servicesIsOpen: true })
    } else if (tab === 'company') {
      this.setState({ companyIsOpen: true })
    } else if (tab === 'resources') {
      this.setState({ resourcesIsOpen: true })
    }
  }

  // Hide dropdown items onMouseLeave
  handleClose = (tab) => {
    if (tab === 'services') {
      this.setState({ servicesIsOpen: false })
    } else if (tab === 'company') {
      this.setState({ companyIsOpen: false })
    } else if (tab === 'resources') {
      this.setState({ resourcesIsOpen: false })
    }
  }



  // Finding the height of the Navbar
  componentDidMount() {
    var clientHeight = document.getElementById('navbar').offsetHeight;
    console.log('clientHeight:', clientHeight)
  }


  render() {
    return (


      <React.Fragment>

        <Navbar id='navbar' fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="mb-0 p-0">
          <Container id='navbar-container'>
            {/* Brand Logo */}
            <Navbar.Brand><Nav.Link href='/' componentclass={Link} > <Link to="/">
              <img id='logo' src={tmslogo} width="80" height="50" alt="" className="d-inline-block align-top" />
              <div id='white-square'></div>
            </Link></Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            {/* Links */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto pl-2 pl-xs-0">

                {/* Home */}
                <Nav.Link eventKey="1" as={Link} to="/" >Home</Nav.Link>


                {/* Our Company */}
                <NavDropdown
                  title="Our Company"
                  id="basic-nav-dropdown"
                  onMouseEnter={() => this.handleOpen('company')}
                  onMouseLeave={() => this.handleClose('company')}
                  show={this.state.companyIsOpen}
                  noCaret
                >
                  <NavDropdown.Item eventKey="2.1" as={Link} to="/profile" >About TMS</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2.2" as={Link} to="/partnership" >Our Strategic Partnerships</NavDropdown.Item>
                </NavDropdown>


                {/* Services */}
                <NavDropdown
                  title="Services"
                  id="basic-nav-dropdown"
                  // onMouseEnter={this.handleOpen('services')}
                  onMouseEnter={() => this.handleOpen('services')}
                  onMouseLeave={() => this.handleClose('services')}
                  show={this.state.servicesIsOpen}
                  noCaret
                >
                  <NavDropdown.Item eventKey="3.1" as={Link} to="/services" >Our Services</NavDropdown.Item>

                  {/* <NavDropdown.Item as={Link} > <Link to="/destination">Destination Services</Link></NavDropdown.Item> */}


                  {/* TEMPORARILY REMOVED FOR DEMO */}
                  {/* <NavDropdown.Item as={Link} > <Link to="/ftruck">Full Truckload</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item as={Link} > <Link to="/lttruck">Less-than-Truckload</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item as={Link} > <Link to="/globalf">Global Forwarding</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item as={Link} > <Link to="/lmile">Last Mile</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item as={Link} > <Link to="/vals">Vals</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item as={Link} > <Link to="/warehose">Warehouse</Link></NavDropdown.Item> */}


                  <NavDropdown.Item eventKey="3.2" as={Link} to="/cfi" >Computer Deployment Services</NavDropdown.Item>
                </NavDropdown>


                {/* Warehouse */}
                {/* <Nav.Link eventKey="4" as={Link} to="/warehouse" >Warehouse</Nav.Link> */}

                {/* Tracking */}
                <Nav.Link target='_blank' href="http://apps.tms-lp.com/ORTrack/Tracking"><span id='tracking'>Tracking</span></Nav.Link>

                {/* Resources */}
                <NavDropdown
                  title="Resources"
                  id="basic-nav-dropdown"
                  onMouseEnter={() => this.handleOpen('resources')}
                  onMouseLeave={() => this.handleClose('resources')}
                  show={this.state.resourcesIsOpen}
                  noCaret
                >
                  <NavDropdown.Item eventKey="5.1" as={Link} to="/icote" >Incoterms</NavDropdown.Item>
                  {/* <NavDropdown.Item as={Link} > <Link to="/termcond">Terms and Conditions</Link></NavDropdown.Item> */}
                  <NavDropdown.Item eventKey="5.2" as={Link} to="/docs" >Documents</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey="6" as={Link} to="/contactus" >Contact Us</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

      </React.Fragment>

    );
  }
}

export default navigation;