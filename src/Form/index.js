import Header from "./Header";
import Result from "./Result";
import {
    LabelText,
    Field,
    Button
} from "./styled";

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
        <form onSubmit={onFormSubmit} >
            <Header title="Kantor Online" />
            <p>
                <label><LabelText>Kwota w zł*:</LabelText>
                    <Field
                        placeholder="Wpisz kwotę w zł"
                        type="number"
                        required
                        step="0.01"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </label>
            </p>
            <p>
                <label><LabelText>Waluta:</LabelText>
                    <Field
                        as="select"
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
                    </Field>
                </label>
            </p>
            <p>
                <Button>Przelicz</Button>
            </p>
            <Result result={result} />
        </form>
    );
}

export default Form;