import React, {Component} from 'react';

//Get Compontents & Style
import '../css/App.scss';
import { Container, Row, Col } from 'react-bootstrap';


//Prompt user if they would like to store any of the current values and roll again
//Select parts of character to keep and re-generate the rest
class SelectedData extends Component {
  constructor(props) {
    super(props);
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
          id: 'savedRace', 
          value: ""
        },
        {
          id: 'savedClass', 
          value: ""
        },
        {
          id: 'savedCackground', 
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
          //this.setState(savedData{});

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
            this.state.categories.map(item => (
              <Col>
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
  export default SelectedData;