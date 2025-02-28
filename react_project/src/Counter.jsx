import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    function Increment() {
        setCount(count=> {
            return count +1
        })
    }
    function Decrement() {
        setCount(count => {
            return count -1
        })
    }
    function Reset() {
        setCount(count => {
            return 0
        })
    }
    return(<div>
        <button onClick={Increment}>Increment</button>
        Count: {count}
        <button onClick={Decrement}>Decrement</button>
        Count: {count}
        <button onClick={Reset}>Reset</button>
        Count: {count}
        </div>
    )
} 

export default Counter