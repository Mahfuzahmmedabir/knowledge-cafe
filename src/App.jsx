import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <h1>Vite + React</h1>
      <h2 className="text-3xl  w-48  font-bold underline">
        Software as a serivec
      </h2>
    </>
  );
}

export default App;
