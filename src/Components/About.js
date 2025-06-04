import React from 'react'

const About = () => {
  return (
    <>
      <div className=' font-semibold flex-col justify-center space-y-12 pl-10 pt-10'>
        <h1 className=' font-mono font-extrabold text-4xl'>About StockFlow</h1>

        <div>
            <h2 className=' font-mono font-bold text-2xl'>Welcome to StockFlow</h2>
            <p>At StockFlow, we are committed to providing a seamless and efficient experience for managing and tracking your products. Whether you're a small business owner, a retailer, or an individual managing inventory, StockFlow offers a comprehensive solution to ensure your stock management is accurate, intuitive, and secure.</p>
        </div>

        <div className=' flex-col space-y-2'>
          <h2 className=' font-mono font-bold text-2xl'>What We Offer</h2>

          <h3 className=' font-bold'>1. Product Management</h3>
          <div className=' pl-4'>
          <ul>
            <li>Inventory Tracking: Easily check if a product is in stock, its quantity, and its price.</li>
            <li>New Product Entry: Add new products to your inventory with ease.</li>
            <li>Product Updates: Update product details promptly during purchases.</li>
          </ul>
          </div><br />

          <h3 className=' font-bold'>2. Sales Management</h3>
          <div className=' pl-4'>
          <ul>
            <li>Sales Recording: Automatically record sales transactions, including product quantity and selling price.</li>
            <li>Automatic Updates: Your stock levels are updated in real-time as products are sold.</li>
          </ul><br />
          </div>

          <h3 className=' font-bold'>3. Manual Adjustments</h3>
          <div className=' pl-4'>
          <ul>
            <li>Stock Updates: Manually update stock levels whenever necessary.</li>
            <li>Product Deletion: Remove products from your inventory effortlessly.</li>
          </ul><br />
          </div>

          <h3 className=' font-bold'>4. Financial Tracking</h3>
          <div className=' pl-4'>
          <ul>
            <li>Profit and Loss Tracking: Monitor your profit and loss in real-time, giving you clear insights into your financial performance.</li>
            <li>Income Management: Track total income from sales at a glance.</li>
          </ul>
          </div>
        </div>

        <div>
          <h2 className=' font-mono font-bold text-2xl'>Security</h2>
          <p>At StockFlow, we prioritize your security. We use advanced hashing algorithms and add salt to passwords to ensure that even our database administrators cannot access your password. This robust security measure also protects against unauthorized access and keeps hackers at bay.</p>
        </div>

        <div>
          <h2 className=' font-mono font-bold text-2xl'>Why Choose StockFlow?</h2>
          <ul>
            <li>User-Friendly Interface: Our intuitive design ensures that you can manage your inventory with minimal effort.</li>
            <li>Comprehensive Features: From stock management to sales tracking and financial reporting, all essential tools are at your fingertips.</li>
            <li>Real-Time Updates: Experience the convenience of real-time inventory and financial updates.</li>
            <li>Robust Security: Enjoy peace of mind knowing your data is protected with top-tier security measures.</li>
          </ul>
        </div>

        <div>
          <h2 className=' font-mono font-bold text-2xl'>Our Mission</h2>
          <p>Our mission at StockFlow is to empower users with the tools they need to manage their inventory efficiently, track their financial performance accurately, and safeguard their data securely. We strive to enhance your business operations by providing a reliable and feature-rich inventory management solution.</p>
        </div>

        <div>
          <h2 className=' font-mono font-bold text-2xl'>Contact Us</h2>
          <p>Have questions or need support? Feel free to reach out to us at <a className=' hover:underline text-blue-400' href="mailto:vinayakpuranik0707@gmail.com">vinayakpuranik0707@gmail.com</a> . We are here to help you make the most of your StockFlow experience.</p><br />
          <p>Thank you for choosing StockFlow. We look forward to helping you manage your inventory and achieve your business goals.</p>
        </div>
      </div>
    </>
  )
}

export default About