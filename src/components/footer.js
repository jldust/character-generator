//Get Compontents
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/App.scss';

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



    return (
      <div>
      <Container className="footer">
        <div className="source-button">
          <Button onClick={this.handleShow}>Source</Button>
        </div>
      </Container>
        {/*Pop-up Modal with source text*/}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Generator Source Content</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="modal-body">
              <Row>
                <Col>
                  <h4 >Race</h4>
                  <ul>
                    {raceSource}
                  </ul>
                </Col>
                <Col>
                  <h4>Class</h4>
                  <ul>
                    {classSource}
                  </ul>
                </Col>
                <Col>
                  <h4>Background</h4>
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