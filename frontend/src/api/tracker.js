import axios from 'axios'

export default axios.create({
    baseURL: 'http://8a1ef04560d1.ngrok.io'
})


// from frontend run 'ngrok http 3000' and make baseURL that url.