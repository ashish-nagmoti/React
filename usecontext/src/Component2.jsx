import React,{useContext} from "react";
import { UserContext } from "./MyComponent";

// function Component2(props){
//     return(<div><p>Comp2</p> <br /><p>{`bye ${props.user}`}</p></div>);
// }
function Component2() {
    const user = useContext(UserContext);
    return(<div><h2>comp2</h2><p>{`bye ${user}`}</p></div>)
}
export default Component2;