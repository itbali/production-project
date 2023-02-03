import React from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    // create state variable
    const [count, setCount] = React.useState(0);

    // create function to increment count
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {count}
            <button onClick={increment} className={classes.counter}>inc</button>
        </div>
    );
};

export default Counter;