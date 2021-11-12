import "./style.css"

const Result = ({ result, amount }) => {
    return (
        <div className="form__result">
            {result !== undefined && (
                <>
                    {amount}&nbsp;PLN to&nbsp;<strong>{result.toFixed(2)}</strong>
                </>
            )}
        </div>
    );
}

export default Result;