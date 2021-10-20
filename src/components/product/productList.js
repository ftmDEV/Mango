import React,{useContext,useState} from 'react'
import ProductCard from './productCard'
import { GlobalContext } from '../context/GlobalState'
import './style.css'
import Filter from '../layout/filter'

const  ProductList=()=> {
   
    const {products}=useContext(GlobalContext)
    const [chosedCat,setChoseCat]=useState('all')
    const [showFilterOptions,setShowFilterOptions]=useState(false)
    const [filterOptions,setFilterOptions]=useState(null)
    const categories=['all']
    products.forEach(p=>{
        if(!categories.includes(p.type)){
            categories.push(p.type)
        }
    })

    const handleClick=(e)=>{
        setChoseCat(e.target.innerHTML)
    }
    console.log(filterOptions)


    return (
        <div>
            <h1 className="title">women`s bag</h1>
            <div className="categories"> 
                {categories.map(c=>(
                    <li key={c} onClick={handleClick}>{c}</li>
                ))}
            </div>
            <div className="flex-start operation-part">
                <li className="flex-start menu-icon" >
                    <img alt="icon" src="img/submenu.svg"/>
                    clothing
                </li>
                <li className="flex-start menu-icon" onClick={()=>setShowFilterOptions(!showFilterOptions)}>
                    <img alt="icon" src="img/edit.png"/>
                    filter & order
                </li>
            </div>
            <Filter show={showFilterOptions} setShow={setShowFilterOptions} setFilterOptions={setFilterOptions}/>
            {!showFilterOptions && 
                <>
                    {products &&  (
                        <div className="list">
                            {products.map(d=>(
                                <ProductCard product={d} key={d.id} category={chosedCat} />
                            ))}
                        </div>
                    )}
                </>
            } 
                
        </div>
    )
}
export default ProductList
