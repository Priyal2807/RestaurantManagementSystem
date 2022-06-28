import React,{ Component } from 'react'
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Content from './Content.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Table from './Table.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  
        const user = localStorage.getItem("token");
      
        return (
            <BrowserRouter>
                    <Header /> 
                <div className="App">
                    <Routes>
                        {user && <Route path="/table" exact element={<Table />} />}
                        <Route exact path="/" element={<Content />} >
                           
                        </Route>
                        <Route path="/login" element={<Login />}>
                            
                        </Route>
                        <Route path="/signup" element={<Signup />}>

                        </Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        )
   

}
export default App;
