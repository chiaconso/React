import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    function Increment() {
        setCount(count=> {
         return count +1
        })
    }
    return(<div>
        <button onClick={Increment}>Increment</button>
        Count: {count}
    </div>
    )
} 

export default Counter