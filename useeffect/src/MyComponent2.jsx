import React,{useState, useEffect} from 'react';
import { use } from 'react';
function MyComponent2(){
    const [width, setWidth] = useState(window.innerWidth);
    const [ height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
    window.addEventListener('resize', handleResize);
        return () =>{
            window.removeEventListener('resize', handleResize);
        }
},[]);
    useEffect(() => {
        document.title = `Width: ${width}, Height: ${height}`;},[width, height]);
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(<><p>Window width:{width}px</p>
    <p>Window height:{height}px</p></>);
}
export default MyComponent2;