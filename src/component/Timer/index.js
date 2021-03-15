import React, { useEffect, useState } from 'react';

const Time = () => {
    const [time,setTime] = useState(new Date());
    //Similar to componenWillunMount
    // useEffect(()=>{
    //     //ComponetWillMount
    //     //cleanup
    //     return ()=>{
    //         console.log("Unmounting");
    //     }

    // },[])
    useEffect(()=>{
        const id = setInterval(()=> setTime(new Date()),1*1000);
        console.log("Component Did Mount/Component Did Update with value of",id);
        return  ()=>{
            console.log("Use Effect as Component unmount valueOf",id);
            clearInterval();
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default Time;