import React, { Component } from 'react';
import MyComponent from './Components/MyComponent';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Route, Link} 
        from "react-router-dom";
import Header from "./Components/Header";


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
          <Header/>
          <div className="main-menu">
            <nav>
              <ul>
                <li><a className="menu-items" href="CheckIn">Check-In</a></li>
                <li className="pullmenu"><a className="menu-items" href="PullComics">Pull Comics</a>
                    <div class="pull-dropdown-content">
                    <a href="PullByWeek">By Week</a>
                    <a href="PullByUser">By User</a>
                    </div>
                </li>
                <li><a className="menu-items" href="Inventory">Inventory</a></li>
                <li><a className="menu-items" href="FanManagement">Fan Profiles</a></li>
                <li><a className="menu-items" href="Admin">Admin</a></li>
              </ul>
            </nav>
          </div>
          <div className="main-content">
              <h1>Comics go here</h1> 
          </div> 
      </div>
    )
  }

}
export default App;