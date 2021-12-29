import { generateWallet,Currency } from '@tatumio/tatum';

const generatefcn = async() => {
     const wallet = await generateWallet(Currency.BTC,true);
  
      console.log(wallet)
  }  
  
  generatefcn()