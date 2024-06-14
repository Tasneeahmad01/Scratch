

// src/App.js
import React, { useState } from 'react';
import Accordion from './Accordion';
import './App.css';
import Question from './Api';

const App = () => {
  const [data, setData] = useState();
  console.log(Question)
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion items={data} />
      
    </div>
  );
};

export default App;
