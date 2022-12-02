import React, { useState } from "react";

import './App.css'

 function Userform(props) {
  const [userRegistration, seUserRegistration] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    cpassword: ""

  });
  const [records, setRecords] = useState([])
  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    const new_value = (name === "email") ? value.toLowerCase() : value;
    seUserRegistration((prev) => {
      return {
        ...prev, [name]: new_value

      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRecord = { ...userRegistration, id: new Date().getTime().toString }
    // console.log(newRecord)
    setRecords([...records, newRecord]);
    seUserRegistration({ name: "", email: "" ,password: "",cpassword: ""});
    //removal
    // let store(newRecord);
     props.data(newRecord)


  }

 
  return (
    <>
    <div className="container">
    <h2> {}</h2>
         <form action="" id="form" onSubmit={handleSubmit} className="form">
           
            <div className="form-control">
                <label>UserName</label>
                <input type="text" id="username" name='name' value={userRegistration.name} onChange={handleChange} placeholder="Enter UserName"/>
                <small>Error massage</small>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input type="text" id="email" name='email' value={userRegistration.email} onChange={handleChange} placeholder="Enter Email"/>
                <small>Error massage</small>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type="password" id="password" name='password' value={userRegistration.password} onChange={handleChange} placeholder="Enter Password"/>
                <small>Error massage</small>
            </div>
            <div className="form-control">
                <label>Conform Password</label>
                <input type="password" id="password2" name='cpassword' value={userRegistration.cpassword} onChange={handleChange} placeholder="Enter Password"/>
                <small>Error massage</small>
            </div>
            <button>SignUp</button>
        
           
         </form>
         {/* <div className="allrecodrs">
          {
            records.map((curElem) => {
              const {id, name,email,password,cpassword } = curElem;
              return (
                <ol className="showallrecords" key={id}>
                  <li>
                    <span>{name}</span>
                    <span>{email}</span>
                    <span>{password}</span>
                    <span>{cpassword}</span>
                  </li>
                </ol>
              )
            })
          }
        </div> */}

        
    </div>

   
        </>
  )
};

export default Userform
