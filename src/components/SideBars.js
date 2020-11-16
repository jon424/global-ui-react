import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAtom,
  faAngleDoubleRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
//https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap

// I want it to go to hamburger menu on mobile and expand and collapse at that point with variations in animation style...
// and adjust the height of the sidebar to be the full height of the screen...

//make it responsive like: https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp
// AND do this one: https://codyhouse.co/gem/responsive-sidebar-navigation

//Required Installations:
//   npm i --save @fortawesome/fontawesome-svg-core
//   npm install --save @fortawesome/free-solid-svg-icons
//   npm install --save @fortawesome/react-fontawesome
//Required Imports:
//    import { Nav, Navbar, NavDropdown } from "react-bootstrap";
//    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//    import {
//      faCoffee,
//      faAtom,
//      faAngleDoubleRight,
//    } from "@fortawesome/free-solid-svg-icons";

const SideBars = (props) => {
  // in the <Nav />: className="col-md-12 d-none d-md-block bg-light sidebar"
  return (
    <>
      <Nav
        className="col-md-12 d-md-block bg-white sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav
        className="col-md-12 d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav
        className="col-md-12 d-md-block bg-info sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav
        className="col-md-12 d-md-block bg-primary sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav
        className="col-md-12 d-md-block bg-success sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav
        className="col-md-12 d-md-block bg-warning sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav
        className="col-md-12 d-md-block bg-danger sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav
        className="col-md-12 d-md-block bg-secondary sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav
        className="col-md-12 d-md-block bg-dark sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky div-space"></div>
        <Navbar.Brand href="#home">Global UI</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faAngleDoubleRight} /> Link 2
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" drop="down">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default SideBars;
