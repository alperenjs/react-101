import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import Hello from './components/Hello'
import Home from "./components/Home";
import UseEffect from "./components/UseEffect";
import Hook from "./components/Hook";
import UseEffectAPI from "./components/UseEffectAPI";
import TodoApp from "./components/TodoApp";

function App() {

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      {/* Navbar */}
     
      {/* Routes */}
      <Switch>
        <Route path="/hello" render={() => <Hello to="you" from="alperen" />}></Route>
        <Route path="/useeffect" component={UseEffect}></Route>
        <Route path="/hook" component={Hook}></Route>
        <Route path="/useeffectapi" component={UseEffectAPI}></Route>
        <Route path="/todo" component={TodoApp}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      {/* Routes */}
    </div>
  );
}



export default App;
