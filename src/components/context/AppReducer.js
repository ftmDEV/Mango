const AppReducer= (state,action)=>{
    switch (action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[action.payload,...state.basket]
            }
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                wishList:[action.payload,...state.wishList],
            }
        case "REMOVE_FROM_BASKET":
            return{
                ...state,
                basket:state.basket.filter(product=>product.id !==action.payload)
            }
        case "REMOVE_FROM_WISHLIST":
            return{
                ...state,
                wishList:state.wishList.filter(product=>product.id !==action.payload)
            }
        case "CHANGE_AMOUNT":{
            const basket=[...state.basket]
            const index=basket.findIndex(b=>b.id===action.payload.id)
            const product={...basket[index]}
            if(action.payload.type==="increase"){
                product.number+=1
            }
            if(action.payload.type==="decrease"){
                product.number-=1
            }
            basket[index]=product
            const updatedState={...state}
            updatedState.basket=basket
            console.log(updatedState)
            return updatedState
        }          
          
        default:
            return state
    }
}
export default AppReducer