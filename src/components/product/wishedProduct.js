import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import ChosenProduct from './chosenProduct'

function WishedProduct() {
    const {wishList}=useContext(GlobalContext)
    console.log(wishList)
    return (
        <div>
            {wishList.length!==0  ? 
                (<div  className="wishlist">
                    {wishList.map((p)=>
                        <ChosenProduct product={p} key={p.id}/>            
                    )}
                </div>
            ):
                <h1>Wish List Is Empty!</h1>
            }
            
        </div>
    )
}
export default WishedProduct