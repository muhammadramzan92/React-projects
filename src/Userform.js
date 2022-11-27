import React, { useState } from "react";

import './App.css'

 function Userform() {

  const [fullName, setfullName] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
  });
  const [records, setRecords] = useState([])  

  const onSubmits = (e) => {
    e.preventDefault()
 
   
  setRecords([...records]);
    const checkEmailDuplicate = records.filter((emailDup) => {
            return emailDup.userEmail === fullName.userEmail;
          });
          const newData = (data) => [...data,fullName];
          checkEmailDuplicate.length > 0
            ? alert("email already exist")
            : setRecords(newData);
    setfullName({ userName: "", userAge: "",userEmail: ""});
    console.log(newData)
  }
  
  const inputEvent = (event) => {
  
    const {name, value  } = event.target;
   
    setfullName((prevalue) => {
      if (name === "userName") {
        return {
          userName: value,
          userAge: prevalue.userAge,
          userEmail: prevalue.userEmail,
        };
      }
      else if (name === "userAge") {
        return {
          userName: prevalue.userName,
          userAge: value,
          userEmail: prevalue.userEmail,

        }
      }
      else if (name === "userEmail") {
        const new_value = (name === "userEmail") ? value.toLowerCase() : value;
        return {
          userName: prevalue.userName,
          userAge: prevalue.userAge,
          userEmail: value,
          ...prevalue, [name]: new_value,
          
        }
      }

    });
  }
  return (
    <>
    <div className="user">
      <form onSubmit={onSubmits}>
      
        <label>Enter your name:
          <input
            type="text"
            name='userName'
            value={fullName.userName}
            onChange={inputEvent}

          />
        </label>
        <label> Age:
          <input
            type="number"
            placeholder=""
            name='userAge'
            value={fullName.userAge}
            onChange={inputEvent}

          />
        </label>
        <label> Email:
          <input
            type="Email"
            name='userEmail'
            value={fullName.userEmail}
            onChange={inputEvent}

          />
        </label>
        <input type="submit" value="submit" />



      </form>
      </div>
      

      <div className="table">
      <table>
        <thead>
        <tr className="head">
          <th >Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
          {
            records.map((data,index) => {
              // const {id, userName, userAge, userEmail } = data;
              return (
                
                 
      
        <tr className="row-data" key={index}>
          
         <td>{data.userName}</td> 
          <td>{data.userAge}</td>
          <td>{data.userEmail}</td>
        </tr>
       
     
              )
            })
          }

         
          </thead>
           </table>
        </div>
   
        </>
  )


};

export default Userform
