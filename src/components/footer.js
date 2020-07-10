//Get Compontents
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../images/logo.svg'
import '../css/App.css';

//Get possible Charater Data
import data from '../data/characters.json'

class Footer extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  //Open Modal
  handleShow() {
    this.setState({ show: true });
  }

  //Closing Modal
  handleClose() {
    this.setState({ show: false });
  }

  render() {
    let raceSource = data.dataRace.map((characters, index) => <li key={index}>{characters}</li>);
    let classSource = data.dataClass.map((characters, index) => <li key={index}>{characters}</li>);
    let backgroudSource = data.dataBackground.map((characters, index) => <li key={index}>{characters}</li>);


    console.log(raceSource);

    return (
      <div className="footer">
        <br />
        <div className="source-button">
          <Button onClick={this.handleShow}>Source</Button>
        </div>
        <div className="logo">
          Powered by React <img src={logo} className="react-logo" alt="logo" />
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Quotes Source</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <h4 className="source-header">Race</h4>
                  <ul>
                    {raceSource}
                  </ul>
                </Col>
                <Col>

                  <h4 className="source-header">Class</h4>
                  <ul>
                    {classSource}
                  </ul>

                </Col>
                <Col>
                  <h4 className="source-header">Background</h4>
                  <ul>
                    {backgroudSource}
                  </ul>
                </Col>
              </Row>
              <Row>By: Jennifer Dust</Row>
            </Container>


          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Footer;