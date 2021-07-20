import React from 'react'

export default function hello(props){
    return(
    <div className="container">
        {props.list.map((value, index) => {
            if (index === 0)
                return <div className="box pendulum one" key={index}>{value}</div>
            if (index === props.list.length-1)
                return <div className="box pendulum two" key={index}>{value}</div>
            return <div className="box" key={index}>{value}</div>

        })}
    </div>);
}