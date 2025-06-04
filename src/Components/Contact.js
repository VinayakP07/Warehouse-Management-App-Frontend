import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
      <div className=' font-semibold space-y-8 pl-10 pt-10 '>
        <h1 className='font-mono font-extrabold text-4xl'>Contact Us</h1>

        <div>
          <p className=' w-[55rem]'>We at StockFlow are dedicated to providing excellent support and service to our users. Whether you have questions, need assistance, or want to give feedback, we're here to help.</p>
        </div>

        <div>
          <h2 className=' font-mono font-bold text-2xl'>Get in Touch</h2>
          <p>If you have any queries, concerns, or need technical support, please do not hesitate to contact us through any of the following methods:</p>
        </div>

        <div>
        <h3 className=' font-bold'>Email:</h3>
        <div className=' pl-4'>
          <undefined>
            <li>General Enquiries: <a href="mailto:info@stockflow.com">info@stockflow.com</a></li>
            <li>Support: <a href="mailto:support@stockflow.com">support@stockflow.com</a></li>
          </undefined>
        </div>
        </div>

        <div>
          <h3 className=' font-bold'>Phone:</h3>
          <div className=' pl-4'>
          <undefined>
            <li>Customer Support: +1 (123) 456-7890</li>
            <li>Technical Assistance: +1 (123) 456-7891</li>
          </undefined>
          </div>
        </div>

        <div>
          <h3 className=' font-bold'>Mailing Address:</h3>
          <p>
          StockFlow Inc.<br/>
          123 Inventory Lane<br/>
          Warehouse Ujjain<br/>
          Madhya Pradesh, 456010<br/>
          India
          </p>
        </div>

        <div>
          <h3 className=' font-bold'>Follow Us</h3>
          <a href="https://www.instagram.com/vinayak_puranik07?igsh=enpoejR3ZG44Z2x0" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram text-[0.9rem] "> Instagram</i>
          </a><br />
          <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin text-[0.9rem] "> Linkedin</i>
          </a>
        </div>

        <div>
          <h3 className=' font-bold'>Contact Form</h3>
          <ContactForm/>
        </div>

      </div>
    </>
  )
}

export default Contact