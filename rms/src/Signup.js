import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'
const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role:""
    })
    const [error, setError] = useState()
    const navigate = useNavigate();
    const handlechange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/signup"
            const { data: res } = await axios.post(url, data);
            alert("User Registered Successfully, Kindly Login")
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }
        return (
            <div className="myLogin">
                <form action="" method="post" onSubmit={handleSubmit} className="signUpForm">
                    <div className="container"><h6> SIGN UP HERE </h6></div>
                    <div className="container">
                        <label><b>Enter FirstName</b></label>
                        <input type="text" placeholder="Enter FirstName" name="firstName" value={data.firstName} onChange={handlechange} required />
                        <label><b>Enter LastName</b></label>
                        <input type="text" placeholder="Enter Last Name" name="lastName" value={data.lastName}  onChange={handlechange}required />
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
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        )
        
    
}

export default Signup;