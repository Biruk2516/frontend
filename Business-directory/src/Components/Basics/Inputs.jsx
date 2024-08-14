import React from "react";
export default function Inputs(props)
{
    return(
        <input id={props.id} type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} required={props.required} onChange={props.onChange} />
    );
}