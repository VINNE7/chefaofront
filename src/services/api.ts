import axios from "axios";


function getTokenFromLocalStorage() {
    const token = localStorage.getItem('user');
    if(token === null){
        return undefined;
    }
    return token;
}


const api = axios.create({
    baseURL: 'https://reqres.in/api',
         headers:{
         Authorization: `Bearer ${getTokenFromLocalStorage()} `
       }
    }

);

export default api;