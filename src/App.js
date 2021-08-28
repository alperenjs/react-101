import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {Route, Switch} from "react-router-dom"
import './App.css';
import Hello from './components/Hello'
import Home from "./components/Home";
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      {/* Navbar */}
     
      {/* Routes */}
      <Switch>
        <Route path="/hello" render={() => <Hello to="you" from="alperen" />}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      {/* Routes */}
    </div>
  );
}



export default App;
