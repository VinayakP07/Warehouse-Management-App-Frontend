/* eslint-disable no-unused-vars */
import React,{ useContext } from 'react'
import stockContext from '../Context/Stocks/stockContext';

const StockItem = (props) => {

    const context = useContext(stockContext);
    const [stocks , getAllStocks, updateStock, deleteStock, fetchIncome, addstock, reduceStock] = context;
    const {stock, update, showAlert} = props; 

    const handleClick = () =>{
        deleteStock(stock._id);
        showAlert("Stock Deleted!!","danger");
        }

  return (
    <>
        <div className='bg-slate-300 font-semibold shadow-2xl mt-10 border-black border-2 p-3 w-[90%] rounded-lg items-center flex justify-around space-y-1'>
        <div>
            <p><b>Product :</b> {stock.product}</p>
        </div>
        <div>
            <p><b>Quantity :</b> {stock.quantity}</p>
        </div>
        <div>
            <p className={`${stock.price<0?" text-red-600":" text-green-600"} w-[17rem]`}><b>Profit / Loss :</b> {stock.price}</p>
        </div>
        <div className=' flex space-x-5'>
            <i className=" cursor-pointer fa-solid fa-trash" onClick={handleClick}></i>
            <i className="fa-solid cursor-pointer fa-pen-to-square" onClick={()=>{update(stock)}}></i>
        </div>
    </div>

    </>
  )
}

export default StockItem