import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
//import '../css/character.scss';

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
    this.state.race = givenData;
  };

  //Set Specific Class
  setCharacterClass(givenData){
    this.state.charClass = givenData;
  };

  //Set Sepcific Background
  setCharacterBackground(givenData){
    this.state.background = givenData;
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
      <div className="display">
          <div className="script">
            <h1>Race</h1>
            {this.state.race}

            <h1>Class</h1>
            {this.state.charClass}

            <h1>Background</h1>
            {this.state.background}

            {/*Display Current Character*/}
            <p>This is the current character</p>
    </div>
    </div>
    </div>
    );
  }
}

export default Character;