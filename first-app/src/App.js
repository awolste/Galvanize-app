import './App.css';
import React from 'react';
import { faHeart } from 'react-icons/fa';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Body list = { ["first", "second", "third", "fourth", "fifth", "sixth"]}/>
            <Footer myName = {"Andrew"}/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div className= "head">
            <h1>Andrew's React App</h1>
            <p>Galvanize Bootcamp</p>
         </div>
      );
   }
}
class Body extends React.Component {
  render() {
      return (
         <div className= "content">
           
    <ol>
      {this.props.list.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ol>
         </div>
      );
   }
}

class Footer extends React.Component{
  render() {
    return (
        <div className= "foot">
          Made by {this.props.myName}
        </div>
    );
  }
}

export default App;
