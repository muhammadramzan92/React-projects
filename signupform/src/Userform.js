// import React, { useState } from "react";



 function Userform() {

  // const [fullName, setfullName] = useState({
  //   userName: "",
  //   userAge: "",
  //   userEmail: "",
  // });
  // const [records, setRecords] = useState([])  

  // const onSubmits = (e) => {
  //   e.preventDefault()
 
   
  // setRecords([...records]);
  //   const checkEmailDuplicate = records.filter((emailDup) => {
  //           return emailDup.userEmail === fullName.userEmail;
  //         });
  //         const newData = (data) => [...data,fullName];
  //         checkEmailDuplicate.length > 0
  //           ? alert("email already exist")
  //           : setRecords(newData);
  //   setfullName({ userName: "", userAge: "",userEmail: ""});
  //   console.log(newData)
  // }
  
  // const inputEvent = (event) => {
  
  //   const {name, value  } = event.target;
   
  //   setfullName((prevalue) => {
  //     if (name === "userName") {
  //       return {
  //         userName: value,
  //         userAge: prevalue.userAge,
  //         userEmail: prevalue.userEmail,
  //       };
  //     }
  //     else if (name === "userAge") {
  //       return {
  //         userName: prevalue.userName,
  //         userAge: value,
  //         userEmail: prevalue.userEmail,

  //       }
  //     }
  //     else if (name === "userEmail") {
  //       const new_value = (name === "userEmail") ? value.toLowerCase() : value;
  //       return {
  //         userName: prevalue.userName,
  //         userAge: prevalue.userAge,
  //         userEmail: value,
  //         ...prevalue, [name]: new_value,
          
  //       }
  //     }

  //   });
  // }
  return (
    <>
    <div className="container">
         <form action="" id="form" className="form">
            <h2></h2>
            <div className="form-control">
                <label for="userName">UserName</label>
                <input type="text" id="username" placeholder="Enter UserName"/>
                <small>Error massage</small>
            </div>
            <div className="form-control">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Enter Email"/>
                <small>Error massage</small>
            </div>
            <div className="form-control">
                <label for="psassword">Password</label>
                <input type="password" id="password" placeholder="Enter Password"/>
                <small>Error massage</small>
            </div>
            <div className="form-control">
                <label for="psassword">Conform Password</label>
                <input type="password" id="password2" placeholder="Enter Password"/>
                <small>Error massage</small>
            </div>
            <button>SignUp</button>
        
           
         </form>

        
    </div>

   
        </>
  )


};

export default Userform
