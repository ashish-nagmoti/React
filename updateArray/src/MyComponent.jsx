import { useState } from "react"

function MyComponent() {
    const [foods, setFoods] = useState(['Pizza', 'Burger', 'Pasta']);
    function  addFood(){
        const foodInput = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        setFoods(foods => [...foods, foodInput]);
    }
    function removeFood(index){
        setFoods(foods.filter((_,i) => i !== index));
    }
    return(<div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food,index) => <li key={index} onClick={() => removeFood(index)}>{food}</li>)}
        </ul>
        <input type="text" placeholder="Enter food name" id="foodInput" />
        <button onClick={addFood}>Add Food</button>
    </div>);
}
export default MyComponent;