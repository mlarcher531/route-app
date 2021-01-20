import axios from 'axios'

export default axios.create({
    baseURL: 'http://93c69ab0ccd3.ngrok.io'
})


// from frontend run 'ngrok http 3000' and make baseURL that url.