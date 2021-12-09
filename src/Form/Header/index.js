import { Title } from "./styled";

const Header = ({ title }) => {
    return (
        <Title className="form__header">{title}</Title>
    );
}

export default Header;