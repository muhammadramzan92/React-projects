import React, {  useState } from 'react'
import { NavLink, useNavigate} from "react-router-dom";

export default function Login(props) {
    
    const [logUser, setlogUser] = useState({
      username: "",
      userpassword: ""
      });
   
     const navigateto= useNavigate(); 
    const handleChange = (e) => {
    
      const { name, value } = e.target;
      const new_value = (name === "email") ? value.toLowerCase() : value;
      setlogUser((prev) => {
        return {
          ...prev, [name]: new_value
  
        }
      })
   
    }
   
      const handleSubmit1 = (e) => {
       
        e.preventDefault()
       

    
    if ((props.passData.name===logUser.username) && (props.passData.password===logUser.userpassword) ){
       
          props.getDatalogin(logUser==null?'':logUser);
          navigateto('/Welcome')
         }else
         {
          // navigateto('/Errorpage')
          alert('Please input correct userName and Password')
         
        }
    
    
      }
    return (
        <div>
            <>
                <div className="container">
                    <form action="" id="form1" className="form" onSubmit={handleSubmit1}>
                     
                        <div className="form-control">
                            <label>UserName</label>
                            <input type="text" id="username1" name='username' value={logUser.name} onChange={handleChange} placeholder="Enter UserName" />
                            <small>Error massage</small>
                        </div>
                       
                        <div className="form-control">
                            <label>Password</label>
                            <input type="password" id="password1" name='userpassword' value={logUser.password} onChange={handleChange} placeholder="Enter Password" />
                            <small>Error massage</small>
                        </div>
                        <button type='submit'>Login</button>
                    </form>

                    <div className="goto_singup"><NavLink to="signup"><button>got to Sign-Up</button></NavLink>  </div>
                </div>


            </>
        </div>
    )
}
