import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-16 border-t-4 border-black flex justify-center text-white font-semibold bg-[#555]'>
        <div className=' p-5'>
      <div>
        <div>
          <h3>Contact Us : </h3>
          <p><i className="fa-regular fa-envelope"></i> <a href="mailto:vinayakpuranik0707@gmail.com">vinayakpuranik0707@gmail.com</a></p>
        </div><br />
        <div>
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/vinayak_puranik07?igsh=enpoejR3ZG44Z2x0" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram text-[0.8rem] "> Instagram</i>
          </a><br />
          <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin text-[0.8rem] "> Linkedin</i>
          </a>
        </div><br />
      </div>
      <div>
        &copy; {new Date().getFullYear()} StockFlow. All rights reserved.
      </div>
    </div>
    </div>
  )
}

export default Footer