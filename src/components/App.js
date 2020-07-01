import React, {Component} from 'react';

//Get Compontents & Character Data
import '../css/App.css';
import Header from './header'
import Body from './body'
import Footer from './footer'
import data from '../data/characters.json'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Body data={data} />
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
