import React,{ useState,useEffect} from "react";
import CounterValue from "./component/CounterValue";
import IncrementButton from "./component/IncrementButton" ;
import Input from "./component/Input";
import Timer from "./component/Timer";


// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       counter: 0,
//     };
//   }
//   componentDidMount(){
//     //only once
//     console.log("Component has mounted");
//   }
//   componentDidUpdate(prevProps,prevState){
//      console.log("Updated Counter Value",prevProps,prevState);
//   }
// handleIncrement=()=>{
//   this.setState(
//     {
//       counter:this.state.counter+1,
//     }
//   );
// };
//   render() {
//     return (
//      <div className="p-5">
//            <CounterValue currentCounter={this.state.counter}/>
//            <IncrementButton handleIncrement={this.handleIncrement}/>
//            </div>   
//     );
//   }
// }

function App() {

  //  const counter = useState(0)[0];
  //  //const variableName = useState(defaultValue)[0];
  //  const setCounter = useState()[1];
  //  // this.setState({counter: value})
   
  const [counter, setCounter] = useState(0);
  const [inputValue,setInputValue] = useState(5);
  const [mounted,setMounted] = useState(false);
  // const [nameofvariable,methodtochange that variable] = useState(defalutvalueofVariable)
//useEffect(functionToBeExecuted,dependencyArray)
  useEffect(()=>{
    if(mounted){
     setInputValue(inputValue+1);
    }
  },[counter])
//componentDidMount
  useEffect(()=>{
   setMounted(true)
  },[])

  const handleIncrement=()=>{
         setCounter(counter+1)
  }
  return (
      <Timer/>
  ); 
}

export default App;
