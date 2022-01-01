import Header from "./Header";
import Result from "./Result";
import Info from "./Info";
import {
    LabelText,
    Field,
    Button,
    Loading,
    Failure,
} from "./styled";

import { useState } from "react";
import { useRatesData } from "../useRatesData";

const Form = () => {
    const [result, setResult] = useState();
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const { rates, status, date, baseCurrency } = useRatesData();

    const calculateResult = (amount, currency) => {
        const rate = rates[currency]

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        calculateResult(amount, currency)
    };

    return (
        <form onSubmit={onFormSubmit} >
            <Header title="Kantor Online" />
            {status === "loading" ? (
                <Loading>
                    Ładuję dane... Poczekaj chwilę...
                </Loading>
            ) : (
                status === "error" ? (
                    <Failure>
                        Coś poszło nie tak... Spróbuj ponownie później...
                    </Failure>
                ) : (
                    <>
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
                                    {Object.keys(rates).map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    ))}
                                </Field>
                            </label>
                        </p>
                        <p>
                            <Button>Przelicz</Button>
                        </p>
                        <Result result={result} baseCurrency={baseCurrency} />
                        <Info date={date} />
                    </>
                ))}
        </form>
    );
};

export default Form;