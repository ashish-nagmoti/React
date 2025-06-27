import React,{useState, useEffect} from 'react';
function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');
    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count]);
    function addCount(){
        setCount(c=>c+1);
    }
    function changeColor(){
        setColor(c => c === 'red' ? 'blue' : 'red');
    }
    return(<>
    <h2 style={{color: color}}> Count:{count}</h2>
    <button onClick={addCount}>Add Count</button>
    <button onClick={changeColor}>Change Color</button>
    </>);
}

export default MyComponent;
