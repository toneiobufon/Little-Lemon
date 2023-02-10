import React from "react";


function AvailableTimes(props){
    return(
        <>
       {props.AvailableTimes.map(times => <p>{times.time}</p>)}
        </>
    )

}

export default AvailableTimes;