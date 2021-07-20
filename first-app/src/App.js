import './App.css';
import React from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import Credit from './Components/credit';
import Hello from './Components/hello';


class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            {/* <Body list = { ["first", "second", "third", "fourth", "fifth", "sixth"]}/> */}
            <Hello list = {['W', 'E', 'L', 'C', 'O', 'M', 'E']}/>
            <Credit />
            <Footer myName = {"Andrew"}/>
         </div>
      );
   }
}
// class Header extends React.Component {
//    render() {
//       return (
//          <div className= "head">
//             <h1>Andrew's React App</h1>
//             <p>Galvanize Bootcamp</p>
//          </div>
//       );
//    }
// }
// class Body extends React.Component {
//   render() {
//       return (
//          <div className= "content">
//             <ol>
//                {this.props.list.map((value, index) => {
//                return <li key={index}>{value}</li>
//                })}
//             </ol>
//          </div>
//       );
//    }
// }

// class Footer extends React.Component{
//   render() {
//     return (
//         <div className= "foot">
//           Made by {this.props.myName}
//         </div>
//     );
//   }
// }

export default App;
