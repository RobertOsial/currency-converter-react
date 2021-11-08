import "./style.css";
import Header from "../Header";
import Result from "../Result";

const Form = () => {
    return (
        <form className="form">
            <Header title="Kantor online" />
            <p>
                <label><span className="form__labelText">Kwota w zł*:</span>
                    <input placeholder="Wpisz kwotę w zł" className="form__field" type="number" required
                        step="0.01" />
                </label>
            </p>
            <p>
                <label><span className="form__labelText">Waluta:</span>
                    <select className="form__field ">
                        <option value="USD">Dolar amerykański</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Funt brytyjski</option>
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <Result />
        </form>);
}

export default Form;