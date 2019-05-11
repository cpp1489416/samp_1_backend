const Web3 = require('web3')
const abi = require('./abi')
const ethCache = require('./eth_cache')

async function test() {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts[0])
    const money  = await web3.eth.getBalance(accounts[0])
    console.log(money)
}

async function deploy() {
    console.log('start')
    ethCache.regenerateContract('http://localhost:8545', '0xfb3055c8964209b40768ac176a06eec5ad57b8f1')
    for (var i = 0; i < 10; ++i) {
        console.log(i)
        ethCache.contract.setMessageLivingRoomTV('abcdd' + i)
        console.log('setted')
        const result = await new Promise((resolve, reject) => {
            ethCache.contract['getMessageLivingRoomTV'](function (error, result){
                resolve(result)
            })
        })
        console.log(result)
    }
    console.log('end')
}

deploy()