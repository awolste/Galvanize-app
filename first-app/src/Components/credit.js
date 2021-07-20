import React from 'react'

function reveal(){
    if (document.getElementById("source").style.display === 'block'){
        document.getElementById("source").style.display = 'none'
        document.getElementById("button").innerHTML = "Show Source"
    }
    else { 
        document.getElementById("source").style.display = 'block'
        document.getElementById("button").innerHTML = "Hide Source"
    }
    
}

export default function credit(){
    return (
        <div className= "content">
            <button id="button" className="button" onClick={reveal}>
                Show Source
            </button>
            <br />
            <div className="source" id="source">Source: https://codepen.io/shu-vro/pen/YzZebpJ</div>
        </div>
     );
}