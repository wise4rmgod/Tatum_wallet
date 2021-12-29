import {generateAddressFromXPub, Currency} from "@tatumio/tatum";
import dotenv from "dotenv"
dotenv.config()

const generatefcn = async() => {
    const address = await generateAddressFromXPub(
        Currency.BTC,
        true,
        'tpubDF9EGHyNtvYVaHZ3X4WETxAaHqh3BCCxAtSY2ZxYHEx3JZLuqiVC9PQ6cAXRumUiTxJZPMCfqCbrYEVzU1dBEawzgq9qTGEsVxGDCtYmbcb',
        1
    );
    console.log(address)
}

generatefcn()


// to run use the command below in your terminal
  // node address.js