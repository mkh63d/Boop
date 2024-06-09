import React, { useState } from 'react';
import './App.css';
import characterImage from './assets/boop.png';

const App = () => {
  var i = 0;
  const responsesScript = [
    'Cześć! Jak mogę Ci dzisiaj pomóc?',
    'Artykuł? Jasne, ten jest bardzo dobry: https://www.researchgate.net/publication/6576120_Lung_Cancer_Diagnosis_and_Management',
    'Mam dużo ciekawostek. Na przykład wiedziałeś, że nowotwór płuca jest drugim co do częstości występowania nowotworem w Polsce?',
    'Hej! Piłeś już dzisiaj wodę? Pamiętaj to ważne!'];
  let message = useState('Cześć! Jak mogę Ci dzisiaj pomóc?');
  function setMessage (response) {
    if (i < responsesScript.length - 1) {
      i++;
      message = responsesScript[i];
    } else {
      i = 0;
    }
    message = response;
  };

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
          onChange={(e) => setMessage(responsesScript[i])}
        />
      </div>
    </div>
  );
}

export default App;
