import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./style.css"
const Filter = ({show ,setFilterOptions,setShow}) => {
    const {products}=useContext(GlobalContext)
    const [chosedSize,setChosedSize]=useState([])
    const [chosedColor,setChosedColor]=useState([])
    const [chosedSort,setChosedSort]=useState("highest")
    const filters={chosedColor,chosedSize,chosedSort}
    const [checked,setChecked]=useState(false)
    const colors=[]
    const sizes=[]
    // setFilterOptions(filters)
    products.forEach(p=>{
        p.color.forEach(c=>{
            if(!colors.includes(c)){
                colors.push(c)
            }
        })
        p.size.forEach(s=>{
            if(!sizes.includes(s)){
                sizes.push(s)
            }
        })
    })
    const handleChange=(e)=>{
        // console.log(e);
        setChecked(!checked)
        
        switch(e.target.id){
            
            case "size":{
                if(e.target.value==="true"){
                    if(!chosedSize.includes(e.target.name)){
                        setChosedSize([...chosedSize,e.target.name])
                }}
                if(e.target.value!=="false"){
                    if(chosedSize.includes(e.target.name)){
                        const chosedsize=[...chosedSize]
                        const filterd=chosedsize.filter(s=>s!==e.target.name)
                        setChosedSize(filterd)
                    }
                }
                return
            }
            case "color":{
                if(e.target.value!=="true"){
                    if(!chosedColor.includes(e.target.name)){
                        setChosedColor([...chosedColor,e.target.name])
                }}
                if(e.target.value!=="false"){
                    if(chosedColor.includes(e.target.name)){
                        const chosedcolor=[...chosedColor]
                        const filterd=chosedcolor.filter(c=>c!==e.target.name)
                        setChosedColor(filterd)
                    }
                }
               return
            }
            case "sort":{
                setChosedSort(e.target.value)
                return
            }
            default :{
                return false
            }
        }
        
    }
    const handleClick=()=>{
        setFilterOptions(filters)
        setShow(!show)
    }
    return (
        <>
        {show && (
        <div className="filter-section">
            <div >
                <h3>Colors</h3>
                <div className="flex-column">
                    {colors && colors.map(color=>(
                        <span className="flex" key={color}>
                            <input type="checkbox" id="color" value={checked} name={color} onChange={handleChange}/>
                            <label htmlFor="color">{color}</label>
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <h3>Sizes</h3>
                {sizes && sizes.map(size=>(
                    <div className="flex-column" key={size}>
                        <span className="flex">
                            <input type="checkbox" id="size"  value={checked}  name={size} onChange={handleChange}/>
                            <label htmlFor="size">{size}</label>
                        </span>
                    </div>
                ))}
            </div>
            <div>
                <h3>Price</h3>
                <input type="range" min="20" max="100" onChange={handleChange}/>
            </div>   
            <div>
                <h3>Sorted By</h3>
                <div className="flex-column">
                    <span className="flex">
                        <input type="radio" id="sort" name="sort" value="highest" onChange={handleChange}/>
                        <label  htmlFor="sort">Sorted to highest price</label><br/>
                    </span>
                    <span className="flex">
                        <input type="radio" id="sort" name="sort" value="Lowest" onChange={handleChange}/>
                        <label htmlFor="sort">Sorted to lowest price</label><br/>
                    </span>
                </div>
            </div>
            <button onClick={handleClick}>Show These Products</button>
        </div>)}
        </>
    );
}
 
export default Filter;