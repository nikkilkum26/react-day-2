import React from 'react';

function Count(props) {
    return (
        <div>
            <h1 >CLICK COUNTER </h1>
            <button class="btn btn-warning" onClick={props.upCounter}>+</button>
            <h3 class="display-2">{props.countTimes}</h3>
            <button class="btn btn-warning" onClick={props.downCounter}>-</button>
            <br></br><br></br>
            <button class="btn btn-warning" onClick={props.resetCounter}>RESET</button>
        </div>
    )
}
export default Count
