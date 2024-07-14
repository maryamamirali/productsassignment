import axios from "axios";

const apiHandle = axios.create({
baseURL: 'https://fakestoreapi.com/'
})

export const GetApi = (endpoint) => {

return apiHandle.get(endpoint)
}

export const PostApi = (endpoint , obj) => {

return apiHandle.post(endpoint , obj)
}

export const PutApi = (endpoint , obj) => {

return apiHandle.put(endpoint , obj)
}

export const DelApi = (endpoint) => {

return apiHandle.delete(endpoint)
}

export default apiHandle