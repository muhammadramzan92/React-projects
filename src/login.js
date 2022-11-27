import React from 'react'


export default function login() {
    return (
        <div>
            <>
                <div className="container">
                    <form action="" id="form" className="form">
                        <h2></h2>
                        <div className="form-control">
                            <label for="userName">UserName</label>
                            <input type="text" id="username" placeholder="Enter UserName" />
                            <small>Error massage</small>
                        </div>
                       
                        <div className="form-control">
                            <label for="psassword">Password</label>
                            <input type="password" id="password" placeholder="Enter Password" />
                            <small>Error massage</small>
                        </div>
                      
                        <button>Login</button>


                    </form>


                </div>


            </>
        </div>
    )
}
