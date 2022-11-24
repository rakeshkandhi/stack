import './App.css';
import  { ByeWorld,HelloWorld}  from './companents/HelloWorld';
function App() {
  return (
    <div className="App">
      <h1>Hello World </h1>
      <h2></h2>
      <HelloWorld text="This is Hello world " />
      <ByeWorld text="This is bye world "/>
    </div>
  );
}

export default App;
