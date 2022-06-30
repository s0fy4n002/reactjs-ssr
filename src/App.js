import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
