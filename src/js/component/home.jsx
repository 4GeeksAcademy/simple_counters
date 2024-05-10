import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digit } from "./dight";
//create your first component
const Home = (props) => {
  return (
    <main className="hg-dark d-flex" id="timer1">
      <Digit number={<i class="fa-solid fa-clock"></i>} />
	  <Digit number={Math.floor(props.timer / 10000 ) % 10000 } />
	  <Digit number={Math.floor(props.timer / 1000 ) % 1000 } />
	  <Digit number={Math.floor(props.timer / 100 ) % 100 } />
	  <Digit number={Math.floor(props.timer / 10 ) % 10 } />

      <Digit number={Math.floor(props.timer % 10) } />
    </main>
  );
};

export default Home;
