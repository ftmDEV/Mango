import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
function ChosenProduct({product,type}) {
    const {removeFromBasket,removeFromWishlist,handleAmount} =useContext(GlobalContext)
    const handleClick=(e)=>{
        if(e.target.outerText==="+")
            handleAmount(product.id,"increase")
        if(e.target.outerText==="-")
            handleAmount(product.id,"decrease")
    }

    return (
        <div>
        {type==="basket" ? (
            <div className="product flex" key={product.id}>
                <img alt={product.name} src={product.image}/>
                <div>
                <p>{product.name}</p>
                    <div className="flex">
                        <button 
                            className="operator" 
                            onClick={handleClick}
                        >-</button>
                        <span>{product.number}</span>
                        <button className="operator" onClick={handleClick}>+</button>
                    </div>
                    <button className="btn weak" onClick={()=>removeFromBasket(product)}>Remove</button>
                </div>
                
            </div>
          ) :
            <div className="wishedproduct flex" key={product.id}>
                <img alt={product.name} src={product.image}/>
                <p>{product.name}</p>
                <button className="btn weak" onClick={()=>removeFromWishlist(product)}>Remove From Wishlist</button>
            </div>
        
        }</div>
    )
}

export default ChosenProduct