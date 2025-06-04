/* eslint-disable no-unused-vars */
import StockContext from './stockContext';
import React, { useState } from 'react'


const StockState = (props) => {

    const host = "http://localhost:5000"

    let initialStock = [];
    const [stocks, setStocks] = useState(initialStock);

    // Fetching Stocks
    const getAllStocks = async () => {

        // API CALL
        const response = await fetch(`${host}/stock/fetchStock`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
        });
        const json = await response.json();
        setStocks(json);
      }

    // Updating a stock
            const updateStock = async (id, product, quantity, price) => {
                // API CALL
                const response = await fetch(`${host}/stock/updateStock/${id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    "auth_token" : localStorage.getItem("token"),
                  },
                  body: JSON.stringify({product, quantity, price}),
                });
                const json = response.json();
        
                let newStock = JSON.parse(JSON.stringify(stocks))
                // Logic
                  for (let i = 0 ; i < newStock.length ; i++){
                    let element = newStock[i];
                    if(element._id === id ){
                      newStock[i].product = product;
                      newStock[i].quantity = quantity;
                      newStock[i].price = price;
                      break;
                    }
                }
                setStocks(newStock); 
              }


    // Deleteing a stock
      const deleteStock = async (id) => {

        // API CALL 
        const response = await fetch(`${host}/stock/deleteStock/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
        });


        // Logic
        const newStock = stocks.filter((n) => {
           return n._id !== id 
          });
        setStocks(newStock);

      }



      // Fetching Income of the user
      const fetchIncome = async () => {

        // API CALL 
        const response = await fetch(`${host}/stock/fetchIncome`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
        });
        const json = await response.json();
        localStorage.setItem('income',json.income);
      }


      // Adding a stock 
      const addstock = async(product , quantity, price) => {

        // API CALL
        const response = await fetch(`${host}/stock/addStock`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
          body: JSON.stringify({product, quantity, price}),
        });
        const json = await response.json();

        // Logic
        setStocks(stocks.concat(json));
      }

      // Reducing a stock 
        const reduceStock = async(product , quantity, price) => {

        // API CALL
        const response = await fetch(`${host}/stock/reduceStock`, {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          "auth_token" : localStorage.getItem("token"),
        },
          body: JSON.stringify({product, quantity, price}),
       });
          const json = await response.json();
          console.log(json.success);
        localStorage.setItem('suc',json.success);
      }


  return (
    <>
        <StockContext.Provider value={[stocks , getAllStocks, updateStock, deleteStock, fetchIncome, addstock, reduceStock]}>
            {props.children}
        </StockContext.Provider>
    </>
  )
}

export default StockState;