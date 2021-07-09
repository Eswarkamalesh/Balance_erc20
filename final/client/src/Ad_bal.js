const adBal = (wad) => {
    // const {  } = props;
    // const wad = {walletAd}
    const Web3 = require("web3");
    // const web3 = new Web3(
    //     new Web3.providers.HttpProvider(
    //     "https://localhost:8545"
    //     )
    // );
    //   const web3 = new Web3(window.ethereum);
    //   window.ethereum.enable()
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        window.ethereum.enable()
        web3.utils.toChecksumAddress(wad);
        web3.eth.getBalance(wad, function (err, result) {
            if (err) {
            console.log(err);
            } else {
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
            }
       });
    }
    else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider)
        web3.utils.toChecksumAddress(wad);
        web3.eth.getBalance(wad, function (err, result) {
            if (err) {
            console.log(err);
            } else {
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
            }
        });
    }
    else {
        window.alert('Non-Ethereum browser detected')
    }
};

export default adBal;
