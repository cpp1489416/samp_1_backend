
const Web3 = require('web3')
const abi = require('./abi')

module.exports = {
    web3: null,
    url: null,
    token: null,
    contract: null,
    regenerateContract(url, token) {
        this.url = url
        this.token = token
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.url))
        this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
        this.contract = this.web3.eth.contract(abi).at(this.token)
        return this.contract
    },
    async get(functionName) {
        return new Promise((resolve, reject) => {
            this.contract[functionName](function (error, result){
                resolve(result)
            })
        })
    },
    async set(functionName, value) {
        this.contract[functionName](value)
    }
}