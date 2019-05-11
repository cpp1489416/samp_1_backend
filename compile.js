
const path = require('path')
const fs = require('fs')
const solc = require('solc')

const solPath = path.resolve(__dirname, 'smart_home.sol')
const solSource = fs.readFileSync(solPath, 'utf-8')
const result = solc.compile(solSource, 1)

module.exports = result.contracts[':Smart_home']
