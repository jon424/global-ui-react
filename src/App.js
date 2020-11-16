import NavBars from "./components/NavBars";
import SideBars from "./components/SideBars";
import Images from "./components/Images";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBars />
      <SideBars />

      {/* <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SideBars />
          </Col>
          <Col xs={10} id="page-content-wrapper"></Col>
        </Row>
      </Container> */}
      {/* <Images /> */}
    </>
  );
}

export default App;
