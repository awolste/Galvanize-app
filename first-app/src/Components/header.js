import React from 'react'

export default function header(){
    return (
        <div className= "head">
            <h1>Andrew's React App</h1>
            <p>Galvanize Bootcamp {new Date().getFullYear()}</p>
            <img alt="ally" className="img" src={"https://dlvkyia8i4zmz.cloudfront.net/ASJN0KgJRw67idoDI1cc_0120_Email_capture_logo.png"} />
        </div>
    );
}