import React, { Component } from 'react';

//Get Compontents & Style
import '../css/App.scss';
import Header from './header'
import Footer from './footer'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


//Get possible Charater Data & Icon Images
import raceIcon from '../images/race.png';
import classIcon from '../images/class.png';
import backgroundsIcon from '../images/backgrounds.png';
import data from '../data/characters.json';

//Main Application
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Hold randomed data
      buttons: [
        {
          id: 'inital',
          value: 'Generate Character',
        },
        {
          id: 'resubmit',
          value: 'Re-Generate Character',
        },
        {
          id: 'clear',
          value: 'Start Over?',
        }
      ],
      //Data for dynamic checkboxes
      categories: [
        {
          id: 'race',
          value: "Keep Current Race",
          data: false
        },
        {
          id: 'class',
          value: "Keep Current Class",
          data: false
        },
        {
          id: 'background',
          value: "Keep Current Background",
          data: false
        }
      ],
      //Data for stored data
      savedData: [
        {
          id: 'race',
          header: 'Race',
          icon: raceIcon,
          data: ""
        },
        {
          id: 'class',
          header: 'Class',
          icon: classIcon,
          data: ""
        },
        {
          id: 'background',
          header: 'Background',
          icon: backgroundsIcon,
          data: ""
        }
      ],
      checkedItems: new Map()
    }

    //Bind Checkboxes & Generator Button
    this.handleGenerateCharacter = this.handleGenerateCharacter.bind(this);
    //Button handler for Checkboxes
    this.handleChange = this.handleChange.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
    this.updateData = this.updateData.bind(this);
    this.switchValidation = this.switchValidation.bind(this);
  }

  //Something happened with the Checkbox
  handleChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;

    //Update which boxes were checked
    this.updateData(item, isChecked, this.state.categories);
  }


  //Handle updating the stored data
  updateData(item, currentData, givenArray) {
    givenArray.map(index => {
      if (index.id === item)
        index.data = currentData
      return index;
    });
  }

  //check which switch needs to function
  switchValidation(item, selectedData, givenArray) {
    switch (item.id) {
      case 'race':
        if (item.data === false)
          this.updateData(item.id, selectedData.randRace, givenArray);
        break;
      case 'class':
        if (item.data === false)
          this.updateData(item.id, selectedData.randClass, givenArray);
        break;
      case 'background':
        if (item.data === false)
          this.updateData(item.id, selectedData.randBackground, givenArray);
        break;
      default:
        return;
    }
  }



  //Randomly generate a new character, compare locked choices
  handleGenerateCharacter(event) {
    //Stop Submit from reloading the page
    event.preventDefault();
    //Random a Race
    let randRace = data.dataRace[Math.floor(Math.random() * data.dataRace.length)];
    //Random a Class
    let randClass = data.dataClass[Math.floor(Math.random() * data.dataClass.length)];
    //Random a Background
    let randBackground = data.dataBackground[Math.floor(Math.random() * data.dataBackground.length)];

    //Temporarily store the values generated
    let tempChar = { randRace, randClass, randBackground };
    //console.log(tempChar);

    this.state.categories.map(item => {
      this.switchValidation(item, tempChar, this.state.savedData);
      return { item };
    });

    //Re-render screen state
    this.setState({});
  }

  //Reset application
  handleResetButton(event) {
    let clearText = [{ id: 'race', data: '' }, { id: 'class', data: '' }, { id: 'background', data: '' }];
    let clearBoxes = [{ id: 'race', data: false }, { id: 'class', data: false }, { id: 'background', data: false }];
    //Clear out displayed text
    clearText.map(item => {
      this.updateData(item.id, item.data, this.state.savedData);
      return { item };
    });

    //Reset checkboxes
    clearBoxes.map(item => {
      this.updateData(item.id, item.data, this.state.categories);
      return { item };
    });
    console.log(this.state.categories);
    //Reload State
    this.setState({});
  };

  render() {
    return (
      <Container >
        <Row className="header">
          <Col>
            <Header />
          </Col>
        </Row>
        <br />
        {/*Display Area for Current Character*/}
        <Row className="displayCharacter">
          {
            this.state.savedData.map((item) => (
              <Col className="boxes" key={item.id}>
                <img className="icons" src={item.icon} alt={item.id} />
                <h1>{item.header}</h1>
                <p>{item.data}</p>
              </Col>
            ))
          }
        </Row>
        {/* Call in Character selection and saved output*/}
        <Row className="saveStats">
          {
            this.state.categories.map((item) => (
              <Col className="boxes" key={item.id}>
                <label>
                  <input type="checkbox" value={item.id} onChange={this.handleChange} /> {item.value}
                </label>
              </Col>
            ))
          }
        </Row>
        <Row>
          <Col md={{ span: 3, offset:3 }}>
            <Button className="button" onClick={this.handleGenerateCharacter}>Generate Character</Button>
          </Col>
          <Col md={{ span: 3}}>
            <Button className="button" onClick={this.handleResetButton}>Start Over?</Button>
          </Col>
        </Row>
        <Row>
          {/*Add Footer Component*/}
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default App;
