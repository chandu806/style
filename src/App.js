import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
import {Login} from "./Components/Login"
import {Signin} from "./Components/Signin"
import {Signup} from "./Components/Signup"
import {Home} from "./Components/Home"
function App() {
  return (
    <div className="App">
     <Navbar />
       <Routes>
         <Route path='/home' element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signin" element={<Signin />} />
         <Route path="/signup" element={<Signup />} />
       </Routes>
    </div>
  );
}

export default App;
