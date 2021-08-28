import React from 'react'

export default function Hello(props) {
    const colors = {fontSize: '16px', backgroundColor: "aqaua", color:"black"};

    return (
        <div>
            <h1 style={colors}>Hello from {props.from || "ali"} to {props.to}</h1>
            {/* <h1 className={winner ? 'win' : 'lose'}></h1> */}
            {/* adding conditional class */}
        </div>
    )
}
