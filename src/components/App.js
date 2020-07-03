import React, {Component} from 'react';

//Get Compontents & Style
//import '../css/App.css';
import Header from './header'
//import Body from './body'
import Character from './Character'
import Footer from './footer'

//Get set possible Charater Data
import data from '../data/characters.json'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        {/*<Body data={data} />*/}
        <Character data={data} />
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
