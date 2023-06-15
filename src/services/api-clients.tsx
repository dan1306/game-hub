import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'f70bcd7294da4736a6c5d5e6761a63ee'
    }
})