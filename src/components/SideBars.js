import React from "react";
import { Nav } from "react-bootstrap";

//https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap

// I want it to go to hamburger menu on mobile and expand and collapse at that point with variations in animation style...
const SideBars = (props) => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default SideBars;
