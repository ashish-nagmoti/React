import React, {useState} from 'react';
function Counter(){
    const [count,setCount] = useState(0);
    const increment = () => {
        // setCount(count+1); // maunal not updater fn
        // setCount(count+1);
        //we batch together state updates in React, so the above will only increment by 1
        //updater fn
        setCount(c =>c +1); // this is the correct way to increment
        setCount(c =>c +1); // this will increment by 2
        //this c repsr prev set and updates so when 2nd line runs, it has the updated value of count
        //now incremeted by 2

    };
    const decrement = () => {
        // setCount(count-1);// manual not updater fn
        setCount(c => c - 1); // this is the correct way to decrement
    };
    const reset = () => {
        setCount(0);// manual not updater fn

        // setCount(c=> c = 0); // this is the correct way to reset
        //no need of updater fn, as prev state does not matter
    };
    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;