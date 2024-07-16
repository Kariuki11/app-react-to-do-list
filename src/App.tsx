import React, {FC, UseState } from 'react';
import './App.css';

const App: FC = () => {
  return (
  <div className="App">
    <div className="header">
      <div className="inputContainer">
      <input type="text" placeholder="Task..." />
      <input type="number" placeholder="Deadline(in days)..." />
      </div>
      <button>ADD Task</button>
    </div>
    <div className="todolist"></div>
    </div>
  );
};

export default App;
