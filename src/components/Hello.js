import React from 'react'
import "./Hello.css"

export default function Hello(props) {
    const colors = {fontSize: '16px', backgroundColor: "aqaua", color:"black"};
    const num = getNumber();
    let msg;
    if(num >= 5){
      msg = "number is greater than 5"
    } else {
      msg = "number is not gereater than 5"
    }

    return (
        <div>
            <h5><span className="Hello-desc">Whats here? </span>In this page; I tested components, params and conditional classes.</h5>
            <br/>
            <br/>
            <h1 style={colors}>Hello from {props.from || "ali"} to {props.to}</h1>
            {/* <h1 className={winner ? 'win' : 'lose'}></h1> */}
            {/* adding conditional class */}


            <p>{getMood()}</p>
        <span className="Hello-test-class">The number is: {num}</span>
        <span>{msg}</span>

        {
          num >= 5 && 
          <p>I agree that the number is greater than 5</p>
        }

        </div>
    )

    function getMood() {
        const moods = ['angry', 'Happy', "silly", "quiet"];
        return moods[Math.floor(Math.random() * moods.length)];
      }
      function getNumber() {
        return Math.floor(Math.random() * 10) + 1;
      }
}
