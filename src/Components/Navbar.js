import React, { useEffect } from 'react'
import {Link, useLocation} from "react-router-dom";



const Navbar = () => {

  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/home") {
      document.title = "StockFlow - Effortless Inventory & Profit Management";
    } else if (location.pathname === "/about") {
      document.title = "StockFlow - About Us";
    } else if (location.pathname === "/contact") {
      document.title = "StockFlow - Contact Us";
    } else {
      document.title = "StockFlow - Effortless Inventory & Profit Management";
    }
  }, [location]);

  const handleClick = () =>{
    localStorage.removeItem('token');
  }

  return (
    <>
    <nav className="sticky top-0 flex justify-between items-center pl-6 pr-6 bg-[#333] text-white">
      <div className="text-[1.5rem] font-bold">
        <Link to="/">StockFlow</Link>
      </div>
      <ul className=" list-none flex m-0 p-4 text-[1rem] space-x-[13rem] font-semibold">
        <li><Link className= {` ${location.pathname==="/"?" text-red-400":""} ${location.pathname==="/outflow"?" text-red-400":""} ${location.pathname==="/stock"?" text-red-400":""} ${location.pathname==="/profitloss"?" text-red-400":""} hover:underline hover:text-red-400`}  to="/">Home</Link></li>
        <li><Link className={` ${location.pathname==="/about"?" text-red-400":""} hover:underline hover:text-red-400`} to="/about">About</Link></li>
        <li><Link className={` ${location.pathname==="/contact"?" text-red-400":""} hover:underline hover:text-red-400`} to="/contact">Contact Us</Link></li>
      </ul>
      <div>

        {!(localStorage.getItem('token')) && <div className=" space-x-5">
        <Link to="/login" ><button className=" bg-[#FFD700] text-black p-1 rounded-lg items-center font-semibold hover:border-black hover:border-2 ">LogIn</button></Link>
        <Link to="/signup" ><button className=" bg-[#FFD700] text-black p-1 rounded-lg items-center font-semibold hover:border-black hover:border-2">SignUp</button></Link>
      </div>}
      { localStorage.getItem('token') &&   <div>
      <Link to="/login" ><button onClick={handleClick} className=" bg-[#FFD700] text-black p-1 rounded-lg items-center font-semibold hover:border-black hover:border-2 ">LogOut</button></Link>
        </div>}

      </div>
    </nav>

    </>
  )
}

export default Navbar