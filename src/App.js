import './App.css';
import { useState } from 'react';
import List from './components/List';

function App() {
  const [inputText, setInputText] = useState('');

  function inputHandler(e) {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }
  return (
    <div className="main">
      <h1>React search</h1>
      <div>
        <input
          type="search"
          placeholder="search here"
          className="search"
          onChange={inputHandler}
        />
      </div>

      <List input={inputText} />
    </div>
  );
}

export default App;

// https://dev.to/salehmubashar/search-bar-in-react-js-545l
