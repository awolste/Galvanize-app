import React from 'react'

export default function hello(props){
    return(
    <div class="container">
        <div class="box pendulum one">*</div>
        {props.list.map((value, index) => {
            return <div class="box" key={index}>{value}</div>
        })}
        <div class="box pendulum two">*</div>
    </div>);
}