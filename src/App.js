import React, { useEffect, useState } from "react";
import CurrencyRow from "./components/CurrencyRow";
import './App.css'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'


function App() {
  // const [currencyOptions, setCurrencyOptions] = useState([])

  // console.log(currencyOptions)

  // useEffect(() => {
  //   fetch(BASE_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       setCurrencyOptions([data.base, ...Object.keys(data.rates)])
  //     })
  // }, [])

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  })

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
