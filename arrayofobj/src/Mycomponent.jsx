import React, {useState} from 'react';
function Mycomponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState( new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar(){
        const newCar = {year:carYear,make:carMake, model:carModel};
        setCars([...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }
    function handleRemoveCar(index){
        setCars( c => c.filter((_,i) => i !== index));
    }
    function handleYearChnage(event){
        setCarYear(event.target.value);
    }
    function handleMakeChnage(event){
        setCarMake(event.target.value);
    }
    function handleModelChnage(event){
        setCarModel(event.target.value);
    }
    return(<div>
        <h1>Car Inventory</h1>
        <ul>
            {cars.map((car,index) =>
            <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChnage} placeholder="Year" />
        <input type="text" value={carMake} onChange={handleMakeChnage} placeholder="Make" />
        <input type="text" value={carModel} onChange={handleModelChnage} placeholder="Model" />
        <button onClick={handleAddCar}>Add car</button>
    </div>)
}
export default Mycomponent;