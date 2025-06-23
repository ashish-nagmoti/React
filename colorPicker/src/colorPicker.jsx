import React, { useState } from 'react';
function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF');
    function handleColorChange(e)
    {
        setColor(e.target.value);
        document.body.style.backgroundColor = e.target.value; // Change the background color of the body
    }

    return(<div >
        <h1>Color Picker</h1>
        <p>Selected Color: {color}</p>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>);
}
export default ColorPicker