import axios from 'axios'
const Omdb = axios.create({
    baseURL: "https://www.omdbapi.com/",
    timeout: 15000,
    params: {
        apiKey: "b6c1ddaf"
    }

    
   
})

export {Omdb}