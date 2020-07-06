import React, {Component} from 'react';

//Get Compontents & Style
import '../css/App.scss';


//Prompt user if they would like to store any of the current values and roll again
//Select parts of character to keep and re-generate the rest
class SelectedData extends Component {
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
      <div>
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
      </div>
    );
  }
}
  export default SelectedData;