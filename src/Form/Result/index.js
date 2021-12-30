import { Wrapper } from "./styled";

const Result = ({ result, baseCurrency }) => {
    return (
        <Wrapper>
            {!!result && (
                <>
                    {result.sourceAmount} <strong>{baseCurrency}</strong> to
                    {" "}
                    {result.targetAmount.toFixed(2)} <strong>{result.currency}</strong>
                </>
            )}
        </Wrapper>
    );
}

export default Result;