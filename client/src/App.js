import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoardBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";

function App() {
  return (

    <>
      <div className="container mw-100 bg">
       
            <Col lg={12} md={12}>
            <AppBar />
            </Col>
            <Col lg={12} md={12}>
            <BoardBar />
            </Col>
            <Col>
              <BoardContent />
            </Col>
      </div>
    </>
    
  );
}

export default App;

