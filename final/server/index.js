const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
const PORT = 8080;

app.post('/adbal', (req, res) => {
    const wad = req.body.walletAd
    var Web3 = require("web3");
    var web3 = new Web3("https://rinkeby.infura.io/v3/c5d69ac9723d4496986b8e70003c3b3c");
    web3.eth.getBalance(wad, function (err, result) {
        if (err) {
        console.log(err);
        } else {
        const balance = web3.utils.fromWei(result, "ether") + " ETH"
        res.json({balance})
        }
    })
})

app.post('/tokbal', (req, res) => {
    const ABI = [{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
//     const ABI = [
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "name",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint8"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "_owner",
//         "type": "address"
//       }
//     ],
//     "name": "balanceOf",
//     "outputs": [
//       {
//         "name": "balance",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "symbol",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   }
// ]
    
    const tad = req.body.TokenAd
    const wad = req.body.walletAd
    var Web3 = require("web3");
    var web3 = new Web3("https://rinkeby.infura.io/v3/c5d69ac9723d4496986b8e70003c3b3c");
    web3.utils.toChecksumAddress(wad);
    const contract = new web3.eth.Contract(ABI, tad);
    async function getBalance() {
        const result = await contract.methods.balanceOf(wad).call(); 
        
        const balance = web3.utils.fromWei(result); 
      
        res.json({balance})
      }
      
    getBalance();
})
  
app.listen(PORT, () => {
console.log(`App listening at http://localhost:${PORT}`)
})