import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Route, Link} 
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

//import Joke from "./Components/Joke"
//import jokesData from './Components/jokesData'


class App extends Component{

  constructor(){
    super()
    this.state = {
      isLoggedIn: false, // NOT PART OF THE APP, JUST FOR PRACTICE FOR ME
      counter: 0 // NOT PART OF THE APP, JUST FOR PRACTICE FOR ME
    }
    this.handleClick1 = this.handleClick1.bind(this) // NOT PART OF THE APP, JUST FOR PRACTICE FOR ME
    this.handleClick2 = this.handleClick2.bind(this) // NOT PART OF THE APP, JUST FOR PRACTICE FOR ME
  }

  handleClick1(){
    this.setState(
      {counter: this.state.counter + 1, 
        isLoggedIn: true
      }
    )
  } // NOT PART OF THE APP, JUST FOR PRACTICE FOR ME

  handleClick2(){
    this.setState(
      {counter: this.state.counter - 1, 
        isLoggedIn: true
      }
    )
  } // NOT PART OF THE APP, JUST FOR PRACTICE FOR ME

  render(){

    // let wordDisplay

    // const jokesComponents = jokesData.map((joke)=>{
    //   return <Joke key={joke.id} Question={joke.Question} Answer={joke.Answer}/>
    // })

    // if(this.state.isLoggedIn === true && this.state.counter%2!==0){
    //   wordDisplay = "IN"
    // }
    // else{
    //   wordDisplay = "NOT IN"
    // }
    

    // ACTUAL MAIN PAGE IMPLEMENTATION
    return(
      <div>
          <h1>Main Page!!</h1>
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