import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Joke from './components/Joke';
import Saved from './components/Saved';

function App() {

  const [currentJoke, setCurrentJoke] = useState('No joke yet')
  const [saved, setSaved] = useState([])

  function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random') 
    .then(response => response.json()
    .then(data => setCurrentJoke(data['value'])))
  }

  function saveJoke() {
    if(saved.includes(currentJoke)) {
      console.log("Already saved")
    }
    else {
      let s = [...saved]
      s.push(currentJoke)
      setSaved(s)
    }
  }

  function removeJoke(index) {
    let s = [...saved]
    s.splice(index, 1)
    setSaved(s)

  }

  return (
    <div className="App">
      <h1>Chuck Norris</h1>
      <div>
        <button onClick={getJoke}>Get Joke</button> 
        <button onClick={saveJoke}>Save</button>
      </div>
      <Joke joke={currentJoke} />
      <Saved saved={saved} callback={removeJoke} />
    </div>
  );
}

export default App;
