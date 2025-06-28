import React,{useState,createContext} from 'react';
import Component2 from './Component2';
// function MyComponent() {
//     const [user, setUser] = useState("ash");
//     return(<div><p>Comp1</p> <br />
//    <p>{`hello , ${user}`}</p> <br />
//         <Component2 user={user}/>
//     </div>);
//     //this passing of props is called prop drilling
//     //this is not a good practice as it can lead to prop drilling
//     //we can use context api to avoid prop drilling
//     //we will create a context and use it in Component2
//     //we will use useContext hook to consume the context in Component2
// }

export const UserContext = createContext();
function MyComponent() {
    const [user, setUser] = useState("ash");
    return(<><h2>{`hello ${user}`}</h2>
    <UserContext.Provider value={user} >
        <Component2 />
        </UserContext.Provider>
    </>)
}
export default MyComponent;