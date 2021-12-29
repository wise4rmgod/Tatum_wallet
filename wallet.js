import { generateWallet,Currency } from '@tatumio/tatum';

const generatefcn = async() => {
     const wallet = await generateWallet(Currency.BTC,true);
  
      console.log(wallet)
  }  
  
  generatefcn()

  // to run use the command below in your terminal
  // node wallet.js