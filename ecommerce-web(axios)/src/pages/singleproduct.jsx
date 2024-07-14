import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetApi } from "../config/apimethods";
import { Box , Grid } from "@mui/material";


export default function SingleProduct() {

const params = useParams()
console.log(params);

const [model,setmodel] = useState({})

const databyid = (id) => {
GetApi(`products/${id ? id : ''}`).then((response) => {
console.log(response.data);
setmodel({...response.data})
}).catch(Error => console.log(Error))
}

useEffect(() => {
    if (params.id) {
databyid(params.id)
    }
}, [])

    return <>
<Box className = "container">
<Grid container>
    <Grid  item md={12}>
<Box className = "p-2">
    <h1>Detail!</h1>
</Box>
<hr/>
<br/><br/><br/>
    </Grid>
<Grid  item md={6} className="img">
<box  className="">
    <img src={model.image} width={'60%'} alt = ''></img>
</box>
</Grid>
<Grid item md={6} className = 'model'>
    <box className = ''>
<h2>Title:{model.title}</h2>
<h2>Description:{model.description}</h2>
<h3>Price:{model.price}</h3>
<h3>Category:{model.category}</h3>
    </box>
</Grid>
</Grid>
</Box>
    </>
}