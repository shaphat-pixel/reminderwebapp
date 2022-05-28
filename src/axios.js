import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://shaphat-tinder-backend.herokuapp.com/'
})

export default instance