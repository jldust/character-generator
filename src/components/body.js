//Get Compontents
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import '../css/App.css';
import PropTypes from 'prop-types';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox';

class Body extends Component {
    constructor(props) {
        super ();
        this.state = {
            displayRace: "",
            displayClass: "",
            displayBackground: "",
            msg: "",
            characterCheckboxes: new Map()
            
        }
        //Functions for Generator
  /*       this.pushRace = this.pushRace.bind(this);
        this.pushClass = this.pushClass.bind(this);
        this.pushBackground = this.pushBackground.bind(this); */
        this.generateCharacter = this.generateCharacter.bind(this);

        //Functions for Checkbox
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

/*     //Randomly determine a Race based on selected book
    pushRace(){
        let text = this.props.data.race[Math.floor(Math.random() * this.props.data.race.length)];
        this.setState ({displayRace: text});
    }

    //Randomly determine a Class
    pushClass(){
        let text = this.props.data.class[Math.floor(Math.random() * this.props.data.class.length)];
        this.setState ({displayClass: text});
    }

    //Randomly determine a Background
    pushBackground(){
        let text = this.props.data.background[Math.floor(Math.random() * this.props.data.background.length)];
        this.setState ({displayBackground: text});
    } */

    //Randomly generate a new character, compare locked choices
    generateCharacter(){
        //Random a Race
        let randRace = this.props.data.race[Math.floor(Math.random() * this.props.data.race.length)];
        this.setState ({displayRace: randRace});
        //Random a Class
        let randClass = this.props.data.class[Math.floor(Math.random() * this.props.data.class.length)];
        this.setState ({displayClass: randClass});
        //Random a Background
        let randBackground = this.props.data.background[Math.floor(Math.random() * this.props.data.background.length)];
        this.setState ({displayBackground: randBackground});
    }


    //Validate checkbox data & store selected

        Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
            <input type={type} name={name} checked={checked} onChange={onChange} />
        );
          

          handleChange(e) {
            const item = e.target.name;
            const isChecked = e.target.checked;
            this.setState(prevState => ({ characterCheckboxes: prevState.characterCheckboxes.set(item, isChecked) }));
            if(isChecked == true){
            this.setState({msg: [this.state.msg, e.target.name]});
            }
          }

          handleSubmit(event) {
            const target = event.target;
            var value = target.value;
            alert('These boxes were checked: ' + value);
            event.preventDefault();
          }

    //Set generated data to pass back
    render() {
        return (
            <div className="main">
                {/* Generator Button */}
                <div className="button-bar">
                    <Button className="button" bsSize="large" onClick={this.generateCharacter}>Generate New Character</Button>
                </div>
                {/* Display for Current Character*/}
                <div className="display">
                    <div className="script">
                        <h1>Race</h1>
                        {this.state.displayRace}

                        <h1>Class</h1>
                        {this.state.displayClass}

                        <h1>Background</h1>
                        {this.state.displayBackground}
                        {/* Character Checkboxs */}
                        <div>
                            <p>What would you like to keep about this character?</p>
                            <p>{this.state.msg}</p>
                            <form onSubmit={this.handleSubmit}>
                           <div>
                                {
                                checkboxes.map(item => (
                                    <label key={item.key}>
                                    {item.name}
                                    <Checkbox name={item.name} value={item.value} checked={this.state.characterCheckboxes.get(item.name)} onChange={this.handleChange} />
                                    </label>
                                ))
                                }
                            </div>
                            <div>
                                <input type="submit" value="Regenerate Character" />
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;