import React from 'react';

 //  const Welcome = (props) =>{
 //    return <div><b>{props.children}</b></div>;
 //  };
 // const App= () =>{
 //   return (
 //     <Welcome>
 //     <h1>hwwlo</h1>
 //     <p>wel</p>
 //     </Welcome>
 //   );
 // };
//
function App() {
    const message = "Hello, JSX works!";
    // const element = React.createElement('h1', null, 'Hello, World!');
const element = React.createElement(
  "button",
  {
    className: "btn",
    onClick: () => alert("Clicked!"),
  },
  "Click Me"
);

    return <h1>{message}{element}</h1>;
}
export default App;
