const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const ethCache = require('./eth_cache')

// ethCache.regenerateContract('http://localhost:8545', '0xbb3e781942b43ee399f06fb2ae546ab6eaa6c83c')

const app = express()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({            
  extended: true
}));
app.use((err, req, res, next) => {
  return res.json({
    code: '-1',
    msg: 'err',
    info: err
  })
})
app.use(routes)

app.listen(8000, () => {
    console.log('connected to port' + 8000)
})