import axios from 'axios'

const token = 'uildesdacosta@gmail.com'

const api = axios.create({
    baseURL: 'https://tiao.supliu.com.br/api/',
    headers: {
        'Content-type': 'application/json',
        'Authorization': token
    }
})

export default api