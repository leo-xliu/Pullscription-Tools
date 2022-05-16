/*
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';

function App() {
  return (
    <div >
      <h1>Hello World!</h1>
    </div>
    );
}

export default App;

*/


import React, { Component } from 'react';
import MyComponent from './Components/MyComponent';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Switch} 
        from "react-router-dom";

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
  }


  onClickBtn() {
    console.log('Button has been clicked!');
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
        <button onClick={this.countUp}>
          <h1>APP: Click Me!</h1>
        </button>
        <p>{this.state.count}</p>
        <NavBar username={this.state.username} />
        <Forum username={this.state.username} />
      </div>
    );
  }
}
*/

/*
import Joke from "./Joke"
import jokesData from './jokesData'

function App(){

  const jokesComponents = jokesData.map((joke)=>{
    return <Joke key={joke.id} Question={joke.Question} Answer={joke.Answer}/>
  })

  return(
      <div>
       {jokesComponents}
      </div>
  )
}
*/

import Joke from "./Components/Joke"
import jokesData from './Components/jokesData'


class App extends Component{

  constructor(){
    super()
    this.state = {
      isLoggedIn: false,
      counter: 0
    }
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick1(){
    this.setState(
      {counter: this.state.counter + 1, 
        isLoggedIn: true
      }
    )
  }

  handleClick2(){
    this.setState(
      {counter: this.state.counter - 1, 
        isLoggedIn: true
      }
    )
  }

  render(){

    let wordDisplay

    const jokesComponents = jokesData.map((joke)=>{
      return <Joke key={joke.id} Question={joke.Question} Answer={joke.Answer}/>
    })

    if(this.state.isLoggedIn === true && this.state.counter%2!==0){
      wordDisplay = "IN"
    }
    else{
      wordDisplay = "NOT IN"
    }
    return(
      <div>
          <h1>Main Page!!</h1>
          {/* <h3>
            you are currently {wordDisplay}
          </h3>
          <h2>
            {this.state.counter}
          </h2>
          <button onClick={this.handleClick1}>
            Click Me increase!!
          </button>
          <br/>
          <button onClick={this.handleClick2}>
            Click Me decrease!!
          </button>
          <br/>
            <button>
              Rounter
            </button>
          <br/>
          <button>
            Pull Comics
          </button>
          <br/>
          <button>
            Fan Managment
          </button>
          <br/>
          <button>
            Admin
          </button>
          <br/> */}
          <div>
            <ul>
              <li><Link to="/CheckIn">CheckIn --></Link></li>

              <li><Link to="/PullComics">Pull Comics --></Link></li>

              <li><Link to="/ProfileSettings">Profile_Settings --></Link></li>

              <li><Link to="/Inventory">Inventory --></Link></li>
              
              <li><Link to="/FanManagement">Fan_Management --></Link></li>
              
              <li><Link to="/Admin">Admin --></Link></li>
            </ul>
          </div>
      </div>
    )
  }

}
export default App;