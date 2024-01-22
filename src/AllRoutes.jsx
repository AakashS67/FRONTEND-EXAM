import { Route, Routes } from "react-router"
import Home from "./Home"
import Product from "./Product"

const AllRoutes = ()=>{
    return(
        <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/products" element={<PrivateRoute><Product/></PrivateRoute>}/> 
         </Routes>
    )
}

export default AllRoutes