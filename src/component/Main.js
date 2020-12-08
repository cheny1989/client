import React, { Component } from 'react';
import Math from "./Math";
// import PITEST, { doublePi, tripplePi, quarter } from "./Math"; // if start this - delete "piAnyWorld" (16-19)"
import * as piAnyWorld from "./Math"

import AAA, {add, multiply, subtract, divide} from "./Math2"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            <h2>Math</h2>
            <p>{Math}</p>
            {/* {PITEST} */}
            <p>{piAnyWorld.doublePi()}</p>
            <p>{piAnyWorld.tripplePi()}</p>
            <p>{piAnyWorld.quarter()}</p>

            <hr />
            <h2>Math2</h2>

        <   p>{add(3,4)}</p>
        <   p>{multiply(3,4)}</p>
        <   p>{subtract(3,4)}</p>
        <   p>{divide(3,4)}</p>
            </div>
          );
    }
}
 
export default Main;
<div>

</div>