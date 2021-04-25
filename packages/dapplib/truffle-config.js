require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remember promote include enrich suspect second'; 
let testAccounts = [
"0x40b877d792752ba930a6bd88fa1bdc2ba3e4ed588d0a6d3847d0f1fbd55f558d",
"0x80cc3ec20771f62576942be1f0c461054663737d50fd0a813045c22569d1ed9d",
"0x07d84287e4f4c0dd1a0b1770ac53ddfd454dbe269b07d4f98a2bbe57fd825f98",
"0x6b643da1eaeed4176afc7643c7dc173457dc2f7822a94405f934e218c10154a7",
"0xb55de1bac0d2805ef90b010bcbede6588d6da830ba58cd155bde9ea87e926e2c",
"0x40e1390a6c5cc30b7dec775603dd291cabfadc1a2d1a4409febb42893f13d719",
"0x2ff4349d517d904f10f8231b134e719c254eecfca562f5cd8dd1acee17ea1255",
"0xdde7975516d573b47c829e6cf2fb8674ee0f2af02d32ebdd93974af59cb89efc",
"0xd321ca8c6fad6a50d0ba81d2a9b1bb558de8ec1908e63290c61e775dc57315d7",
"0xdf0578572040767fc673e4f6f6f024ec041982ce465a7e2abf15a1237b4c9182"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
