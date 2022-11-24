import './App.css';
import  { ByeWorld,HelloWorld}  from './companents/HelloWorld';
import { useState } from 'react';
function App() {
  var counter = 0
  const increment = () => {
    counter =counter+1
    console.log(counter)
  }



  return (
    <div className="App">
      <h1>Hello World </h1>
      <h2></h2>
      <HelloWorld text="This is Hello world " />
      <ByeWorld text="This is bye world "/>
      <button onClick={increment}>Click me!</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
