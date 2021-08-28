import React from 'react'
import useToggle from '../hooks/useToggle'

export default function Toggler() {
    // const [isHappy, setIsHappy] = useState(true);
    // const [isRocket, setIsRocket] = useState(true);
    // const toggle = () => {
    //     setIsHappy(!isHappy);
    // } commented out cuz > I created a useToggle generic hook.
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isRocket, toggleIsRocket] = useToggle(true);

    return (
        <div>
       <h1 onClick={toggleIsHappy}>{isHappy ? "😀" : "😥"}</h1>
       <h1 onClick={toggleIsRocket}>{isRocket ? "🚀" : "❌"}</h1>
        </div>
    )
}
