import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        role: ""
    })
    const [error, setError] = useState()
    const handlechange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/login"
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            if(data.role === "Master" || data.role === "Cashier")
                window.location = "/table"
            else
                window.location = "/signup"
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
                
            }
            
        }
    }
    return (
        <div className="myLogin">
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="imgcontainer">
                    <img src={require("./user.jpg")} className="avatar" />
                </div>
                <div className="container">
                 
                    <label><b>Enter Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" value={data.email} onChange={handlechange} required />
                    <label><b>Enter Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={data.password} onChange={handlechange} required />
                    <label>Choose a role:</label>
                    <select value={data.role} name="role" onChange={handlechange}>
                        <option value="Master">Master</option>
                        <option value="Cashier">Cashier</option>
                        <option value="Waiter">Waiter</option>
                        
                    </select>
                    {error && <div>{error}</div>}
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )


}

export default Login;