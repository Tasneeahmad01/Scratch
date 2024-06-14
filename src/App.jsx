// import React, { useState } from 'react';
// import Accordion from './Accordion';
// import './App.css';
// import {Question} from './Api';

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Accordion Example</h1>
//       <Accordion items={Question} />
//     </div>
//   );
// };

// export default App;




// src/App.js
import React from 'react';
import Accordion from './Accordion';
import './App.css';
import  Questions  from './Api';

const App = () => (
  <div className="App">
    <h1>Accordion Example</h1>
    <Accordion items={Questions} />
  </div>
);

export default App;
