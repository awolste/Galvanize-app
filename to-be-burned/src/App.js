import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <One/>
      <Two/>
      <Three name = "Andrew"/>

    </div>
  );
}

function One(props){
  return <p>In One</p>
}

function Two(props){
  return <p>In Two</p>
}

function Three(props){
  return <p>In Three with {props.name}</p>
}

export default App;
