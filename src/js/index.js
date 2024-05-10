//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Digit } from "./component/dight.jsx";

//render your react application
let timer = 0
setInterval(()=>{
    timer++;
console.log(timer)
ReactDOM.render(<Home timer={timer} />, document.querySelector("#app"));

},1000
)
