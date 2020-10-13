import React, { useState } from 'react';
import { Message } from './Message';
import Day from './Day';
import './App.css';

function App() {

  let [count, setcount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`box ${isMorning? 'daylight':''}`}>
      <Day isthisMorning={isMorning}/>
      <Message counter={count} />
      <br />
      <button onClick={() => setcount(++count)}>Update Counter</button>
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
