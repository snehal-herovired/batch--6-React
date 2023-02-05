import React, { useState} from 'react';
import "./styles/header.css"
// it allows you creacte components.
// it actually enables you to write jsx
import AmazonLogo from "./download.png"

// mounting, updating, unmounting
// component will update
//useeffect , props, paassing props, destructing the props, how to pass multiples props 
function Header() {
    const [bgcolor, setbgColor] = useState("lightblue");
    let stylefordiv = { fontFamily: "Aserial", fontSize: "11px", fontWeight: "20px" };
    let headerStyle = {
        height: "8%",
        width: "100%",
        backgroundColor: `${bgcolor}`,
        display: "flex",
        padding: "2px"
    }

    function changeBg() {
        setbgColor((prev) => {
            console.log(prev,"this was previous color")
            return "lightgrey"
        })
    }
    function preiousBg() {
        setbgColor((prev) => {
            console.log(prev,"this was previous color")
            return "lightblue"
        })

    }
    
    return (
        <div className='header' style={headerStyle} onMouseEnter={changeBg} onMouseLeave={preiousBg}>
            <div className='image-box'>
                <img src={AmazonLogo} alt="amazonlogo" />
            </div>
            <div className='location-box'>
                <div className='logo'></div>
                <div className='address'>
                    <div style={ {fontFamily:"Aerial",fontSize:"small",fontWeight:"bold"}}>Hello</div>
                    <div style={stylefordiv }>Select your address</div>
                </div>
            </div>
       </div>
    )
}


export default Header;