
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Signup from './Components/Signup';
import background from "./Logo.png";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Alerts from './Components/Alerts';
import OutFlow from './Components/OutFlow';
import Stock from './Components/Stock';
import StockState from './Context/Stocks/stockState';


function App() {


  document.body.style.background =`url(${background}) fixed center` ;
  document.body.style.height ="100vh" ;
  document.body.style.backgroundSize ="cover" ;
  document.body.style.backgroundRepeat ="no-repeat" ;

  const [alert, setAlert] = useState("");
  const [alertType,setAlertType] = useState("");


  const showAlert = (msg, type) => {
    setAlert(msg);
    setAlertType(type);
  setTimeout(()=>{
        setAlert("");
        setAlertType("");
      }, 3000)
    }

  return(
    <>
    <StockState>


    <Router>

      <Navbar/>
      <Navbar2/>
      <Alerts msg = {alert} type = {alertType} />
      <Routes>
        <Route exact path="/" element={
            <Home showAlert={showAlert} /> 
        }></Route>

        <Route exact path="/outflow" element={
            <OutFlow showAlert={showAlert} />
        }></Route>

        <Route exact path="/stock" element={
            <Stock showAlert={showAlert} />
          }></Route>

        <Route exact path="/about" element={<About/>}></Route>

        <Route exact path="/contact" element={<Contact showAlert={showAlert} />}></Route>

        <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>

        <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>

      </Routes>
      <Footer/>

    </Router>

  </StockState>
    </>
  )
    
}

export default App;
