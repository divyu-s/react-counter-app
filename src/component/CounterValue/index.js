import React from "react";

// class CounterValue extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         //console.log(this.props.currentCounter)
//         return <h1>{this.props.currentCounter}</h1>
//     }
// }

// export default CounterValue;

const CounterValue = ({currentCounter}) => {
    return <h1>{currentCounter}</h1>
}

export default CounterValue;