import React ,{useContext} from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {GlobalContext} from '../context/GlobalState'
import ChosenProduct from '../product/chosenProduct'
function Basket() {
    const {basket } =useContext(GlobalContext)  
    let [totalPrice,setTotalPrice]=useState(0)
    useEffect(()=>{
        let price=0
        basket.map(p=>{
            price+=parseFloat(p.price)*p.number
        })
        console.log(price)
        setTotalPrice(price)
    },[basket])
    return (
        <div className="basket">
            <h3>Shopping bag <span>({basket.length})</span></h3>
            <div className="grid">
                <div className="list">
                    {basket && basket.map(p=>(
                        <ChosenProduct product={p} key={p.id} type="basket"/>
                    ))}
                </div>
                <div className="summary">
                    <h3>Summary</h3>
                    <div className="flex">
                        <p>Subtotal</p>
                        
                        <p>US $ {totalPrice} </p>
                    </div>
                    <div className="flex">
                        <p>Delivery</p>
                        <p>US %4.96</p>
                    </div>
                    <button className="btn">checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Basket