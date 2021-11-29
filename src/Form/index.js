import "./style.css";
import Header from "./Header";
import Result from "./Result";
import { currencies } from "../currencies";
import { useState } from "react";

const Form = ({ result, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (e) => {
        e.preventDefault();
        calculateResult(amount, currency)
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <Header title="Kantor Online" />
            <p>
                <label><span className="form__labelText">Kwota w zł*:</span>
                    <input
                        placeholder="Wpisz kwotę w zł"
                        className="form__field"
                        type="number"
                        required
                        step="0.01"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </label>
            </p>
            <p>
                <label><span className="form__labelText">Waluta:</span>
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency) => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <Result result={result} />
        </form>
    );
}

export default Form;