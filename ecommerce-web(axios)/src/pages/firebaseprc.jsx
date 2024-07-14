import { sendData } from "../config/firebase/firebasemethods";

export default function firebasePractice() {

const sendDataToFirebase = () => {

let obj = {
    name: 'maryam' ,
    age: 18 ,
    city: 'karachi'
}

sendData(obj)
console.log(obj)
}

return <>
<h1>FIREBASE</h1>

<button onClick={sendDataToFirebase}>submit</button>
</>
}