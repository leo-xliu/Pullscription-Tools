import React, {useContext}from 'react';
import MyComponent from './Components/MyComponent';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from "./Components/Header";
import {LoginContext} from './index';
import { Link} from 'react-router-dom';
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

function App() {
    const loggedIn = useContext(LoginContext)
    return(
      <div>
          <Header loggedIn={loggedIn} /* want this to display user's name */ user={"User"} />
          <div className="main-menu">
            <nav>
              <ul>
                <li>{(loggedIn === true) ? (<Link className="menu-items" to='/CheckIn' >Check-In</Link>) : (<Link className="menu-items" to="/login">Check-In</Link>) } </li>
                <li className="pullmenu"><Link className="menu-items" to="/PullComics">Pull Comics</Link>
                    <div class="pull-dropdown-content">
                    <a href="PullByWeek">By Week</a>
                    <a href="PullByUser">By User</a>
                    </div>
                </li>
                <li><Link className="menu-items" to="/Inventory">Inventory</Link></li>
                <li><Link className="menu-items" to="/FanManagement">Fan Profiles</Link></li>
                <li><Link className="menu-items" to="/Admin">Admin</Link></li>
              </ul>
            </nav>
          </div>
          <div className="main-content">
              <h1>Comics go here</h1> 
          </div> 
      </div>
    )
  }
export default App;