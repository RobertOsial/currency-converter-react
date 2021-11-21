import "./style.css";
import Header from "./Header";
import Result from "./Result";
import { currencies } from "../currencies";

const Form = () => {

    return (
        <form className="form">
            <Header title="Kantor Online" />
            <p>
                <label><span className="form__labelText">Kwota w zł*:</span>
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
                    <select className="form__field">
                        <option>test</option>
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <Result />
        </form>
    );
}

export default Form;