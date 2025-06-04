/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import stockContext from '../Context/Stocks/stockContext';
import StockItem from './StockItem';

const Stock = (props) => {

  const context = useContext(stockContext);
  const [stocks , getAllStocks ,updateStock, deleteStock, fetchIncome] = context;
  const {showAlert} = props;

  const [estock,esetStock] = useState({eid : "",eproduct : "", equantity : 0 , eprice : 0})

  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      getAllStocks();
    }
    else{
      navigate("/login");
    }
  },[])


  const update = (currentStock) => {
    ref.current.click();
    esetStock({eid : currentStock._id,eproduct : currentStock.product, equantity : currentStock.quantity , eprice : currentStock.price});
  };
  const ref = useRef(null);
  const refClose = useRef(null);
  
  
  const handleClick = () => {
    updateStock(estock.eid , estock.eproduct, estock.equantity, estock.eprice);
    showAlert("Stock Updated Successfully!!","success");
      refClose.current.click();
  }

  const onChange = (e) => {
      esetStock({...estock, [e.target.name]:e.target.value})
  }


  fetchIncome();
  const income = localStorage.getItem('income');


  return (
    <div>

      <button type="button" ref={ref} className=" collapse btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Stock</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                {/* Modal Body */}
                <div className=' flex flex-row justify-center'>
                <div className=' ml-5 flex flex-col mt-[2rem]'>
                <p className=' text-3xl font-mono font-bold'>Update Your Stock Here !!</p>
           
                <p className=' mt-5 ml-[11.5rem] font-mono font-bold text-2xl'>Product</p>

                <textarea onChange={onChange} id='eproduct' name='eproduct' value={estock.eproduct} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="2"></textarea>

                <p className=' mt-5 font-mono ml-[9.5rem] font-bold text-2xl'>Quantity</p>
            
                <textarea onChange={onChange} id='equantity' name='equantity' value={estock.equantity} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="5"></textarea>

                <p className=' mt-5 font-mono ml-[12rem] font-bold text-2xl'>Price</p>
            
                <textarea onChange={onChange} id='eprice' name='eprice' value={estock.eprice} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="2" type="text"></textarea>
                </div>
                </div>

              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={handleClick} type="button" className="btn btn-primary">Update Stock</button>
              </div>
            </div>
          </div>
        </div>

        <div className=' flex flex-row ml-12' >
          <p className=' text-6xl font-mono font-extrabold'>Net Profit / Loss : </p>
      </div>
      <div className=' flex flex-row ml-12' >
          <p className={` ${income<0?" text-red-600":" text-green-600"} bg-slate-300 font-semibold shadow-2xl mt-10 border-black border-2 p-2 text-5xl font-mono rounded-xl `}>Rs. {income} </p>
      </div>

        <div className=' flex flex-row ml-12 mt-40' >
          <p className=' text-6xl font-mono font-extrabold'>Your Stocks!!</p>
      </div>
      <div className=' flex justify-center mt-3 font-bold text-xl'>
        <p>{stocks.length === 0 && 'Stock is Empty'}</p>
      </div>

      <div className='flex flex-wrap justify-center'>
        {stocks.map((stock)=>{
          return <StockItem key={stock._id} showAlert={showAlert} update={update} stock = {stock}/> ;
        })}
      </div>

    </div>
  )
}

export default Stock