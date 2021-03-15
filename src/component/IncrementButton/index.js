import React, { Component } from 'react';

// class IncrementButton extends Component {
//     constructor(props) {
//         super(props);
        
//     }
//     render() {
//         return (
//             <button onClick={this.props.handleIncrement}>Increment Count</button>
//         );
//     }
// }

const IncrementButton =  (props) => {
    //const {currentCounter} = props;
    return <button onClick={props.handleIncrement}>Increment Count</button>
}

export default IncrementButton;