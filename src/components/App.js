import React, {Component} from 'react';

//Get Compontents & Style
import '../css/App.scss';
//import Character from './Character'
//import Footer from './footer'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


//Get possible Charater Data
import data from '../data/characters.json'

//Current Character data stored
class savedCharacter extends Component {
  render() {
    const currentChar = this.props.character;
    return (
      <p>This is your current character: A {currentChar} </p>
    );
  }
}


//Prompt user if they would like to store any of the current values and roll again
//Select parts of character to keep and re-generate the rest
class selectedData extends Component {
  constructor(props) {
    super(props);

    //Attach Handlers for Checkboxes
    this.handleRaceChange = this.handleRaceChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
  }
  //Was Checkbox checked?
  handleRaceChange(e) {
    this.props.onRaceChange(e.target.checked);
  }
  //Was Checkbox checked?
  handleClassChange(e) {
    this.props.onClassChange(e.target.checked);
  }
  //Was Checkbox checked?
  handleBackgroundChange(e) {
    this.props.onBackgroundChange(e.target.checked);
  }


  render() {
    return ( 
      <form>
        <p>
          <input
            type="checkbox"
            checked={this.props.chosenRace}
            onChange={this.handleRaceChange}
            />
          {' '}
          Keep current race
        </p>
        <p>
          <input
            type="checkbox"
            checked={this.props.chosenClass}
            onChange={this.handleClassChange}
             />
          {' '}
          Keep current class
        </p>
        <p>
          <input
            type="checkbox"
            checked={this.props.chosenBackground}
            onChange={this.handleBackgroundChange}
            />
          {' '}
          Keep current background
        </p>
      </form>
    );

  }
}


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        race: "",
        charClass: "",
        background: "",
        chosenRace: false,
        chosenClass: false,
        chosenBackground: false
      };
  
    //Bind Checkboxes & Generator Button
    this.handleRaceChange = this.handleRaceChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    this.handleGenerateCharacter = this.handleGenerateCharacter.bind(this);
  }

  //Checkbox Handler for Race
  handleRaceChange(chosenRace) {
    this.setState({
      chosenRace: chosenRace
    });
  }

  //Checkbox Handler for Class
  handleClassChange(chosenClass) {
    this.setState({
      chosenClass: chosenClass
    });
  }

  //Checkbox Handler for Background
  handleBackgroundChange(chosenBackground) {
    this.setState({
      chosenBackground: chosenBackground
    });
  }

  //Randomly generate a new character, compare locked choices
  handleGenerateCharacter(){
    //Random a Race
    let randRace = data.dataRace[Math.floor(Math.random() * data.dataRace.length)];
    //Random a Class
    let randClass = data.dataClass[Math.floor(Math.random() * data.dataClass.length)];
    //Random a Background
    let randBackground = data.dataBackground[Math.floor(Math.random() * data.dataBackground.length)];

    //Set new chracter
    this.setState ({race: randRace, charClass: randClass, background: randBackground});

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
            </Col>
          </Row>
          <br />
          {/*Display Area for Current Character*/}
          <div>
          <Button className="button" bsSize="large" onClick={this.handleGenerateCharacter}>Generate New Character</Button>
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
          </div>
          {/*Selection to save data via checkboxes*/}
          <Row>
            <selectedData 
            
            
            />
          </Row>
          {/*Display Current Character}
          <Row>
            <savedCharacter />
          </Row>*/}
        </Container>

        {/* <Character data={data} /> */}
        {/* <Footer data={data} />*/}
       </div>
    );
  }
}



















export default App;
