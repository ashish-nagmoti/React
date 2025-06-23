function Button(){
    // const handClick = () => console.log("STNAND BACKKK!");
    // return(
         
    //     <button onClick={hadnleCLick2("bro")}>Click</button>
    // );
    // const hadnleCLick2 = (name) => console.log(`${name} stop clicking me!`);
    // return(
         
    //     <button onClick={hadnleCLick2("bro")}>Click</button>
    // );
    //this will not work as expected because the function is called immediately instead of being passed as a callback.
    // To fix this, you can use an arrow function to wrap the call:
    //basically just refersh and name is printed wo pressing button
    // return(<button onClick={()=> hadnleCLick2("bro")}>Click</button>);
    //this will work as expected, the function is called only when the button is clicked.
    // let count = 0;
    // const handleClick3 = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} stop clicking me!`);
    //     }
    //     else{
    //         console.log("You have clicked too many times!");
    //     }
    // }
    // return(<button onClick={()=> handleClick3("bro")}>Click</button>);


    const handleClick4 = (e) => e;
    
    // This will log the event object when the button is clicked.
    // The event object contains information about the event, such as the target element, type of event, etc.
    // You can access properties like e.target, e.type, etc. to get more information about the event.
    // For example, e.target will give you the button element that was clicked.
    const handleClick5 = (e) => e.target.textContent = "ouch";
    return(
        <>
        <button onClick={handleClick5}>Click</button>
        <button onDoubleClick={handleClick5}>Click</button>
        </>
    );
}
export default Button