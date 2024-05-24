import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

export default function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button 
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    increment
                </button>
                <span>{count}</span>
                <button 
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    decrement
                </button>
            </div>
        </div>
    )
}