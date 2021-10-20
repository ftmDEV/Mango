import Basket from './components/pages/basket'
import WishedProduct from './components/product/wishedProduct'
import LandingPage from './components/pages/landing'
import ProductList from './components/product/productList'
const routes=[
    {path:"/womens", component:ProductList},
    {path:"/mens", component:ProductList},
    {path:"/new", component:ProductList},
    {path:"/basket", component:Basket},
    {path:"/wishlist",component:WishedProduct},
    {exact:true, path:"/" ,component:LandingPage}
]
export default routes
