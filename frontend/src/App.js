import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Templates from './components/Templates';
import View from './components/View';
import Temp2 from './components/Temp2';
import Temp3 from './components/Temp3';
import Registration from './components/Registration';
import Login from './components/Login';



function App() {

 
const [firstname, setfirstname] = useState('')
const [email, setemail] = useState('')
const [phone, setphone] = useState('')


  const userData = (firstname, email, phone) => {
    setfirstname(firstname)
    setemail(email)
    setphone(phone)
  }

  console.log(phone);
 
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Registration userData={userData}/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/home" element={<Home firstname={firstname} email={email} phone={phone} />} />
        <Route exact path="/templates" element={<Templates/>}/>

        <Route exact path="/view" element={<View />} /> 
        <Route exact path="/temp2" element={<Temp2/>}/>

        <Route exact path="/temp3" element={<Temp3/>} />

      </Routes>
    </>
  );
}

export default App;
