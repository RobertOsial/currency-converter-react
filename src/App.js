import Form from "./Form";
import Clock from "./Clock";
import { Wrapper } from "./styled";
import { useEffect, useState } from "react";
import { currencies } from "./currencies";
import axios from "axios";

function App() {
  const [result, setResult] = useState("")
  const apiURL = "https://api.exchangerate.host/latest";


  const fetchData = async () => {
    const response = await axios.get(apiURL);
    console.log(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const calculateResult = (amount, currency) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <Wrapper>
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
    </Wrapper>
  );
}

export default App;
