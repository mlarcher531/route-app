import axios from 'axios'

export default axios.create({
    baseURL: 'http://040587d15a67.ngrok.io'
})


// from frontend run 'ngrok http 3000' and make baseURL that url.