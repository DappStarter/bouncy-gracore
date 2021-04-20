require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name recipe sister cluster hunt nasty equal ghost'; 
let testAccounts = [
"0x5c991442039c66d42e1c6f95b073af26a6dbfe978358a089b3ba42ab3c80e296",
"0xd75c2d53a8dfad6ed94c1ca4ddc5dbdb97a877d273f6fbc622e6bc6756e073eb",
"0x6e1fce5343547c6f9670f6754cf535c3cbce1023ab8ddf61b5c9b2020a2aa9c7",
"0x085f918cdc733c0e84470c76994b9faa865284290666beacc234926c232ec178",
"0x3f7758f53526495fa475a3cb9ce1df327ae166ac5afd0cba6e6fb86cc33d8a74",
"0x226cc8b10f6bdc22f22e297e7f6108b00839b097cb8aa72a2d8d2331a8e2ee2d",
"0xf8a37eb40d60d12095c495c5bec889a01d10fef189fbf3f9cb4d84ba7411a487",
"0x2c895791b7a5149ce2d3388b0e5af23e63e44646a67ea8168dd38c88ab5204aa",
"0x5a5e218635bfc5ebbf9de03da99a2ab7677edfd23483b2f97167f01ca1e7a1b6",
"0xd2b5c92dee9e441fe0b36f95aa889d8b22f855cb278d3f60d200dab9b0a8d00e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
