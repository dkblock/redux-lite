import React, { useState } from "react";
import { useDispatch, useSelector } from "../__redux-lite__/hooks";
import { increment, decrement } from "../store/actions";
import "./Counter.css";
import store from "../store/store";

const Counter = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const counter = useSelector(state => state.counter);

    const incrementCount = () => {
        dispatch(increment());
    };

    const decrementCount = () => {
        dispatch(decrement());
    };

    return (
        <div className="counter">
            <button
                className="counter-button counter-button--green"
                onClick={incrementCount}
            >
                +
            </button>
            <span>{counter}</span>
            <button
                className="counter-button counter-button--red"
                onClick={decrementCount}>
                -
            </button>
        </div>
    );
};

export default Counter;