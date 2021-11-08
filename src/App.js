import Container from "./Container";

function App() {
  return (
    <Container>
      <form className="form">
        <h1 className="form__header">Kantor online</h1>
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
        <p className="form__result"></p>
      </form>
    </Container>
  );
}

export default App;
