const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {

    // Deploy Token
    await deployer.deploy(Token);
    const token = await Token.deployed();

    // Deploy EthSwap
    await deployer.deploy(EthSwap);
    const ethSwap = await EthSwap.deployed();

    // Transfer all tokens to EthSwap (100 million)
    await token.transfer(ethSwap.address, '500000000000000000');
    //await token.transfer(, '5000000000000000000')
}
/*
token = await Token.deployed()
ethSwap = await EthSwap.deployed()
balance = await token.balanceOf(ethSwap.address)
*/