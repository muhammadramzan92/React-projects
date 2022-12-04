

import { useState } from 'react';
import Userform from './Userform'

import Login from './Login';
import Errorpage from './Errorpage'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Welcome from './Welcome';

function App() {
  const [store, setStore] = useState(null)
  const getData = (data) => {
    setStore(data);
  }
  const [logindata, setloginData] = useState()
  const setData = (data) => {
    setloginData(data);
  }
 
  return (
    <div>

      
      <Router>
        <Routes>
          <Route exact path='/signup' element={<Userform getDataFromSignUp={getData}  />}></Route>
          <Route path='/' element={<Login  passData={store} getDatalogin={setData}/>}></Route>
          <Route path='/welcome' element={<Welcome passDatalogin={logindata}/>}></Route>
          <Route path='*' element={<Errorpage />}></Route>

        </Routes>

      </Router>


    </div>


  );
}

export default App;


function Error() {
  return <h2>404, Not found</h2>
}
