import { BrowserRouter , Routes , Route } from "react-router-dom"
import Products from "../pages/products"
import { ApiHandling } from "../pages/apihandling"
import SingleProduct from "../pages/singleproduct"
import FirebasePractice from "../pages/firebaseprc"

export default function AppRoute() {

return <>
<BrowserRouter>
<Routes>
    <Route path="apihandling" element = {<ApiHandling/>} />
    <Route path="/" element = {<Products/>}/>
    <Route path="singleProduct/:id" element = {<SingleProduct/>}/>
    <Route path="firebase" element = {<FirebasePractice/> } />
</Routes>
</BrowserRouter>
</>
}