import Form from "./Form";
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
    <div className="container">
      <Form result={result} calculateResult={calculateResult} />
    </div>
  );
}

export default App;
