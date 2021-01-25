import axios from 'axios'

export default axios.create({
    baseURL: 'http://982b420be01f.ngrok.io'
})


// from frontend run 'ngrok http 3000' and make baseURL that url.