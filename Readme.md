Readme.md
[React Introduction - GeeksforGeeks](https://www.geeksforgeeks.org/reactjs-introduction/)

- user virtual dom , so update only newly changed stuff.
- 1way passing of data parent →child
- uses jsx (html in js)

https://www.geeksforgeeks.org/reactjs-jsx-introduction/

```cpp
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
```

- can use html in js , can create comp using React
- we have compnents which we update in react

---

- we can create react app(cra) or we can use vite , as using vite have less bundle size
- explaination of hello world proj

![image.png](attachment:7713d1b0-d149-4e38-8274-9ac3b24ebce8:image.png)

- react maintains virtual dom of comp , and when component update, updates virtual dom , react-dom is used to do that

## react is not platform agnostic we just need to use react native instead of react dom to use in mobile app

### react is js lib , for building ui

next js →framework

lib →specific fn and framework , framework →set of tools and guidlines to build an app \

![image.png](attachment:4aee3383-6a11-4d16-aa84-7f6c8b9cdfdc:image.png)

---

## css

- 3 ways , external(index) , inline in code, module create module of that comp , check card code

---

# PROPS

read only prop that are sahred bn components.parent comp can send data to child component.

<component key=value  /  >

proptypes→makes sure passed val is of curr datatype, good for debugging , not gonna solve error or prevent from running

defaultProps →def val , in case val not passed from parent comp

---

# Conditional Rendering

- allow you to control what gets rendered in your application based on certain condn (show, hide, or certain comp)

---

# OnClick event

- when interacting user clicks  on button a specific element. We can respond to clicks by passing a callback to onClick event handler.
- works for img,button anything

---
# React Hook
Special fn that allows fn componenets to use react features without writing class components(useState, useEffect, useContext, useReducer,)

# useState()
react hook that allows cration of stateful variable And setter function to update it's value to virtual DOM [name, setName]

---

# onChange()
event handler primarily used with form elements, ex input,
textarea, select, radio. Triggers  function every time input changes

---

# updater functions
fn passed as an arg to setState() usually ex setYear(year+1)
update fn ->arro fn , ex setYear(arrow fn)
allow forsafe updates based on prev state used with mulitple state updates and asynchronus funtions, good practice to use updated functions


# useEffect() 
react hook that tells react to do some code when(pick one)
- component re-renders
- component mounts
- state of value

useEffect(function, [dependecies])
//1.useEffect(() => {}) //run after every reredner
//2.useEffetc(() => {},[]) //runs only on mount
//3.useEffect(() => {},[value]) //runs on mount +when val change

//USES
- event listners
- dom manipulation
- subscription(real time updates)
- fetching data from api
- clean up when component unmounts