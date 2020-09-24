import React, { Component } from 'react';
import Count from './count'

class Counter extends Component{
    constructor(){
        super()
        this.state= {
            countTimes:0
        }
    }

    upCounter =()=>{
        this.setState((prevState)=>({countTimes:prevState.countTimes+1}))

    }

    downCounter=()=>{
        let count=this.state.countTimes;
        if(count>0)
        this.setState((previousState)=>({countTimes:previousState.countTimes-1}))
    }

    resetCounter=()=>{

        this.setState(()=>({countTimes:0}))

    }

    render() {
        const {countTimes}=this.state;
        return (
            <div>
                <Count
                countTimes={countTimes} 
                upCounter={this.upCounter}
                downCounter={this.downCounter}
                resetCounter={this.resetCounter}
                />
            </div>
        )
    }
}



export default Counter

