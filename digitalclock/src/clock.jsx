import React, {useState, useEffect} from 'react';
function Clock(){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }
    function padZero(num) {
        return (num < 10 ? "0" : "")+num;
    }
    return(<p>Clock:{formatTime()}</p>);

}
export default Clock;