import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'

function App() {
const num = getNumber();
let msg;
if(num >= 5){
  msg = "number is greater than 5"
} else {
  msg = "number is not gereater than 5"
}
  return (
    <div className="App">
      <header className="App-header">
       <Hello/>

        <img src={logo} className="App-logo" alt="logo" />
        
        <p>{getMood()}</p>
        <span>The number is: {num}</span>
        <span>{msg}</span>

        {
          num >= 5 && 
          <p>I agree that the number is greater than 5</p>
        }

      </header>
    </div>
  );
}

function getMood() {
  const moods = ['angry', 'Happy', "silly", "quiet"];
  return moods[Math.floor(Math.random() * moods.length)];
}
function getNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export default App;
