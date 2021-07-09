const balance = (tad,wad) => {
    let minABI = [
        // balanceOf
        {
          "constant":true,
          "inputs":[{"name":"_owner","type":"address"}],
          "name":"balanceOf",
          "outputs":[{"name":"balance","type":"uint256"}],
          "type":"function"
        },
        // decimals
        {
          "constant":true,
          "inputs":[],
          "name":"decimals",
          "outputs":[{"name":"","type":"uint8"}],
          "type":"function"
        }
    ];
    const Web3 = require("web3");
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        window.ethereum.enable()
        web3.utils.toChecksumAddress(wad);
        // let contractABI = 'human_standard_token_abi';
        const tokenContract = web3.eth.contract(minABI).at(tad)
        console.log(tokenContract.balanceOf(wad).toNumber())
    }
    else {
        window.alert('Non-Ethereum browser detected')
    }
}

export default balance;
