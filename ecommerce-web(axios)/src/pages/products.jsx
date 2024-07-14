import { useState ,useEffect } from "react"
import { GetApi } from "../config/apimethods"
import { useNavigate } from "react-router-dom"
import { Box, Grid } from "@mui/material"

export default function Products() {

const [product,setproduct] = useState([])

const getData = () => {
GetApi('products').then((response) =>{
setproduct([...response.data])
}).catch(Error => console.log(Error))
}

const navigate = useNavigate()

useEffect(() =>{
    getData()
})
return <>
<div>
<nav className="nav">
    <a href="home">home</a>
    <a href="#profile">profile</a>
    <a href="#message">message</a>
    <a href="#setting">setting</a> 
<button className="singleproduct"><a className="" href="#contact">logout</a></button>
</nav>
</div>

<Box>
    <h1 className="heading">Featured Products!</h1>
    <br/><br/><br/>
    <Grid container>
{product && product.length > 0 ? product.map((x,i) => 
<Grid key={i} item md={3}  className="border">
<Box onClick = {() => {
    navigate(`/singleproduct/${x.id}`)
}}  className='boxes'>
<img src={x.image} width={'100%'} alt="" />
<Box className= "box">
    <h3>{x.title}</h3>
    <h2 className="p-2">price {x.price}</h2>
</Box> 
</Box></Grid>
)  : null}
    </Grid>
</Box>


</>
}