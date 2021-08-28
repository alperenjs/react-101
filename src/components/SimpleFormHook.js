import React from 'react';
import useFormState from '../hooks/useFormState';

export default function SimpleFormHook() {
    const [name, updateName, reset] = useFormState("");
    const [age, updateAge, resetAge] = useFormState("");
    return (
        <div>
            <h1>The name is...{name}</h1>
            <input type="text" value={name} onChange={updateName}></input>
            <button onClick={reset}>Reset</button>

            <br/>

            <h1>The age is...{age}</h1>
            <input type="text" value={age} onChange={updateAge}></input>
            <button onClick={resetAge}>Reset</button>
        </div>
    )
}
