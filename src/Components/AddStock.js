/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import stockContext from '../Context/Stocks/stockContext';

const AddStock = (props) => {

    

    const {showAlert} = props;

    const context = useContext(stockContext);
    const [stocks , getAllStocks ,updateStock, deleteStock, fetchIncome, addstock] = context;

    const [stock,setStock] = useState({product : "", quantity : 0 , price : 0})

    const onChange = (e) => {
        setStock({...stock, [e.target.name]:e.target.value})
    }

    const handleClick = () => {
        const quantity = parseInt(stock.quantity);
        const price = parseInt(stock.price);
    
        if (isNaN(quantity) || isNaN(price)) {
          showAlert('Enter the Quantity or Price in Numeric Form', 'danger');
        } else if (quantity <= 0 || price <= 0) {
          showAlert('Quantity and Price must be greater than zero', 'danger');
        } else {
          addstock(stock.product, quantity, price);
          showAlert("Stock Added Successfully", "success");
          setStock({ product: "", quantity: 0, price: 0 });
        }
      }

  return (
    <>
        <div className=' bg-slate-300 p-3 shadow-2xl rounded-2xl ml-[28rem] mr-[28rem] flex flex-row justify-center'>
        <div className=' ml-5 flex flex-col mt-[2rem]'>
            <p className=' text-4xl font-mono font-bold'>Inflow of your stocks !!</p>
           
            <p className=' mt-4 font-mono font-bold text-2xl'>Product</p>

            <textarea onChange={onChange} id='product' name='product' value={stock.product} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2 ' placeholder='Enter product of your new stock here' rows="2"></textarea>

            <p className=' mt-5 font-mono font-bold text-2xl'>Quantity (Kg)</p>
            
            <textarea onChange={onChange} id='quantity' name='quantity' value={stock.quantity} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="2" placeholder='Enter quantity of your new stock here'></textarea>

            <p className=' mt-5 font-mono font-bold text-2xl'>Price (Rs.)</p>
            
            <textarea onChange={onChange} id='price' name='price' value={stock.price} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="2" type="text" placeholder='Enter price of your new stock here'></textarea>

            <button onClick={handleClick} className='bg-blue-500 border-2 border-black mt-8 ml-[9.5rem] w-[8rem] font-bold  text-white p-2 rounded-md'>Add to Stock</button>
        </div>
      </div>
    </>
  )
}

export default AddStock