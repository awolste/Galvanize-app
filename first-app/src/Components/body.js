import React from 'react'

export default function body(props){
    return (
        <div className= "content">
           <ol>
              {props.list.map((value, index) => {
              return <li key={index}>{value}</li>
              })}
           </ol>
        </div>
     );
}