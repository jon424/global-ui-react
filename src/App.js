import NavBars from "./components/NavBars";
import SideBars from './components/SideBars';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <NavBars />
 
      <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <SideBars />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>

            </Container>
      
    </>
  );
}

export default App;
