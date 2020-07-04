import React, {Component} from 'react';

//Get Compontents & Style
import '../css/App.scss';
import Character from './Character'
//import Footer from './footer'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


//Get possible Charater Data
import data from '../data/characters.json'

class App extends Component {
  state = {
      race: "",
      charClass: "",
      background: ""    
    }




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

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
            <header className="header">
            <h1 className="title">D&D Character Generator</h1>
            </header>
            <br />
            {/* Generator Button */}
            <div className="button-bar">
                <Button className="button" bsSize="large" onClick={this.generateCharacter}>Generate New Character</Button>
            </div>
            </Col>
          </Row>
        </Container>

        <Character data={data} />
       {/* <Footer data={data} />*/}
       </div>
    );
  }
}




//Current Character data stored
class currentCharacter extends Component {
  render() {
    const currentChar = this.props.character;
    return (
      <p>This is your current character: A {currentChar} </p>
    );
  }
}


//Select parts of character to keep and re-generate the rest
class selectedData extends Component {
  render() {
    const chosenRace = this.props.chosenRace;
    const chosenClass = this.props.chosenClass;
    const chosenBackground = this.props.chosenBackground;
    return ( 
      <form>
        <p>
          <input
            type="checkbox"
            checked={chosenRace} />
          {' '}
          Keep current race
        </p>
        <p>
          <input
            type="checkbox"
            checked={chosenClass} />
          {' '}
          Keep current class
        </p>
        <p>
          <input
            type="checkbox"
            checked={chosenBackground} />
          {' '}
          Keep current background
        </p>
      </form>
    );

  }
}








export default App;
