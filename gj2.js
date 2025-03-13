const { ethers } = require('ethers');
const fs = require('fs');


const createWallet = () => {
 
  const wallet = ethers.Wallet.createRandom();

  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic.phrase
  };
};


const createMultipleWallets = (numWallets) => {
  const wallets = [];
  for (let i = 0; i < numWallets; i++) {
    const wallet = createWallet();
    wallets.push(wallet);
  }
  return wallets;
};


const saveWalletsToFile = (wallets) => {
  let fileContent = '';
  wallets.forEach((wallet, index) => {
    fileContent += `Wallet #${index + 1}:\n`;
    fileContent += `Address: ${wallet.address}\n`;
    fileContent += `Private Key: ${wallet.privateKey}\n`;
    fileContent += `Mnemonic: ${wallet.mnemonic}\n`;
    fileContent += '----------------------------------------\n';
  });

  fs.writeFileSync('gj.txt', fileContent);
  console.log('Wallets saved to gj.txt');
};


const wallets = createMultipleWallets(999);
saveWalletsToFile(wallets);
