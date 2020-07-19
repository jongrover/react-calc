import React, {useState} from 'react';
import './App.css';

function App() {

  // State
  const [num1, setNum1] = useState(0),
        [num2, setNum2] = useState(0),
        [answer, setAnswer] = useState(0);

  // Untility Methods
  const updateNum1 = (e) => {
    setNum1(parseInt(e.target.value));
  };
  const updateNum2 = (e) => {
    setNum2(parseInt(e.target.value));
  };
  const calculate = () => {
    setAnswer(num1 + num2);
  };

  // Render Component
  return (
    <div className="App">
      <input onChange={updateNum1} type="number" min="0" max="999" value={num1}/> +
      <input onChange={updateNum2} type="number" min="0" max="999" value={num2}/>
      <button onClick={calculate}>=</button> <span>{answer}</span>
    </div>
  );
}

export default App;
