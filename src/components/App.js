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


//Prompt user if they would like to store any of the current values and roll again
//Select parts of character to keep and re-generate the rest
/*class selectedData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {id: 'race', value: "Keep Current Race"},
        {id: 'class', value: "Keep Current Class"},
        {id: 'background', value: "Keep Current Background"}
      ],
      checkedItems: new Map ()
    }

    //Attach Handlers for Checkboxes
    this.handleChange = this.handleChange.bind(this);
  }

  //Something happened with the Checkbox
  handleChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;

    this.props.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }


  //Want to update character generated
  handleSubmit(event) {
    console.log("See Me?");
    console.log(this.props.state);
    event.preventDefault();
  }


  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
        {
          this.state.categories.map(item => (
            <label>
              <input type="checkbox" value={item.id} onChange={this.handleChange} /> {item.value}
            </label>
          ))
        }

        <br />
        <input type="submit" value="Re-Generate with Seletions" />
      </form>
    );
  }
} */

//Main Application
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
        </Container>
        <Container>
          <Row>
            <SelectedData data={data} />
          </Row>
        </Container>

        {/* <Character data={data} /> */}
        {/* <Footer data={data} />*/}
       </div>
    );
  }
}

export default App;
