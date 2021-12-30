import { Wrapper } from "./styled";

const Info = ({ date }) => {
    return (
        <Wrapper>
            Aktualna tabela z dnia: {date}
        </Wrapper>
    );
}

export default Info;