import React, {Component} from 'react';

//Get Compontents & Style
import '../css/App.scss';
import SelectedData from './SelectedData';
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

//Main Application
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        race: "",
        charClass: "",
        background: "",
      };
  
    //Constant to hold current data
    //var currentChar = {savedRace: "", savedClass: "", savedBackground: ""};
    //Bind Checkboxes & Generator Button
    this.handleGenerateCharacter = this.handleGenerateCharacter.bind(this);
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
          <Button className="button" onClick={this.handleGenerateCharacter}>Generate New Character</Button>
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
          <br />
        </Container>
        {/* Call in Character selection and saved output*/}
          <SelectedData 
            savedRace = {this.state.race} 
            savedClass = {this.state.charClass}
            savedBackground = {this.state.background}
            />

        {/* <Character data={data} /> */}
        {/* <Footer data={data} />*/}
       </div>
    );
  }
}

export default App;
