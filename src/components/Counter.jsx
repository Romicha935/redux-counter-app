import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/Counteraction'

const Counter = () => {
    // const [count,setCount] = useState(0)
    const count = useSelector((state)=> state.count);
    console.log(count);
const dispatch = useDispatch()
    
    
    const handleIncrement = () => {
        // setCount((count) => count + 1)
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        // setCount((count) => count + 1)
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        // setCount((count) => count + 1)
        dispatch(resetCounter())
    }
  return (
    <div>
        <h2>Counter App</h2>
        <h3>Count : {count} </h3>
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleDecrement} >Decrement</button>
        <button onClick={handleReset} >Reset</button>
    </div>
  )
}

export default Counter