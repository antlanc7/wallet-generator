import { Wallet } from "ethers";

const wallet = Wallet.createRandom();
console.log({
  privateKey: wallet.privateKey,
  publicKey: wallet.publicKey,
  address: wallet.address,
});