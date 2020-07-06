import React, {Component} from 'react';

//Get Compontents & Style
import '../css/App.scss';
import { Container, Row, Col } from 'react-bootstrap';


//Prompt user if they would like to store any of the current values and roll again
//Select parts of character to keep and re-generate the rest
class SelectedData extends Component {
  constructor(props) {
    super(props);
    const currentCharacter = props.data;
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

    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }


  //Want to update character generated
  handleSubmit(event) {
    console.log("See Me?");
    console.log(this.props.state);
    event.preventDefault();
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
          {/*currentCharacter.state*/}
        </Row>
    </Container>
    );
  }
}
  export default SelectedData;