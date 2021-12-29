import {generatePrivateKeyFromMnemonic, Currency} from "@tatumio/tatum";

const generatefcn = async() => {
    const privateKey = await generatePrivateKeyFromMnemonic(
        Currency.BTC,
        true,
        'goddess extra frost solar network soldier coil gather unfair hotel wealth total slow tragic mandate museum silent afraid position pyramid laugh finish priority wife',
        1
    );
     console.log(privateKey)
 }
 
 generatefcn()

 // to run use the command below in your terminal
  // node privatekey.js