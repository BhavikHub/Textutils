import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import Alert from './Components/Alert';
import React, {useState} from 'react'
import Aboutus from './Components/Aboutus';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
  }
  
  const switchMode =()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "rgb(16 62 107)";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled","success")
    }
      else {
        setMode("light")
        document.body.style.backgroundColor = "white"; 
      document.body.style.color = "black";
      showAlert("Light mode is enabled","success")
      }
      }

      
      setTimeout(() => {
        setAlert(null)
      }, 2000);
      
  return (
    <>
    <Router>
      <Navbar titles="TextUtils" home="Home" mode={mode} toggleMode={switchMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          {/* ✅ Corrected Route syntax by using `element` prop */}
          <Route path="/about" element={<Aboutus mode={mode} />} />
          <Route path="/" element={<TextBox showAlert={showAlert} mode={mode} />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
