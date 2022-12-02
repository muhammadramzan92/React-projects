

import { useState } from 'react';
import Userform from './Userform'

import Login from './Login';
import { BrowserRouter as Router, Route, Routes ,Link} from "react-router-dom";



function App() {
  const [store, setStore] = useState(null)
  
//  const [userdata,setuserdata] = useState();
//   let store = (data)=>{
//     setuserdata({
//       data:data
//     })
//   }
  // userdata.data
  return (
<div>
{/* <Router>

<ul className="App-header">  
              <li>  
                <Link to="/Login">Login</Link>  
              </li>  
              </ul>  
            
           <Routes>
                 <Route exact path='/Signup' element={<Userform data={setStore}/>}></Route>
                 <Route exact path='/Login' element={<Login store={store}/>}></Route>
               
          </Routes>
       
       </Router> */}

<Userform data={setStore}/>
<Login store={store}/> 
 {/* userdata={userdata} */}

</div>
   
  
  );
}

export default App;
