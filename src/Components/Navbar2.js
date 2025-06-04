import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar2 = () => {

  let location = useLocation();

  return (
    <>
    <div className=' sticky top-[4.5rem] flex bg-[#555] justify-around items-center p-3 text-white font-semibold'>
      <Link className= {` ${location.pathname==="/"?" text-red-400":""} hover:underline hover:text-red-400`} to="/">In-Flow</Link>
      <Link className= {` ${location.pathname==="/outflow"?" text-red-400":""} hover:underline hover:text-red-400`} to="/outflow">Out-Flow</Link>
      <Link className= {` ${location.pathname==="/stock"?" text-red-400":""} hover:underline hover:text-red-400`} to="/stock">Stock</Link>
    </div>
    </>
  )
}

export default Navbar2