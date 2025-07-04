import React, {useRef,useState,useEffect} from 'react';

function Stop(){
    const [isRunning,setIsRunning] = useState(false);
    const [elaspsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() =>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elaspsedTime;
    }
    function stop(){
        setIsRunning(false);
        
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        let hours = Math.floor(elaspsedTime / (1000 *60*60) );
        let minutes = Math.floor(elaspsedTime / (1000 *60)%60 );
        let seconds = Math.floor(elaspsedTime / (1000)%60 );
        return `${hours}:${minutes}:${seconds}`;
    }
    return(
        <div className="stopwatch">
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button className='start-button' onClick={start}>Start</button>
                <button className='stop-button' onClick={stop}>Stop</button>
                <button className='reset-button' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default Stop;
