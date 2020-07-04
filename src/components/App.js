import React, {Component} from 'react';

//Get Compontents & Style
import '../css/App.scss';
//import Character from './Character'
//import Footer from './footer'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


//Get possible Charater Data
import data from '../data/characters.json'

class createCharacter extends Component {
  constructor(props) {
    super(props);
    this.generateCharacter = this.generateCharacter.bind(this);
  
  }//End Constructor 

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

  }
  //Display Current Character
  render() {
    return (
      <div>
        See me?
{/*        <Button className="button" bsSize="large" onClick={this.generateCharacter}>Generate New Character</Button>
        <Row>
          <Col>
            <h1>Race</h1>
            {this.state.randRace}
          </Col>
          <Col>
            <h1>Class</h1>
            {this.state.randClass}
          </Col>
          <Col>
            <h1>Background</h1>
            {this.state.randBackground}
          </Col>
        </Row>*/}
      </div>
    );
  }
}




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

  //Checkbox Handler for Background
  handleGenerateCharacter(race, charClass, background) {
    this.setState({
      race: race,
      charClass: charClass,
      background: background
    });
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
          {/* <Row>  */}
          <div>

            </div>
          {/* </Row> */}
          {/*Selection to save data via checkboxes*/}
{/*           <Row>
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
