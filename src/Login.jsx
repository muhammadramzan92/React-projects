import React, {  useState } from 'react'
import Userform from './Userform'



export default function Login(props) {
    
    const [User, setUser] = useState({
        name: "",
        password: ""
    
      });
    
    
    const handleChange = (e) => {
        
        const { name, value } = e.target;
        const new_value = (name === "email") ? value.toLowerCase() : value;
        setUser((prev) => {
          return {
            ...prev, [name]: new_value
    
          }
        })
      };
    //   console.log(props.store.length)
      console.log(props.store)
    return (
        <div>
            <>
                <div className="container">
                    <form action="" id="form1" className="form">
                        <h2></h2>
                        <div className="form-control">
                            <label>UserName</label>
                            <input type="text" id="username" name='name' value={User.name} onChange={handleChange} placeholder="Enter UserName" />
                            <small>Error massage</small>
                        </div>
                       
                        <div className="form-control">
                            <label>Password</label>
                            <input type="password" id="password" name='email' value={User.password} onChange={handleChange} placeholder="Enter Password" />
                            <small>Error massage</small>
                        </div>
                      
                        <button>Login</button>


                    </form>


                </div>


            </>
        </div>
    )
}
