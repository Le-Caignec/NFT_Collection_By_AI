const NFT_Contract = artifacts.require("NFT_Contract");

module.exports = function (deployer) {
    deployer.deploy(NFT_Contract);
};
