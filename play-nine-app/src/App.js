import React from 'react';
import './App.css';
import Game from './game/Game';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);

class App extends React.Component {
  render() {
    return (
      <Game />
    );
  }
}

export default App;
