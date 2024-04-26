import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/Homepage' element = {<Homepage/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Register' element = {<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
