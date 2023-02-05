import React, { useState} from 'react';
import "./styles/header.css"
// it allows you creacte components.
// it actually enables you to write jsx
import AmazonLogo from "./download.png"
import Subheader from "./Subheader"
import Username from './Username';
import Login from './Login';
// mounting, updating, unmounting
// component will update
//useeffect , props, paassing props, destructing the props, how to pass multiples props 
function Header() {
    // console.log(props, "this is pasassed on props");
    // console.log(appname)
    // const [bgcolor, setbgColor] = useState("lightblue");
    // let stylefordiv = { fontFamily: "Aserial", fontSize: "11px", fontWeight: "20px" };
    let headerStyle = {
        height: "8%",
        width: "100%",
        backgroundColor:"grey",
        display: "flex",
        padding: "2px"
    }

  // this state will helps us in hidding the login box
   const [showLogin,setShowLogin] =useState(false)
    const [username, setUsername] = useState("");


 console.log("header is rendering")





    // function changeBg() {
    //     setbgColor((prev) => {
    //         console.log(prev,"this was previous color")
    //         return "lightgrey"
    //     })
    // }
    // function preiousBg() {
    //     setbgColor((prev) => {
    //         console.log(prev,"this was previous color")
    //         return "lightblue"
    //     })

    // }


    function handleClick() {
        setShowLogin(true)
    }
    
    return (
    //     <div className='header' style={headerStyle} onMouseEnter={changeBg} onMouseLeave={preiousBg}>
    //         <div className='image-box'>
    //             <img src={AmazonLogo} alt="amazonlogo" />
    //         </div>
    //         <div className='location-box'>
    //             <div className='logo'></div>
    //             <div className='address'>
    //                 <div style={ {fontFamily:"Aerial",fontSize:"small",fontWeight:"bold"}}>Hello</div>
    //                 <div style={stylefordiv }>Select your address</div>
    //             </div>
    //         </div>
    //         {/* <Subheader/> */}
    //    </div>
        <>
            <div style={headerStyle}>
                <Username username={username} />
                <button onClick={handleClick}>Login</button>
            </div>
            {
                // showLogin && <Login /> 
                showLogin ? <Login setUsername={setUsername} /> :<div>please click on login</div>
            }
        </>
    )
}


export default Header;