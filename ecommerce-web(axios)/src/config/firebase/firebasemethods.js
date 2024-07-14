import app from "./firebaseconfig";
import { getDatabase, push, ref, set } from "firebase/database";

const db = getDatabase(app)


export const sendData = (body) => {
console.log(body);

const reference = ref(db , 'users')
set(reference , body)

body.id = push(reference).key

const newRef = ref(db , `users/${body.id}`)

set(newRef , body)
}


export const signpUser = () => {

}


