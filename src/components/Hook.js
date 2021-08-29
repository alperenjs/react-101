import React, { useState } from 'react'
import Toggler from "./Toggler"
import SimpleFormHook from "./SimpleFormHook"

function Hook() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>The count: {count} </h1>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <br/>
            <br/>
            <br/>
            
            <Toggler/>

            <br/>
            <br/>
            <br/>

             <SimpleFormHook/>
        </div>
    )
}

export default Hook;
