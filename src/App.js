import React, { useState } from 'react';
import './App.css';
import characterImage from './assets/boop.png';

const App = () => {
  const [message, setMessage] = useState('Hello! How can I help you today?');

  return (
    <div className="App">
      <header>

      </header>
      <div className="character-container">
        <img src={characterImage} alt="Character" className="character" />
      </div>
      <div className="chat-bubble">
        {message}
      </div>
      <div className="chat-input">
        <input
          type="text" 
          className="input-text"
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
