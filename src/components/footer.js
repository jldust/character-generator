//Get Compontents
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../images/logo.svg'
import '../css/App.css';

class Footer extends Component {
    constructor(props){
        super();
        this.state = {
            show: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
    //Open Modal
    handleShow(){
        this.setState({ show:true });
    }

    //Closing Modal
    handleClose(){
        this.setState({ show: false });
    }

    render() {
        let raceSource = this.props.data.race.map((characters, index) => <li key={index}>{characters}</li>);
        let classSource = this.props.data.class.map((characters, index) => <li key={index}>{characters}</li>);
        let backgroudSource = this.props.data.background.map((characters, index) => <li key={index}>{characters}</li>);
      
        return (
          <div className="footer">
              <br />
              <div className="source-button">
                <Button bsStyle="link" bsSize="small" onClick={this.handleShow}>Source</Button>
              </div>
              <div className="logo">
                Powered by React <img src={logo} className="react-logo" alt="logo" />
              </div>
          
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Quotes Source</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4 className="source-header">Race</h4>
                <ul>
                  {raceSource}
                </ul>
                <hr />
  
                <h4 className="source-header">Class</h4>
                <ul>
                  {classSource}
                </ul>
                <hr />
  
                <h4 className="source-header">Background</h4>
                <ul>
                  {backgroudSource}
                </ul>
                <hr />
  
                <p className="version">
                  v 0.2
                </p>
  
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