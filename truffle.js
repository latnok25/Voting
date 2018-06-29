/*var HDWalletProvider = require("truffle-hdwallet-provider");


var infura_apikey ="https://ropsten.infura.io/Z7zXWLWqDGEVnOpsg0OH";
var mnemonic = "nice toddler guard sound start across volcano fat bracket museum answer lake";
var address = "0x23C0C9CeFd64444a1D45e76019C12b2A7A6d3190"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
      },
      network_id: 3,
      from: address,
      gas: 4700388
    }
  }
};*/

let secrets = require('./secret.js');
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
let mainNetPrivateKey = new Buffer(secrets.mainnetPK, "hex");
let mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
let mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");
let ropstenPrivateKey = new Buffer(secrets.ropstenPK, "hex");
let ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
let ropstenProvider = new WalletProvider(ropstenWallet,  "https://ropsten.infura.io/");
module.exports = {
  networks: {
    development: { host: "localhost", port: 8545, 
                   network_id: "*", gas: 4465030 },    
    ropsten: { provider: ropstenProvider, 
                   network_id: "3", gas: 4465030 },
    live: { provider: mainNetProvider, 
                   network_id: "1", gas: 7500000 }
  }
};
