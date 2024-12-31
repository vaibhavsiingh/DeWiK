const Wiki = artifacts.require("Wiki");

module.exports = function(deployer) {
  deployer.deploy(Wiki)
    .then(() => Wiki.deployed())
    .then(instance => {
      console.log("Wiki contract deployed at address:", instance.address);
      
      // Add some initial articles for testing (optional)
      return Promise.all([
        instance.addArticle("Blockchain", "QmX7jcdjhf83hfKLHF838fjhHFkjhf8", {from: deployer.networks[deployer.network].from}),
        instance.addArticle("Smart Contracts", "QmY9kdjhf83hfKLHF838fjhHFkjhf9", {from: deployer.networks[deployer.network].from}),
        instance.addArticle("Decentralized Applications", "QmZ1kdjhf83hfKLHF838fjhHFkjha0", {from: deployer.networks[deployer.network].from})
      ]);
    })
    .then(() => {
      console.log("Initial articles added successfully");
    })
    .catch(error => {
      console.error("Error during migration:", error);
    });
};