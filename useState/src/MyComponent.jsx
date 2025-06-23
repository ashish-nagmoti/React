import React, { useState } from 'react';
function MyComonent(){
    const [name, setName] = useState("Guest"); // it can be emoty useState("");
    const [count, setCount] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => { setName('John Doe'); };
    const updateCount = () => {setCount(count + 1);};
    const toggleSetIsEmpoyed= () => {setIsEmployed (!isEmployed);};
    return (
        <div>
            <h1>My name is {name}</h1>
            <button onClick={updateName}>SetName</button>
            <br /><br />
            <button onClick={updateCount}>{count}</button>
            <h1>employeed:{isEmployed ? "yes" : "no"}</h1>
            <button onClick={toggleSetIsEmpoyed}>Toggle</button>
        </div>
    );
}
export default MyComonent