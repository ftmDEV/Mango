import axios from 'axios'
import React ,{createContext,useReducer,useEffect, useState} from 'react'
import AppReducer from './AppReducer'

//initial State
const initialState={
    basket:localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [],
    wishList:localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) :[], 
}
//create Context
export const GlobalContext=createContext(initialState)

//Provider Copmponents
export const GlobalProvider=props=>{  
    const [state,dispatch]=useReducer(AppReducer,initialState)   
    const [products,setProducts]=useState([]) 
    
    useEffect(()=>{
        axios
            .get(`http://localhost:3000/bags`)
            .then(res=>setProducts(res.data))
            .catch((err)=>console.log(err))
    },[])
    useEffect(() => {
        localStorage.setItem('wishlist',JSON.stringify(state.wishList))
        localStorage.setItem('basket' ,JSON.stringify(state.basket))   
    }, [state])



//actions
    
    const addToBasket=(product)=>{
        dispatch({type:"ADD_TO_BASKET" ,payload:{...product,number:product.number+1}})
    }
    const addToWishlist=(product)=>{
        dispatch({type:"ADD_TO_WISHLIST", payload:product})
    }
    const removeFromBasket=(product)=>{
        dispatch({type:"REMOVE_FROM_BASKET" ,payload:product.id})
    }
    const removeFromWishlist=(product)=>{
        dispatch({type:'REMOVE_FROM_WISHLIST' ,payload:product.id})
    }
    const handleAmount=(id,type)=>{
        dispatch({type:"CHANGE_AMOUNT",payload:{id,type}})
    }
    
    
    return (
        <GlobalContext.Provider
            value={{basket:state.basket,
                    wishList:state.wishList,
                    products,
                    addToBasket,
                    addToWishlist,
                    removeFromBasket,
                    removeFromWishlist,
                    handleAmount,

            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )

}
