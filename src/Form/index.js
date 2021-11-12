import "./style.css";
import Header from "./Header";
import Result from "./Result";
import { useState } from "react";

const Form = ({ currencies }) => {
    const [amount, setAmount] = useState("");
    const [selectedRate, setselectedRate] = useState(4.0559)
    const [result, setResult] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault()
        calculateResult(amount, selectedRate);
    };

    const calculateResult = (amount, selectedRate) => {
        setResult(+amount / selectedRate)
        console.log(result);
    };


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <Header title="Kantor Online" />
            <p>
                <label value={amount} onChange={({ target }) => setAmount(target.value)}><span className="form__labelText">Kwota w zł*:</span>
                    <input
                        placeholder="Wpisz kwotę w zł"
                        className="form__field"
                        type="number"
                        required
                        step="0.01" />
                </label>
            </p>
            <p>
                <label><span className="form__labelText">Waluta:</span>
                    <select className="form__field"
                        value={selectedRate}
                        onChange={({ target }) => setselectedRate(target.value)}
                    >
                        {currencies.map((currency) =>
                            <option value={currency.rate}>{currency.name}</option>
                        )}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <Result
                result={result}
                amount={amount}
            />
        </form>
    );
}

export default Form;