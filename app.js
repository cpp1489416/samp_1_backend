const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const ethCache = require('./eth_cache')

ethCache.regenerateContract('http://localhost:8545', '0x77531d9fd90b67642a298e43d42c2f21fdad265e')

const app = express()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({            
  extended: true
}));
app.use(routes)

app.listen(8000, () => {
    console.log('connected to port' + 8000)
})