import { Wrapper } from "./styled";

const Result = ({ result }) => {
    return (
        <Wrapper>
            {!!result && (
                <>
                    {`${result.sourceAmount} PLN to ${result.targetAmount.toFixed(2)} ${result.currency}`}
                </>
            )}
        </Wrapper>
    );
}

export default Result;