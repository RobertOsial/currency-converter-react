import Form from "./Form";
import Clock from "./Clock";
import { Wrapper } from "./styled";
import { useState } from "react";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState("")

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
