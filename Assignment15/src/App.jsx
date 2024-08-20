import { Route, Routes } from "react-router-dom";  
import Home from "./Screens/Home";      
import CreateUser from "./Screens/CreateUser";  
import EditUser from "./Screens/EditUser";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
   
const App = () => {  
  return (          
    <Routes>
      <Route path="/" element={<Signup/>}></Route>       
      <Route path="/home" element={<Home />} />   
      <Route path="/login" element={<Login/>} />   

      <Route path="createUser" element={<CreateUser />} />  
      <Route path="editUser/:id" element={<EditUser/>}></Route> 
    </Routes>       
  );
};

export default App;