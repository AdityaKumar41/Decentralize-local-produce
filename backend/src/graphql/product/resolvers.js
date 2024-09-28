const { ethers } = require("ethers");
const ABI = require("../../../abi.json");
require("dotenv").config();
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

const WalletAddress = process.env.CONTRACT_ADDRESS;

const contractABI = ABI;
const Query = {
  getAllProducts: async () => {
    const walletContract = new ethers.Contract(
      WalletAddress,
      contractABI,
      provider
    );

    const contractBalance = await walletContract.getActiveProducts();

    const products = contractBalance.map((product) => {
      return {
        id: product.id.toNumber(),
        name: product.name,
        price: String(product.price),
        seller: product.seller,
      };
    });

    return products;
  },
};

const resolvers = { Query };

module.exports = resolvers;
