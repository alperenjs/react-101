import React, { useState, useEffect } from "react";

function UseEffect() {
const[count, setCount] = useState(0);
useEffect(() => { /* useeffect runs everytime the component renders and the first time */
    document.title = `You clicked ${count} times`
});
  return (
    <div>
     <button onClick={() => setCount(count + 1)}>
        Click Me {count}
     </button>
    </div>
  );
}

export default UseEffect;
