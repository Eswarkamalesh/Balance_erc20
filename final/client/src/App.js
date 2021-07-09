// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
// import balance from "./balance";
// import adBal from "./Ad_bal";

const App = () => {
  const [walletAd, setWalletAd] = useState("");
  const [TokenAd, setTokenAd] = useState("");
  const [balance,setBalance] = useState("")

  const onClickHandler = async() => {
    const res = await fetch("http://localhost:8080/adbal", {
      method: 'post',
      headers: {
        'Content-type': 'application/json'    
      },
      body: JSON.stringify({walletAd})
    })
    const baljson = await res.json()
    setBalance(baljson.balance)
  }

  const onClickHandler2 = async() => {
    const res = await fetch("http://localhost:8080/tokbal", {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({TokenAd,walletAd})
    })
    const baljson = await res.json()
    setBalance(baljson.balance)
  }

  return (
    <div className="Address">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="Wallet Address">
          Wallet Address
          <input
            id="Wallet Address"
            value={walletAd}
            placeholder="Wallet Address"
            onChange={(e) => setWalletAd(e.target.value)}
            required
          />
        </label>
        <button className="btn btn-light my-2" onClick={onClickHandler} type="submit">
          Show Address Balance
        </button>
        <br />
        <br />
        <label htmlFor="Token Address">
          Token Address
          <input
            id="Token Address"
            value={TokenAd}
            placeholder="Token Address"
            onChange={(e) => setTokenAd(e.target.value)}
            required
          />
        </label>
        <br />
        <hr />
        <button className="btn btn-light my-2" onClick={onClickHandler2} type="submit">
          Show Token Balance
        </button>
      </form>
      <div>
        <h2>
        {balance}
        </h2> 
      </div>
    </div>
  );
};

export default App;
