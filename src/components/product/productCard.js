import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
function ProductCard({product ,category }) {
    const {basket,wishList,addToBasket ,addToWishlist} =useContext(GlobalContext)
    let chosedProduct=basket.find(p=>p.id===product.id)
    let wishedProduct=wishList.find(p=>p.id===product.id)
    const disableBtn=chosedProduct ? true :false
    const disableHeart=wishedProduct ?true :false
    


    return (
        <>
            {product.type ===category && (
                <div key={product.id} className="card" >
                    <img alt={product.name} src={product.image}  />
                    <button className="btn "
                        disabled={disableBtn}
                        onClick={() =>addToBasket(product)}
                    >Add To Basket</button>
                    <div className="about">
                        <button className="like"
                            disabled={disableHeart}
                            onClick={() =>addToWishlist(product)}
                        >
                            {wishedProduct ? <img alt="unLike" src="img/heart.png"/>:<img alt="like" src="img/heart.svg"/>}
                            
                        </button> 
                        <h3>{product.name}</h3>
                        <p>US ${product.price}</p>
                            {product.color.length>=2 && (
                                <div className="colors flex">
                                    {product.color.map((color)=>(
                                        <div className="color" key={color}>{color}</div>
                                    ))}
                                </div>
                            )}
                    </div>
                </div>
            )}
            {category==='all' && (
                <div key={product.id} className="card">
                    <img alt={product.name} src={product.image} />
                    <button className="btn "
                        disabled={disableBtn}
                        onClick={() =>addToBasket(product)}
                    >Add To Basket</button>
                    <div className="about">
                        <button className="like"
                            disabled={disableHeart}
                            onClick={() =>addToWishlist(product)}
                        >
                            {wishedProduct ? <img alt="unLike" src="img/heart.png"/>:<img alt="like" src="img/heart.svg"/>}
                            
                        </button>
                        <h3>{product.name}</h3>
                        <p>US ${product.price}</p>
                            {product.color.length>=1 && (
                                <div className="colors flex">
                                    {product.color.map((color)=>(
                                        <div className="color" style={{backgroundColor:`${color}`}} key={color}></div>
                                    ))}
                                </div>
                            )}
                    </div>
                </div>
            )}
        </>
    )
}
export default ProductCard