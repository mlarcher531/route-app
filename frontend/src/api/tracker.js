import axios from 'axios'

export default axios.create({
    baseURL: 'http://77d4782ed96a.ngrok.io'
})


// from frontend run 'ngrok http 3000' and make baseURL that url.