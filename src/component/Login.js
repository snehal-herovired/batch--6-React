import React, { useState,useEffect } from 'react';

const Login = () => {
    const [data, setData] = useState({})
    

    function handleChange(e) {
        console.log(e.target.name, e.target.value)
        // setData({
        //     ...data
        //     [e.target.name]: e.target.value
        // })
        setData((prev) => (
            {
                ...prev,
                // in order to write a key it should be written in []
                [e.target.name]: e.target.value
            }
        ))
    }
   
    useEffect(() => {
        let fetchfun = async () => {
            let response = await fetch("https://dummyjson.com/products");
            let data = await response.json();
            console.log(data)
        }
        fetchfun()
      },[data])






    // spread operator is used to create a deep copy of arr, object and also add your own data
    // let arr = [1, 2, 3]
    // let arr2 = [...arr, 4, 5]
    // console.log(arr, arr2);

    // let obj = {
    //     name:"sample"
    // }

    // obj.age = 12;
    // obj["name of student"]="snehal"
    // console.log(obj)

    function handleClick() {
        console.log(data)
        // localhost:5000/user/logindata ,data
       
   }

    /// user credenetial =Mongodb schema
    //    username :String,password :String

    
   
    return (
        <div>
            <input type="text" placeholder='username' onChange={handleChange} name="username"/>
            <input type="text" placeholder='email' onChange={handleChange} name="email"/>
            <input type="text" placeholder='password' onChange={handleChange} name="password"/>
            <button onClick={handleClick}>submit</button>
        </div>
    );
}

export default Login;
