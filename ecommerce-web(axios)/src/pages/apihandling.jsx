import axios from "axios";

import { GetApi , PostApi , PutApi , DelApi} from "../config/apimethods";

export const ApiHandling = () => {

const getApi = () => {
GetApi("products").then((response) =>{
console.log(response.data);
}).catch(error => console.log(error))
}

const postApi = () => {
PostApi("products" , {
    name: "maryam" , 
    age: 18,
    city: "khi"
}).then((response) => {
console.log(response.data)
}).catch(error => console.log(error))
}

const putApi = () => {
PutApi("/products/2" , {
    name: "amir",
    number: 3456789,
    city: "khi"
}).then((response) =>{
console.log(response.data);
}).catch(error => console.log(error))
}

const delApi = () => {
DelApi("/products/2").then((response) => {
console.log(response.data);
}).catch(error => console.log(error))
}

return <>
<button onClick={getApi}>GetApi</button>
<button onClick={postApi}>postApi</button>
<button onClick={putApi}>putApi</button>
<button onClick={delApi}>delApi</button>
</>
}