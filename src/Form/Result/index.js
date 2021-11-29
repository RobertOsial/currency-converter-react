import "./style.css"

const Result = ({ result }) => {
    return (

        <div className="form__result">
            {!!result && (
                <>
                    {`${result.sourceAmount} PLN to ${result.targetAmount.toFixed(2)} ${result.currency}`}
                </>
            )}
        </div>
    );
}

export default Result;