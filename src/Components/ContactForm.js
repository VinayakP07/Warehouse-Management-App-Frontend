import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=' space-y-10'>
        <input className=' p-1 text-center rounded-xl w-[30rem]'
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        /> <br />
        <input className=' p-1 text-center rounded-xl w-[30rem]'
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        /> <br />
        <textarea className=' p-1 text-center rounded-xl w-[30rem]'
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          rows="5" 
          required 
        /> <br />
        <button className=' bg-blue-500 p-2 rounded-xl font-bold' type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;