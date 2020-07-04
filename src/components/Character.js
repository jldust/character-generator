import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import '../css/App.scss';
import { Container, Row, Col } from 'react-bootstrap';


class Character extends Component {
  constructor(props) {
    super();
    this.state = {
      race: "",
      charClass: "",
      background: ""    
    }    


  //Functions for Initial Generator
  this.generateCharacter = this.generateCharacter.bind(this);

  }//End Constructor 


  //Set Specific Race
  setCharacterRace(givenData){
    this.setState.race = givenData;
  };

  //Set Specific Class
  setCharacterClass(givenData){
    this.setState.charClass = givenData;
  };

  //Set Sepcific Background
  setCharacterBackground(givenData){
    this.setState.background = givenData;
  };


  //Randomly generate a new character, compare locked choices
  generateCharacter(){
    //Random a Race
    let randRace = this.props.data.race[Math.floor(Math.random() * this.props.data.race.length)];
    //Random a Class
    let randClass = this.props.data.class[Math.floor(Math.random() * this.props.data.class.length)];
    //Random a Background
    let randBackground = this.props.data.background[Math.floor(Math.random() * this.props.data.background.length)];

    //Set new chracter
    this.setState ({race: randRace, charClass: randClass, background: randBackground});

    //Prompt user if they would like to store any of the current values and roll again

  }






  //Display Current Character
  render() {
    return (
      <div className="main">
      {/* Generator Button */}
      <div className="button-bar">
          <Button className="button" bsSize="large" onClick={this.generateCharacter}>Generate New Character</Button>
      </div>
      {/*Display Area for Current Character*/}
      <Container>
        <Row>
          <Col>
            <h1>Race</h1>
            {this.state.race}
          </Col>
          <Col>
            <h1>Class</h1>
            {this.state.charClass}
          </Col>
          <Col>
            <h1>Background</h1>
            {this.state.background}
          </Col>
        </Row>
            {/*Display Current Character*/}
            <p>This is your current character: {this.state.race + " " + this.state.charClass + " " + this.state.background}</p>
    </Container>
    </div>
    );
  }
}

export default Character;