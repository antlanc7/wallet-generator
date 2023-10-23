import { Wallet } from "ethers";

const n = (Bun.argv.length > 2) ? parseInt(Bun.argv[2]) : 1;

console.log("private_key,address");
for (let i = 0; i < n; i++) {
  const wallet = Wallet.createRandom();
  console.log(`${wallet.privateKey},${wallet.address}`);
}