import React from 'react';
import {useRef,useState,useEffect} from 'react';
// function MyComponent(){
//     const [count, setCount] = useState(0);
//     function handleInc(){
//         setCount(c => c+1);
//     }
//     return(<><h2>dwdw</h2><p>Count:{count}</p><button onClick={handleInc}>Inc</button></>)
// }
function MyComponent(){
    // const ref = useRef(0);
    
    // function handleInc(){
    //     ref.current++;
    //     console.log(ref.current);
    // }
    // useEffect(() => {console.log("re-render");});
    // return(<><button onClick={handleInc}>Inc</button>
    //
    // </>)
    //above ex for number
    //no for input html tag
    const inputRef = useRef(null);
    useEffect(() => {console.log("compoentn rerender");
        
    }); 
    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }
    return(<><button onClick={handleClick}>Click</button>
    <input ref={inputRef} />
    </>)
    //pressing button doesnt rerender page , as "component rerender" dont get print more times as proff
}
export default MyComponent;