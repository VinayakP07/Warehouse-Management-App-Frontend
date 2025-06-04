/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AddStock from './AddStock';
// import stockContext from '../Context/Stocks/stockContext';

const Home = (props) => {

  const {showAlert} = props;

  const navigate = useNavigate();



  useEffect(()=>{
    if(localStorage.getItem('token')){
    }
    else{
      navigate("/login");
    }
  },[])

  // const add = (pro, quan, price) =>{
  //   addStock(pro,quan,price);
  // }


  return (
    <>
       <AddStock showAlert={showAlert}/>
    </>
  )
}

export default Home