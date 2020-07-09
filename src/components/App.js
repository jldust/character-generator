import React, {Component} from 'react';

//Get Compontents & Style
import '../css/App.scss';
//import SelectedData from './SelectedData';
//import Footer from './footer'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


//Get possible Charater Data
import data from '../data/characters.json'




//Prompt user if they would like to store any of the current values and roll again
//Select parts of character to keep and re-generate the rest
class SelectedData extends Component {
  constructor() {
    super();
    this.state = {
      //Data for dynamic checkboxes
      categories: [
        {
          id: 'race', 
          value: "Keep Current Race"
        },
        {
          id: 'class', 
          value: "Keep Current Class"
        },
        {
          id: 'background', 
          value: "Keep Current Background"
        }
      ],
      //Data for stored data
      savedData: [
        {
          id: 'race', 
          value: ""
        },
        {
          id: 'class', 
          value: ""
        },
        {
          id: 'background', 
          value: ""
        }
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

    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

    //Only write data if box is checked
    switch(item){
      case 'race':
        if(isChecked === true)
          console.log(this.props);
          //this.setState(id: this.props);

        console.log(isChecked);
        break;
      case 'class':
        if(isChecked === true)
          console.log("class true");
        console.log(isChecked);
        break;
      case 'background':
        if(isChecked === true)
          console.log("Back true");
        console.log(isChecked);
        break;
      default:
        return;
    }

  }


  //Want to update character generated
  handleSubmit(event) {
    event.preventDefault();
    console.log("See me?");
  }


  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Row>{
            this.state.categories.map((item) => (
              <Col key={item.id}>
                <label>
                  <input type="checkbox" value={item.id} onChange={this.handleChange} /> {item.value}
                </label>
              </Col>
            ))
          }
          </Row>
          <Row>
            <Col>
              <br />
              <input type="submit" value="Re-Generate with Seletions" />
            </Col>
          </Row>
        </form>
        <Row>
          Here is the current stored data: 
        </Row>
    </Container>
    );
  }
}


//Current Character data stored
class SavedCharacter extends Component {
  render() {
    return (
      <div>
        <Row>
          <p>This is your current character: A </p>
        </Row>
          </div>
    );
  }
}

//Main Application
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      //Hold randomed data
      currentChar: {
        race: "",
        charClass: "",
        background: ""
      },
      //Data for stored data
      savedData: [
        {
          id: 'race', 
          value: ""
        },
        {
          id: 'class', 
          value: ""
        },
        {
          id: 'background', 
          value: ""
        }
      ]
    };
  
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
