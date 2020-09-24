import React, {Component} from 'react';
import Count from './count'
class Count2 extends Component {
    render() {
        const {countTimes,upCounter,downCounter,resetCounter}=this.props;
        return (
            <div>
                <Count
                count={countTimes}
                upCounter={upCounter}
                downCounter={downCounter}
                resetCounter={resetCounter}
                />
            </div>
        )
    }
}
export default Count2