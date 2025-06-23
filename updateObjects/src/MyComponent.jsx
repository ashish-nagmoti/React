import React, {useState} from 'react';
function MyComponent(){
    const [car, setCar] = useState({year: 2020,
                                 make: 'Toyota',
                                model: 'Camry'});
    function handleYear(e){
        setCar(c => ({...car,year: e.target.value}));
    }
    function handleMake(e){
        setCar(c => ({...car,make: e.target.value}));
    }
    function handleModel(e){
        setCar(c => ({...car,model: e.target.value}));
    }
    return(
    <div>
        <p>Car Details:</p>
        <p>Year: {car.year}</p>
        <p>Make: {car.make}</p>
        <p>Model: {car.model}</p>
        <input type="number" value={car.year} onChange={handleYear}/><br/>
        <input type="text" value={car.make} onChange={handleMake}/><br/>
        <input type="text" value={car.model} onChange={handleModel}/><br/>
    </div> 
    );
}
export default MyComponent;